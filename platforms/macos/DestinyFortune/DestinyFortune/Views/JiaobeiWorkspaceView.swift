import SwiftUI

private struct JiaobeiBlockShape: Shape {
    let convex: Bool

    func path(in rect: CGRect) -> Path {
        func point(_ x: CGFloat, _ y: CGFloat) -> CGPoint {
            CGPoint(x: rect.minX + (x + 4) / 48 * rect.width,
                    y: rect.minY + (y + 34) / 66 * rect.height)
        }
        var path = Path()
        path.move(to: point(40, 0))
        path.addCurve(to: point(0, 10), control1: point(40, 20), control2: point(0, 20))
        path.addQuadCurve(to: point(0, -10), control: point(15, 0))
        path.addCurve(to: point(40, 0),
                      control1: convex ? point(5, -30) : point(0, -20),
                      control2: point(40, -20))
        path.closeSubpath()
        return path
    }
}

private enum JiaobeiStage: String {
    case presence = "请示对象确认"
    case question = "具体事项请示"
}

private struct JiaobeiRecord: Identifiable {
    let id = UUID()
    let stage: JiaobeiStage
    let prompt: String
    let result: JiaobeiReport
}

struct JiaobeiWorkspaceView: View {
    @State private var invitee = ""
    @State private var question = ""
    @State private var presenceConfirmed = false
    @State private var current: JiaobeiRecord?
    @State private var history: [JiaobeiRecord] = []
    @State private var errorMessage: String?
    @State private var isCasting = false

    private var consecutiveSacred: Int {
        history.prefix { $0.stage == .question && $0.result.type == "sacred" }.count
    }

    private var latestPresenceResult: JiaobeiReport? {
        history.first { $0.stage == .presence }?.result
    }

    var body: some View {
        HSplitView {
            inputPane.frame(minWidth: 330, idealWidth: 390, maxWidth: 460)
            resultPane.frame(minWidth: 500, maxWidth: .infinity)
        }
        .navigationTitle("珓杯")
    }

    private var inputPane: some View {
        VStack(alignment: .leading, spacing: 20) {
            VStack(alignment: .leading, spacing: 6) {
                Label("珓杯请示", systemImage: "capsule.portrait.fill")
                    .font(.title2.bold()).foregroundStyle(AppTheme.gold)
                Text("先确认请示对象是否在座、愿意受询；得圣杯后才能进入具体问事。")
                    .foregroundStyle(AppTheme.textSecondary)
            }

            stepHeader(number: 1, title: "先问谁", complete: presenceConfirmed)
            VStack(alignment: .leading, spacing: 8) {
                TextField("例如：妈祖、关圣帝君、土地公", text: $invitee)
                    .textFieldStyle(.roundedBorder)
                    .disabled(presenceConfirmed)
                if presenceConfirmed {
                    Label("已得圣杯，\(invitee)愿意受询", systemImage: "checkmark.seal.fill")
                        .font(.callout.bold()).foregroundStyle(.green)
                } else {
                    Button(action: confirmPresence) {
                        Label(isCasting ? "正在确认" : history.isEmpty ? "掷杯请示是否在座" : "再次确认请示对象",
                              systemImage: "person.crop.circle.badge.questionmark")
                            .frame(maxWidth: .infinity)
                    }
                    .buttonStyle(GoldProminentButtonStyle(isBusy: isCasting)).controlSize(.large)
                    .disabled(invitee.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty || isCasting)
                    if let latestPresenceResult {
                        presenceInlineResult(latestPresenceResult)
                    }
                }
            }

            Divider()
            stepHeader(number: 2, title: "再问具体事情", complete: false)
            VStack(alignment: .leading, spacing: 8) {
                TextEditor(text: $question)
                    .font(.body).scrollContentBackground(.hidden).padding(10).frame(height: 110)
                    .background(presenceConfirmed ? AppTheme.panelRaised : Color.black.opacity(0.04))
                    .interactiveField()
                    .disabled(!presenceConfirmed)
                if !presenceConfirmed {
                    Text("需要第一步得到圣杯后才能填写。")
                        .font(.caption).foregroundStyle(AppTheme.textSecondary)
                }
                Button(action: castQuestion) {
                    Label(isCasting ? "正在掷杯" : "请示具体事项", systemImage: "hands.and.sparkles.fill")
                        .frame(maxWidth: .infinity)
                }
                .buttonStyle(GoldProminentButtonStyle(isBusy: isCasting)).controlSize(.large)
                .disabled(!presenceConfirmed || question.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty || isCasting)
            }

            if let errorMessage {
                Label(errorMessage, systemImage: "exclamationmark.triangle.fill")
                    .font(.callout).foregroundStyle(.red)
            }
            if !history.isEmpty {
                Button("重新请示／更换对象", role: .destructive, action: reset)
                    .buttonStyle(.borderless)
            }
            Text("民俗文化体验，不替代医疗、法律、财务或其他专业决策。")
                .font(.caption).foregroundStyle(AppTheme.textSecondary)
            jiaobeiLegend
            Spacer()
        }
        .padding(28).background(AppTheme.background).foregroundStyle(AppTheme.textPrimary)
    }

