//
//  ChineseFortuneView.swift
//  中式算命页 - 展示所有中式测算入口
//

import SwiftUI

struct ChineseFortuneView: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 24) {
                // 页面标题
                headerSection
                    .padding(.top, 20)
                
                // 功能卡片列表
                functionCards
                    .padding(.horizontal, 20)
            }
        }
        .background(Color(hex: "#0A0A0F").ignoresSafeArea())
    }
    
    private var headerSection: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("中式算命")
                .font(.title.bold())
                .foregroundColor(.white)
            Text("传承千年的东方智慧")
                .font(.subheadline)
                .foregroundColor(Color(hex: "#6B6B80"))
        }
        .padding(.horizontal, 24)
    }
    
    private var functionCards: some View {
        VStack(spacing: 16) {
            // 六爻卡片（主要功能）
            NavigationLink(destination: LiuyaoFormView()) {
                ChineseFunctionCard(
                    icon: "🔮",
                    title: "周易六爻",
                    subtitle: "铜钱起卦 · 预测吉凶祸福",
                    tagText: "核心功能",
                    tagColor: "#C9A96E",
                    gradientColors: [
                        Color(hex: "#2D1B4E"),
                        Color(hex: "#1B1035"),
                        Color(hex: "#0D0818")
                    ],
                    isPrimary: true,
                    available: true
                )
            }
            
            // 八字卡片（暂不可用）
            ChineseFunctionCard(
                icon: "🧮",
                title: "八字排盘",
                subtitle: "四柱命理 · 解析命运密码",
                tagText: "即将上线",
                tagColor: "#5A5A6E",
                gradientColors: [
                    Color(hex: "#1B2D4E"),
                    Color(hex: "#101828"),
                    Color(hex: "#080C14")
                ],
                isPrimary: false,
                available: false
            )
            
            // 紫微斗数卡片（暂不可用）
            ChineseFunctionCard(
                icon: "⭐",
                title: "紫微斗数",
                subtitle: "安星布宫 · 十四主星排盘",
                tagText: "规划中",
                tagColor: "#5A5A6E",
                gradientColors: [
                    Color(hex: "#2D3D1B"),
                    color: "#182808",
                    Color(hex: "#0D1406")
                ],
                isPrimary: false,
                available: false
            )
            
            // 梅花易数卡片（暂不可用）
            ChineseFunctionCard(
                icon: "🌸",
                title: "梅花易数",
                subtitle: "象数推理 · 随机起卦预测",
                tagText: "规划中",
                tagColor: "#5A5A6E",
                gradientColors: [
                    Color(hex: "#4E1B2D"),
                    Color(hex: "#280818"),
                    Color(hex: "#140408")
                ],
                isPrimary: false,
                available: false
            )
        }
    }
}

// MARK: - 中式功能卡片组件
struct ChineseFunctionCard: View {
    let icon: String
    let title: String
    let subtitle: String
    let tagText: String
    let tagColor: String
    let gradientColors: [Color]
    let isPrimary: Bool
    let available: Bool
    
    var body: some View {
        HStack(spacing: 16) {
            // 图标区域
            ZStack {
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                isPrimary ? Color(hex: "#C9A96E").opacity(0.2) : Color.white.opacity(0.05),
                                Color.clear
                            ],
                            center: .center,
                            startRadius: 10,
                            endRadius: 35
                        )
                    )
                    .frame(width: 64, height: 64)
                Text(icon)
                    .font(.system(size: 28))
            }
            
            // 文字信息
            VStack(alignment: .leading, spacing: 4) {
                HStack(spacing: 8) {
                    Text(title)
                        .font(.headline)
                        .foregroundColor(available ? .white : Color(hex: "#6B6B80"))
                    
                    if !available {
                        Text(tagText)
                            .font(.caption2.bold())
                            .foregroundColor(Color(hex: tagColor))
                            .padding(.horizontal, 8)
                            .padding(.vertical, 2)
                            .background(
                                Capsule()
                                    .fill(Color(hex: tagColor).opacity(0.15))
                            )
                    } else {
                        Text(tagText)
                            .font(.caption2.bold())
                            .foregroundColor(.white)
                            .padding(.horizontal, 8)
                            .padding(.vertical, 2)
                            .background(
                                Capsule()
                                    .fill(Color(hex: "#C9A96E"))
                            )
                    }
                }
                Text(subtitle)
                    .font(.caption)
                    .foregroundColor(Color(hex: "#5A5A6E"))
            }
            
            Spacer()
            
            // 箭头
            Image(systemName: available ? "chevron.right" : "lock.fill")
                .font(.caption)
                .foregroundColor(available ? Color(hex: "#C9A96E").opacity(0.6) : Color(hex: "#3A3A4E"))
        }
        .padding(18)
        .background(
            RoundedRectangle(cornerRadius: 16)
                .fill(
                    LinearGradient(colors: gradientColors, startPoint: .topLeading, endPoint: .bottomTrailing)
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 16)
                        .stroke(
                            available ? 
                                Color(hex: "#C9A96E").opacity(isPrimary ? 0.25 : 0.08) :
                                Color.white.opacity(0.04),
                            lineWidth: 1
                        )
                )
        )
        .opacity(available ? 1 : 0.7)
    }
}

#Preview {
    ChineseFortuneView()
}
