//
//  LiuyaoLoadingView.swift
//  六爻测算 - Loading 仪式感动画
//  铜钱翻转动画 → 卦象生成动画 → 结果展示
//

import SwiftUI

struct LiuyaoLoadingView: View {
    @Binding var isLoading: Bool
    let onComplete: (Hexagram) -> Void
    
    @State private var phase: LoadingPhase = .casting
    @State private var coinRotation: Double = 0
    @State private var coinOpacity: Double = 1
    @State private var yaoIndex: Int = 0
    @State private var revealedYaos: [Bool] = [false, false, false, false, false, false]
    @State private var showHexagram = false
    @State private var pulseScale: CGFloat = 1.0
    @State private var resultHexagram: Hexagram?
    
    enum LoadingPhase {
        case casting      // 铜钱摇卦阶段
        case revealing     // 爻象揭示阶段
        case complete      // 完成
    }
    
    var body: some View {
        ZStack {
            // 背景遮罩
            Color.black.opacity(0.85)
                .ignoresSafeArea()
            
            VStack(spacing: 32) {
                Spacer()
                
                switch phase {
                case .casting:
                    // 铜钱翻转动画
                    coinCastingAnimation
                    
                case .revealing:
                    // 卦象生成动画
                    hexagramRevealingAnimation
                    
                case .complete:
                    // 完成过渡（短暂显示）
                    completeAnimation
                }
                
                Spacer()
            }
        }
        .onAppear {
            startAnimationSequence()
        }
    }
    
    // MARK: - 铜钱起卦动画
    private var coinCastingAnimation: some View {
        VStack(spacing: 28) {
            // 三枚铜钱
            HStack(spacing: 24) {
                ForEach(0..<3) { i in
                    Coin3D(rotation: coinRotation + Double(i) * 0.5)
                        .opacity(coinOpacity)
                }
            }
            
            // 提示文字
            Text(castingText)
                .font(.title3.design(.serif))
                .foregroundColor(Color(hex: "#C9A96E"))
                .tracking(2)
                .transition(.opacity)
            
            Text("铜钱正在为您演算天机...")
                .font(.caption)
                .foregroundColor(Color(hex: "#5A5A6E"))
        }
    }
    
    private var castingText: String {
        let texts = ["天机演算中...", "命运之轮转动...", "六爻显现中..."]
        let index = Int(Date().timeIntervalSinceReferenceDate.truncatingRemainder(dividingBy: Double(texts.count)))
        return texts[index]
    }
    
    // MARK: - 卦象揭示动画
    private var hexagramRevealingAnimation: some View {
        VStack(spacing: 24) {
            Text("卦象已成")
                .font(.title2.bold().design(.serif))
                .foregroundColor(Color(hex: "#C9A96E"))
                .transition(.scale.combined(with: .opacity))
            
            // 六爻逐个显示
            VStack(spacing: 8) {
                ForEach(0..<6, id: \.self) { index in
                    YaoLineView(
                        isYang: resultHexagram?.lines[5-index] == 7 || 
                                resultHexagram?.lines[5-index] == 9,
                        isMoving: resultHexagram?.lines[5-index] == 9 ||
                                  resultHexagram?.lines[5-index] == 6,
                        revealed: revealedYaos[index]
                    )
                    .transition(.move(edge: .bottom).combined(with: .opacity))
                }
            }
            .padding(.horizontal, 40)
            
            if showHexagram {
                Text(resultHexagram?.name ?? "")
                    .font(.title.bold().design(.serif))
                    .foregroundColor(Color(hex: "#F0D9B5"))
                    .scaleEffect(pulseScale)
                    .transition(.scale.combined(with: .opacity))
            }
        }
    }
    
    // MARK: - 完成动画
    private var completeAnimation: some View {
        VStack(spacing: 16) {
            Image(systemName: "checkmark.circle.fill")
                .font(.system(size: 48))
                .foregroundStyle(
                    LinearGradient(
                        colors: [Color(hex: "#C9A96E"), Color(hex: "#E8D5B7")],
                        startPoint: .top,
                        endPoint: .bottom
                    )
                )
            
            text("测算完成")
                .font(.headline)
                .foregroundColor(.white)
        }
        .transition(.scale.combined(with: .opacity))
    }
    
