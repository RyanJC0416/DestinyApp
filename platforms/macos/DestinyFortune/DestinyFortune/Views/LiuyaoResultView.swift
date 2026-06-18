//
//  LiuyaoResultView.swift
//  六爻测算结果展示页
//

import SwiftUI

struct LiuyaoResultView: View {
    let hexagram: Hexagram
    let question: String
    let gender: String
    let date: Date
    
    @State private var showFullDetail = false
    @Environment(\.dismiss) var dismiss
    let onClose: () -> Void
    
    // 格式化日期
    private var formattedDate: String {
        let f = DateFormatter()
        f.dateFormat = "yyyy年M月d日"
        return f.string(from: date)
    }
    
    var body: some View {
        ZStack {
            // 背景
            Color(hex: "#0A0A0F").ignoresSafeArea()
            
            ScrollView {
                VStack(spacing: 24) {
                    // 顶部操作栏
                    resultHeader
                        .padding(.top, 20)
                    
                    // 卦象主卡片
                    hexagramMainCard
                        .padding(.horizontal, 20)
                    
                    // 爻辞详情（展开/折叠）
                    yaosDetailSection
                        .padding(.horizontal, 20)
                    
                    // 建议区域
                    adviceSection
                        .padding(.horizontal, 20)
                    
                    // 变卦信息
                    bianGuaSection
                        .padding(.horizontal, 20)
                    
                    // 操作按钮区
                    actionButtons
                        .padding(.horizontal, 20)
                        .padding(.bottom, 40)
                }
            }
        }
        .transition(.move(edge: .bottom).combined(with: .opacity))
    }
    
    // MARK: - 结果头部
    private var resultHeader: some View {
        HStack {
            Button(action: { withAnimation(.easeInOut(duration: 0.3)) { onClose() } }) {
                Image(systemName: "xmark.circle.fill")
                    .font(.title2)
                    .foregroundColor(Color(hex: "#5A5A6E"))
            }
            Spacer()
            Text("测算结果")
                .font(.headline)
                .foregroundColor(Color(hex: "#C9A96E"))
            Spacer()
            Button(action: { shareResult() }) {
                Image(systemName: "square.and.arrow.up")
                    .font(.title2)
                    .foregroundColor(Color(hex: "#5A5A6E"))
            }
        }
        .padding(.horizontal, 24)
    }
    
    // MARK: - 卦象主卡片
    private var hexagramMainCard: some View {
        VStack(spacing: 20) {
            // 卦名 + 符号 + 判词
            HStack(alignment: .firstTextBaseline, spacing: 12) {
                Text(hexagram.symbol)
                    .font(.system(size: 48, design: .serif))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [Color(hex: "#C9A96E"), Color(hex: "#F0D9B5")],
                            startPoint: .top,
                            endPoint: .bottom
                        )
                    )
                
                VStack(alignment: .leading, spacing: 4) {
                    Text(hexagram.name)
                        .font(.title.bold().design(.serif))
                        .foregroundColor(.white)
                    
                    HStack(spacing: 8) {
                        judgeBadge(text: hexagram.judge)
                        Text("·")
                            .foregroundColor(Color(hex: "#3A3A4E"))
                        Text("\(hexagram.palace) · \(hexagram.element)")
                            .font(.caption)
                            .foregroundColor(Color(hex: "#6B6B80"))
                    }
                }
                
                Spacer()
            }
            
            // 分隔线
            Rectangle()
                .fill(
                    LinearGradient(
                        colors: [.clear, Color(hex: "#C9A96E").opacity(0.15), .clear],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .frame(height: 1)
            
            // 卦辞原文
            VStack(alignment: .leading, spacing: 8) {
                Label("卦辞", systemImage: "scroll")
                    .font(.caption.bold())
                    .foregroundColor(Color(hex: "#8B8B9E"))
                
                Text(hexagram.guaCi)
                    .font(.body.design(.serif))
                    .foregroundColor(Color(hex: "#D0D0DC"))
                    .lineSpacing(4)
                
                Text(hexagram.meaning)
                    .font(.subheadline)
                    .foregroundColor(Color(hex: "#7A7A8E"))
                    .lineSpacing(4)
            }
            
            // 签诗
            VStack(alignment: .leading, spacing: 8) {
                Label("签诗", systemImage: "text.quote")
                    .font(.caption.bold())
                    .foregroundColor(Color(hex: "#8B8B9E"))
                
                Text(hexagram.poem)
                    .font(.body.design(.serif))
                    .foregroundColor(Color(hex: "#C9A96E"))
                    .lineSpacing(2)
                
                Text(hexagram.poemMeaning)
                    .font(.subheadline)
                    .foregroundColor(Color(hex: "#6B6B80"))
                    .lineSpacing(4)
            }
        }
        .padding(20)
        .background(
            RoundedRectangle(cornerRadius: 18)
                .fill(Color(hex: "#12121A"))
                .overlay(
                    RoundedRectangle(cornerRadius: 18)
                        .stroke(Color(hex: "#C9A96E").opacity(0.12), lineWidth: 1)
                )
        )
    }
    
