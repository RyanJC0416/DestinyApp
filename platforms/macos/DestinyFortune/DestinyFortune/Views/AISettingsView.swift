import SwiftUI

struct AISettingsView: View {
    @ObservedObject private var settings = AIModelSettings.shared
    @Environment(\.dismiss) private var dismiss
    @State private var showKey = false
    @State private var isTesting = false
    @State private var message: String?
    @State private var isError = false

    var body: some View {
        VStack(spacing: 0) {
            HStack {
                VStack(alignment: .leading, spacing: 4) {
                    Text("DeepSeek AI 解读").font(.title2.bold())
                    Text("仅用于六爻和塔罗的单次结果解读，不提供聊天功能。")
                        .font(.callout).foregroundStyle(AppTheme.textSecondary)
                }
                Spacer()
                Button("完成") { dismiss() }.buttonStyle(.borderedProminent).tint(AppTheme.gold)
            }
            .padding(24)

            Form {
                Section("连接") {
                    Picker("模型", selection: $settings.model) {
                        Text("Flash · 更快、更省").tag("deepseek-v4-flash")
                        Text("Pro · 更深入的解读").tag("deepseek-v4-pro")
                    }
                    Text("使用 DeepSeek 官方 API：api.deepseek.com")
                        .font(.caption).foregroundStyle(AppTheme.textSecondary)
                    HStack {
                        Group {
                            if showKey { TextField("API Key", text: $settings.apiKey) }
                            else { SecureField("API Key", text: $settings.apiKey) }
                        }
                        Button { showKey.toggle() } label: {
                            Image(systemName: showKey ? "eye.slash" : "eye")
                        }.buttonStyle(.borderless)
                    }
                    Text("API Key 仅保存在 Destiny 当前本地用户缓存中，不会写入结果或同步到其他设备。")
                        .font(.caption).foregroundStyle(AppTheme.textSecondary)
                }

                Section("生成") {
                    Toggle("启用深度思考", isOn: $settings.thinkingEnabled)
                    Text(settings.thinkingEnabled ? "开启后会提升分析深度，但响应更慢、消耗更多 tokens。" : "关闭后采用直接解读，速度更快且可调节创造性。")
                        .font(.caption).foregroundStyle(AppTheme.textSecondary)
                    HStack {
                        Text("创造性")
                        Slider(value: $settings.temperature, in: 0...1.2, step: 0.1)
                        Text(settings.temperature, format: .number.precision(.fractionLength(1))).monospacedDigit().frame(width: 30)
                    }
                    .disabled(settings.thinkingEnabled)
                    Stepper("最长回复：\(settings.maxTokens) tokens", value: $settings.maxTokens, in: 300...2_000, step: 100)
                    Text("解读会附带固定的范围约束：只解读当前排盘，不聊天、不追问，也不会作出医疗、法律或投资结论。")
                        .font(.caption).foregroundStyle(AppTheme.textSecondary)
                }

                if let message {
                    Section {
                        Label(message, systemImage: isError ? "exclamationmark.triangle.fill" : "checkmark.circle.fill")
                            .foregroundStyle(isError ? .red : .green)
                    }
                }
            }
            .formStyle(.grouped)
            .scrollContentBackground(.hidden)
            .padding(.horizontal, 10)

            HStack {
                Button("恢复默认") { settings.reset(); message = "已恢复默认配置。"; isError = false }
                Spacer()
                Button(isTesting ? "正在测试…" : "保存并测试连接") { saveAndTest() }
                    .buttonStyle(.borderedProminent).tint(AppTheme.gold).disabled(isTesting)
            }
            .padding(24)
        }
        .frame(width: 620, height: 570)
        .background(AppTheme.background)
    }

    private func saveAndTest() {
        do { try settings.save() }
        catch { message = error.localizedDescription; isError = true; return }
        isTesting = true
        message = nil
        let config = settings.configuration
        Task {
            do {
                _ = try await AIFeedbackService.shared.interpret(kind: "塔罗", source: "问题：连接测试\n牌阵：单牌\n抽到：愚者（正位）", configuration: config)
                message = "连接成功，配置已保存。"
                isError = false
            } catch {
                message = error.localizedDescription
                isError = true
            }
            isTesting = false
        }
    }
}

struct AIAssistedInterpretationSection: View {
    let title: String
    let icon: String
    let kind: String
    let source: String
    let fallback: String
    @ObservedObject private var settings = AIModelSettings.shared
    @State private var feedback: String?
    @State private var isLoading = false
    @State private var shouldUseFallback = false

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Label(title, systemImage: icon)
                    .font(.headline).foregroundStyle(AppTheme.gold)
                Spacer()
                if feedback != nil {
                    Label("AI 解读", systemImage: "sparkles")
                        .font(.caption.bold()).foregroundStyle(AppTheme.gold)
                }
            }
            if settings.isConfigured && !shouldUseFallback && feedback == nil {
                HStack(spacing: 8) {
                    ProgressView().controlSize(.small)
                    Text("AI 正在生成解读…")
                }
                .font(.caption).foregroundStyle(AppTheme.textSecondary)
            }
            if let feedback {
                MarkdownPreview(markdown: feedback)
            } else if !settings.isConfigured || shouldUseFallback {
                Text(fallback)
                    .textSelection(.enabled)
                    .lineSpacing(4)
            }
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .toolPanel()
        .task(id: source) { await generateIfAvailable() }
    }

    private func generateIfAvailable() async {
        feedback = nil
        shouldUseFallback = false
        guard settings.isConfigured else {
            isLoading = false
            return
        }
        isLoading = true
        let configuration = settings.configuration
        feedback = try? await AIFeedbackService.shared.interpret(kind: kind, source: source, configuration: configuration)
        shouldUseFallback = feedback == nil
        isLoading = false
    }
}

private struct MarkdownPreview: View {
    let markdown: String

    var body: some View {
        VStack(alignment: .leading, spacing: 7) {
            ForEach(Array(markdown.components(separatedBy: .newlines).enumerated()), id: \.offset) { _, line in
                markdownLine(line)
            }
        }
        .textSelection(.enabled)
    }

    @ViewBuilder
    private func markdownLine(_ line: String) -> some View {
        if line.trimmingCharacters(in: .whitespaces).isEmpty {
            Spacer().frame(height: 4)
        } else if let heading = headingText(from: line) {
            formattedText(heading.text)
                .font(heading.level == 1 ? .title3.bold() : .headline)
                .padding(.top, 5)
        } else if let item = listItem(from: line) {
            HStack(alignment: .firstTextBaseline, spacing: 7) {
                Text("•")
                formattedText(item)
            }
        } else {
            formattedText(line)
        }
    }

    private func formattedText(_ source: String) -> Text {
        let options = AttributedString.MarkdownParsingOptions(interpretedSyntax: .inlineOnlyPreservingWhitespace)
        let rendered = (try? AttributedString(markdown: source, options: options)) ?? AttributedString(source)
        return Text(rendered)
    }

    private func headingText(from line: String) -> (text: String, level: Int)? {
        let trimmed = line.trimmingCharacters(in: .whitespaces)
        let hashes = trimmed.prefix { $0 == "#" }
        guard !hashes.isEmpty, trimmed.dropFirst(hashes.count).first == " " else { return nil }
        return (String(trimmed.dropFirst(hashes.count + 1)), hashes.count)
    }

    private func listItem(from line: String) -> String? {
        let trimmed = line.trimmingCharacters(in: .whitespaces)
        guard (trimmed.hasPrefix("- ") || trimmed.hasPrefix("* ")) else { return nil }
        return String(trimmed.dropFirst(2))
    }
}