    @ViewBuilder private var resultPane: some View {
        ScrollView {
            if let current {
                VStack(alignment: .leading, spacing: 18) {
                    VStack(spacing: 16) {
                        Text(current.stage.rawValue).font(.caption.bold()).foregroundStyle(AppTheme.gold)
                        Text(current.prompt).font(.headline).multilineTextAlignment(.center)
                        HStack(spacing: 34) {
                            ForEach(Array(current.result.pieces.enumerated()), id: \.offset) { _, piece in cup(piece) }
                        }
                        Text(current.result.name).font(.largeTitle.bold())
                        Text(current.result.verdict).font(.headline).foregroundStyle(resultColor(current.result.type))
                        if current.stage == .presence && current.result.type != "sacred" {
                            Label("未解锁具体问事", systemImage: "lock.fill").foregroundStyle(.orange)
                        }
                        if consecutiveSacred >= 3 {
                            Label("具体事项已连得三次圣杯", systemImage: "checkmark.seal.fill")
                                .font(.headline).foregroundStyle(.green)
                        }
                    }
                    .frame(maxWidth: .infinity).toolPanel()

                    resultSection("珓意", icon: "text.book.closed.fill") {
                        Text(current.result.meaning)
                        Text(current.result.guidance).foregroundStyle(AppTheme.textSecondary)
                    }

                    if history.count > 1 {
                        resultSection("本次请示记录", icon: "clock.arrow.circlepath") {
                            ForEach(history) { item in
                                HStack {
                                    VStack(alignment: .leading, spacing: 3) {
                                        Text(item.stage.rawValue).font(.caption).foregroundStyle(AppTheme.textSecondary)
                                        Text(item.prompt).lineLimit(1)
                                    }
                                    Spacer()
                                    Text(item.result.name).fontWeight(.semibold).foregroundStyle(resultColor(item.result.type))
                                }
                                if item.id != history.last?.id { Divider() }
                            }
                        }
                    }
                }
                .padding(28)
                .resultReveal(current.id)
            } else {
                VStack(spacing: 14) {
                    Image(systemName: "person.crop.circle.badge.questionmark").font(.system(size: 48)).foregroundStyle(AppTheme.gold)
                    Text("第一步：先问谁").font(.title2.bold())
                    Text("填写请示对象，先掷杯确认是否在座。").foregroundStyle(AppTheme.textSecondary)
                }
                .frame(maxWidth: .infinity, minHeight: 520)
                .resultReveal("empty")
            }
        }.background(AppTheme.background).foregroundStyle(AppTheme.textPrimary)
    }

    private func stepHeader(number: Int, title: String, complete: Bool) -> some View {
        HStack {
            Text("\(number)").font(.caption.bold()).frame(width: 24, height: 24)
                .background(complete ? Color.green : AppTheme.gold).foregroundStyle(.white).clipShape(Circle())
            Text(title).font(.headline)
            Spacer()
            if complete { Image(systemName: "checkmark.circle.fill").foregroundStyle(.green) }
        }
    }

    private func presenceInlineResult(_ result: JiaobeiReport) -> some View {
        VStack(alignment: .leading, spacing: 4) {
            Label("\(result.name) · \(result.verdict)", systemImage: result.type == "sacred" ? "checkmark.seal.fill" : "questionmark.circle.fill")
                .font(.callout.bold())
                .foregroundStyle(resultColor(result.type))
            Text(result.meaning)
                .font(.caption)
                .foregroundStyle(AppTheme.textSecondary)
        }
        .padding(10)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(AppTheme.panelRaised)
        .clipShape(RoundedRectangle(cornerRadius: 6))
        .transition(.opacity.combined(with: .move(edge: .top)))
    }

