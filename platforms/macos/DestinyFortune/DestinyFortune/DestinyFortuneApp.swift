//
//  DestinyFortuneApp.swift
//  命运占卜 - Destiny Fortune
//
//  Created by PM Agent on 2026/4/16.
//

import SwiftUI

@main
struct DestinyFortuneApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .frame(minWidth: 1120, minHeight: 680)
        }
        .defaultSize(width: 1180, height: 760)
        .windowResizability(.contentMinSize)
    }
}