    // MARK: - 判词徽章
    private func judgeBadge(text: String) -> some View {
        let color: String
        switch text {
        case "大吉": color = "#C9A96E"
        case "吉": color = "#9BE895"
        case "小吉": color = "#95E8DF"
        case "平": color = "#E8D595"
        case "小凶": color = "#E89895"
        case "凶": color = "#E87B7B"
        default: color = "#8B8B9E"
        }
        
        return Text(text)
            .font(.caption.bold())
            .foregroundColor(color == "#C9A96E" || color == "#F0D9B5" ? 
                     Color(hex: "#0D0814") : .white)
            .padding(.horizontal, 10)
            .padding(.vertical, 4)
            .background(Capsule().fill(Color(hex: color)))
    }
    
    // MARK: - 爻辞详情
    private var yaosDetailSection: some View {
        VStack(alignment: .leading, spacing: 14) {
            Button(action: { withAnimation(.easeInOut(duration: 0.3)) { showFullDetail.toggle() } }) {
                HStack {
                    Label("六爻详解", systemImage: "list.bullet.rectangle.fill")
                        .font(.subheadline.bold())
                        .foregroundColor(Color(hex: "#C9A96E"))
                    
                    Spacer()
                    
                    Image(systemName: showFullDetail ? "chevron.up" : "chevron.down")
                        .font(.caption)
                        .foregroundColor(Color(hex: "#6B6B80"))
                    
                    Text(showFullDetail ? "收起" : "展开")
                        .font(.caption)
                        .foregroundColor(Color(hex: "#6B6B80"))
                }
            }
            
            if showFullDetail {
                VStack(spacing: 0) {
                    ForEach(Array(hexagram.yaos.enumerated()), id: \.offset) { index, yao in
                        YaoDetailView(yao: yao, index: index)
                        
                        if index < hexagram.yaos.count - 1 {
                            Divider()
                                .background(Color(hex: "#1E1E2A"))
                                .padding(.leading, 48)
                        }
                    }
                }
                .padding(16)
                .background(
                    RoundedRectangle(cornerRadius: 12)
                        .fill(Color(hex: "#101018"))
                        .overlay(
                            RoundedRectangle(cornerRadius: 12)
                                .stroke(Color(hex: "#2A2A3E"), lineWidth: 1)
                        )
                )
                .transition(.move(edge: .top).combined(with: .opacity))
            }
        }
    }
    
    // MARK: - 建议区域
    private var adviceSection: some View {
        VStack(alignment: .leading, spacing: 14) {
            Label("综合指引", systemImage: "lightbulb.fill")
                .font(.subheadline.bold())
                .foregroundColor(Color(hex: "#C9A96E"))
            
            AdviceRow(icon: "💼", title: "事业", text: hexagram.advice.career, color: "#7BAFE8")
            AdviceRow(icon: "❤️", title: "感情", text: hexagram.advice.love, color: "#E87B7B")
            AdviceRow(icon: "💰", title: "财运", text: hexagram.advice.wealth, color: "#C9A96E")
            AdviceRow(icon: "⚠️", title: "警示", text: hexagram.advice.warning, color: "#E8B87B")
        }
    }
    
    private func AdviceRow(icon: String, title: String, text: String, color: String) -> some View {
        HStack(alignment: .top, spacing: 10) {
            Text(icon)
                .font(.system(size: 16))
            
            VStack(alignment: .leading, spacing: 2) {
                Text(title)
                    .font(.caption.bold())
                    .foregroundColor(Color(hex: color))
                Text(text)
                    .font(.caption)
                    .foregroundColor(Color(hex: "#7A7A8E"))
                    .lineSpacing(3)
            }
            
            Spacer()
        }
        .padding(10)
        .background(
            RoundedRectangle(cornerRadius: 8)
                .fill(Color(hex: "#101018"))
        )
    }
    
    // MARK: - 变卦信息
    private var bianGuaSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            Label("变卦启示", systemImage: "arrow.triangle.2.circlepath")
                .font(.subheadline.bold())
                .foregroundColor(Color(hex: "#C9A96E"))
            
