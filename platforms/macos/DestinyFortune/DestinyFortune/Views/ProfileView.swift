//
//  ProfileView.swift
//  我的页面 - 个人中心
//

import SwiftUI

struct ProfileView: View {
    var body: some View {
        ScrollView {
            VStack(spacing: 24) {
                // 用户信息区
                profileHeader
                    .padding(.top, 40)
                
                // 功能菜单
                menuList
                    .padding(.horizontal, 20)
                
                // 关于信息
                aboutSection
                    .padding(.horizontal, 20)
                
                // 底部版本
                versionInfo
                    .padding(.bottom, 30)
            }
        }
        .background(Color(hex: "#0A0A0F").ignoresSafeArea())
    }
    
    private var profileHeader: some View {
        VStack(spacing: 12) {
            // 头像占位
            ZStack {
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                Color(hex: "#C9A96E").opacity(0.3),
                                Color(hex: "#C9A96E").opacity(0.05)
                            ],
                            center: .center,
                            startRadius: 20,
                            endRadius: 50
                        )
                    )
                    .frame(width: 80, height: 80)
                    .overlay(
                        Circle()
                            .stroke(Color(hex: "#C9A96E").opacity(0.2), lineWidth: 1)
                    )
                
                Image(systemName: "person.fill")
                    .font(.system(size: 32))
                    .foregroundColor(Color(hex: "#C9A96E").opacity(0.6))
            }
            
            Text("探索者")
                .font(.headline)
                .foregroundColor(.white)
            
            Text("命运的追寻者")
                .font(.caption)
                .foregroundColor(Color(hex: "#6B6B80"))
        }
    }
    
    private var menuList: some View {
        VStack(spacing: 1) {
            ProfileMenuItem(icon: "clock.arrow.circlepath", title: "测算历史", badge: "暂无记录")
            ProfileMenuItem(icon: "bell.fill", title: "订阅管理", badge: nil)
            ProfileMenuItem(icon: "heart.fill", title: "收藏夹", badge: nil)
            ProfileMenuItem(icon: "crown.fill", title: "会员中心", badge: "未开通")
            Divider().background(Color(hex: "#1E1E2A")).padding(.leading, 48)
            ProfileMenuItem(icon: "gearshape.fill", title: "设置", badge: nil)
            ProfileMenuItem(icon: "info.circle.fill", title: "关于我们", badge: nil)
            ProfileMenuItem(icon: "doc.text.fill", title: "用户协议", badge: nil)
            ProfileMenuItem(icon: "shield.checkered", title: "隐私政策", badge: nil)
            ProfileMenuItem(icon: "exclamationmark.triangle.fill", title: "免责声明", badge: nil)
        }
        .background(
            RoundedRectangle(cornerRadius: 16)
                .fill(Color(hex: "#12121A"))
                .overlay(
                    RoundedRectangle(cornerRadius: 16)
                        .stroke(Color(hex: "#1E1E2A"), lineWidth: 1)
                )
        )
    }
    
    private var aboutSection: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text("关于命运占卜")
                .font(.subheadline.bold())
                .foregroundColor(Color(hex: "#8B8B9E"))
            
            Text("命运占卜致力于为用户提供专业、准确的命理服务，融合中西方智慧，为你揭示命运的奥秘。")
                .font(.caption)
                .foregroundColor(Color(hex: "#5A5A6E"))
                .lineSpacing(4)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(16)
        .background(
            RoundedRectangle(cornerRadius: 12)
                .fill(Color(hex: "#101018"))
        )
    }
    
    private var versionInfo: some View {
        VStack(spacing: 4) {
            Text("命运占卜 v1.0.0 (MVP)")
                .font(.caption)
                .foregroundColor(Color(hex: "#3A3A4E"))
            Text("© 2026 Destiny Fortune. All rights reserved.")
                .font(.caption2)
                .foregroundColor(Color(hex: "#2A2A3E"))
        }
    }
}

struct ProfileMenuItem: View {
    let icon: String
    let title: String
    let badge: String?
    
    var body: some View {
        HStack(spacing: 12) {
            Image(systemName: icon)
                .font(.system(size: 15))
                .foregroundColor(Color(hex: "#6B6B80"))
                .frame(width: 24)
            
            Text(title)
                .font(.subheadline)
                .foregroundColor(.white)
            
            Spacer()
            
            if let badge = badge {
                Text(badge)
                    .font(.caption2)
                    .foregroundColor(Color(hex: "#4A4A5E"))
            }
            
            Image(systemName: "chevron.right")
                .font(.caption2)
                .foregroundColor(Color(hex: "#3A3A4E"))
        }
        .padding(14)
    }
}

#Preview {
    ProfileView()
}
