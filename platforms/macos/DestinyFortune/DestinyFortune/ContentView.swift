import SwiftUI
import AppKit

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
    @State private var transitionOffset: CGFloat = 28
    @StateObject private var updateManager = UpdateManager()

    var body: some View {
        HStack(spacing: 0) {
            VStack(spacing: 0) {
                VStack(spacing: 8) {
                    ForEach(AppSection.allCases) { section in
                        SidebarSectionButton(section: section, isSelected: isSelected(section)) {
                            let current = selection ?? .liuyao
                            guard current != section else { return }
                            let currentIndex = AppSection.allCases.firstIndex(of: current) ?? 0
                            let nextIndex = AppSection.allCases.firstIndex(of: section) ?? currentIndex
                            transitionOffset = nextIndex > currentIndex ? 34 : -34
                            withAnimation(.spring(response: 0.40, dampingFraction: 0.88)) {
                                selection = section
                            }
                        }
                    }
                }
                .padding(.horizontal, 12)
                .padding(.top, 14)

                Spacer()
                Divider()

                VStack(alignment: .leading, spacing: 8) {
                    if let statusText = updateManager.statusText {
                        VStack(alignment: .leading, spacing: 6) {
                            Text(statusText)
                                .font(.caption)
                                .foregroundStyle(AppTheme.textSecondary)
                            if let downloadProgress = updateManager.downloadProgress {
                                ProgressView(value: downloadProgress)
                                    .tint(AppTheme.gold)
                                Text("\(Int((downloadProgress * 100).rounded()))%")
                                    .font(.caption2)
                                    .foregroundStyle(AppTheme.textSecondary)
                            }
                        }
                    }

                    Button {
                        updateManager.performPrimaryUpdateAction()
                    } label: {
                        Label(updateManager.primaryButtonTitle, systemImage: "arrow.down.circle")
                            .frame(maxWidth: .infinity, alignment: .leading)
                    }
                    .buttonStyle(GoldProminentButtonStyle(isBusy: updateManager.isBusy))
                    .disabled(updateManager.isBusy)

                    Text("当前版本 \(UpdateManager.currentVersion)")
                        .font(.caption2)
                        .foregroundStyle(.secondary)
                }
                .padding(12)
            }
            .frame(width: 190)
            .background(AppTheme.panel)

            Divider()

            ZStack {
                workspace(.liuyao) { LiuyaoWorkspaceView() }
                workspace(.tarot) { TarotWorkspaceView() }
                workspace(.jiaobei) { JiaobeiWorkspaceView() }
            }
            .padding(.top, 24)
            .frame(minWidth: 860, maxWidth: .infinity, maxHeight: .infinity)
            .background(AppTheme.background)
            .foregroundStyle(AppTheme.textPrimary)
        }
        .tint(AppTheme.gold)
        .preferredColorScheme(.light)
        .alert("应用更新", isPresented: $updateManager.isPresentingMessage) {
            if updateManager.canRetry {
                Button("重试") { updateManager.retryLastFailedAction() }
                Button("打开 release 页面") { updateManager.openReleasePage() }
                Button("好", role: .cancel) {}
            } else {
                Button("好") {}
            }
        } message: {
            Text(updateManager.message)
        }
    }

    private func isSelected(_ section: AppSection) -> Bool {
        (selection ?? .liuyao) == section
    }

    private func workspace<Content: View>(_ section: AppSection, @ViewBuilder content: () -> Content) -> some View {
        content()
            .opacity(isSelected(section) ? 1 : 0)
            .offset(x: isSelected(section) ? 0 : transitionOffset)
            .scaleEffect(isSelected(section) ? 1 : 0.992)
            .blur(radius: isSelected(section) ? 0 : 1.5)
            .zIndex(isSelected(section) ? 1 : 0)
            .compositingGroup()
            .animation(.spring(response: 0.40, dampingFraction: 0.88), value: selection)
            .allowsHitTesting(isSelected(section))
            .accessibilityHidden(!isSelected(section))
    }
}

