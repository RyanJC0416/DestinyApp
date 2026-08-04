import Foundation

struct AIModelConfiguration: Equatable {
    var model: String
    var apiKey: String
    var thinkingEnabled: Bool
    var temperature: Double
    var maxTokens: Int

    static let `default` = AIModelConfiguration(
        model: "deepseek-v4-flash",
        apiKey: "",
        thinkingEnabled: false,
        temperature: 0.7,
        maxTokens: 900
    )
}

@MainActor
final class AIModelSettings: ObservableObject {
    static let shared = AIModelSettings()
    private let defaults = UserDefaults.standard

    @Published var model: String
    @Published var apiKey: String
    @Published var thinkingEnabled: Bool
    @Published var temperature: Double
    @Published var maxTokens: Int

    private init() {
        model = defaults.string(forKey: "deepseek.model") ?? AIModelConfiguration.default.model
        apiKey = defaults.string(forKey: "deepseek.apiKey") ?? ""
        thinkingEnabled = defaults.object(forKey: "deepseek.thinkingEnabled") as? Bool ?? AIModelConfiguration.default.thinkingEnabled
        temperature = defaults.object(forKey: "deepseek.temperature") as? Double ?? AIModelConfiguration.default.temperature
        maxTokens = defaults.object(forKey: "deepseek.maxTokens") as? Int ?? AIModelConfiguration.default.maxTokens
    }

    var configuration: AIModelConfiguration {
        AIModelConfiguration(model: model, apiKey: apiKey, thinkingEnabled: thinkingEnabled, temperature: temperature, maxTokens: maxTokens)
    }

    var isConfigured: Bool {
        ["deepseek-v4-flash", "deepseek-v4-pro"].contains(model) &&
        !apiKey.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
    }

    func save() throws {
        guard ["deepseek-v4-flash", "deepseek-v4-pro"].contains(model) else { throw AIFeedbackError.missingModel }
        defaults.set(model, forKey: "deepseek.model")
        defaults.set(thinkingEnabled, forKey: "deepseek.thinkingEnabled")
        defaults.set(temperature, forKey: "deepseek.temperature")
        defaults.set(maxTokens, forKey: "deepseek.maxTokens")
        defaults.set(apiKey.trimmingCharacters(in: .whitespacesAndNewlines), forKey: "deepseek.apiKey")
    }

    func reset() {
        model = AIModelConfiguration.default.model
        apiKey = ""
        thinkingEnabled = AIModelConfiguration.default.thinkingEnabled
        temperature = AIModelConfiguration.default.temperature
        maxTokens = AIModelConfiguration.default.maxTokens
        defaults.removeObject(forKey: "deepseek.model")
        defaults.removeObject(forKey: "deepseek.thinkingEnabled")
        defaults.removeObject(forKey: "deepseek.temperature")
        defaults.removeObject(forKey: "deepseek.maxTokens")
        defaults.removeObject(forKey: "deepseek.apiKey")
    }
}

enum AIFeedbackError: LocalizedError {
    case missingModel, missingConfiguration, malformedResponse, service(String)

    var errorDescription: String? {
        switch self {
        case .missingModel: return "请选择 DeepSeek 模型。"
        case .missingConfiguration: return "请先在设置中填写 DeepSeek API Key。"
        case .malformedResponse: return "模型返回格式无法识别。"
        case .service(let message): return message
        }
    }
}

struct AIFeedbackService {
    static let shared = AIFeedbackService()

    func interpret(kind: String, source: String, configuration: AIModelConfiguration) async throws -> String {
        guard !configuration.apiKey.isEmpty else { throw AIFeedbackError.missingConfiguration }
        var request = URLRequest(url: URL(string: "https://api.deepseek.com/chat/completions")!)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.setValue("Bearer \(configuration.apiKey)", forHTTPHeaderField: "Authorization")
        request.timeoutInterval = 60
        let payload = ChatRequest(model: configuration.model, messages: [
            .init(role: "system", content: systemPrompt(kind: kind)),
            .init(role: "user", content: "以下是本次\(kind)的原始结果，请仅据此完成解读：\n\n\(source)")
        ], thinking: .init(type: configuration.thinkingEnabled ? "enabled" : "disabled"), temperature: configuration.thinkingEnabled ? nil : configuration.temperature, maxTokens: configuration.maxTokens)
        request.httpBody = try JSONEncoder().encode(payload)

        let (data, response) = try await URLSession.shared.data(for: request)
        guard let http = response as? HTTPURLResponse else { throw AIFeedbackError.malformedResponse }
        guard (200...299).contains(http.statusCode) else {
            let apiMessage = (try? JSONDecoder().decode(APIErrorResponse.self, from: data))?.error.message
            throw AIFeedbackError.service(apiMessage ?? "请求失败（HTTP \(http.statusCode)）。")
        }
        guard let content = try JSONDecoder().decode(ChatResponse.self, from: data).choices.first?.message.content,
              !content.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else { throw AIFeedbackError.malformedResponse }
        return content.trimmingCharacters(in: .whitespacesAndNewlines)
    }

    private func systemPrompt(kind: String) -> String {
        """
        你是“命运占卜”应用内的 \(kind)解读助手。你只完成当前这一份结果的单次解读，绝不进行闲聊、角色扮演、续聊邀请或回答与本次 \(kind) 无关的问题。
        用中文、平和且具体的方式输出：1. 结果要点；2. 对提问的理解；3. 可执行的建议；4. 需要留意的边界。不得将占卜描述为确定事实，不作医疗、法律、投资或财务决定，不恐吓、不承诺结果。若原始信息不足，明确说明限制。
        """
    }
}

private struct ChatRequest: Encodable {
    struct Message: Encodable { let role: String; let content: String }
    struct Thinking: Encodable { let type: String }
    let model: String
    let messages: [Message]
    let thinking: Thinking
    let temperature: Double?
    let maxTokens: Int
    enum CodingKeys: String, CodingKey { case model, messages, thinking, temperature; case maxTokens = "max_tokens" }
}

private struct ChatResponse: Decodable {
    struct Choice: Decodable { struct Message: Decodable { let content: String? }; let message: Message }
    let choices: [Choice]
}

private struct APIErrorResponse: Decodable { struct Detail: Decodable { let message: String? }; let error: Detail }
