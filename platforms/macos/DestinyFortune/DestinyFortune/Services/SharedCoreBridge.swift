import Foundation
import JavaScriptCore

enum SharedCoreError: LocalizedError {
    case runtimeUnavailable
    case resourceMissing(String)
    case scriptFailed(String)
    case invalidResult

    var errorDescription: String? {
        switch self {
        case .runtimeUnavailable: return "无法启动共享算法运行时。"
        case .resourceMissing(let name): return "缺少共享算法资源：\(name)。"
        case .scriptFailed(let message): return "算法执行失败：\(message)"
        case .invalidResult: return "算法返回了无法识别的结果。"
        }
    }
}

final class SharedCoreBridge {
    static let shared = SharedCoreBridge()

    private let context: JSContext
    private let decoder = JSONDecoder()

    private init() {
        guard let context = JSContext() else { fatalError("JavaScriptCore is unavailable") }
        self.context = context
        context.exceptionHandler = { _, exception in
            NSLog("Shared core JavaScript error: %@", exception?.toString() ?? "Unknown error")
        }
        context.evaluateScript("var __modules = {}; function require(name) { return __modules[name]; }")

        do {
            try loadModule(resource: "yaoData", key: "./yaoData")
            try loadModule(resource: "hexagramData", key: "../data/hexagramData")
            try loadModule(resource: "tarotData", key: "../data/tarotData")
            try loadModule(resource: "liuyaoEngine", key: "core/liuyaoEngine")
            try loadModule(resource: "tarotEngine", key: "core/tarotEngine")
            try loadModule(resource: "jiaobeiEngine", key: "core/jiaobeiEngine")
        } catch {
            fatalError(error.localizedDescription)
        }
    }

    func divinateLiuyao(question: String, gender: String, date: Date, topic: String = "事业") throws -> LiuyaoReport {
        let formatter = ISO8601DateFormatter()
        return try call(
            module: "core/liuyaoEngine",
            method: "divinate",
            arguments: [question, gender, formatter.string(from: date), topic]
        )
    }

    func divinateTarot(question: String, spread: String, gender: String) throws -> TarotReport {
        try call(
            module: "core/tarotEngine",
            method: "divinate",
            arguments: [question, spread, gender]
        )
    }

    func castJiaobei(question: String) throws -> JiaobeiReport {
        try call(module: "core/jiaobeiEngine", method: "cast", arguments: [question])
    }

    func confirmJiaobeiPresence(invitee: String) throws -> JiaobeiReport {
        try call(module: "core/jiaobeiEngine", method: "confirmPresence", arguments: [invitee])
    }

    func askJiaobeiQuestion(_ question: String, presenceConfirmed: Bool) throws -> JiaobeiReport {
        try call(module: "core/jiaobeiEngine", method: "askQuestion", arguments: [question, presenceConfirmed])
    }

    private func loadModule(resource: String, key: String) throws {
        guard let url = Bundle.main.url(forResource: resource, withExtension: "js") else {
            throw SharedCoreError.resourceMissing(resource)
        }
        let source = try String(contentsOf: url, encoding: .utf8)
        let escapedKey = try jsonString(key)
        let wrapped = """
        (function() {
          const module = { exports: {} };
          const exports = module.exports;
          (function(module, exports, require) {
        \(source)
          })(module, exports, require);
          __modules[\(escapedKey)] = module.exports;
        })();
        """
        context.evaluateScript(wrapped, withSourceURL: url)
        if let exception = context.exception { throw SharedCoreError.scriptFailed(exception.toString()) }
    }

    private func call<T: Decodable>(module: String, method: String, arguments: [Any]) throws -> T {
        guard let object = context.objectForKeyedSubscript("__modules")?.objectForKeyedSubscript(module),
              let value = object.invokeMethod(method, withArguments: arguments),
              !value.isUndefined else {
            throw SharedCoreError.invalidResult
        }
        if let exception = context.exception { throw SharedCoreError.scriptFailed(exception.toString()) }
        let objectValue = value.toObject() ?? NSNull()
        let data = try JSONSerialization.data(withJSONObject: objectValue)
        return try decoder.decode(T.self, from: data)
    }

    private func jsonString(_ value: String) throws -> String {
        let data = try JSONSerialization.data(withJSONObject: [value])
        let array = String(decoding: data, as: UTF8.self)
        return String(array.dropFirst().dropLast())
    }
}