private struct SidebarSectionButton: View {
    let section: AppSection
    let isSelected: Bool
    let action: () -> Void
    @State private var isHovered = false

    var body: some View {
        Button(action: action) {
            HStack(spacing: 10) {
                Image(systemName: section.icon)
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundStyle(isSelected ? AppTheme.gold : AppTheme.textSecondary)
                    .rotationEffect(.degrees(isHovered ? -4 : 0))
                    .scaleEffect(isHovered || isSelected ? 1.06 : 1)
                Text(section.rawValue)
                    .font(.system(size: 14, weight: .semibold))
                Spacer()
            }
            .padding(.horizontal, 12)
            .padding(.vertical, 10)
            .foregroundStyle(AppTheme.textPrimary)
            .background(
                RoundedRectangle(cornerRadius: 8)
                    .fill(isSelected ? AppTheme.panel : isHovered ? AppTheme.panel.opacity(0.72) : Color.clear)
            )
            .overlay(alignment: .leading) {
                RoundedRectangle(cornerRadius: 2)
                    .fill(AppTheme.gold)
                    .frame(width: isSelected ? 4 : 0)
                    .padding(.vertical, 8)
            }
            .shadow(color: Color.black.opacity(isSelected ? 0.08 : 0), radius: 10, y: 5)
            .contentShape(RoundedRectangle(cornerRadius: 8))
        }
        .buttonStyle(.plain)
        .onHover { hovering in
            withAnimation(.easeOut(duration: 0.16)) { isHovered = hovering }
        }
    }
}

@MainActor
final class UpdateManager: ObservableObject {
    static var currentVersion: String {
        Bundle.main.object(forInfoDictionaryKey: "CFBundleShortVersionString") as? String ?? "0"
    }

    @Published var isChecking = false
    @Published var isDownloading = false
    @Published var isInstalling = false
    @Published var statusText: String?
    @Published var downloadProgress: Double?
    @Published var message = ""
    @Published var isPresentingMessage = false
    @Published var canRetry = false

    var isBusy: Bool {
        isChecking || isDownloading || isInstalling
    }

    var primaryButtonTitle: String {
        if isChecking { return "检查中…" }
        if isDownloading { return "下载中…" }
        if isInstalling { return "安装中…" }
        if pendingAsset != nil { return "立即更新" }
        return "检查更新"
    }

    private let latestReleaseURL = URL(string: "https://api.github.com/repos/RyanJC0416/DestinyApp/releases/latest")!
    private let latestReleasePageURL = URL(string: "https://github.com/RyanJC0416/DestinyApp/releases/latest")!
    private let updatesDirectory = FileManager.default.homeDirectoryForCurrentUser
        .appendingPathComponent("Library/Application Support/DestinyFortune/updates", isDirectory: true)
    private let requestTimeout: TimeInterval = 20
    private let downloadTimeout: TimeInterval = 90
    private var pendingRelease: GitHubRelease?
    private var pendingAsset: GitHubReleaseAsset?
    private var retryAction: UpdateAction?

    func performPrimaryUpdateAction() {
        guard !isBusy else { return }

        if pendingAsset != nil {
            installPendingUpdate()
        } else {
            checkForUpdates()
        }
    }

    func retryLastFailedAction() {
        let action = retryAction
        canRetry = false
        retryAction = nil
        isPresentingMessage = false

        switch action {
        case .install:
            installPendingUpdate()
        default:
            checkForUpdates()
        }
    }

    func openReleasePage() {
        NSWorkspace.shared.open(releasePageURL())
    }

    private func checkForUpdates() {
        guard !isBusy else { return }

        Task {
            await checkLatestRelease()
        }
    }

