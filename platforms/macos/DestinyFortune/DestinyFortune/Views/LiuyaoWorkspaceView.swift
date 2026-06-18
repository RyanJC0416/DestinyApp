import SwiftUI
import AppKit

struct LiuyaoWorkspaceView: View {
    @State private var question = ""
    @State private var gender = "男"
    @State private var topic = "事业"
    @State private var date = Date()
    @State private var report: LiuyaoReport?
    @State private var errorMessage: String?
    @State private var isWorking = false
    @State private var didCopy = false

    var body: some View {
        HSplitView {
            inputPane.frame(minWidth: 330, idealWidth: 380, maxWidth: 440)
            resultPane.frame(minWidth: 500, maxWidth: .infinity)
        }
        .navigationTitle("周易六爻")
    }

    private var inputPane: some View {
        VStack(alignment: .leading, spacing: 22) {
            VStack(alignment: .leading, spacing: 6) {
                Label("周易六爻", systemImage: "circle.hexagongrid.fill")
                    .font(.title2.bold()).foregroundStyle(AppTheme.gold)
                Text("专注一个具体问题，使用三枚铜钱法生成本卦与变卦。")
                    .foregroundStyle(AppTheme.textSecondary)
            }

            VStack(alignment: .leading, spacing: 8) {
                Text("所问之事").font(.headline)
                TextEditor(text: $question)
                    .font(.body)
                    .foregroundStyle(AppTheme.textPrimary)
                    .scrollContentBackground(.hidden)
                    .padding(10)
                    .frame(height: 130)
                    .background(AppTheme.panelRaised)
                    .overlay(RoundedRectangle(cornerRadius: 6).stroke(AppTheme.border))
                    .clipShape(RoundedRectangle(cornerRadius: 6))
            }

            Picker("性别", selection: $gender) {
                Text("男").tag("男")
                Text("女").tag("女")
            }.pickerStyle(.segmented)

            Picker("所问方向", selection: $topic) {
                ForEach(["事业", "家庭", "健康", "感情"], id: \.self) { Text($0).tag($0) }
            }.pickerStyle(.segmented)

            DatePicker("起卦日期", selection: $date, displayedComponents: [.date, .hourAndMinute])

            if let errorMessage {
                Label(errorMessage, systemImage: "exclamationmark.triangle.fill")
                    .font(.callout).foregroundStyle(.red)
            }

            Button(action: runDivination) {
                Label(isWorking ? "正在起卦" : "开始起卦", systemImage: "sparkles")
                    .frame(maxWidth: .infinity)
            }
            .buttonStyle(.borderedProminent)
            .controlSize(.large)
            .disabled(question.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty || isWorking)

            Text("结果用于文化娱乐与自我反思，不替代专业决策。")
                .font(.caption).foregroundStyle(AppTheme.textSecondary)
            Spacer()
        }
        .padding(28)
        .background(AppTheme.background)
        .foregroundStyle(AppTheme.textPrimary)
    }

    @ViewBuilder private var resultPane: some View {
        ScrollView {
            if let report {
                VStack(alignment: .leading, spacing: 18) {
                    HStack(alignment: .top, spacing: 20) {
                        Text(report.hexagramSymbol).font(.system(size: 76)).foregroundStyle(AppTheme.gold)
                        VStack(alignment: .leading, spacing: 7) {
                            Text(report.hexagram).font(.largeTitle.bold())
                            Text("上\(report.upperGua) · 下\(report.lowerGua)")
                                .foregroundStyle(AppTheme.textSecondary)
                            Text(report.fortune).font(.headline).foregroundStyle(AppTheme.gold)
                        }
                        Spacer()
                        copyButton(report.copyText, title: "复制给 AI")
                    }.toolPanel()

                    copyResultPanel(report.copyText, title: "原始排盘")

                    hexagramFlow(report)

                    resultSection("\(report.topic)解读与行动", icon: "lightbulb.fill") {
                        Text(report.topicAnalysis)
                        Text(report.suggestion)
                    }
                }.padding(28)
            } else {
                VStack(spacing: 14) {
                    Image(systemName: "circle.hexagongrid")
                        .font(.system(size: 44)).foregroundStyle(AppTheme.gold)
                    Text("等待起卦").font(.title2.bold())
                    Text("填写左侧问题后开始起卦。").foregroundStyle(AppTheme.textSecondary)
                }.frame(maxWidth: .infinity, minHeight: 520)
            }
        }.background(AppTheme.background)
            .foregroundStyle(AppTheme.textPrimary)
    }

    private func resultSection<Content: View>(_ title: String, icon: String, @ViewBuilder content: () -> Content) -> some View {
        VStack(alignment: .leading, spacing: 12) {
            Label(title, systemImage: icon).font(.headline).foregroundStyle(AppTheme.gold)
            content().textSelection(.enabled)
        }.frame(maxWidth: .infinity, alignment: .leading).toolPanel()
    }

