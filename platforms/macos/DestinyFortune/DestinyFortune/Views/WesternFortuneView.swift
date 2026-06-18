//
//  WesternFortuneView.swift
//  西式占卜页 - 展示所有西式测算入口
//

import SwiftUI

struct WesternFortuneView: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 24) {
                headerSection
                    .padding(.top, 20)
                
                functionCards
                    .padding(.horizontal, 20)
            }
        }
        .background(Color(hex: "#0A0A0F").ignoresSafeArea())
    }
    
    private var headerSection: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("西式占卜")
                .font(.title.bold())
                .foregroundColor(.white)
            Text("探索神秘的西方智慧")
                .font(.subheadline)
                .foregroundColor(Color(hex: "#6B6B80"))
        }
        .padding(.horizontal, 24)
    }
    
    private var functionCards: some View {
        VStack(spacing: 16) {
            WesternFunctionCard(
                icon: "🃏",
                title: "塔罗占卜",
                subtitle: "78张牌阵 · 揭示内心世界",
                tagText: "即将上线",
                gradientColors: [
                    Color(hex: "#4E2D1B"),
                    Color(hex: "#301810"),
                    Color(hex: "#180D08")
                ]
            )
            
            WesternFunctionCard(
                icon: "⭐",
                title: "星盘解析",
                subtitle: "行星落位 · 解读人生轨迹",
                tagText: "规划中",
                gradientColors: [
                    Color(hex: "#1B3D4E"),
                    Color(hex: "#102030"),
                    Color(hex: "#081018")
                ]
            )
            
            WesternFunctionCard(
                icon: "🔮",
                title: "魔法球占卜",
                subtitle: "水晶球中 · 预见未来图景",
                tagText: "规划中",
                gradientColors: [
                    Color(hex: "#2D1B4E"),
                    Color(hex: "#181030"),
                    Color(hex: "#080818")
                ]
            )
            
            WesternFunctionCard(
                icon: "♈",
                title: "星座运势",
                subtitle: "十二星座 · 每日运势指南",
                tagText: "规划中",
                gradientColors: [
                    Color(hex: "#4E1B4E"),
                    Color(hex: "#301028"),
                    Color(hex: "#180816")
                ]
            )
        }
    }
}

struct WesternFunctionCard: View {
    let icon: String
    let title: String
    let subtitle: String
    let tagText: String
    let gradientColors: [Color]
    
    var body: some View {
        HStack(spacing: 16) {
            ZStack {
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [Color.white.opacity(0.05), Color.clear],
                            center: .center,
                            startRadius: 10,
                            endRadius: 35
                        )
                    )
                    .frame(width: 64, height: 64)
                Text(icon)
                    .font(.system(size: 28))
            }
            
            VStack(alignment: .leading, spacing: 4) {
                Text(title)
                    .font(.headline)
                    .foregroundColor(Color(hex: "#6B6B80"))
                Text(subtitle)
                    .font(.caption)
                    .foregroundColor(Color(hex: "#4A4A5E"))
                
                Text(tagText)
                    .font(.caption2.bold())
                    .foregroundColor(Color(hex: "#5A5A6E"))
                    .padding(.horizontal, 8)
                    .padding(.vertical, 2)
                    .background(
                        Capsule()
                            .fill(Color(hex: "#5A5A6E").opacity(0.15))
                    )
                    .padding(.top, 4)
            }
            
            Spacer()
            
            Image(systemName: "lock.fill")
                .font(.caption)
                .foregroundColor(Color(hex: "#2A2A3E"))
        }
        .padding(18)
        .background(
            RoundedRectangle(cornerRadius: 16)
                .fill(
                    LinearGradient(colors: gradientColors, startPoint: .topLeading, endPoint: .bottomTrailing)
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 16)
                        .stroke(Color.white.opacity(0.04), lineWidth: 1)
                )
        )
        .opacity(0.7)
    }
}

#Preview {
    WesternFortuneView()
}
