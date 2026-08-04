import SwiftUI
import AppKit

struct TarotWorkspaceView: View {
    @State private var question = ""
    @State private var gender = "男"
    @State private var spread = "三牌阵"
    @State private var report: TarotReport?
    @State private var errorMessage: String?
    @State private var didCopy = false
    @State private var isDrawing = false

    private let spreads = ["三牌阵", "关系牌阵", "凯尔特十字"]

    var body: some View {
        HSplitView {
            inputPane.frame(minWidth: 330, idealWidth: 380, maxWidth: 440)
            resultPane.frame(minWidth: 500, maxWidth: .infinity)
        }
        .navigationTitle("塔罗占卜")
    }

    private var inputPane: some View {
        VStack(alignment: .leading, spacing: 22) {
            VStack(alignment: .leading, spacing: 6) {
                Label("塔罗占卜", systemImage: "rectangle.stack.fill")
                    .font(.title2.bold()).foregroundStyle(AppTheme.gold)
                Text("选择牌阵，抽取不重复的牌并获得每个位置的解读。")
                    .foregroundStyle(AppTheme.textSecondary)
            }

            VStack(alignment: .leading, spacing: 8) {
                Text("想要厘清的问题").font(.headline)
                TextEditor(text: $question)
                    .foregroundStyle(AppTheme.textPrimary)
                    .scrollContentBackground(.hidden).padding(10).frame(height: 130)
                    .interactiveField()
            }

            Picker("牌阵", selection: $spread) {
                ForEach(spreads, id: \.self) { Text($0).tag($0) }
            }
            Picker("性别", selection: $gender) {
                Text("男").tag("男"); Text("女").tag("女")
            }.pickerStyle(.segmented)

            if let errorMessage {
                Label(errorMessage, systemImage: "exclamationmark.triangle.fill")
                    .font(.callout).foregroundStyle(.red)
            }

            Button(action: drawCards) {
                Label(isDrawing ? "正在洗牌" : "洗牌并抽牌", systemImage: "rectangle.stack.badge.plus")
                    .frame(maxWidth: .infinity)
            }
            .buttonStyle(GoldProminentButtonStyle(isBusy: isDrawing)).controlSize(.large)
            .disabled(question.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty || isDrawing)

            Text("塔罗结果用于梳理思路，不构成医疗、法律或财务建议。")
                .font(.caption).foregroundStyle(AppTheme.textSecondary)
            Spacer()
        }.padding(28).background(AppTheme.background).foregroundStyle(AppTheme.textPrimary)
    }

    @ViewBuilder private var resultPane: some View {
        ScrollView {
            if let report {
                VStack(alignment: .leading, spacing: 18) {
                    HStack {
                        VStack(alignment: .leading, spacing: 6) {
                            Text(report.spread).font(.largeTitle.bold())
                            Text(report.question).foregroundStyle(AppTheme.textSecondary)
                        }
                        Spacer()
                        copyButton(report.copyText, title: "复制给 AI")
                    }.toolPanel()

                    copyResultPanel(report.copyText)

                    LazyVStack(spacing: 14) {
                        ForEach(report.spreadResult) { item in
                            tarotCard(item)
                        }
                    }

                    AIAssistedInterpretationSection(
                        title: "综合指引",
                        icon: "compass.drawing",
                        kind: "塔罗",
                        source: report.copyText,
                        fallback: "\(report.analysis)\n\n\(report.suggestion)"
                    )
                }
                .padding(28)
                .resultReveal(report.cards + report.spread)
            } else {
                VStack(spacing: 14) {
                    Image(systemName: "rectangle.stack")
                        .font(.system(size: 44)).foregroundStyle(AppTheme.gold)
                    Text("等待抽牌").font(.title2.bold())
                    Text("选择牌阵并写下问题。 ").foregroundStyle(AppTheme.textSecondary)
                }
                .frame(maxWidth: .infinity, minHeight: 520)
                .resultReveal("empty")
            }
        }.background(AppTheme.background).foregroundStyle(AppTheme.textPrimary)
    }