            HStack(spacing: 14) {
                VStack(spacing: 4) {
                    Text("本卦")
                        .font(.caption2)
                        .foregroundColor(Color(hex: "#5A5A6E"))
                    Text(hexagram.name.replacingOccurrences(of: "为", with: "\n为"))
                        .font(.caption.design(.serif))
                        .foregroundColor(Color(hex: "#C9A96E"))
                        .multilineTextAlignment(.center)
                }
                .frame(width: 60)
                
                Image(systemName: "arrow.right")
                    .font(.caption)
                    .foregroundColor(Color(hex: "#5A5A6E"))
                
                VStack(spacing: 4) {
                    Text("变卦")
                        .font(.caption2)
                        .foregroundColor(Color(hex: "#5A5A6E"))
                    Text(hexagram.bianGua.name.replacingOccurrences(of: "为", with: "\n为"))
                        .font(.caption.design(.serif))
                        .foregroundColor(Color(hex: "#9BE895"))
                        .multilineTextAlignment(.center)
                }
                .frame(width: 60)
                
                Spacer()
            }
            .padding(14)
            .background(
                RoundedRectangle(cornerRadius: 10)
                    .fill(Color(hex: "#101018"))
                    .overlay(
                        RoundedRectangle(cornerRadius: 10)
                            .stroke(Color(hex: "#2A2A3E"), lineWidth: 1)
                    )
            )
            
            Text(hexagram.bianGua.meaning)
                .font(.caption)
                .foregroundColor(Color(hex: "#6B6B80"))
                .lineSpacing(3)
        }
    }
    
    // MARK: - 操作按钮
    private var actionButtons: some View {
        VStack(spacing: 12) {
            Button(action: { shareResult() }) {
                HStack {
                    Image(systemName: "square.and.arrow.up")
                    Text("分享结果")
                    Spacer()
                }
                .foregroundColor(Color(hex: "#C9A96E"))
                .padding(14)
                .background(
                    RoundedRectangle(cornerRadius: 12)
                        .fill(Color(hex: "#151520"))
                        .overlay(
                            RoundedRectangle(cornerRadius: 12)
                                .stroke(Color(hex: "#2A2A3E"), lineWidth: 1)
                        )
                )
            }
            
            Button(action: { withAnimation(.easeInOut(duration: 0.3)) { onClose() } }) {
                HStack {
                    Image(systemName: "arrow.counterclockwise")
                    Text("重新测算")
                    Spacer()
                }
                .foregroundColor(Color(hex: "#8B8B9E"))
                .padding(14)
                .background(
                    RoundedRectangle(cornerRadius: 12)
                        .fill(Color.clear)
                        .overlay(
                            RoundedRectangle(cornerRadius: 12)
                                .stroke(Color(hex: "#2A2A3E"), lineWidth: 1)
                        )
                )
            }
        }
    }
    
    // MARK: - 分享功能
    private func shareResult() {
        let shareText = """
        🔮 【命运占卜·六爻测算】
        
        📜 卦象：\(hexagram.name) \(hexagram.symbol)
        📊 判词：\(hexagram.judge)
        💫 签诗：\(hexagram.poem)
        
        —— 探索你的命运，命运占卜 App ——
        """
        print("分享内容：\(shareText)")
        // 实际项目中使用 UIActivityViewController 进行分享
    }
}

// MARK: - 单爻详情组件
struct YaoDetailView: View {
    let yao: YaoInfo
    let index: Int
    
    var body: some View {
        HStack(alignment: .top, spacing: 12) {
            // 爻位标识
            Text("第\(index+1)爻")
                .font(.caption2.bold())
                .foregroundColor(Color(hex: "#5A5A6E"))
                .padding(.horizontal, 6)
                .padding(.vertical, 2)
                .background(
                    Capsule()
                        .fill(Color(hex: "#1E1E2A"))
                )
            
            VStack(alignment: .leading, spacing: 4) {
                Text(yao.title)
                    .font(.subheadline.bold().design(.serif))
                    .foregroundColor(Color(hex: "#E0E0EC"))
                
                Text(yao.original)
                    .font(.caption.italic())
                    .foregroundColor(Color(hex: "#C9A96E").opacity(0.8))
                
                Text(yao.interpretation)
                    .font(.caption)
                    .foregroundColor(Color(hex: "#7A7A8E"))
                    .lineSpacing(3)
            }
            
            Spacer()
        }
        .padding(.vertical, 10)
    }
}

#Preview {
    LiuyaoResultView(
        hexagram: HexagramData.allHexagrams[0],
        question: "测试问题",
        gender: "男",
        date: Date(),
        onClose: {}
    )
}
