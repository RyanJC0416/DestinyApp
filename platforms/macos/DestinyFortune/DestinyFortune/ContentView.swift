import SwiftUI

enum AppSection: String, CaseIterable, Identifiable {
    case liuyao = "六爻"
    case tarot = "塔罗"
    case jiaobei = "珓杯"

    var id: Self { self }
    var icon: String {
        switch self {
        case .liuyao: return "circle.hexagongrid.fill"
        case .tarot: return "rectangle.stack.fill"
        case .jiaobei: return "capsule.portrait.fill"
        }
    }
}

struct ContentView: View {
    @State private var selection: AppSection? = .liuyao

    var body: some View {
        NavigationSplitView {
            List(AppSection.allCases) { section in
                Button {
                    selection = section
                } label: {
                    Label(section.rawValue, systemImage: section.icon)
                        .frame(maxWidth: .infinity, alignment: .leading)
                        .padding(.vertical, 5)
                        .contentShape(Rectangle())
                }
                .buttonStyle(.plain)
                .contentShape(Rectangle())
                .listRowBackground(selection == section ? AppTheme.gold.opacity(0.16) : Color.clear)
            }
            .navigationTitle("命运占卜")
            .navigationSplitViewColumnWidth(min: 180, ideal: 210, max: 250)
        } detail: {
            ZStack {
                workspace(.liuyao) { LiuyaoWorkspaceView() }
                workspace(.tarot) { TarotWorkspaceView() }
                workspace(.jiaobei) { JiaobeiWorkspaceView() }
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .background(AppTheme.background)
            .foregroundStyle(AppTheme.textPrimary)
        }
        .tint(AppTheme.gold)
        .preferredColorScheme(.light)
    }

    private func isSelected(_ section: AppSection) -> Bool {
        (selection ?? .liuyao) == section
    }

    private func workspace<Content: View>(_ section: AppSection, @ViewBuilder content: () -> Content) -> some View {
        content()
            .opacity(isSelected(section) ? 1 : 0)
            .allowsHitTesting(isSelected(section))
            .accessibilityHidden(!isSelected(section))
    }
}

enum AppTheme {
    static let background = Color(red: 0.945, green: 0.949, blue: 0.957)
    static let panel = Color.white
    static let panelRaised = Color(red: 0.975, green: 0.978, blue: 0.984)
    static let border = Color.black.opacity(0.12)
    static let gold = Color(red: 0.54, green: 0.34, blue: 0.08)
    static let textPrimary = Color(red: 0.10, green: 0.11, blue: 0.14)
    static let textSecondary = Color(red: 0.34, green: 0.37, blue: 0.43)
}

extension View {
    func toolPanel() -> some View {
        padding(20)
            .background(AppTheme.panel)
            .overlay(RoundedRectangle(cornerRadius: 8).stroke(AppTheme.border))
            .clipShape(RoundedRectangle(cornerRadius: 8))
            .foregroundStyle(AppTheme.textPrimary)
    }
}