    private func checkLatestRelease() async {
        isChecking = true
        statusText = "正在检查更新…"
        downloadProgress = nil
        pendingRelease = nil
        pendingAsset = nil
        defer {
            isChecking = false
        }

        do {
            let release = try await fetchLatestRelease()
            let latestVersion = release.tagName.trimmingCharacters(in: CharacterSet(charactersIn: "vV"))

            if Self.isVersion(Self.currentVersion, newerThan: latestVersion) {
                statusText = "当前版本 \(Self.currentVersion) 高于最新版本 \(latestVersion)"
                return
            }

            guard Self.isVersion(latestVersion, newerThan: Self.currentVersion) else {
                statusText = "当前已是最新版本 \(latestVersion)"
                return
            }

            guard !Self.isAppTranslocated() else {
                showMessage("""
                当前 app 正在 macOS 隔离/转移位置运行，无法原地更新。

                请先把 DestinyFortune.app 移到 /Applications 后重新打开，再检查更新。
                """)
                return
            }

            guard let asset = release.assets.first(where: { asset in
                let name = asset.name.lowercased()
                return name.contains("macos") && name.hasSuffix(".zip")
            }) else {
                showFailure(UpdateError.appBundleMissing, retryAction: .check)
                return
            }

            pendingRelease = release
            pendingAsset = asset
            statusText = "发现新版本 \(latestVersion)"
        } catch {
            statusText = "检查更新失败"
            showFailure(error, retryAction: .check)
        }
    }

    private func installPendingUpdate() {
        guard !isBusy else { return }

        guard let asset = pendingAsset else {
            checkForUpdates()
            return
        }

        Task {
            await installLatestRelease(asset: asset)
        }
    }

    private func installLatestRelease(asset: GitHubReleaseAsset) async {
        isDownloading = true
        downloadProgress = 0
        statusText = "正在下载更新 \(pendingRelease?.tagName ?? "")"

        do {
            try await downloadAndInstall(assetURL: asset.browserDownloadURL)
        } catch {
            isDownloading = false
            isInstalling = false
            downloadProgress = nil
            statusText = "更新失败"
            showFailure(error, retryAction: .install)
        }
    }

    private func fetchLatestRelease() async throws -> GitHubRelease {
        var lastError: Error?

        for attempt in 0..<2 {
            do {
                return try await fetchLatestReleaseFromAPI()
            } catch {
                lastError = error
                guard Self.shouldRetryReleaseLookup(error), attempt == 0 else { break }
                try? await Task.sleep(nanoseconds: 700_000_000)
            }
        }

        do {
            return try await fetchLatestReleaseFromRedirectPage()
        } catch {
            throw lastError ?? error
        }
    }

    private func fetchLatestReleaseFromAPI() async throws -> GitHubRelease {
        var request = URLRequest(url: latestReleaseURL, timeoutInterval: requestTimeout)
        request.setValue("application/vnd.github+json", forHTTPHeaderField: "Accept")
        request.setValue("DestinyFortune", forHTTPHeaderField: "User-Agent")

        let (data, response) = try await URLSession.shared.data(for: request)
        try validateHTTPResponse(response, context: "读取最新 release")

        do {
            return try JSONDecoder().decode(GitHubRelease.self, from: data)
        } catch {
            throw UpdateError.releaseLookupFailed
        }
    }

    private func fetchLatestReleaseFromRedirectPage() async throws -> GitHubRelease {
        var request = URLRequest(url: latestReleasePageURL, timeoutInterval: requestTimeout)
        request.setValue("DestinyFortune", forHTTPHeaderField: "User-Agent")

        let (_, response) = try await URLSession.shared.data(for: request)
        guard let finalURL = response.url,
              let tag = Self.releaseTag(from: finalURL) else {
            throw UpdateError.releaseLookupFailed
        }

        let assetURL = URL(string: "https://github.com/RyanJC0416/DestinyApp/releases/download/\(tag)/DestinyFortune-\(tag)-macOS.zip")!
        return GitHubRelease(
            tagName: tag,
            assets: [
                GitHubReleaseAsset(
                    name: "DestinyFortune-\(tag)-macOS.zip",
                    browserDownloadURL: assetURL
                )
            ]
        )
    }

