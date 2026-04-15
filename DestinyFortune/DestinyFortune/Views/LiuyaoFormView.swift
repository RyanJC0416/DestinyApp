//
//  LiuyaoFormView.swift
//  六爻测算 - 输入表单页面
//

import SwiftUI

struct LiuyaoFormView: View {
    @State private var question: String = ""
    @State private var selectedGender: String = ""
    @State private var selectedDate = Date()
    @State private var showDatePicker = false
    @State private var isLoading = false
    @State private var showResult = false
    @State private var resultHexagram: Hexagram?
    
    let genders = ["男", "女"]
    
    var body: some View {
        ZStack {
            ScrollView {
                VStack(spacing: 24) {
                    // 标题区
                    formHeader
                        .padding(.top, 30)
                    
                    // 问题输入
                    questionInput
                        .padding(.horizontal, 20)
                    
                    // 性别选择
                    genderPicker
                        .padding(.horizontal, 20)
                    
                    // 日期选择
                    dateSelector
                        .padding(.horizontal, 20)
                    
                    // 提交按钮
                    submitButton
                        .padding(.horizontal, 20)
                        .padding(.bottom, 40)
                }
            }
            .background(Color(hex: "#0A0A0F").ignoresSafeArea())
            
            // Loading 覆盖层
            if isLoading {
                LiuyaoLoadingView(isLoading: $isLoading, onComplete: { hexagram in
                    resultHexagram = hexagram
                    withAnimation(.easeInOut(duration: 0.5)) {
                        isLoading = false
                        showResult = true
                    }
                })
            }
            
            // 结果覆盖层
            if showResult, let hexagram = resultHexagram {
                LiuyaoResultView(hexagram: hexagram, question: question, gender: selectedGender, date: selectedDate) {
                    showResult = false
                }
            }
        }
        .navigationBarHidden(true)
    }
    
    // MARK: - 表单头部
    private var formHeader: some View {
        VStack(spacing: 8) {
            HStack {
                Text("周易六爻")
                    .font(.title.bold())
                    .foregroundColor(.white)
                Spacer()
                Image(systemName: "questionmark.circle")
                    .foregroundColor(Color(hex: "#5A5A6E"))
            }
            
            Text("诚心默念您的问题，铜钱将为您揭示答案")
                .font(.subheadline)
                .foregroundColor(Color(hex: "#6B6B80"))
                .multilineTextAlignment(.leading)
        }
        .padding(.horizontal, 24)
    }
    
    // MARK: - 问题输入
    private var questionInput: some View {
        VStack(alignment: .leading, spacing: 8) {
            Label("您的问题", systemImage: "text.bubble")
                .font(.caption.bold())
                .foregroundColor(Color(hex: "#8B8B9E"))
            
            TextField("请输入您想咨询的问题...", text: $question)
                .font(.body)
                .foregroundColor(.white)
                .padding(16)
                .background(
                    RoundedRectangle(cornerRadius: 12)
                        .fill(Color(hex: "#151520"))
                        .overlay(
                            RoundedRectangle(cornerRadius: 12)
                                .stroke(Color(hex: "#2A2A3E"), lineWidth: 1)
                        )
                )
                .submitLabel(.done)
        }
    }
    
    // MARK: - 性别选择
    private var genderPicker: some View {
        VStack(alignment: .leading, spacing: 10) {
            Label("您的性别", systemImage: "person")
                .font(.caption.bold())
                .foregroundColor(Color(hex: "#8B8B9E"))
            
            HStack(spacing: 12) {
                ForEach(genders, id: \.self) { gender in
                    Button(action: { selectedGender = gender }) {
                        HStack(spacing: 6) {
                            Image(systemName: selectedGender == gender ? "checkmark.circle.fill" : "circle")
                                .foregroundColor(selectedGender == gender ? Color(hex: "#C9A96E") : Color(hex: "#4A4A5E"))
                            Text(gender)
                                .font(.subheadline)
                                .foregroundColor(selectedGender == gender ? .white : Color(hex: "#6B6B80"))
                        }
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 12)
                        .background(
                            RoundedRectangle(cornerRadius: 10)
                                .fill(selectedGender == gender ? Color(hex: "#C9A96E").opacity(0.15) : Color.clear)
                                .overlay(
                                    RoundedRectangle(cornerRadius: 10)
                                        .stroke(selectedGender == gender ? Color(hex: "#C9A96E").opacity(0.4) : Color(hex: "#2A2A3E"), lineWidth: 1)
                                )
                        )
                    }
                }
            }
        }
    }
    
    // MARK: - 日期选择
    private var dateSelector: some View {
        VStack(alignment: .leading, spacing: 10) {
            Label("测算日期", systemImage: "calendar")
                .font(.caption.bold())
                .foregroundColor(Color(hex: "#8B8B9E"))
            
            Button(action: { showDatePicker.toggle() }) {
                HStack {
                    Text(formatDate(selectedDate))
                        .foregroundColor(.white)
                    Spacer()
                    Image(systemName: showDatePicker ? "chevron.up" : "chevron.down")
                        .foregroundColor(Color(hex: "#6B6B80"))
                }
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
            
            if showDatePicker {
                DatePicker("", selection: $selectedDate, displayedComponents: .date)
                    .datePickerStyle(.graphical)
                    .colorScheme(.dark)
                    .tint(Color(hex: "#C9A96E"))
                    .labelsHidden()
                    .padding(12)
                    .background(
                        RoundedRectangle(cornerRadius: 12)
                            .fill(Color(hex: "#151520"))
                            .overlay(
                                RoundedRectangle(cornerRadius: 12)
                                    .stroke(Color(hex: "#2A2A3E"), lineWidth: 1)
                            )
                    )
                    .transition(.move(edge: .top).combined(with: .opacity))
            }
        }
    }
    
    // MARK: - 提交按钮
    private var submitButton: some View {
        Button(action: startDivination) {
            HStack(spacing: 10) {
                if !question.isEmpty && !selectedGender.isEmpty {
                    Text("🪙 起卦测算")
                        .font(.headline)
                } else {
                    Text("请填写完整信息")
                        .font(.headline)
                }
                
                Image(systemName: "arrow.right")
                    .font(.caption.bold())
            }
            .foregroundColor(question.isEmpty || selectedGender.isEmpty ? Color(hex: "#4A4A5E") : Color(hex: "#0D0814"))
            .frame(maxWidth: .infinity)
            .padding(.vertical, 16)
            .background(
                RoundedRectangle(cornerRadius: 14)
                    .fill(question.isEmpty || selectedGender.isEmpty ? 
                          Color(hex: "#1A1A28") :
                          LinearGradient(
                              colors: [Color(hex: "#C9A96E"), Color(hex: "#A88B5E")],
                              startPoint: .leading,
                              endPoint: .trailing
                          ))
                    .shadow(color: (question.isEmpty || selectedGender.isEmpty ? .clear : Color(hex: "#C9A96E")).opacity(0.2), radius: 12, y: 4)
            )
        }
        .disabled(question.isEmpty || selectedGender.isEmpty)
        .animation(.easeInOut(duration: 0.2), value: question.isEmpty || selectedGender.isEmpty)
    }
    
    // MARK: - Actions
    private func startDivination() {
        guard !question.isEmpty && !selectedGender.isEmpty else { return }
        
        withAnimation(.easeIn(duration: 0.3)) {
            isLoading = true
        }
    }
    
    private func formatDate(_ date: Date) -> String {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy年M月d日"
        formatter.locale = Locale(identifier: "zh_CN")
        return formatter.string(from: date)
    }
}

#Preview {
    NavigationView {
        LiuyaoFormView()
    }
}
