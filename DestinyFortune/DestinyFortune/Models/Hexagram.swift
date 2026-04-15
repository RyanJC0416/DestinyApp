//
//  Hexagram.swift
//  六爻卦象数据模型
//

import Foundation

// MARK: - 四象类型
enum YaoType: Int, Codable {
    case laoYang = 9    // 老阳 ⚊ (动爻，阳变阴)
    case shaoYang = 7   // 少阳 ⚊ (静爻，阳)
    case laoYin = 6     // 老阴 ⚋ (动爻，阴变阳)
    case shaoYin = 8    // 少阴 ⚋ (静爻，阴)
    
    var name: String {
        switch self {
        case .laoYang: return "老阳"
        case .shaoYang: return "少阳"
        case .laoYin: return "老阴"
        case .shaoYin: return "少阴"
        }
    }
    
    var isYang: Bool {
        return self == .laoYang || self == .shaoYang
    }
    
    var isMoving: Bool {
        return self == .laoYang || self == .laoYin
    }
    
    var displaySymbol: String {
        return isYang ? "⚊" : "⚋"
    }
}

// MARK: - 单爻信息
struct YaoInfo: Codable {
    let type: Int           // 9,7,6,8
    let title: String       // 如 "初九·潜龙勿用"
    let original: String    // 原文
    let allusion: String    // 典故
    let interpretation: String // 解读
    
    var yaoType: YaoType? {
        return YaoType(rawValue: type)
    }
}

// MARK: - 变卦信息
struct BianGuaInfo: Codable {
    let name: String        // 变卦名
    let symbol: String      // 卦符
    let upper: String       // 上卦
    let lower: String       // 下卦
    let palace: String      // 宫位
    let element: String     // 五行
    let judge: String       // 总评
    let nature: String      // 变化性质
    let trend: String       // 趋势
    let meaning: String     // 变卦释义
    let advice: String      // 变后建议
}

// MARK: - 建议
struct Advice: Codable {
    let career: String
    let love: String
    let wealth: String
    let warning: String
}

// MARK: - 卦象主模型
struct Hexagram: Codable, Identifiable {
    let id = UUID()
    let name: String        // 卦名，如 "乾为天"
    let symbol: String      // 卦符，如 "䷀"
    let upper: String       // 上卦
    let lower: String       // 下卦
    let palace: String      // 宫位
    let element: String     // 五行
    let judge: String       // 总评 (大吉/吉/平/凶等)
    let lines: [Int]        // 六爻数值 [9,7,9,7,9,7]
    
    // 卦辞与释义
    let guaCi: String       // 卦辞原文
    let meaning: String     // 卦义阐释
    let allusion: String    // 典故出处
    
    // 签诗
    let poem: String
    let poemMeaning: String
    let qianDetail: String
    let qianYiJi: String    // 宜忌 (HTML格式)
    
    // 六爻详解
    let yaos: [YaoInfo]
    
    // 建议
    let advice: Advice
    
    // 变卦
    let bianGua: BianGuaInfo
    
    enum CodingKeys: String, CodingKey {
        case name, symbol, upper, lower, palace, element, judge, lines
        case guaCi = "guaci"
        case meaning, allusion, poem, poemMeaning
        case qianDetail = "qianDetail"
        case qianYiJi = "qianYiji"
        case yaos, advice, bianGua
    }
    
    // 计算动爻位置 (1-6, 从下到上)
    var movingYaoIndices: [Int] {
        return lines.enumerated().compactMap { index, value in
            let type = YaoType(rawValue: value)
            return type?.isMoving == true ? index + 1 : nil
        }
    }
    
    // 获取变卦的爻数组
    var bianLines: [Int] {
        return lines.map { value in
            guard let type = YaoType(rawValue: value) else { return value }
            if type == .laoYang { return YaoType.shaoYin.rawValue }
            if type == .laoYin { return YaoType.shaoYang.rawValue }
            return value
        }
    }
}

// MARK: - 测算结果
struct DivinationResult {
    let hexagram: Hexagram
    let question: String
    let gender: String
    let date: Date
    
    var formattedDate: String {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy年MM月dd日"
        return formatter.string(from: date)
    }
}
