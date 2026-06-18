//
//  LiuyaoEngine.swift
//  六爻计算引擎 - Swift Package Core Logic
//

import Foundation

/// 六爻计算引擎
/// 负责起卦、排盘、变卦计算等核心算法
class LiuyaoEngine {
    
    static let shared = LiuyaoEngine()
    
    private init() {}
    
    // MARK: - 铜钱起卦
    /// 模拟三枚铜钱掷卦，返回一个爻的值
    /// 3正 = 老阳(9), 2正1反 = 少阳(7), 1正2反 = 少阴(8), 3反 = 老阴(6)
    func castCoin() -> Int {
        let coins = (0..<3).map { _ in Int.random(in: 0...1) } // 0=反，1=正
        let sum = coins.reduce(0, +)
        switch sum {
        case 3: return 9  // 三正 = 老阳
        case 2: return 7  // 两正一反 = 少阳
        case 1: return 8  // 一正两反 = 少阴
        case 0: return 6  // 三反 = 老阴
        default: return 7
        }
    }
    
    // MARK: - 时间起卦
    /// 根据年月日时起卦
    func castByTime(year: Int, month: Int, day: Int, hour: Int) -> [Int] {
        var lines: [Int] = []
        for i in 0..<6 {
            let seed = year + month + day + hour + i
            var generator = SeededRandomGenerator(seed: seed)
            let coinSum = (0..<3).map { _ in generator.random() }.reduce(0, +)
            switch coinSum {
            case 3: lines.append(9)
            case 2: lines.append(7)
            case 1: lines.append(8)
            case 0: lines.append(6)
            default: lines.append(7)
            }
        }
        return lines
    }
    
    // MARK: - 根据输入生成卦象
    /// 根据问题和日期生成卦象 (使用哈希算法确保相同输入得到相同结果)
    func generateHexagram(question: String, gender: String, date: Date) -> Hexagram? {
        // 计算哈希值
        var hash = 0
        for char in question.unicodeScalars {
            hash = ((hash << 5) - hash) + Int(char.value)
            hash = hash & hash
        }
        
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd"
        let dateString = formatter.string(from: date)
        for char in dateString.unicodeScalars {
            hash = ((hash << 5) - hash) + Int(char.value)
            hash = hash & hash
        }
        
        if gender == "female" {
            hash += 42
        }
        
        let index = abs(hash) % HexagramData.allHexagrams.count
        return HexagramData.allHexagrams[index]
    }
    
    // MARK: - 计算六亲
    /// 根据卦宫五行和爻地支计算六亲
    func calculateLiuQin(palaceElement: String, yaoBranch: String) -> String {
        // 简化版：根据宫位五行直接返回
        // 实际实现需要完整的五行生克表
        let relationMap: [String: String] = [
            "金": "父母",
            "木": "官鬼",
            "水": "子孙",
            "火": "妻财",
            "土": "兄弟"
        ]
        return relationMap[palaceElement] ?? "兄弟"
    }
    
    // MARK: - 计算六兽
    /// 根据日辰天干计算六兽
    func calculateLiuShou(dayStem: String) -> [String] {
        // 简化版六兽顺序
        return ["青龙", "朱雀", "勾陈", "螣蛇", "白虎", "玄武"]
    }
}

// MARK: - 伪随机数生成器
/// 基于种子的确定性随机数生成器
/// 确保相同输入得到相同的卦象
struct SeededRandomGenerator {
    private var state: UInt64
    
    init(seed: Int) {
        self.state = UInt64(bitPattern: Int64(seed))
    }
    
    mutating func random() -> Int {
        // xorshift64* 算法
        state ^= state >> 12
        state ^= state << 25
        state ^= state >> 27
        return Int((state & 0x1) != 0 ? 1 : 0)
    }
}
