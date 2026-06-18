import Foundation

struct LiuyaoReport: Codable {
    let question: String
    let gender: String
    let date: String
    let hexagram: String
    let hexagramSymbol: String
    let hexagramMeaning: String
    let description: String
    let guaCi: String
    let xiangCi: String
    let plainInterpretation: String
    let fortune: String
    let yaoText: String
    let lowerGua: String
    let upperGua: String
    let changingLinesCount: Int
    let changingAnalysis: String
    let changingHexagram: String
    let changingHexagramSymbol: String
    let changingHexagramMeaning: String
    let changingGuaCi: String
    let changingXiangCi: String
    let changingPlainInterpretation: String
    let changingYaoText: String
    let copyText: String
    let analysis: String
    let topic: String
    let topicAnalysis: String
    let suggestion: String
}

struct TarotReport: Codable {
    let question: String
    let spread: String
    let gender: String
    let cards: String
    let copyText: String
    let spreadResult: [TarotPosition]
    let analysis: String
    let suggestion: String
}

struct TarotPosition: Codable, Identifiable {
    var id: String { "\(position)-\(card.name)" }
    let position: String
    let positionMeaning: String
    let card: TarotCard
    let interpretation: String
}

struct TarotCard: Codable {
    let name: String
    let nameEn: String
    let meaning: String
    let imageURL: String
    let isReversed: Bool
}

struct JiaobeiReport: Codable {
    let question: String
    let pieces: [JiaobeiPiece]
    let type: String
    let name: String
    let symbol: String
    let verdict: String
    let meaning: String
    let guidance: String
    let canProceed: Bool?
}

struct JiaobeiPiece: Codable {
    let side: String
    let nature: String
    let key: String
}