    private func tarotCard(_ item: TarotPosition) -> some View {
        HStack(alignment: .top, spacing: 20) {
            tarotCardImage(item.card)
            .frame(width: 150, height: 255)
            .background(AppTheme.panelRaised)
            .overlay(RoundedRectangle(cornerRadius: 6).stroke(AppTheme.border))
            .clipShape(RoundedRectangle(cornerRadius: 6))
            .rotationEffect(item.card.isReversed ? .degrees(180) : .zero)

            VStack(alignment: .leading, spacing: 12) {
                HStack {
                    Text(item.position).font(.headline).foregroundStyle(AppTheme.gold)
                    Spacer()
                    if item.card.isReversed {
                        Text("逆位").font(.caption.bold()).foregroundStyle(.orange)
                    } else {
                        Text("正位").font(.caption.bold()).foregroundStyle(.green)
                    }
                }
                Text(item.card.name).font(.title2.bold())
                Text(item.positionMeaning).font(.callout).foregroundStyle(AppTheme.textSecondary)
                Divider()
                Text(item.interpretation).font(.body).lineSpacing(3)
                Spacer()
                Text("Rider-Waite-Smith · 1909")
                    .font(.caption2).foregroundStyle(AppTheme.textSecondary)
            }
        }
        .frame(maxWidth: .infinity, minHeight: 255, alignment: .topLeading)
        .toolPanel()
        .transition(.opacity.combined(with: .move(edge: .bottom)))
    }

    @ViewBuilder
    private func tarotCardImage(_ card: TarotCard) -> some View {
        if let url = Bundle.main.url(forResource: card.imageKey, withExtension: nil, subdirectory: "rws-1909"),
           let image = NSImage(contentsOf: url) {
            Image(nsImage: image).resizable().scaledToFit()
        } else {
            VStack(spacing: 8) {
                Image(systemName: "photo.badge.exclamationmark")
                    .font(.system(size: 32))
                Text(card.name).font(.caption.bold())
            }
            .foregroundStyle(AppTheme.textSecondary)
        }
    }

    private func copyResultPanel(_ text: String) -> some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                VStack(alignment: .leading, spacing: 3) {
                    Label("原始牌面", systemImage: "doc.on.doc.fill").font(.headline).foregroundStyle(AppTheme.gold)
                    Text("不含本站解读，可直接粘贴给 AI。")
                        .font(.caption).foregroundStyle(AppTheme.textSecondary)
                }
                Spacer()
                copyButton(text, title: "一键复制给 AI")
            }
            Text(text)
                .font(.system(.caption, design: .monospaced))
                .textSelection(.enabled)
                .padding(12)
                .frame(maxWidth: .infinity, alignment: .leading)
                .background(AppTheme.panelRaised)
                .clipShape(RoundedRectangle(cornerRadius: 6))
        }.frame(maxWidth: .infinity, alignment: .leading).toolPanel()
    }

    private func copyButton(_ text: String, title: String) -> some View {
        Button {
            NSPasteboard.general.clearContents()
            NSPasteboard.general.setString(text, forType: .string)
            withAnimation(.spring(response: 0.28, dampingFraction: 0.74)) {
                didCopy = true
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
                withAnimation(.easeOut(duration: 0.2)) { didCopy = false }
            }
        } label: {
            Label(didCopy ? "已复制" : title, systemImage: didCopy ? "checkmark" : "doc.on.doc")
        }
        .buttonStyle(GoldProminentButtonStyle(isSuccess: didCopy))
    }

    private func drawCards() {
        withAnimation(.easeOut(duration: 0.16)) { isDrawing = true }
        errorMessage = nil
        do {
            let newReport = try SharedCoreBridge.shared.divinateTarot(question: question, spread: spread, gender: gender)
            withAnimation(.spring(response: 0.42, dampingFraction: 0.86)) {
                report = newReport
            }
        }
        catch { errorMessage = error.localizedDescription }
        withAnimation(.easeOut(duration: 0.16)) { isDrawing = false }
    }

}