    private func downloadAndInstall(assetURL: URL) async throws {
        let fileManager = FileManager.default
        let tempDirectory = updatesDirectory
            .appendingPathComponent("DestinyFortuneUpdate-\(UUID().uuidString)", isDirectory: true)
        let archiveURL = tempDirectory.appendingPathComponent("DestinyFortune-macOS.zip")
        let extractURL = tempDirectory.appendingPathComponent("extracted", isDirectory: true)
        var shouldCleanUp = true
        defer {
            if shouldCleanUp {
                try? fileManager.removeItem(at: tempDirectory)
            }
        }

        try fileManager.createDirectory(at: updatesDirectory, withIntermediateDirectories: true)
        try fileManager.createDirectory(at: tempDirectory, withIntermediateDirectories: true)
        try fileManager.createDirectory(at: extractURL, withIntermediateDirectories: true)

        var request = URLRequest(url: assetURL, timeoutInterval: downloadTimeout)
        request.setValue("DestinyFortune", forHTTPHeaderField: "User-Agent")
        let (downloadedURL, response) = try await downloadWithProgress(request)
        try validateHTTPResponse(response, context: "下载更新包")
        if fileManager.fileExists(atPath: archiveURL.path) {
            try fileManager.removeItem(at: archiveURL)
        }
        try fileManager.moveItem(at: downloadedURL, to: archiveURL)
        downloadProgress = 1
        isDownloading = false
        isInstalling = true
        statusText = "正在安装更新…"

        try run("/usr/bin/unzip", arguments: ["-q", archiveURL.path, "-d", extractURL.path], timeout: 30)

        let newAppURL = extractURL.appendingPathComponent("DestinyFortune.app", isDirectory: true)
        guard fileManager.fileExists(atPath: newAppURL.path) else {
            throw UpdateError.appBundleMissing
        }

        try launchInstallerScript(newAppURL: newAppURL, tempDirectory: tempDirectory)
        shouldCleanUp = false
        NSApp.terminate(nil)
    }

    private func downloadWithProgress(_ request: URLRequest) async throws -> (URL, URLResponse) {
        let downloader = UpdateDownloadDelegate { [weak self] progress in
            Task { @MainActor in
                self?.downloadProgress = progress
            }
        }

        return try await downloader.download(request)
    }

    private func validateHTTPResponse(_ response: URLResponse, context: String) throws {
        guard let httpResponse = response as? HTTPURLResponse else { return }
        guard (200..<300).contains(httpResponse.statusCode) else {
            throw UpdateError.httpRequestFailed(context, httpResponse.statusCode)
        }
    }

    private func run(_ executablePath: String, arguments: [String], timeout: TimeInterval = 30) throws {
        let process = Process()
        process.executableURL = URL(fileURLWithPath: executablePath)
        process.arguments = arguments
        let errorPipe = Pipe()
        process.standardError = errorPipe
        try process.run()
        let deadline = Date().addingTimeInterval(timeout)
        while process.isRunning && Date() < deadline {
            Thread.sleep(forTimeInterval: 0.05)
        }

        if process.isRunning {
            process.terminate()
            throw UpdateError.commandTimedOut(executablePath)
        }

        guard process.terminationStatus == 0 else {
            let errorData = errorPipe.fileHandleForReading.readDataToEndOfFile()
            let errorText = String(data: errorData, encoding: .utf8)?
                .trimmingCharacters(in: .whitespacesAndNewlines)
            throw UpdateError.commandFailed(executablePath, errorText)
        }
    }

