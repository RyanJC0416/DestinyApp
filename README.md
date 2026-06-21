# Destiny Fortune / 命运占卜

**Destiny Fortune** is a cross-platform fortune-telling and self-reflection app built around traditional Chinese divination and classic tarot reading. It is designed for cultural entertainment, journaling, and structured reflection: ask a focused question, receive a symbolic result, and use the interpretation as a prompt for thinking more clearly.

**命运占卜** 是一款跨平台的文化娱乐与自我反思工具，融合周易六爻、Rider-Waite-Smith 塔罗与民俗珓杯请示。它适合用来整理问题、记录当下状态、获得象征性的参考与行动提示。

> Results are for cultural entertainment and personal reflection only. They are not medical, legal, financial, psychological, or professional advice.
>
> 所有结果仅供文化娱乐与自我反思，不替代医疗、法律、财务、心理咨询或其他专业建议。

## What it can do / 它能做什么

### Zhouyi Liuyao / 周易六爻

- Cast a hexagram with the traditional three-coin method.
- Generate the original hexagram and changing hexagram.
- Show upper/lower trigrams, fortune tendency, changing lines, hexagram text, Xiang commentary, and plain-language interpretation.
- Provide topic-specific guidance for career, family, health, and relationships.
- Generate a clean “copy to AI” raw reading without the app’s own interpretation.

- 使用三枚铜钱法起卦。
- 生成本卦与变卦。
- 展示上下卦、吉凶倾向、变爻过程、卦辞、《象传》与白话解释。
- 支持事业、家庭、健康、感情四类主题分析。
- 提供“复制给 AI”的原始排盘文本，方便进一步分析。

### Tarot / 塔罗占卜

- Use the full 78-card Rider-Waite-Smith deck.
- Support three-card, relationship, and Celtic Cross spreads.
- Draw non-repeating cards with upright/reversed orientation.
- Show local public-domain card images and position-based interpretations.
- Provide a summary analysis, suggestion, and copyable raw spread.

- 使用完整 78 张 Rider-Waite-Smith 经典牌组。
- 支持三牌阵、关系牌阵、凯尔特十字牌阵。
- 抽取不重复牌面，并区分正位/逆位。
- 展示本地公版牌图与各位置含义解读。
- 提供综合指引、行动建议与可复制的原始牌面。

### Jiaobei / 珓杯

- Follow a two-step folk divination flow: first confirm whether the invitee is present, then ask the specific question.
- Interpret sacred, laughing, and yin cups.
- Keep a local history of the current consultation.
- Enforce the rule that specific questions unlock only after a sacred cup confirms presence.

- 按民俗流程分两步请示：先确认请示对象是否在座，再问具体事项。
- 解读圣杯、笑杯、阴杯。
- 记录本次请示过程。
- 只有第一步得到圣杯后，才解锁具体问事。

## Platforms / 平台

- **Web**: runs in modern browsers and can also be opened directly from \`platforms/web/index.html\` for local use.
- **macOS**: native SwiftUI app for macOS 13 and later.
- **WeChat Mini Program source**: source files are included under \`platforms/miniprogram\`.

- **网页端**：支持现代浏览器，也可以直接打开 \`platforms/web/index.html\` 本地使用。
- **macOS 端**：SwiftUI 原生应用，支持 macOS 13 及以上。
- **微信小程序源码**：位于 \`platforms/miniprogram\`。

## Experience / 交互体验

Destiny Fortune includes lightweight interaction polish across the web and macOS apps:

- hover feedback for tabs, cards, options, and form controls;
- loading states for casting, shuffling, and cup throwing;
- result reveal animations;
- copy-success feedback;
- tarot card presentation effects;
- subtle business-flow animations for Liuyao, Tarot, and Jiaobei.

命运占卜在网页端和 macOS 端都加入了轻量动效：

- 页签、卡片、选项和输入控件的悬浮反馈；
- 起卦、洗牌、掷杯时的加载状态；
- 结果入场动效；
- 复制成功反馈；
- 塔罗牌展示效果；
- 六爻、塔罗、珓杯对应业务流程的完成反馈。

## Links / 链接

- [Open in browser / 在浏览器中打开](https://ryanjc0416.github.io/DestinyApp/)
- [Download macOS or Web packages / 下载 macOS 版或 Web 压缩包](https://github.com/RyanJC0416/DestinyApp/releases/latest)

## Local development / 本地开发

### Web / 网页端

Open directly:

直接打开：

\`\`\`bash
open platforms/web/index.html
\`\`\`

Or package the web app:

或打包网页端：

\`\`\`bash
sh scripts/package-web.sh build/web
\`\`\`

### macOS

Build with Xcode:

使用 Xcode 构建：

\`\`\`bash
xcodebuild \
  -project platforms/macos/DestinyFortune/DestinyFortune.xcodeproj \
  -scheme DestinyFortune \
  -configuration Debug \
  build
\`\`\`

The macOS release package is ad-hoc signed and is not notarized by Apple.

macOS Release 包使用 ad-hoc 签名，未经 Apple 公证。

## Project structure / 项目结构

\`\`\`text
shared/                 Shared data and divination engines / 共享数据与核心算法
platforms/web/          Web app / 网页端
platforms/macos/        Native macOS app / macOS 原生端
platforms/miniprogram/  WeChat Mini Program source / 微信小程序源码
assets/                 Tarot images and app assets / 塔罗图片与应用资源
tests/                  Core validation tests / 核心测试
\`\`\`

## License and third-party assets / 许可与第三方资源

Rider-Waite-Smith tarot card images are public-domain assets. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for details.

Rider-Waite-Smith 塔罗牌图使用公版资源，详情见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