    // MARK: - 铜钱3D组件
    struct Coin3D: View {
        let rotation: Double
        
        var body: some View {
            ZStack {
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                Color(hex: "#E8D5B7"),
                                Color(hex: "#C9A96E"),
                                Color(hex: "#8B7355")
                            ],
                            center: .center,
                            startRadius: 10,
                            endRadius: 35
                        )
                    )
                    .frame(width: 56, height: 56)
                    .shadow(color: Color(hex: "#C9A96E").opacity(0.4), radius: 8)
                
                Text("乾隆通宝")
                    .font(.system(size: 9, weight: .bold, design: .serif))
                    .foregroundColor(Color(hex: "#5A4530"))
                    .rotationEffect(.degrees(180)) // 反面
            }
            .rotation3DEffect(
                .degrees(rotation),
                axis: (x: 1, y: 0, z: 0)
            )
        }
    }
    
    // MARK: - 单爻组件
    struct YaoLineView: View {
        let isYang: Bool
        let isMoving: Bool
        let revealed: Bool
        
        var body: some View {
            HStack(spacing: 6) {
                RoundedRectangle(cornerRadius: 2)
                    .fill(revealed ?
                          (isYang ? 
                           Color(hex: "#C9A96E") : 
                           Color(hex: "#7BAFE8")) :
                           Color.clear
                    )
                    .frame(width: isYang ? 50 : 22, height: 6)
                
                if !isYang && revealed {
                    RoundedRectangle(cornerRadius: 2)
                        .fill(Color(hex: "#0D1117"))
                        .frame(width: 12, height: 6)
                }
                
                Spacer()
                
                if isMoving && revealed {
                    Text("动")
                        .font(.caption2.bold())
                        .foregroundColor(.red.opacity(0.8))
                        .padding(.horizontal, 4)
                        .background(Capsule().fill(Color.red.opacity(0.15)))
                }
            }
            .frame(width: 120)
            .opacity(revealed ? 1 : 0)
        }
    }
    
    // MARK: - 动画序列
    private func startAnimationSequence() {
        // 阶段1：铜钱翻转 (3秒)
        withAnimation(.easeInOut(duration: 0.4).repeatCount(7, autoreverses: true)) {
            coinRotation = 360 * 7
        }
        
        // 2秒后开始淡出铜钱
        DispatchQueue.main.asyncAfter(deadline: .now() + 2.8) {
            withAnimation(.easeOut(duration: 0.5)) {
                coinOpacity = 0
            }
        }
        
        // 3秒后切换到揭示阶段
        DispatchQueue.main.asyncAfter(deadline: .now() + 3.2) {
            // 生成卦象结果
            resultHexagram = LiuyaoEngine.shared.generateHexagram(
                question: "",
                gender: "",
                date: Date()
            )
            
            withAnimation(.easeInOut(duration: 0.5)) {
                phase = .revealing
            }
            
            // 逐爻揭示
            revealYaosSequentially()
        }
    }
    
    private func revealYaosSequentially() {
        for i in 0..<6 {
            DispatchQueue.main.asyncAfter(deadline: .now() + Double(i) * 0.25) {
                withAnimation(.spring(response: 0.5, dampingFraction: 0.7)) {
                    revealedYaos[i] = true
                    yaoIndex = i
                }
                
                // 最后一个爻显示完后显示卦名
                if i == 5 {
                    DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
                        withAnimation(.spring(response: 0.6, dampingFraction: 0.6)) {
                            showHexagram = true
                        }
                        
                        // 脉冲效果
                        withAnimation(.easeInOut(duration: 0.8).repeatCount(2, autoreverses: true)) {
                            pulseScale = 1.08
                        }
                        
                        // 切换到完成阶段
                        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) {
                            withAnimation(.easeIn(duration: 0.4)) {
                                phase = .complete
                            }
                            
                            // 通知父视图并传递结果
                            DispatchQueue.main.asyncAfter(deadline: .now() + 0.8) {
                                if let hexagram = resultHexagram {
                                    onComplete(hexagram)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

#Preview {
    LiuyaoLoadingView(isLoading: .constant(true)) { _ in }
}