    private func launchInstallerScript(newAppURL: URL, tempDirectory: URL) throws {
        let currentAppPath = Bundle.main.bundleURL.path
        let currentAppDirectory = (currentAppPath as NSString).deletingLastPathComponent
        let logPath = updatesDirectory.appendingPathComponent("install.log").path
        let scriptURL = tempDirectory.appendingPathComponent("install-update.zsh")
        let pid = ProcessInfo.processInfo.processIdentifier
        let script = """
        #!/bin/zsh
        set -e

        LOG=\(Self.shellQuote(logPath))
        exec > "$LOG" 2>&1
        echo "[$(date)] DestinyFortune updater started"

        APP_PATH=\(Self.shellQuote(currentAppPath))
        APP_DIR=\(Self.shellQuote(currentAppDirectory))
        NEW_APP=\(Self.shellQuote(newAppURL.path))
        TEMP_DIR=\(Self.shellQuote(tempDirectory.path))
        APP_PID=\(pid)

        while kill -0 "$APP_PID" 2>/dev/null; do
            sleep 0.2
        done

        rm -rf "$APP_PATH.old"

        if ! mv "$APP_PATH" "$APP_PATH.old"; then
            echo "ERROR: failed to move current app out of the way"
            exit 1
        fi

        if ! cp -R "$NEW_APP" "$APP_DIR/"; then
            echo "ERROR: failed to copy new app"
            mv "$APP_PATH.old" "$APP_PATH" || true
            exit 1
        fi

        xattr -dr com.apple.quarantine "$APP_PATH" 2>/dev/null || true
        if ! open "$APP_PATH"; then
            echo "ERROR: failed to open updated app"
            exit 1
        fi

        rm -rf "$APP_PATH.old" || true
        rm -rf "$TEMP_DIR"
        rm -f "$0"
        echo "[$(date)] DestinyFortune updater finished"
        """

        try script.write(to: scriptURL, atomically: true, encoding: .utf8)
        try FileManager.default.setAttributes([.posixPermissions: 0o755], ofItemAtPath: scriptURL.path)

        let process = Process()
        process.executableURL = URL(fileURLWithPath: "/bin/zsh")
        process.arguments = [scriptURL.path]
        try process.run()
    }

    private func showMessage(_ text: String) {
        canRetry = false
        retryAction = nil
        message = text
        isPresentingMessage = true
    }

    private func showFailure(_ error: Error, retryAction: UpdateAction) {
        self.retryAction = retryAction
        canRetry = true
        message = """
        更新失败，请重试或手动下载更新。

        \(error.localizedDescription)
        """
        isPresentingMessage = true
    }

    private func releasePageURL() -> URL {
        if let tag = pendingRelease?.tagName {
            return URL(string: "https://github.com/RyanJC0416/DestinyApp/releases/tag/\(tag)")!
        }

        return latestReleasePageURL
    }

    private static func isVersion(_ lhs: String, newerThan rhs: String) -> Bool {
        let left = lhs.split(separator: ".").map { Int($0) ?? 0 }
        let right = rhs.split(separator: ".").map { Int($0) ?? 0 }
        let count = max(left.count, right.count)

        for index in 0..<count {
            let leftPart = index < left.count ? left[index] : 0
            let rightPart = index < right.count ? right[index] : 0
            if leftPart != rightPart {
                return leftPart > rightPart
            }
        }

        return false
    }

    private static func shouldRetryReleaseLookup(_ error: Error) -> Bool {
        if case UpdateError.httpRequestFailed(_, let statusCode) = error {
            return statusCode >= 500
        }

        if case UpdateError.releaseLookupFailed = error {
            return true
        }

        let urlError = error as? URLError
        return urlError?.code == .timedOut || urlError?.code == .cannotConnectToHost || urlError?.code == .networkConnectionLost
    }

    private static func releaseTag(from url: URL) -> String? {
        guard let range = url.path.range(of: "/releases/tag/") else {
            return nil
        }

        let tag = String(url.path[range.upperBound...])
            .split(separator: "/")
            .first
            .map(String.init)

        return tag?.isEmpty == false ? tag : nil
    }

    private static func shellQuote(_ value: String) -> String {
        "'\(value.replacingOccurrences(of: "'", with: "'\\''"))'"
    }

    private static func isAppTranslocated() -> Bool {
        let appPath = Bundle.main.bundleURL.path
        return appPath.contains("/AppTranslocation/")
            || (appPath.contains("/private/var/folders/") && appPath.contains("/T/"))
    }
}