    private var jiaobeiLegend: some View {
        VStack(alignment: .leading, spacing: 6) {
            Text("杯意说明").font(.caption.bold()).foregroundStyle(AppTheme.gold)
            Text("圣杯：一阴一阳 · 允可")
            Text("笑杯：双阳 · 问法或时机未定")
            Text("阴杯：双阴 · 暂不允可")
        }
        .font(.caption)
        .foregroundStyle(AppTheme.textSecondary)
        .padding(12)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(AppTheme.panelRaised)
        .clipShape(RoundedRectangle(cornerRadius: 6))
    }

    private func cup(_ piece: JiaobeiPiece) -> some View {
        VStack(spacing: 8) {
            ZStack {
                if piece.key == "flat" {
                    JiaobeiBlockShape(convex: false)
                        .fill(Color(red: 0.40, green: 0.12, blue: 0.09))
                        .offset(y: 8)
                }
                JiaobeiBlockShape(convex: piece.key == "round")
                    .fill(LinearGradient(colors: [Color(red: 0.90, green: 0.42, blue: 0.31),
                                                  Color(red: 0.69, green: 0.23, blue: 0.16),
                                                  Color(red: 0.43, green: 0.10, blue: 0.08)],
                                         startPoint: .topLeading, endPoint: .bottomTrailing))
                    .overlay(JiaobeiBlockShape(convex: piece.key == "round")
                        .stroke(Color(red: 0.39, green: 0.10, blue: 0.08), lineWidth: 2))
            }
            .frame(width: 126, height: 154)
            .rotationEffect(.degrees(piece.key == "flat" ? -12 : 12))
            .scaleEffect(x: piece.key == "round" ? -1 : 1, y: 1)
            .shadow(color: Color.black.opacity(0.2), radius: 6, y: 8)
            .transition(.asymmetric(insertion: .opacity.combined(with: .move(edge: .top)), removal: .opacity))
            Text("\(piece.nature)·\(piece.side)").font(.caption.bold())
                .foregroundStyle(Color(red: 0.55, green: 0.20, blue: 0.13))
        }
    }

    private func resultColor(_ type: String) -> Color {
        switch type { case "sacred": return .green; case "yin": return .red; default: return AppTheme.gold }
    }

    private func resultSection<Content: View>(_ title: String, icon: String, @ViewBuilder content: () -> Content) -> some View {
        VStack(alignment: .leading, spacing: 12) {
            Label(title, systemImage: icon).font(.headline).foregroundStyle(AppTheme.gold)
            content().textSelection(.enabled)
        }.frame(maxWidth: .infinity, alignment: .leading).toolPanel()
    }

    private func confirmPresence() {
        let name = invitee.trimmingCharacters(in: .whitespacesAndNewlines)
        performCast(stage: .presence, prompt: "请问\(name)是否在座，并愿意受询？", operation: {
            try SharedCoreBridge.shared.confirmJiaobeiPresence(invitee: name)
        }) { result in
            presenceConfirmed = result.type == "sacred"
        }
    }

    private func castQuestion() {
        let prompt = question.trimmingCharacters(in: .whitespacesAndNewlines)
        performCast(stage: .question, prompt: prompt, operation: {
            try SharedCoreBridge.shared.askJiaobeiQuestion(prompt, presenceConfirmed: presenceConfirmed)
        }) { _ in }
    }

    private func performCast(stage: JiaobeiStage, prompt: String, operation: () throws -> JiaobeiReport,
                             completion: (JiaobeiReport) -> Void) {
        withAnimation(.easeOut(duration: 0.16)) { isCasting = true }
        errorMessage = nil
        do {
            let result = try operation()
            let record = JiaobeiRecord(stage: stage, prompt: prompt, result: result)
            withAnimation(.spring(response: 0.42, dampingFraction: 0.82)) {
                current = record
                history.insert(record, at: 0)
                completion(result)
            }
        } catch { errorMessage = error.localizedDescription }
        withAnimation(.easeOut(duration: 0.16)) { isCasting = false }
    }

    private func reset() {
        withAnimation(.spring(response: 0.34, dampingFraction: 0.86)) {
            invitee = ""
            question = ""
            presenceConfirmed = false
            current = nil
            history.removeAll()
            errorMessage = nil
        }
    }
}