    private func hexagramFlow(_ report: LiuyaoReport) -> some View {
        VStack(alignment: .leading, spacing: 18) {
            Label("本卦与变卦", systemImage: "arrow.down.square.fill")
                .font(.headline)
                .foregroundStyle(AppTheme.gold)

            hexagramDetailCard(
                badge: "本卦",
                name: report.hexagram,
                subtitle: "上\(report.upperGua) · 下\(report.lowerGua)",
                symbol: report.hexagramSymbol,
                yaoText: report.yaoText,
                xiangCi: report.xiangCi,
                guaCi: report.guaCi,
                plainInterpretation: report.plainInterpretation,
                isChanged: false
            )

            changingProcess(report.changingAnalysis)

            hexagramDetailCard(
                badge: "变卦",
                name: report.changingHexagram,
                subtitle: report.changingHexagramMeaning,
                symbol: report.changingHexagramSymbol,
                yaoText: report.changingYaoText,
                xiangCi: report.changingXiangCi,
                guaCi: report.changingGuaCi,
                plainInterpretation: report.changingPlainInterpretation,
                isChanged: true
            )
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .toolPanel()
    }

    private func hexagramDetailCard(
        badge: String,
        name: String,
        subtitle: String,
        symbol: String,
        yaoText: String,
        xiangCi: String,
        guaCi: String,
        plainInterpretation: String,
        isChanged: Bool
    ) -> some View {
        VStack(alignment: .leading, spacing: 16) {
            HStack(alignment: .center, spacing: 12) {
                Text(badge)
                    .font(.caption.bold())
                    .padding(.horizontal, 9)
                    .padding(.vertical, 5)
                    .background(AppTheme.gold)
                    .foregroundStyle(.white)
                    .clipShape(RoundedRectangle(cornerRadius: 5))
                VStack(alignment: .leading, spacing: 4) {
                    Text(name).font(.title3.bold())
                    Text(subtitle).font(.caption).foregroundStyle(AppTheme.textSecondary)
                }
                Spacer()
                Text(symbol).font(.system(size: 32)).foregroundStyle(AppTheme.gold)
            }

            HStack(alignment: .top, spacing: 22) {
                Text(yaoText)
                    .font(.system(.title2, design: .monospaced))
                    .foregroundStyle(AppTheme.gold)
                    .frame(width: 92, alignment: .center)
                    .textSelection(.enabled)
                Divider()
                VStack(alignment: .leading, spacing: 10) {
                    classicTextBlock("《象传》大象", xiangCi)
                    classicTextBlock("卦辞原文", guaCi, highlighted: true)
                    classicTextBlock("白话解读", plainInterpretation)
                }
            }
        }
        .padding(18)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(isChanged ? AppTheme.panelRaised : Color.white)
        .overlay(RoundedRectangle(cornerRadius: 8).stroke(isChanged ? AppTheme.gold.opacity(0.35) : AppTheme.border))
        .clipShape(RoundedRectangle(cornerRadius: 8))
    }

    private func classicTextBlock(_ title: String, _ text: String, highlighted: Bool = false) -> some View {
        VStack(alignment: .leading, spacing: 5) {
            Text(title).font(.caption.bold()).foregroundStyle(AppTheme.gold)
            Text(text)
                .font(highlighted ? .callout.weight(.semibold) : .body)
                .foregroundStyle(highlighted ? AppTheme.textPrimary : AppTheme.textSecondary)
                .padding(highlighted ? 10 : 0)
                .frame(maxWidth: .infinity, alignment: .leading)
                .background(highlighted ? AppTheme.gold.opacity(0.12) : Color.clear)
                .clipShape(RoundedRectangle(cornerRadius: 5))
        }
        .textSelection(.enabled)
    }

    private func changingProcess(_ text: String) -> some View {
        HStack(alignment: .top, spacing: 14) {
            Image(systemName: "arrow.down")
                .font(.title3.bold())
                .foregroundStyle(AppTheme.gold)
                .frame(width: 28, height: 28)
                .background(AppTheme.gold.opacity(0.12))
                .clipShape(Circle())
            VStack(alignment: .leading, spacing: 5) {
                Text("变爻过程").font(.headline)
                Text(text).foregroundStyle(AppTheme.textSecondary).textSelection(.enabled)
            }
        }
        .padding(14)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(AppTheme.gold.opacity(0.08))
        .overlay(RoundedRectangle(cornerRadius: 8).stroke(AppTheme.gold.opacity(0.20)))
        .clipShape(RoundedRectangle(cornerRadius: 8))
    }

    private func copyResultPanel(_ text: String, title: String) -> some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                VStack(alignment: .leading, spacing: 3) {
                    Label(title, systemImage: "doc.on.doc.fill").font(.headline).foregroundStyle(AppTheme.gold)
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
            didCopy = true
            DispatchQueue.main.asyncAfter(deadline: .now() + 2) { didCopy = false }
        } label: {
            Label(didCopy ? "已复制" : title, systemImage: didCopy ? "checkmark" : "doc.on.doc")
        }
        .buttonStyle(.borderedProminent)
    }

    private func runDivination() {
        isWorking = true
        errorMessage = nil
        do { report = try SharedCoreBridge.shared.divinateLiuyao(question: question, gender: gender, date: date, topic: topic) }
        catch { errorMessage = error.localizedDescription }
        isWorking = false
    }
}