private enum UpdateAction {
    case check
    case install
}

private final class UpdateDownloadDelegate: NSObject, URLSessionDownloadDelegate {
    private let progressHandler: (Double) -> Void
    private var continuation: CheckedContinuation<(URL, URLResponse), Error>?
    private var session: URLSession?
    private let lock = NSLock()

    init(progressHandler: @escaping (Double) -> Void) {
        self.progressHandler = progressHandler
    }

    func download(_ request: URLRequest) async throws -> (URL, URLResponse) {
        let queue = OperationQueue()
        queue.maxConcurrentOperationCount = 1

        return try await withCheckedThrowingContinuation { continuation in
            self.continuation = continuation
            let session = URLSession(configuration: .default, delegate: self, delegateQueue: queue)
            self.session = session
            session.downloadTask(with: request).resume()
        }
    }

    func urlSession(
        _ session: URLSession,
        downloadTask: URLSessionDownloadTask,
        didWriteData bytesWritten: Int64,
        totalBytesWritten: Int64,
        totalBytesExpectedToWrite: Int64
    ) {
        guard totalBytesExpectedToWrite > 0 else { return }
        let progress = min(max(Double(totalBytesWritten) / Double(totalBytesExpectedToWrite), 0), 1)
        progressHandler(progress)
    }

    func urlSession(
        _ session: URLSession,
        downloadTask: URLSessionDownloadTask,
        didFinishDownloadingTo location: URL
    ) {
        guard let response = downloadTask.response else {
            finish(.failure(UpdateError.releaseLookupFailed))
            return
        }

        let tempURL = FileManager.default.temporaryDirectory
            .appendingPathComponent("DestinyFortuneDownload-\(UUID().uuidString).zip")

        do {
            if FileManager.default.fileExists(atPath: tempURL.path) {
                try FileManager.default.removeItem(at: tempURL)
            }
            try FileManager.default.moveItem(at: location, to: tempURL)
            finish(.success((tempURL, response)))
        } catch {
            finish(.failure(error))
        }
    }

    func urlSession(
        _ session: URLSession,
        task: URLSessionTask,
        didCompleteWithError error: Error?
    ) {
        if let error {
            finish(.failure(error))
        }
    }

    private func finish(_ result: Result<(URL, URLResponse), Error>) {
        lock.lock()
        let continuation = self.continuation
        self.continuation = nil
        let session = self.session
        self.session = nil
        lock.unlock()

        guard let continuation else { return }
        session?.finishTasksAndInvalidate()

        switch result {
        case .success(let value):
            continuation.resume(returning: value)
        case .failure(let error):
            continuation.resume(throwing: error)
        }
    }
}

private struct GitHubRelease: Decodable {
    let tagName: String
    let assets: [GitHubReleaseAsset]

    enum CodingKeys: String, CodingKey {
        case tagName = "tag_name"
        case assets
    }
}

private struct GitHubReleaseAsset: Decodable {
    let name: String
    let browserDownloadURL: URL

    enum CodingKeys: String, CodingKey {
        case name
        case browserDownloadURL = "browser_download_url"
    }
}

private enum UpdateError: LocalizedError {
    case releaseLookupFailed
    case appBundleMissing
    case commandFailed(String, String?)
    case commandTimedOut(String)
    case httpRequestFailed(String, Int)

    var errorDescription: String? {
        switch self {
        case .releaseLookupFailed:
            return "无法读取最新 release。"
        case .appBundleMissing:
            return "更新包里没有找到 DestinyFortune.app。"
        case .commandFailed(let command, let detail):
            if let detail, !detail.isEmpty {
                return "\(command) 执行失败：\(detail)"
            }
            return "\(command) 执行失败。"
        case .commandTimedOut(let command):
            return "\(command) 执行超时，请稍后重试。"
        case .httpRequestFailed(let context, let statusCode):
            return "\(context)失败：HTTP \(statusCode)。"
        }
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
        modifier(ToolPanelModifier())
    }

