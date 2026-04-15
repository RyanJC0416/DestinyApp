//
//  HomeView.swift
//  首页 - 品牌展示 + 今日运势 + 快捷入口
//

import SwiftUI

struct HomeView: View {
    @State private var showDailyFortune = false
    
    var body: some View {
        ScrollView {
            VStack(spacing: 0) {
                // MARK: - Hero 区域
                heroSection
                    .padding(.top, 60)
                    .padding(.bottom, 40)
                
                // MARK: - 今日运势卡片
                dailyFortuneCard
                    .padding(.horizontal, 20)
                    .padding(.bottom, 30)
                
                // MARK: - 快捷入口
                quickAccessGrid
                    .padding(.horizontal, 20)
                    .padding(.bottom, 40)
                
                // MARK: - 底部品牌信息
                brandFooter
                    .padding(.vertical, 30)
            }
        }
        .background(
            LinearGradient(
                colors: [
                    Color(hex: "#0A0A0F"),
                    Color(hex: "#1a1428"),
                    Color(hex: "#0D1117")
                ],
                startPoint: .top,
                endPoint: .bottom
            )
            .ignoresSafeArea()
        )
    }
    
    // MARK: - Hero Section
    private var heroSection: some View {
        VStack(spacing: 16) {
            // Logo / 标题
            HStack(spacing: 10) {
                Text("☯")
                    .font(.system(size: 36))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [
                                Color(hex: "#C9A96E"),
                                Color(hex: "#E8D5B7"),
                                Color(hex: "#C9A96E")
                            ],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                Text("命运占卜")
                    .font(.system(size: 32, weight: .bold, design: .serif))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [
                                Color(hex: "#C9A96E"),
                                Color(hex: "#F0D9B5"),
                                Color(hex: "#E8C888")
                            ],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
            }
            
            Text("探索你的命运 · 融合中西方智慧")
                .font(.subheadline)
                .foregroundColor(Color(hex: "#8B8B9E"))
                .tracking(1.5)
            
            // 装饰分隔线
            Rectangle()
                .fill(
                    LinearGradient(
                        colors: [
                            Color.clear,
                            Color(hex: "#C9A96E").opacity(0.6),
                            Color.clear
                        ],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .frame(width: 200, height: 1)
                .padding(.top, 4)
        }
    }
    
    // MARK: - 今日运势卡片
    private var dailyFortuneCard: some View {
        Button(action: { showDailyFortune.toggle() }) {
            VStack(alignment: .leading, spacing: 16) {
                HStack {
                    VStack(alignment: .leading, spacing: 4) {
                        Text("今日运势")
                            .font(.headline)
                            .foregroundColor(Color(hex: "#C9A96E"))
                        Text(getTodayString())
                            .font(.caption)
                            .foregroundColor(Color(hex: "#6B6B80"))
                    }
                    Spacer()
                    Image(systemName: "chevron.right")
                        .foregroundColor(Color(hex: "#6B6B80"))
                }
                
                HStack(spacing: 16) {
                    fortuneItem(icon: "💫", title: "整体", value: "大吉", color: "#C9A96E")
                    fortuneItem(icon: "❤️", title: "感情", value: "吉", color: "#E87B7B")
                    fortuneItem(icon: "💰", title: "财运", value: "平", color: "#7BAFE8")
                    fortuneItem(icon: "⭐", title: "事业", value: "吉", color: "#9BE895")
                }
            }
            .padding(20)
            .background(
                RoundedRectangle(cornerRadius: 16)
                    .fill(Color(hex: "#151520").opacity(0.8))
                    .overlay(
                        RoundedRectangle(cornerRadius: 16)
                            .stroke(Color(hex: "#C9A96E").opacity(0.2), lineWidth: 1)
                    )
            )
            .shadow(color: Color(hex: "#C9A96E").opacity(0.05), radius: 20, y: 4)
        }
    }
    
    private func fortuneItem(icon: String, title: String, value: String, color: String) -> some View {
        VStack(spacing: 6) {
            Text(icon)
                .font(.title2)
            Text(value)
                .font(.caption.bold())
                .foregroundColor(Color(hex: color))
            Text(title)
                .font(.caption2)
                .foregroundColor(Color(hex: "#6B6B80"))
        }
        .frame(maxWidth: .infinity)
    }
    
    // MARK: - 快捷入口网格
    private var quickAccessGrid: some View {
        LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 14) {
            QuickAccessCard(
                icon: "🔮",
                title: "周易六爻",
                subtitle: "铜钱起卦 · 预测吉凶",
                gradientColors: [Color(hex: "#2D1B4E"), Color(hex: "#1a1030")]
            )
            QuickAccessCard(
                icon: "🧮",
                title: "八字排盘",
                subtitle: "四柱命理 · 解析命运",
                gradientColors: [Color(hex: "#1B2D4E"), Color(hex: "#101a30")]
            )
            QuickAccessCard(
                icon: "🃏",
                title: "塔罗占卜",
                subtitle: "神秘牌阵 · 揭示内心",
                gradientColors: [Color(hex: "#4E1B2D"), color: "#30101a"]
            )
            QuickAccessCard(
                icon: "⭐",
                title: "星盘解析",
                subtitle: "天体运行 · 人生轨迹",
                gradientColors: [Color(hex: "#1B3D4E"), Color(hex: "#102030")]
            )
        }
    }
    
    // MARK: - 品牌底部
    private var brandFooter: some View {
        VStack(spacing: 8) {
            Text("命运占卜 · 探索命运的奥秘")
                .font(.caption)
                .foregroundColor(Color(hex: "#4A4A5E"))
            Text("© 2026 Destiny Fortune")
                .font(.caption2)
                .foregroundColor(Color(hex: "#333340"))
        }
    }
    
    // MARK: - Helpers
    private func getTodayString() -> String {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy年M月d日 EEEE"
        formatter.locale = Locale(identifier: "zh_CN")
        return formatter.string(from: Date())
    }
}

// MARK: - 快捷入口卡片组件
struct QuickAccessCard: View {
    let icon: String
    let title: String
    let subtitle: String
    let gradientColors: [Color]
    
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text(icon)
                .font(.system(size: 28))
            Text(title)
                .font(.headline)
                .foregroundColor(.white)
            Text(subtitle)
                .font(.caption)
                .foregroundColor(Color(hex: "#8B8B9E"))
            Spacer()
            HStack {
                Spacer()
                Image(systemName: "arrow.up.right")
                    .font(.caption)
                    .foregroundColor(Color(hex: "#C9A96E").opacity(0.6))
            }
        }
        .frame(height: 120)
        .padding(16)
        .background(
            RoundedRectangle(cornerRadius: 14)
                .fill(
                    LinearGradient(colors: gradientColors, startPoint: .topLeading, endPoint: .bottomTrailing)
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 14)
                        .stroke(Color.white.opacity(0.06), lineWidth: 1)
                )
        )
    }
}

#Preview {
    HomeView()
}