    func interactiveField(cornerRadius: CGFloat = 6) -> some View {
        modifier(InteractiveFieldModifier(cornerRadius: cornerRadius))
    }

    func resultReveal<ID: Equatable>(_ id: ID) -> some View {
        self
            .transition(.asymmetric(
                insertion: .opacity.combined(with: .move(edge: .bottom)).combined(with: .scale(scale: 0.985)),
                removal: .opacity
            ))
            .animation(.spring(response: 0.42, dampingFraction: 0.86), value: id)
    }
}

private struct ToolPanelModifier: ViewModifier {
    @State private var isHovered = false

    func body(content: Content) -> some View {
        content
            .padding(20)
            .background(AppTheme.panel)
            .overlay(RoundedRectangle(cornerRadius: 8).stroke(isHovered ? AppTheme.gold.opacity(0.28) : AppTheme.border))
            .clipShape(RoundedRectangle(cornerRadius: 8))
            .shadow(color: Color.black.opacity(isHovered ? 0.08 : 0.035), radius: isHovered ? 18 : 10, y: isHovered ? 8 : 3)
            .scaleEffect(isHovered ? 1.006 : 1)
            .foregroundStyle(AppTheme.textPrimary)
            .animation(.easeOut(duration: 0.18), value: isHovered)
            .onHover { isHovered = $0 }
    }
}

private struct InteractiveFieldModifier: ViewModifier {
    let cornerRadius: CGFloat
    @State private var isHovered = false

    func body(content: Content) -> some View {
        content
            .background(isHovered ? Color.white.opacity(0.82) : AppTheme.panelRaised)
            .overlay(RoundedRectangle(cornerRadius: cornerRadius).stroke(isHovered ? AppTheme.gold.opacity(0.36) : AppTheme.border))
            .clipShape(RoundedRectangle(cornerRadius: cornerRadius))
            .shadow(color: AppTheme.gold.opacity(isHovered ? 0.08 : 0), radius: 10, y: 4)
            .animation(.easeOut(duration: 0.16), value: isHovered)
            .onHover { isHovered = $0 }
    }
}

struct GoldProminentButtonStyle: ButtonStyle {
    var isBusy = false
    var isSuccess = false

    func makeBody(configuration: Configuration) -> some View {
        GoldProminentButton(configuration: configuration, isBusy: isBusy, isSuccess: isSuccess)
    }
}

private struct GoldProminentButton: View {
    let configuration: ButtonStyle.Configuration
    let isBusy: Bool
    let isSuccess: Bool
    @Environment(\.isEnabled) private var isEnabled
    @State private var isHovered = false

    var body: some View {
        configuration.label
            .font(.system(size: 13, weight: .semibold))
            .padding(.vertical, 8)
            .padding(.horizontal, 12)
            .foregroundStyle(.white)
            .background(
                RoundedRectangle(cornerRadius: 8)
                    .fill(isSuccess ? Color.green : AppTheme.gold)
            )
            .overlay {
                if isBusy {
                    RoundedRectangle(cornerRadius: 8)
                        .stroke(Color.white.opacity(0.45), lineWidth: 1.5)
                        .scaleEffect(isHovered ? 1.02 : 1)
                        .opacity(isHovered ? 0.9 : 0.55)
                }
            }
            .shadow(color: AppTheme.gold.opacity(isHovered && isEnabled ? 0.18 : 0.10), radius: isHovered && isEnabled ? 12 : 7, y: isHovered && isEnabled ? 6 : 3)
            .scaleEffect(configuration.isPressed ? 0.985 : isHovered && isEnabled ? 1.01 : 1)
            .opacity(isEnabled ? 1 : 0.45)
            .animation(.easeOut(duration: 0.16), value: isHovered)
            .animation(.easeOut(duration: 0.12), value: configuration.isPressed)
            .animation(.easeOut(duration: 0.2), value: isSuccess)
            .onHover { isHovered = $0 }
    }
}
