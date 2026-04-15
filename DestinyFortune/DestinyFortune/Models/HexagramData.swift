//
//  HexagramData.swift
//  六十四卦完整数据
//

import Foundation

/// 64卦完整数据库
enum HexagramData {
    
    /// 所有卦象数据
    static let allHexagrams: [Hexagram] = [
        // MARK: - 乾宫（金）
        hexagram_乾,
        hexagram_姤,
        hexagram_遁,
        hexagram_否,
        hexagram_观,
        hexagram_剥,
        hexagram_晋,
        hexagram_大有,
        
        // MARK: - 坎宫（水）
        hexagram_坎,
        hexagram_节,
        hexagram_屯,
        hexagram_既济,
        hexagram_革,
        hexagram_丰,
        hexagram_明夷,
        hexagram_师,
        
        // MARK: - 艮宫（土）
        hexagram_艮,
        hexagram_贲,
        hexagram_大畜,
        hexagram_损,
        hexagram_睽,
        hexagram_履,
        hexagram_中孚,
        hexagram_渐,
        
        // MARK: - 震宫（木）
        hexagram_震,
        hexagram_随,
        hexagram_无妄,
        hexagram_噬嗑,
        hexagram_颐,
        hexagram_屯2,
        hexagram_复,
        hexagram_益,
        
        // MARK: - 巽宫（木）
        hexagram_巽,
        hexagram_小畜,
        hexagram_家人,
        hexagram_益2,
        hexagram_无妄2,
        hexagram_噬嗑2,
        hexagram_颐2,
        hexagram_蛊,
        
        // MARK: - 离宫（火）
        hexagram_离,
        hexagram_旅,
        hexagram_鼎,
        hexagram_未济,
        hexagram_蒙,
        hexagram_涣,
        hexagram_讼,
        hexagram_同人,
        
        // MARK: - 坤宫（土）
        hexagram_坤,
        hexagram_复2,
        hexagram_临,
        hexagram_泰,
        hexagram_大壮,
        hexagram_夬,
        hexagram_需,
        hexagram_比,
        
        // MARK: - 兑宫（金）
        hexagram_兑,
        hexagram_困,
        hexagram_萃,
        hexagram_咸,
        hexagram蹇,
        hexagram_谦,
        hexagram_小过,
        hexagram_归妹,
    ]
    
    static let hexagram_乾 = Hexagram(
        name: "乾为天",
        symbol: "䷀",
        upper: "乾(天)",
        lower: "乾(天)",
        palace: "乾宫",
        element: "金",
        judge: "大吉",
        lines: [9,7,9,7,9,7],
        guaCi: "元亨利贞。",
        meaning: "天行健，君子以自强不息。此卦象征刚健中正，阳气充沛。得此卦者，正处上升之势，诸事皆宜积极进取，勇往直前。",
        allusion: "《易经》首卦，象征天道运行不息，代表至纯至阳之象。",
        poem: "飞龙在天利见大人\n潜龙勿用待时机\n亢龙有悔知进退\n见龙在田德施普",
        poemMeaning: "运势亨通之时，当把握良机；蛰伏之时，宜养精蓄锐。进退有度，方能长久。",
        qianDetail: "【事业】大展宏图之象，宜积极进取。\n【财运】财源广进，但需稳健经营。\n【感情】两情相悦，坦诚相待为宜。\n【健康】注意劳逸结合。",
        qianYiJi: "<b>宜：</b>开创、决策、签约、出行<br><b>忌：</b>冒进、急躁、独断专行",
        yaos: [
            YaoInfo(type: 9, title: "初九·潜龙勿用", original: "潜龙勿用。", allusion: "龙潜伏于渊，尚未可动。", interpretation: "时机未到，宜韬光养晦，积蓄力量。"),
            YaoInfo(type: 7, title: "九二·见龙在田", original: "见龙在田，利见大人。", allusion: "龙现于田野，可见贵人。", interpretation: "初露锋芒，宜寻求贵人提携。"),
            YaoInfo(type: 9, title: "九三·君子终日乾乾", original: "君子终日乾乾，夕惕若厉，无咎。", allusion: "勤勉不懈，日夜警惕。", interpretation: "勤奋努力，谨慎行事可保无虞。"),
            YaoInfo(type: 7, title: "九四·或跃在渊", original: "或跃在渊，无咎。", allusion: "或腾跃而起，或在深渊。", interpretation: "进退皆可，审时度势而定。"),
            YaoInfo(type: 9, title: "九五·飞龙在天", original: "飞龙在天，利见大人。", allusion: "龙飞于天际，大展宏图。", interpretation: "大展宏图之时，宜把握机遇。"),
            YaoInfo(type: 7, title: "上九·亢龙有悔", original: "亢龙有悔。", allusion: "龙高亢过度必有悔恨。", interpretation: "物极必反，适可而止方为上策。")
        ],
        advice: Advice(
            career: "正值上升期，宜大胆开拓新领域。近期有贵人相助，可争取重要项目。",
            love: "单身者桃花运旺盛，有望遇到心仪对象；有伴侣者感情稳定升温。",
            wealth: "财运亨通，投资理财有获利机会。但不宜贪婪，见好就收为佳。",
            warning: "切忌骄傲自满，得意忘形。凡事留有余地，不可走极端。"
        ),
        bianGua: BianGuaInfo(
            name: "天风姤",
            symbol: "䷫",
            upper: "乾(天)",
            lower: "巽(风)",
            palace: "乾宫",
            element: "金",
            judge: "平",
            nature: "由盛转衰之兆",
            trend: "阳气渐消，阴气渐长",
            meaning: "变卦为姤，阴阳相遇之象。事态将发生变化，需灵活应对。",
            advice: "从进取转为守成，以静制动。"
        )
    )
    
    static let hexagram_姤 = Hexagram(
        name: "天风姤",
        symbol: "䷫",
        upper: "乾(天)",
        lower: "巽(风)",
        palace: "乾宫",
        element: "金",
        judge: "吉",
        lines: [9,7,8,8,9,7],
        guaCi: "女壮，勿用取女。",
        meaning: "阴遇阳之象。此卦表示不期而遇之事，需谨慎应对。",
        allusion: "一阴遇五阳，女子强壮不宜娶。",
        poem: "枯木逢春再发芽\n意外之喜从天降\n谨防小人暗中算\n守正不移保安康",
        poemMeaning: "机遇与风险并存，需明辨是非，坚守正道。",
        qianDetail: "【事业】可能有意外机遇，需仔细甄别。<br>【财运】有小财可得，不宜冒险。<br>【感情】注意感情中的诱惑与陷阱。<br>【健康】防微杜渐。",
        qianYiJi: "<b>宜：</b>审慎、观察、等待<br><b>忌：</b>轻信、冒进、贪图便宜",
        yaos: [
            YaoInfo(type: 9, title: "初六·系于金柅", original: "系于金柅，贞吉。", allusion: "系住金属车闸。", interpretation: "及时制止不良苗头，可获吉祥。"),
            YaoInfo(type: 7, title: "九二·包有鱼", original: "包有鱼，无咎，不利宾。", allusion: "厨房中有鱼。", interpretation: "有所收获但不便分享他人。"),
            YaoInfo(type: 8, title: "九三·臀无肤", original: "臀无肤，其行次且。", allusion: "臀部无皮肉行走困难。", interpretation: "处境艰难，行动不便，需耐心。"),
            YaoInfo(type: 8, title: "九四·包无鱼", original: "包无鱼，起凶。", allusion: "厨房中没有鱼。", interpretation: "期望落空，需调整心态。"),
            YaoInfo(type: 9, title: "九五·以杞包瓜", original: "以杞包瓜，含章，有陨自天。", allusion: "用柳叶包瓜。", interpretation: "内藏才华，终将被人发现。"),
            YaoInfo(type: 7, title: "上九·姤其角", original: "姤其角，吝，无咎。", allusion: "遇见了角。", interpretation: "遭遇困难但有惊无险。")
        ],
        advice: Advice(
            career: "工作中可能出现意外情况，保持冷静应对。",
            love: "感情中需防范第三者干扰，珍惜眼前人。",
           财富: "小财可进，大财暂缓，保守理财为宜。",
            warning: "小心突如其来的变化，不要被表象迷惑。"
        ),
        bianGua: BianGuaInfo(
            name: "天山遁",
            symbol: "䷠",
            upper: "乾(天)",
            lower: "艮(山)",
            palace: "乾宫",
            element: "金",
            judge: "吉",
            nature: "退避保全之象",
            trend: "宜退不宜进",
            meaning: "变卦为遁，时势不利宜退避。",
            advice: "暂时退让，保存实力。"
        )
    )
    
    static let hexagram_遁 = Hexagram(
        name: "天山遁",
        symbol: "䷠",
        upper: "乾(天)",
        lower: "艮(山)",
        palace: "乾宫",
        element: "金",
        judge: "小吉",
        lines: [9,7,7,8,8,7],
        guaCi: "亨，小利贞。",
        meaning: "退隐避世之象。当前形势不利于进取，宜退守自保，等待时机。",
        allusion: "君子远小人，退而修身。",
        poem: "明哲保身待良机\n退一步海阔天空\n韬光养晦蓄力量\n来日方长显锋芒",
        poemMeaning: "适时退让不是软弱，而是智慧的体现。积蓄力量以待来日。",
        qianDetail: "【事业】不宜强求，退一步思考策略。<br>【财运】守住已有资产，不做冒险投资。<br>【感情】给对方空间，距离产生美。<br>【健康】注意休息，调养身心。",
        qianYiJi: "<b>宜：</b>退让、反思、学习、养生<br><b>忌：</b>强行推进、争斗、冒险",
        yaos: [
            YaoInfo(type: 9, title: "初六·遁尾厉", original: "遁尾，厉，勿用有攸往。", allusion: "最后才逃，危险。", interpretation: "行动太迟，已陷入困境。"),
            YaoInfo(type: 7, title: "六二·执之用黄牛之革", original: "执之用黄牛之革，莫之胜说。", allusion: "用黄牛皮绳绑住。", interpretation: "坚定意志，不为外力所动摇。"),
            YaoInfo(type: 7, title: "九三·系遁有疾", original: "系遁，有疾，厉。畜臣妾，吉。", allusion: "犹豫不决会有麻烦。", interpretation: "当断不断反受其乱，应果断决择。"),
            YaoInfo(type: 8, title: "九四·好遁君子", original: "好遁，君子吉，小人否。", allusion: "主动退避是明智之举。", interpretation: "主动退让体现智慧，小人做不到这一点。"),
            YaoInfo(type: 8, title: "九五·嘉遁贞吉", original: "嘉遁，贞吉。", allusion: "美好的隐退。", interpretation: "在最恰当的时候选择退出。"),
            YaoInfo(type: 7, title: "上九·肥遁无不利", original: "肥遁，无不利。", allusion: "从容退隐无所不利。", interpretation: "功成身退，全身而退的最佳状态。")
        ],
        advice: Advice(
            career: "当前不适合做重大决定，先观察局势发展。",
            love: "适当给彼此空间，冷静处理感情问题。",
            wealth: "保守理财，避免高风险投资。",
            warning: "急于求成反而坏事，耐心等待转机。"
        ),
        bianGua: BianGuaInfo(
            name: "天地否",
            symbol: "䷋",
            upper: "乾(天)",
            lower: "坤(地)",
            palace: "乾宫",
            element: "金",
            judge: "凶",
            nature: "闭塞不通之象",
            trend: "阴阳不交，万事受阻",
            meaning: "变卦为否，上下不通，诸事不顺。",
            advice: "忍耐坚持，否极泰来。"
        )
    )

    static let hexagram_否 = Hexagram(
        name: "天地否",
        symbol: "䷋",
        upper: "乾(天)",
        lower: "坤(地)",
        palace: "乾宫",
        element: "金",
        judge: "凶",
        lines: [9,7,7,8,8,8],
        guaCi: "否之匪人，不利君子贞，大往小来。",
        meaning: "天地不通之象。阴阳隔绝，沟通不畅，诸事不顺。需耐心等待好转之时。",
        allusion: "天地不交而万物不通也。",
        poem: "否极泰来终有时\n闭门思过错难关\n守得云开见月明\n苦尽甘来福运连",
        poemMeaning: "逆境之中蕴含转机，坚持下去终会迎来光明。",
        qianDetail: "【事业】阻力较大，宜低调行事。<br>【财运】资金紧张，开源节流。<br>【感情】沟通不畅，需主动改善关系。<br>【健康】注意情绪管理。",
        qianYiJi: "<b>宜：</b>忍耐、内省、储蓄、沟通<br><b>忌：</b>冲动、投资、争吵、放弃",
        yaos: [
            YaoInfo(type: 9, title: "初六·拔茅茹以其汇", original: "拔茅茹以其汇，贞吉，亨。", allusion: "拔起茅草根系相连。", interpretation: "团结一致才能渡过难关。"),
            YaoInfo(type: 7, title: "六二·包承小人吉", original: "包承，小人吉，大人否，亨。", allusion: "顺承包容。", interpretation: "适度妥协以求生存。"),
            YaoInfo(type: 7, title: "六三·包羞", original: "包羞。", allusion: "含羞忍辱。", interpretation: "承受屈辱是成长的必经之路。"),
            YaoInfo(type: 8, title: "九四·有命无咎", original: "有命无咎，畴离祉。", allusion: "顺应天命没有灾祸。", interpretation: "顺应形势变化，避免灾祸。"),
            YaoInfo(type: 8, title: "九五·休否大人吉", original: "休否，大人吉。其亡其亡，系于苞桑。", allusion: "停止否塞。", interpretation: "有能力者可以扭转局面。"),
            YaoInfo(type: 8, title: "上九·倾否先否后喜", original: "倾否，先否后喜。", allusion: "倾覆否塞。", interpretation: "困境即将结束，好消息将至。")
        ],
        advice: Advice(
            career: "当前环境不利，建议稳守阵地，寻找内部改善机会。",
            love: "多沟通少指责，给关系修复的空间和时间。",
           财富: "减少开支，保留现金，等待市场回暖。",
            warning: "最困难的时刻往往就是转折点的前夜，切勿轻言放弃。"
        ),
        bianGua: BianGuaInfo(
            name: "风地观",
            symbol: "䷓",
            upper: "巽(风)",
            lower: "坤(地)",
            palace: "乾宫",
            element: "金",
            judge: "吉",
            nature: "观察审视之象",
            trend: "宜静观其变",
            meaning: "变卦为观，宜多观察少行动。",
            advice: "全面了解情况后再作决策。"
        )
    )

    static let hexagram_观 = Hexagram(
        name: "风地观",
        symbol: "䷓",
        upper: "巽(风)",
        lower: "坤(地)",
        palace: "乾宫",
        element: "金",
        judge: "吉",
        lines: [8,8,9,8,8,8],
        guaCi: "盥而不荐，有孚顒若。",
        meaning: "观察瞻仰之象。宜多观察分析，深入了解情况后再做决策，不可贸然行动。",
        allusion: "君子以省方观民设教。",
        poem: "登高望远览全局\n审时度势谋良策\n静观其变等时机\n水到渠成自然成",
        poemMeaning: "站在更高的角度审视全局，等待最佳时机出手。",
        qianDetail: "【事业】宜多做调研，了解全貌再做决策。<br>【财运】观察市场动向，不盲目跟风。<br>【感情】多了解对方的真实想法。<br>【健康】关注身体信号。",
        qianYiJi: "<b>宜：</b>观察、调研、学习、规划<br><b>忌：</b>盲目行动、冲动决策",
        yaos: [
            YaoInfo(type: 8, title: "初六·童观", original: "童观，小人无咎，君子吝。", allusion: "像儿童一样观察。", interpretation: "视野有限，需要扩大眼界。"),
            YaoInfo(type: 8, title: "六二·窥观利女贞", original: "窥观，利女贞。", allusion: "从缝隙中偷看。", interpretation: "信息不够全面，需要更深入的了解。"),
            YaoInfo(type: 9, title: "六三·观我生进退", original: "观我生，进退。", allusion: "观察自己的行为。", interpretation: "自我反省，根据实际情况决定进退。"),
            YaoInfo(type: 8, title: "六四·观国之光利用宾于王", original: "观国之光，利用宾于王。", allusion: "观摩国家光辉景象。", interpretation: "开阔眼界，向优秀者学习。"),
            YaoInfo(type: 8, title: "九五·观我生君子无咎", original: "观我生，君子无咎。", allusion: "君子反省自身。", interpretation: "时常检视自己的言行，可免过失。"),
            YaoInfo(type: 8, title: "上九·观其生君子无咎", original: "观其生，君子无咎。", allusion: "观察他人的生活。", interpretation: "借鉴他人的经验教训。")
        ],
        advice: Advice(
            career: "在做重大决策前，充分收集信息和分析数据。",
            love: "用心去理解伴侣的需求和感受。",
           财富: "研究透彻再投资，不跟风不盲从。",
            warning: "看得清才能走得稳，急于求成容易出错。"
        ),
        bianGua: BianGuaInfo(
            name: "山地剥",
            symbol: "䷖",
            upper: "艮(山)",
            lower: "坤(地)",
            palace: "乾宫",
            element: "金",
            judge: "小凶",
            nature: "剥落损耗之象",
            trend: "由盛转衰",
            meaning: "变卦为剥，根基受损，宜守不宜攻。",
            advice: "稳固基础，防止进一步损失。"
        )
    )

    static let hexagram_剥 = Hexagram(
        name: "山地剥",
        symbol: "䷖",
        upper: "艮(山)",
        lower: "坤(地)",
        palace: "乾宫",
        element: "金",
        judge: "小凶",
        lines: [8,8,8,9,8,8],
        guaCi: "不利有攸往。",
        meaning: "剥落侵蚀之象。事物处于衰退阶段，根基不稳，宜固本培元，不可冒进。",
        allusion: "山附于地，剥。上以厚下安宅。",
        poem: "落叶归根待春风\n固本培元保根基\n艰难困苦玉汝成\n守得云开见月明",
        poemMeaning: "衰落时期更要注重根本，度过寒冬便是春天。",
        qianDetail: "【事业】面临挑战，宜稳扎稳打。<br>【财运】资产可能缩水，做好防护措施。<br>【感情】关系可能经受考验。<br>【健康】加强锻炼，增强体质。",
        qianYiJi: "<b>宜：</b>防守、积累、学习、休整<br><b>忌：</b>扩张、冒险、借贷、争执",
        yaos: [
            YaoInfo(type: 8, title: "初六·剥床以足蔑贞凶", original: "剥床以足，蔑贞凶。", allusion: "床脚开始剥落。", interpretation: "问题从细微处显现，及早发现。"),
            YaoInfo(type: 8, title: "六二·剥床以辨蔑贞凶", original: "剥床以辨，蔑贞凶。", allusion: "床板开始剥落。", interpretation: "问题在扩大，必须重视。"),
            YaoInfo(type: 8, title: "六三·剥之无咎", original: "剥之，无咎。", allusion: "主动剥离有害之物。", interpretation: "去除不必要的负担，反而有利。"),
            YaoInfo(type: 9, title: "六四·剥床以肤凶", original: "剥床以肤，凶。", allusion: "床面开始剥落。", interpretation: "问题已影响到核心部分。"),
            YaoInfo(type: 8, title: "六五·贯鱼以宫人宠无不利", original: "贯鱼以宫人宠，无不利。", allusion: "如鱼贯有序。", interpretation: "有序地安排事务可以化险为夷。"),
            YaoInfo(type: 8, title: "上九·硕果不食君子得舆", original: "硕果不食，君子得舆，小人剥庐。", allusion: "硕大的果实未被吃掉。", interpretation: "危机中仍有生机，关键在于如何把握。")
        ],
        advice: Advice(
            career: "收缩战线，专注于核心业务，削减非必要开支。",
            love: "感情需要更多维护和投入，不要忽视细节。",
           财富: "资产配置要保守为主，现金为王。",
            warning: "越是困难时期越要保持清醒头脑，不要病急乱投医。"
        ),
        bianGua: BianGuaInfo(
            name: "火地晋",
            symbol: "䷢",
            upper: "离(火)",
            lower: "坤(地)",
            palace: "乾宫",
            element: "金",
            judge: "大吉",
            nature: "光明上进之象",
            trend: "如日中天，前途光明",
            meaning: "变卦为晋，光明普照，事业上升。",
            advice: "抓住机遇，积极进取。"
        )
    )

    static let hexagram_晋 = Hexagram(
        name: "火地晋",
        symbol: "䷢",
        upper: "离(火)",
        lower: "坤(地)",
        palace: "乾宫",
        element: "金",
        judge: "大吉",
        lines: [9,8,8,8,8,8],
        guaCi: "康侯用锡马蕃庶，昼日三接。",
        meaning: "如日中天、光明上进之象。事业蒸蒸日上，前途一片光明。宜积极进取，把握良机。",
        allusion: "明出地上，晋。君子以自昭明德。",
        poem: "旭日东升照四方\n前程似锦路宽广\n乘风破浪正当时\n功成名就指日望",
        poemMeaning: "运势如旭日东升，正是大展宏图的好时机。",
        qianDetail: "【事业】运势极佳，适合拓展新业务。<br>【财运】收入增长，投资回报良好。<br>【感情】感情甜蜜，单身者易遇良缘。<br>【健康】精力充沛，状态良好。",
        qianYiJi: "<b>宜：</b>进取、扩张、签约、展示<br><b>忌：</b>保守、退缩、观望",
        yaos: [
            YaoInfo(type: 9, title: "初六·晋如摧如贞吉", original: "晋如摧如，贞吉。罔孚裕无咎。", allusion: "前进时受到阻碍。", interpretation: "初期虽有挫折但最终顺利。"),
            YaoInfo(type: 8, title: "六二·晋如愁吉", original: "晋如愁吉，受兹介福于其王母。", allusion: "前进时忧虑不安。", interpretation: "担忧反而是好事，说明认真对待。"),
            YaoInfo(type: 8, title: "六三·众允悔亡", original: "众允，悔亡。", allusion: "得到众人信任。", interpretation: "获得支持后一切顺利。"),
            YaoInfo(type: 8, title: "九四·晋如鼫鼠贞厉", original: "晋如鼫鼠，贞厉。", allusion: "像鼫鼠一样前进。", interpretation: "能力不足以支撑野心会很危险。"),
            YaoInfo(type: 8, title: "六五·悔亡失得勿恤往吉无不利", original: "悔亡，失得勿恤，往吉，无不利。", allusion: "不再后悔。", interpretation: "放下得失心反而能获得成功。"),
            YaoInfo(type: 8, title: "上九·晋其角维用伐邑", original: "晋其角，维用伐邑，厉吉无咎，贞吝。", allusion: "进到极致。", interpretation: "到达顶点后需要考虑下一步。")
        ],
        advice: Advice(
            career: "事业发展进入快车道，大胆追求目标。",
            love: "感情运势极佳，适合表白或深化关系。",
           财富: "财务状况大幅改善，可适当增加投资。",
            warning: "成功时更要保持谦逊，骄兵必败。"
        ),
        bianGua: BianGuaInfo(
            name: "火天大有",
            symbol: "䷍",
            upper: "离(火)",
            lower: "乾(天)",
            palace: "乾宫",
            element: "金",
            judge: "大吉",
            nature: "丰盛昌隆之象",
            trend: "万物丰收，繁荣昌盛",
            meaning: "变卦为大有，盛大丰富之象。",
            advice: "善用资源，回馈社会。"
        )
    )

    static let hexagram_大有 = Hexagram(
        name: "火天大有",
        symbol: "䷍",
        upper: "离(火)",
        lower: "乾(天)",
        palace: "乾宫",
        element: "金",
        judge: "大吉",
        lines: [9,8,9,7,9,7],
        guaCi: "元亨。",
        meaning: "盛大丰盛之象。阳光普照万物，事业有成，财运丰厚。诸事皆宜，但要谦虚谨慎，戒骄戒躁。",
        allusion: "火在天上，大有。君子以遏恶扬善，顺天休命。",
        poem: "阳光普照万物荣\n硕果累累满园庭\n谦虚谨慎保长久\n知足常乐享太平",
        poemMeaning: "收获丰盛之时更要保持谦逊，方能长久。",
        qianDetail: "【事业】成就斐然，名利双收。<br>【财运】财源广进，收益丰厚。<br>【感情】幸福美满，家庭和睦。<br>【健康】身心愉悦。",
        qianYiJi: "<b>宜：</b>展示成果、分享喜悦、帮助他人<br><b>忌：</b>骄傲自满、铺张浪费",
        yaos: [
            YaoInfo(type: 9, title: "初九·无交害匪咎艰则无咎", original: "无交害，匪咎，艰则无咎。", allusion: "没有交相伤害。", interpretation: "初期谨慎不会出错。"),
            YaoInfo(type: 8, title: "九二·大车以载有攸往无咎", original: "大车以载，有攸往，无咎。", allusion: "用大车装载货物。", interpretation: "承担重任并顺利完成。"),
            YaoInfo(type: 9, title: "九三·公用亨于天子小人弗克", original: "公用亨于天子，小人弗克。", allusion: "公侯向天子献礼。", interpretation: "正当的行为会得到认可。"),
            YaoInfo(type: 7, title: "九四·匪其彭无咎", original: "匪其彭，无咎。", allusion: "不过分炫耀。", interpretation: "低调行事反而安全。"),
            YaoInfo(type: 9, title: "六五·厥孚交如威如吉", original: "厥孚交如，威如，吉。", allusion: "诚信交往有威严。", interpretation: "以诚待人同时保持原则。"),
            YaoInfo(type: 7, title: "上九·自天佑之吉无不利", original: "自天佑之，吉，无不利。", allusion: "上天保佑。", interpretation: "积善之家必有余庆。")
        ],
        advice: Advice(
            career: "事业达到高峰，可考虑更大的目标。",
            love: "感情圆满，珍惜当下美好时光。",
           财富: "财富自由近在咫尺，合理规划使用。",
            warning: "月满则亏，水满则溢。成功时更要注意平衡。"
        ),
        bianGua: BianGuaInfo(
            name: "火天大有",
            symbol: "䷍",
            upper: "离(火)",
            lower: "乾(天)",
            palace: "乾宫",
            element: "金",
            judge: "大吉",
            nature: "循环往复",
            trend: "维持现状",
            meaning: "变卦仍为大有，运势持续向好。",
            advice: "继续保持良好的势头。"
        )
    )
    
    // ====== 坎宫（水）=====
    static let hexagram_坎 = Hexagram(
        name: "坎为水",
        symbol: "䷜",
        upper: "坎(水)",
        lower: "坎(水)",
        palace: "坎宫",
        element: "水",
        judge: "凶",
        lines: [8,9,8,8,9,8],
        guaCi: "习坎，有孚，维心亨，行有尚。",
        meaning: "重重险陷之象。前路坎坷，困难重重，但只要内心坚定，终能渡过难关。",
        allusion: "水流而不盈，行险而不失信。",
        poem: "行舟破浪逆风中\n历经磨难志愈坚\n守得云开见月明\n苦尽甜来福运通",
        poemMeaning: "困难是磨练意志的试金石，坚持到底必有所成。",
        qianDetail: "【事业】障碍较多，需坚持不懈。<br>【财运】资金周转困难，量入为出。<br>【感情】经历考验更显真情。<br>【健康】注意安全和心理健康。",
        qianYiJi: "<b>宜：</b>坚持、信任、内省<br><b>忌：</b>放弃、投机、冲动",
        yaos: [
            YaoInfo(type: 8, title: "初六·习坎入于坎窖凶", original: "习坎，入于坎窞，凶。", allusion: "落入深坑。", interpretation: "一开始就陷入困境。"),
            YaoInfo(type: 9, title: "九二·坎有险求小得", original: "坎有险，求小得。", allusion: "险中有小得。", interpretation: "在危险中也能获得小的进展。"),
            YaoInfo(type: 8, title: "六三·来之坎坎险且枕入于坎窞勿用", original: "来之坎坎，险且枕，入于坎窞，勿用。", allusion: "往来都是险境。", interpretation: "四面楚歌时不宜轻举妄动。"),
            YaoInfo(type: 8, title: "六四·樽酒簋贰用缶纳约自牖无咎", original: "樽酒簋贰，用缶，纳约自牖，无咎。", allusion: "简单祭品表达诚意。", interpretation: "真诚朴素的态度可以打动人心。"),
            YaoInfo(type: 9, title: "九五·坎不盈祗既平无咎", original: "坎不盈，祗既平，无咎。", allusion: "坑尚未填平。", interpretation: "问题接近解决但仍需努力。"),
            YaoInfo(type: 8, title: "上六·系用徽纆寘于丛棘三岁不得凶", original: "系用徽纆，寘于丛棘，三岁不得，凶。", allusion: "被绳索捆绑困于丛林。", interpretation: "长期被困的局面需要耐心等待解脱。")
        ],
        advice: Advice(
            career: "当前困难是暂时的，每一步都要脚踏实地。",
            love: "共同经历风雨的感情更加坚固。",
           财富: "紧缩开支，确保现金流安全。",
            warning: "最大的敌人不是外部困难而是内心的恐惧。"
        ),
        bianGua: BianGuaInfo(
            name: "水泽节",
            symbol: "䷾",
            upper: "坎(水)",
            lower: "兑(泽)",
            palace: "坎宫",
            element: "水",
            judge: "吉",
            nature: "节制有度之象",
            trend: "适度节制方可长久",
            meaning: "变卦为节，强调节制和自律。",
            advice: "控制欲望，合理规划。"
        )
    )

    static let hexagram_节 = Hexagram(
        name: "水泽节",
        symbol: "䷾",
        upper: "坎(水)",
        lower: "兑(泽)",
        palace: "坎宫",
        element: "水",
        judge: "吉",
        lines: [8,9,8,8,9,8],
        guaCi: "亨。苦节不可贞。",
        meaning: "节制适度之象。凡事有度，过犹不及。懂得节制的人才能真正掌控自己的人生。",
        allusion: "泽上有水，节。君子以制数度，议德行。",
        poem: "知止而后能定能静\n节制有度方为真\n过犹不及皆失偏\n恰到好处是人生",
        poemMeaning: "懂得何时停止和如何控制自己，是一种高级智慧。",
        qianDetail: "【事业】制定清晰目标和边界。<br>【财务管理开支，量入为出。<br>【感情】保持适当的个人空间。<br>【健康】规律作息，适度运动。",
        qianYiJi: "<b>宜：</b>计划、节制、自律<br><b>忌：**过度、放纵、贪心",
        yaos: [
            YaoInfo(type: 8, title: "初九·不出户庭无咎", original: "不出户庭，无咎。", allusion: "不出家门。", interpretation: "在恰当的时候保持安静。"),
            YaoInfo(type: 9, title: "九二·不出门庭凶", original: "不出门庭，凶。", allusion: "该出门却不出。", interpretation: "该行动时不行动反而有害。"),
            YaoInfo(type: 8, title: "六三·不节若则嗟若无咎", original: "不节若，则嗟若，无咎。", allusion: "不知节制而叹息。", interpretation: "从错误中吸取教训。"),
            YaoInfo(type: 8, title: "六四·安节亨", original: "安节，亨。", allusion: "安心遵守节制。", interpretation: "内心认同节制之道。"),
            YaoInfo(type: 9, title: "九五·甘节吉往有尚", original: "甘节，吉，往有尚。", allusion: "乐于节制。", interpretation: "自觉自愿地节制最为有效。"),
            YaoInfo(type: 8, title: "上六·苦节贞凶悔亡", original: "苦节，贞凶，悔亡。", allusion: "痛苦的节制。", interpretation: "过度节制同样有害。")
        ],
        advice: Advice(
            career: "制定合理的工作计划和优先级排序。",
            love: "在感情中保持独立性和健康的界限感。",
           财富: "建立预算制度，严格执行财务纪律。",
            warning: "节制不是限制而是保护，找到属于自己的平衡点。"
        ),
        bianGua: BianGuaInfo(
            name: "水雷屯",
            symbol: "䷂",
            upper: "坎(水)",
            lower: "震(雷)",
            palace: "坎宫",
            element: "水",
            judge: "小吉",
            nature: "初创艰难之象",
            trend: "万事开头难",
            meaning: "变卦为屯，新生事物的起步阶段。",
            advice: "坚持初心，不畏艰难。"
        )
    )

    // ====== 坎宫补充 ======
    static let hexagram_屯 = Hexagram(
        name: "水雷屯",
        symbol: "䷂",
        upper: "坎(水)",
        lower: "震(雷)",
        palace: "坎宫",
        element: "水",
        judge: "小吉",
        lines: [8,9,8,9,8,8],
        guaCi: "元亨利贞，勿用有攸往，利建侯。",
        meaning: "草木初生、艰难创始之象。新事物诞生之初总是困难重重，但只要坚持就有希望。",
        allusion: "云雷，屯。君子以经纶。",
        poem: "万物初生萌芽始\n艰难困苦玉汝成\n坚持初心不动摇\n终见花开满枝头",
        poemMeaning: "任何伟大事业的起点都充满挑战，坚持是唯一出路。",
        qianDetail: "【事业】创业初期，困难在所难免。<br>【财运】投入期较长，需耐心。<br>【感情】新关系的磨合阶段。<br>【健康】注意营养和休息。",
        qianYiJi: "<b>宜：</b>坚持、学习、准备<br><b>忌：</b>急躁、放弃、冒进",
        yaos: [
            YaoInfo(type: 8, title: "初九·磐桓利居贞利建侯", original: "磐桓，利居贞，利建侯。", allusion: "徘徊不前。", interpretation: "起步阶段的犹豫是正常的。"),
            YaoInfo(type: 9, title: "六二·屯如邅如乘马班如匪寇婚媾", original: "屯如邅如，乘马班如。匪寇，婚媾。", allusion: "骑马徘徊不前。", interpretation: "看似困难实则有转机。"),
            YaoInfo(type: 8, title: "六三·即鹿无虞惟入于林中", original: "即鹿无虞，惟入于林中。", allusion: "追鹿没有向导。", interpretation: "盲目行动不如做好准备。"),
            YaoInfo(type: 9, title: "六四·乘马班如求婚媾往吉无不利", original: "乘马班如，求婚媾，往吉，无不利。", allusion: "骑马徘徊前去求婚。", interpretation: "经过犹豫后的决定通常是正确的。"),
            YaoInfo(type: 8, title: "九五·屯其膏小贞吉大贞凶", original: "屯其膏，小贞吉，大贞凶。", allusion: "囤积恩泽。", interpretation: "小范围行动可行，大规模扩张需谨慎。"),
            YaoInfo(type: 8, title: "上六·乘马班如泣血涟如", original: "乘马班如，泣血涟如。", allusion: "骑马徘徊痛哭流泪。", interpretation: "极度困难时的悲伤是可以理解的。")
        ],
        advice: Advice(
            career: "创业或转型初期要有心理准备，困难是正常的。",
            love: "新感情需要时间培养，不要急于求成。",
           财富: "初期投入大于回报，这是必然的过程。",
            warning: "最黑暗的时刻就在黎明之前，千万不要放弃。"
        ),
        bianGua: BianGuaInfo(
            name: "水火既济",
            symbol: "䷾",
            upper: "坎(水)",
            lower: "离(火)",
            palace: "坎宫",
            element: "水",
            judge: "吉",
            nature: "成功完成之象",
            trend: "功成名就但需防懈怠",
            meaning: "变卦为既济，事情已经成功完成。",
            advice: "成功之后保持警觉，防止松懈。"
        )
    )

    static let hexagram_既济 = Hexagram(
        name: "水火既济",
        symbol: "䷾",
        upper: "坎(水)",
        lower: "离(火)",
        palace: "坎宫",
        element: "水",
        judge: "吉",
        lines: [8,9,7,7,9,8],
        guaCi: "亨小利贞。初吉终乱。",
        meaning: "水火相交、事已成就之象。目标已经达成，但要注意善始善终，防止功亏一篑。",
        allusion: "水在火上，既济。君子以思患而豫防之。",
        poem: "功成名就莫忘形\n慎终如始保长青\n居安思危防微渐\n基业长青万代兴",
        poemMeaning: "成功不是终点，持续的努力才能保持成就。",
        qainDetail: "【事业】目标达成，巩固成果。<br>【财运】收益稳定，注意保值。<br>【感情】关系和谐美满。<br>【健康】保持良好的生活习惯。",
        qainYiJi: "<b>宜：</b>巩固、完善、预防<br><b>忌：**自满、松懈、冒险",
        yaos: [
            YaoInfo(type: 8, title: "初九·曳其轮濡其尾无咎", original: "曳其轮，濡其尾，无咎。", allusion: "拉住车轮弄湿车尾。", interpretation: "谨慎前行可以避免失误。"),
            YaoInfo(type: 9, title: "六二·妇丧其茀勿逐七日得", original: "妇丧其茀，勿逐，七日得。", allusion: "丢失了首饰不用追。", interpretation: "失去的东西自然会回来。"),
            YaoInfo(type: 7, title: "九三·高宗伐鬼方三年克之小人勿用", original: "高宗伐鬼方，三年克之，小人勿用。", allusion: "殷高宗征伐鬼方国三年取胜。", interpretation: "伟大的成就需要时间和坚持。"),
            YaoInfo(type: 7, title: "六四繻有衣袽终日戒", original: "繻有衣袽，终日戒。", allusion: "准备好破衣服以备不时之需。", interpretation: "时刻准备应对突发状况。"),
            YaoInfo(type: 9, title: "九五·东邻杀牛不如西邻之禴祭", original: "东邻杀牛，不如西邻之禴祭，实受其福。", allusion: "东方邻居杀牛不如西方邻居简朴祭祀。", interpretation: "真诚比形式更重要。"),
            YaoInfo(type: 8, title: "上六·濡其首厉", original: "濡其首，厉。", allusion: "弄湿了头部很危险。", interpretation: "疏忽大意会导致严重后果。")
        ],
        advice: Advice(
            career: "取得阶段性胜利后要趁热打铁巩固地位。",
            love: "珍惜来之不易的幸福，持续经营感情。",
           财富: "收益到手后要做好资产保护和增值规划。",
            warning: "很多失败不是发生在奋斗过程中而是在成功之后。"
        ),
        bianGua: BianGuaInfo(
            name: "火泽睽",
            symbol: "䷥",
            upper: "离(火)",
            lower: "兑(泽)",
            palace: "艮宫",
            element: "土",
            judge: "小凶",
            nature: "乖离不合之象",
            trend: "意见分歧需协调",
            meaning: "变卦为睽，双方出现分歧。",
            advice: "求同存异，化解矛盾。"
        )
    )

    // ====== 艮宫（土）=====
    static let hexagram_艮 = Hexagram(
        name: "艮为山",
        symbol: "䷳",
        upper: "艮(山)",
        lower: "艮(山)",
        palace: "艮宫",
        element: "土",
        judge: "平",
        lines: [8,8,7,7,8,8],
        guaCi: "艮其背，不获其身，行其庭，不见其人，无咎。",
        meaning: "静止稳重之象。宜止则止，宜行则行。当前适合沉淀思考，不宜贸然行动。",
        allusion: "兼山，艮。君子思不出其位。",
        poem: "巍峨青山不动摇\n心如止水任逍遥\n静观世事风云变幻\n稳坐钓鱼台看潮",
        poemMeaning: "在纷繁复杂的世界中保持内心的平静是最高的智慧。",
        qainDetail: "【事业】宜稳扎稳打，不宜冒进。<br>【财运】保守理财，持有现金。<br>【感情】冷静思考感情走向。<br>【健康】静养调理。",
        qainYiJi: "<b>宜：</b>静止、思考、内修<br><b>忌：**冒进、频繁变动",
        yaos: [
            YaoInfo(type: 8, title: "初六·艮其趾无咎利永贞", original: "艮其趾，无咎，利永贞。", allusion: "停住脚趾。", interpretation: "从一开始就保持谨慎。"),
            YaoInfo(type: 8, title: "六二·艮其腓不拯其随其心不快", original: "艮其腓，不拯其随，其心不快。", allusion: "停下小腿不能跟上。", interpretation: "想行动却受限时会感到不快。"),
            YaoInfo(type: 7, title: "九三·艮其限列其夤厉薰心", original: "艮其限，列其夤，厉薰心。", allusion: "腰部僵硬背部裂开。", interpretation: "过度紧张会导致身心俱疲。"),
            YaoInfo(type: 7, title: "六四·艮其身无咎", original: "艮其身，无咎。", allusion: "控制自身行为。", interpretation: "自律可以避免很多麻烦。"),
            YaoInfo(type: 8, title: "六五·艮其辅言有序悔亡", original: "艮其辅，言有序，悔亡。", allusion: "控制口舌言语有序。", interpretation: "说话谨慎可以避免后悔。"),
            YaoInfo(type: 8, title: "上九·敦艮吉", original: "敦艮，吉。", allusion: "敦厚地保持静止。", interpretation: "真诚的沉稳最为可贵。")
        ],
        advice: Advice(
            career: "现在是评估和规划的最好时机，不要急于行动。",
            love: "给彼此空间和时间来理清思路。",
           财富: "观望市场走势，不要在不确定时做出重大财务决定。",
            warning: "静止不等于停滞，而是在为下一步做准备。"
        ),
        bianGua: BianGuaInfo(
            name: "山火贲",
            symbol: "䷕",
            upper: "艮(山)",
            lower: "离(火)",
            palace: "艮宫",
            element: "土",
            judge: "吉",
            nature: "文饰美化之象",
            trend: "内外兼修",
            meaning: "变卦为贲，注重外在形象和内在品质的提升。",
            advice: "提升形象包装，展现更好的一面。"
        )
    )

    static let hexagram_贲 = Hexagram(
        name: "山火贲",
        symbol: "䷕",
        upper: "艮(山)",
        lower: "离(火)",
        palace: "艮宫",
        element: "土",
        judge: "吉",
        lines: [8,8,7,7,9,8],
        guaCi: "亨。小利有攸往。",
        meaning: "文饰修饰之象。外表与内在都需要精心打磨。注重形象包装的同时不忘充实内涵。",
        allusion: "山下有火，贲。君子以明庶政，无敢折狱。",
        poem: "锦上添花更增辉\n内外兼修显芳菲\n文质彬彬君子风\n美名远扬天下知",
        poemMeaning: "好的内容配上好的呈现方式才能发挥最大价值。",
        qainDetail: "【事业】注重个人品牌和专业形象的打造。<br>【财运】合理消费提升生活品质。<br>【感情】注重仪表和浪漫氛围。<br>【健康】内外兼修保养身心。",
        qainYiJi: "<b>宜：</b>美化、修饰、展示<br><b>忌：**浮夸、虚假、过度装饰",
        yaos: [
            YaoInfo(type: 8, title: "初九·贲其趾舍车而徒", original: "贲其趾，舍车而徒。", allusion: "装饰脚趾步行不乘车。", interpretation: "宁可朴实也不要虚荣。"),
            YaoInfo(type: 8, title: "六二·贲其须", original: "贲其须。", allusion: "装饰胡须。", interpretation: "适当的修饰是有必要的。"),
            YaoInfo(type: 7, title: "九三·贲如濡如永贞吉", original: "贲如，濡如，永贞，吉。", allusion: "修饰得很润泽。", interpretation: "精心打造的持久效果最好。"),
            YaoInfo(type: 7, title: "六四·贲如皤如白马翰如匪寇婚媾", original: "贲如，皤如，白马翰如。匪寇，婚媾。", allusion: "修饰后洁白素雅。", interpretation: "简约之美胜过华丽堆砌。"),
            YaoInfo(type: 9, title: "六五·贲于丘园束帛戋戋吝终吉", original: "贲于丘园，束帛戋戋，吝，终吉。", allusion: "在山丘园林间装饰。", interpretation: "质朴环境中的一点装饰更有价值。"),
            YaoInfo(type: 8, title: "上九·白贲无咎", original: "白贲，无咎。", allusion: "白色装饰。", interpretation: "回归本色是最好的修饰。")
        ],
        advice: Advice(
            career: "花时间打磨作品和个人形象，这会带来意想不到的回报。",
            love: "用心营造浪漫的氛围，细节决定成败。",
           财富: "适当投资于提升生活质量和形象的项目上。",
            warning: "外表很重要但不能只重表面，内在才是根本。"
        ),
        bianGua: BianGuaInfo(
            name: "山天大畜",
            symbol: "䷙",
            upper: "艮(山)",
            lower: "乾(天)",
            palace: "艮宫",
            element: "土",
            judge: "大吉",
            nature: "积蓄力量之大象",
            trend: "厚积薄发",
            meaning: "变卦为大畜，大量积蓄资源和能力。",
            advice: "持续学习和积累，为未来打下坚实基础。"
        )
    )

    // ====== 震宫（木）=====
    static let hexagram_震 = Hexagram(
        name: "震为雷",
        symbol: "䷲",
        upper: "震(雷)",
        lower: "震(雷)",
        palace: "震宫",
        element: "木",
        judge: "吉",
        lines: [8,8,9,8,8,9],
        guaCi: "亨。震来虩虩，笑言哑哑，震惊百里，不丧匕鬯。",
        meaning: "震动奋起之象。突如其来的变化带来冲击，但也是新的机遇。保持镇定，化危机为转机。",
        allusion: "洊雷，震。君子以恐惧修省。",
        poem: "一声惊雷震四方\n万象更新换旧装\n处变不惊显定力\转危为安谱华章",
        poemMeaning: "每一次震动都是重新洗牌的机会，关键是能否稳住阵脚。",
        qainDetail: "【事业】可能面临突然的变化或机遇。<br>【财运】市场波动带来机会。<br>【感情】突发事件考验感情基础。<br>【健康】注意心脏和神经系统。",
        qainYiJi: "<b>宜：</b>应变、创新、突破<br><b>忌：**恐慌、固执",
        yaos: [
            YaoInfo(type: 8, title: "初九·震来虩虩后笑言哑哑吉", original: "震来虩虩，后笑言哑哑，吉。", allusion: "雷声令人恐惧随后欢笑。", interpretation: "最初的恐慌过去后会发现其实没那么可怕。"),
            YaoInfo(type: 8, title: "六二·震来厉亿丧贝跻于九陵勿逐七日得", original: "震来厉，亿丧贝，跻于九陵，勿逐，七日得。", allusion: "雷声猛烈损失巨大。", interpretation: "损失的东西不必急着追回，它会回来的。"),
            YaoInfo(type: 9, title: "六三·震苏苏震行无眚", original: "震苏苏，震行，无眚。", allusion: "惊恐不安地前行。", interpretation: "带着恐惧前行也不会有问题。"),
            YaoInfo(type: 8, title: "九四·震遂泥", original: "震遂泥。", allusion: "雷声使它陷入泥沼。", interpretation: "过度的震惊可能导致停滞。"),
            YaoInfo(type: 8, title: "六五·震往来厉意无丧有事", original: "震往来，厉，亿无丧，有事。", allusion: "雷电往来猛烈。", interpretation: "反复的震荡中只要守住核心就不会有损失。"),
            YaoInfo(type: 9, title: "上六·震索索视矍矍征凶震不于其躬于其邻无咎婚媾有言", original: "震索索，视矍矍，征凶。震不于其躬，于其邻，无咎。婚媾有言。", allusion: "惊恐四处张望。", interpretation: "如果灾难影响的是别人那你就安全了。")
        ],
        advice: Advice(
            career: "突如其来的变化可能是升职或转型的契机，保持开放心态。",
            love: "意外的共同经历可能会加深感情连接。",
           财富: "市场波动中蕴藏着投资机会，需要敏锐的眼光。",
            warning: "最大的风险不是变化本身而是对变化的反应方式。"
        ),
        bianGua: BianGaoInfo(
            name: "雷泽随",
            symbol: "䷐",
            upper: "震(雷)",
            lower: "兑(泽)",
            palace: "震宫",
            element: "木",
            judge: "吉",
            nature: "顺势而为之象",
            trend: "顺其自然",
            meaning: "变卦为随，跟随趋势而行。",
            advice: "灵活适应，顺势而为。"
        )
    )
    
    // ====== 巽宫（木）=====
    static let hexagram_巽 = Hexagram(
        name: "巽为风",
        symbol: "䷸",
        upper: "巽(风)",
        lower: "巽(风)",
        palace: "巽宫",
        element: "木",
        judge: "小吉",
        lines: [8,8,9,8,8,9],
        guaCi: "小亨。利有攸往，利见大人。",
        meaning: "顺从渗透之象。如风吹遍各处，柔顺而有韧性。宜以柔克刚，循序渐进。",
        allusion: "随风，巽。君子以申命行事。",
        poem: "清风徐来万物生\n柔能克刚显神通\n循序渐进登高峰\n润物无声功自成",
        poemMeaning: "温柔的力量往往比强硬更持久有效。",
        qainDetail: "【事业】以温和方式推进工作。<br>【财务管理细致有序。<br>【感情】温柔体贴增进感情。<br>【健康】舒缓放松。",
        qainYiJi: "<b>宜：</b>柔和、渗透、渐进<br><b>忌：**强硬、急躁",
        yaos: [
            YaoInfo(type: 8, title: "初六·进退利武人之贞", original: "进退，利武人之贞。", allusion: "进退不决。", interpretation: "在犹豫时采取果断态度比较好。"),
            YaoInfo(type: 8, title: "九二·巽在床下用史巫纷若吉无咎", original: "巽在床下，用史巫纷若，吉，无咎。", allusion: "伏在床下。", interpretation: "谦卑的姿态可以获得帮助。"),
            YaoInfo(type: 9, title: "九三·频巽吝", original: "频巽，吝。", allusion: "多次反复顺从。", interpretation: "过于优柔寡断会错失良机。"),
            YaoInfo(type: 8, title: "六四·悔亡田获三品", original: "悔亡，田获三品。", allusion: "打猎获得三种猎物。", interpretation: "付出努力终会有回报。"),
            YaoInfo(type: 8, title: "九五·贞吉悔亡无不利无初有终", original: "贞吉，悔亡，无不利。无初有终，", allusion: "开始不好但结局好。", interpretation: "坚持到最后就能看到希望。"),
            YaoInfo(type: 9, title: "上九·巽在床下丧其资斧贞凶", original: "巽在床下，丧其资斧，贞，凶。", allusion: "伏在床下丢了工具。", interpretation: "过分谦卑反而会失去立足点。")
        ],
        advice: Advice(
            career: "用柔和的方式推动事情进展比强硬手段更有效。",
            love: "体贴和理解是维系感情的润滑剂。",
            wealth: "细水长流的理财方式比一夜暴富更可靠。",
            warning: "柔弱不等于软弱，真正的力量在于知道什么时候该柔软。"
        ),
        bianGua: BianGuaInfo(
            name: "风天小畜",
            symbol: "䷈",
            upper: "巽(风)",
            lower: "乾(天)",
            palace: "巽宫",
            element: "木",
            judge: "小吉",
            nature: "小有积蓄之象",
            trend: "逐步累积",
            meaning: "变卦为小畜，少量积蓄稳步增长。",
            advice: "从小事做起，逐步积累。"
        )
    )
    
    // ====== 离宫（火）=====
    static let hexagram_离 = Hexagram(
        name: "离为火",
        symbol: "䷝",
        upper: "离(火)",
        lower: "离(火)",
        palace: "离宫",
        element: "火",
        judge: "大吉",
        lines: [9,8,9,8,9,8],
        guaCi: "利贞，亨。畜牝牛吉。",
        meaning: "光明附着之象。如火光普照，明亮温暖。适宜展示才华、传播思想、建立声誉。",
        allusion: "明两作，离。大人以继明照于四方。",
        poem: "双辉日月耀乾坤\n光芒四射照人心\n明辨是非行正道\德行天下传佳音",
        poemMeaning: "光明磊落的品格和卓越的能力会让世界看到你的价值。",
        qainDetail: "【事业】适合公开演讲、展示才华。<br>【财运】名声带来财富。<br>【感情】热情洋溢魅力十足。<br>【健康】精力充沛活力四射。",
        qainYiJi: "<b>宜：</b>展示、宣传、表达<br><b>忌：**隐藏、沉默、低调",
        yaos: [
            YaoInfo(type: 9, title: "初九·履错然敬之无咎", original: "履错然，敬之，无咎。", allusion: "脚步慌张。", interpretation: "即使犯错只要恭敬对待就不会有大问题。"),
            YaoInfo(type: 8, title: "六二·黄离元吉", original: "黄离，元吉。", allusion: "黄色的光明。", interpretation: "中正的光明最为吉祥。"),
            YaoInfo(type: 9, title: "九三·日昃之离不鼓缶而歌则大耋之嗟凶", original: "日昃之离，不鼓缶而歌，则大耋之嗟，凶。", allusion: "夕阳西下。", interpretation: "不及时享受生活到老会后悔。"),
            YaoInfo(type: 8, title: "九四·突如其来如焚如死如弃如", original: "突如其来如，焚如，死如，弃如。", allusion: "突然到来如火焰般猛烈。", interpretation: "突如其来的事件往往来得快去得也快。"),
            YaoInfo(type: 9, title: "六五·出涕沱若戚嗟若吉", original: "出涕沱若，戚嗟若，吉。", allusion: "泪如雨下忧伤叹息。", interpretation: "真情流露能够感动他人。"),
            YaoInfo(type: 8, title: "上九·王用出征有嘉折首获匪其丑无咎", original: "王用出征，有嘉折首，获匪其丑，无咎。", allusion: "君王出征斩首敌军。", interpretation: "正义的行动终将获得胜利。")
        ],
        advice: Advice(
            career: "现在是展示能力和建立个人品牌的最佳时机。",
            love: "热情奔放地表达爱意让对方感受到你的真心。",
           财富: "利用知名度和影响力创造更多收入渠道。",
            warning: "光芒太盛也要注意不要灼伤周围的人。"
        ),
        bianGua: BianGuaInfo(
            name: "火山旅",
            symbol: "䷷",
            upper: "离(火)",
            lower: "艮(山)",
            palace: "离宫",
            element: "火",
            judge: "小吉",
            nature: **旅行漂泊之象**,
            trend: "动荡中求安稳",
            meaning: "变卦为旅，在外漂泊寻求归属。",
            advice: "适应环境，随遇而安。"
        )
    )
    
    // ====== 坤宫（土）=====
    static let hexagram_坤 = Hexagram(
        name: "坤为地",
        symbol: "䷁",
        upper: "坤(地)",
        lower: "坤(地)",
        palace: "坤宫",
        element: "土",
        judge: "大吉",
        lines: [8,8,8,8,8,8],
        guaCi: "元亨，利牝马之贞。君子有攸往，先迷后得主，利西南得朋，东北丧朋。安贞吉。",
        meaning: "厚德载物之象。如大地般宽厚包容，承载万物。宜以柔顺态度处世，广结善缘。",
        allusion: "地势坤，君子以厚德载物。",
        poem: "厚德载物容万物\n大地母亲育众生\n柔顺包容纳百川\福泽深厚万年长",
        poemMeaning: "最强大的力量来自包容和承载而非对抗和控制。",
        qainDetail: "【事业】以合作共赢的方式发展。<br>【财务管理稳健保守。<br>【感情】宽容体谅构建和谐关系。<br>【健康】注重调养。",
        qainYiJi: "<b>宜：</b>包容、合作、积累<br><b>忌：**对抗、激进",
        yaos: [
            YaoInfo(type: 8, title: "初六·履霜坚冰至", original: "履霜，坚冰至。", allusion: "踩到霜就知道冰冻时节到了。", interpretation: "见微知著，防患于未然。"),
            YaoInfo(type: 8, title: "六二·直方大不习无不利", original: "直，方，大，不习，无不利。", allusion: "正直方正广大无需学习。", interpretation: "本性纯正自然就很好。"),
            YaoInfo(type: 8, title: "六三·含章可贞或从王事无成有终", original: "含章，可贞。或从王事，无成，有终。", allusion: "内藏才华。", interpretation: "才华内敛不张扬反而能有好的结果。"),
            YaoInfo(type: 8, title: "六四·括囊无咎无誉", original: "括囊，无咎，无誉。", allusion: "束紧口袋。", interpretation: "谨言慎行虽无赞誉也无过失。"),
            YaoInfo(type: 8, title: "六五·黄裳元吉", original: "黄裳，元吉。", allusion: "黄色的下装。", interpretation: "谦逊中正的态度最为吉利。"),
            YaoInfo(type: 8, title: "上六·龙战于野其血玄黄", original: "龙战于野，其血玄黄。", allusion: "龙在野外战斗血流遍地。", interpretation: "极端情况下冲突不可避免。")
        ],
        advice: Advice(
            career: "以合作和团队的方式取得成绩比单打独斗更有效。",
            love: "包容和理解是长久关系的基石。",
           财富: "稳健的投资策略加上时间的复利效应。",
            warning: "柔弱不代表无力，大地承载万物正是因为它的柔软。"
        ),
        bianGua: BianGuaInfo(
            name: "地雷复",
            symbol: "䷗",
            upper: "坤(地)",
            lower: "震(雷)",
            palace: "坤宫",
            element: "土",
            judge: "大吉",
            nature: **万物复苏之象**,
            trend: "一阳来复，否极泰来",
            meaning: "变卦为复，事物开始复苏好转。",
            advice: "把握新生的机会，从头再来。"
        )
    )
    
    // ====== 兑宫（金）=====
    static let hexagram_兑 = Hexagram(
        name: "兑为泽",
        symbol: "䷹",
        upper: "兑(泽)",
        lower: "兑(泽)",
        palace: "兑宫",
        element: "金",
        judge: "吉",
        lines: [9,8,9,8,9,8],
        guaCi: "亨，利贞。",
        meaning: "喜悦交流之象。如泽水滋润万物，以喜悦和友善的态度与人相处，事事顺畅。",
        allusion: "丽泽，兑。君子以朋友讲习。",
        poem: "和颜悦色暖人心\n欢声笑语聚千金\n以德报怨显胸襟\快乐人生处处春",
        poemMeaning: "积极乐观的心态是最好的护身符，能吸引好运和人脉。",
        qainDetail: "【事业】人际关系助力事业。<br>【财运】人脉带来商机。<br>【感情】欢乐和谐甜蜜。<br>【健康**心情愉快身心健康。",
        qainYiJi: "<b>宜：**交流、合作、庆祝<br><b>忌：**抱怨、孤僻、消极",
        yaos: [
            YaoInfo(type: 9, title: "初九·和兑吉", original: "和兑，吉。", allusion: "平和喜悦。", interpretation: "发自内心的欢喜最为珍贵。"),
            YaoInfo(type: 8, title: "九二·孚兑吉悔亡", original: "孚兑，吉，悔亡。", allusion: "诚信带来的喜悦。", interpretation: "真诚待人获得的快乐没有遗憾。"),
            YaoInfo(type: 9, title: "六三·来兑凶", original: "来兑，凶。", allusion: "刻意讨好。", interpretation: "为了取悦别人而失去自我是不好的。"),
            YaoInfo(type: 8, title: "九四·商兑未宁介疾有喜", original: "商兑，未宁，介疾，有喜。", allusion: "商量中的喜悦。", interpretation: "通过沟通消除隔阂后会感到高兴。"),
            YaoInfo(type: 9, title: "九五·孚于剥有厉", original: "孚于剥，有厉。", allusion: "在衰败时仍然信任。", interpretation: "在困难时期保持信念需要勇气。"),
            YaoInfo(type: 8, title: "上六·引兑", original: "引兑。", allusion: "引导而来的喜悦。", interpretation: "被引导的快乐需要分辨真假。")
        ],
        advice: Advice(
            career: "积极的人际关系网络是职业发展的加速器。",
            love: "快乐和幽默感是感情最好的调味剂。",
           财富: "良好的口碑和信誉会带来更多的商业机会。",
            warning: "喜悦要有度，过度的享乐会让人迷失方向。"
        ),
        bianGua: BianGuaInfo(
            name: "泽水困",
            symbol: "䷮",
            upper: "兑(泽)",
            lower: "坎(水)",
            palace: "兑宫",
            element: "金",
            judge: "小凶",
            nature: "困境穷乏之象",
            trend: "困境中求突破",
            meaning: "变卦为困，陷入困境但终将脱困。",
            advice: "保持信心，困境是暂时的。"
        )
    )
    
    // ====== 占位符（其余56卦简化定义）======
    static let hexagram_临 = Hexagram(name: "地泽临", symbol: "䷒", upper: "坤(地)", lower: "兑(泽)", palace: "坤宫", element: "土", judge: "吉", lines: [8,8,9,8,8,8], guaCi: "元亨利贞。至于八月有凶。", meaning: "君临天下之象，利于治理和管理。", allusion: "泽上有地，临。", poem: "君临天下展宏图\n审时度势展宏图", poemMeaning: "把握时机大展宏图。", qainDetail: "事业顺利，宜进取。", qainYiJi: "宜进取|忌退缩", yaos: [], advice: Advice(career: "事业顺利", love: "感情和睦", wealth: "财运亨通", warning: "注意八月"), bianGua: BianGuaInfo(name: "地天泰", symbol: "䷊", upper: "坤(天)", lower: "乾(天)", palace: "坤宫", element: "土", judge: "大吉", nature: "通泰安康", trend: "阴阳交泰", meaning: "天地交合万物通达。", advice: "把握大好时机。"))
    
    static let hexagram_泰 = Hexagram(name: "地天泰", symbol: "䷊", upper: "坤(地)", lower: "乾(天)", palace: "坤宫", element: "土", judge: "大吉", lines: [8,8,8,9,7,9], guaCi: "小往大来，吉亨。", meaning: "天地交泰、万物通达之象。诸事顺遂，是最佳的卦象之一。", allusion: "天地交，泰。", poem: "三阳开泰运亨通\n万事如意乐融融\n阴阳调和百业兴\n国泰民安享太平", poemMeaning: "最美好的时期，一切都在朝着好的方向发展。", qainDetail: "【事业】大展宏图。【财运】财源滚滚。【感情】美满幸福。【健康】身心康健。", qainYiJi: "宜进取|忌保守", yaos: [], advice: Advice(career: "事业巅峰期", love: "感情最甜蜜", wealth: "财运最佳", warning: "物极必反"), bianGua: BianGuaInfo(name: "天地否", symbol: "䷋", upper: "乾(天)", lower: "坤(地)", palace: "坤宫", element: "土", judge: "凶", nature: "闭塞不通", trend: "阴阳不交", meaning: "天地不交万物受阻。", advice: "耐心等待转机。"))

    static let hexagram_大壮 = Hexagram(name: "雷天大壮", symbol: "䷡", upper: "震(雷)", lower: "乾(天)", palace: "坤宫", element: "土", judge: "吉", lines: [8,8,9,9,7,9], guaCi: "利贞。", meaning: "强盛壮大之象。气势如虹，利于进取但需守正道。", allusion: "雷在天上，大壮。", poem: "雷声震天势如虹\n壮志凌云建奇功\n守正持中行大道\功成名就万人崇", poemMeaning: "实力强大时要坚守正道才能长久。", qainDetail: "事业强势发展。", qainYiJi: "宜进取|忌骄傲", yaos: [], advice: Advice(career: "强势崛起", love: "关系稳固", wealth: "收益大增", warning: "戒骄戒躁"), bianGua: BianGuaInfo(name: "泽天夬", symbol: "䷪", upper: "兑(泽)", lower: "乾(天)", palace: "坤宫", element: "土", judge: "吉", nature: "决断果敢", trend: "去除小人", meaning: "果决决断之象。", advice: "果断处理问题。"))

    static let hexagram_夬 = Hexagram(name: "泽天夬", symbol: "䷪", upper: "兑(泽)", lower: "乾(天)", palace: "坤宫", element: "土", judge: "吉", lines: [9,8,9,9,7,9], guaCi: "扬于王庭，孚号有厉。告自邑，不利即戎。利有攸往。", meaning: "刚决柔之象。宜果敢决断，清除障碍。", allusion: "泽上于天，夬。", poem: "果敢决断除障碍\n正气凛然扫阴霾\n除恶务尽不留患\n拨云见日展雄才", poemMeaning: "关键时刻需要果敢的行动来解决问题。", qainDetail: "宜果断处理问题。", qainYiJi: "宜决断|忌犹豫", yaos: [], advice: Advice(career: "果断决策", love: "明确立场",财富: "清理债务", warning: "不要优柔寡断"), bianGua: BianGuaInfo(name: "天水需", symbol: "䷄", upper: "乾(天)", lower: "坎(水)", palace: "坤宫", element: "土", judge: "吉", nature: "耐心等待", trend: "时机未到", meaning: "需等待时机。", advice: "耐心等待不要急躁。"))
    
    // 更多卦象占位符...
    static let hexagram_需 = Hexagram(name: "天水需", symbol: "䷄", upper: "乾(天)", lower: "坎(水)", palace: "坤宫", element: "土", judge: "吉", lines: [9,7,9,8,9,8], guaCi: "有孚，光亨，贞吉。利涉大川。", meaning: "耐心等待之象。时机未到需耐心等候，不可操之过急。", allusion: "云上于天，需。", poem: "耐心等待时机至\n磨砺剑锋待出鞘\n厚积薄发终有时\n一朝成名天下知", poemMeaning: "等待本身也是一种积极的准备。", qainDetail: "【事业】等待合适机会。<br>【财运】不宜急于投资。<br>【感情】缘分需要等待。", qainYiJi: "宜等待|忌急躁", yaos: [], advice: Advice(career: "耐心筹备", love: "等待缘分", wealth: "持币观望", warning: "不要因为等待而焦虑"), bianGua: BianGuaInfo(name: "水地比", symbol: "䷇", upper: "坎(水)", lower: "坤(地)", palace: "坤宫", element: "土", judge: "吉", nature: "亲近依附", trend: "团结协作", meaning: "比卦，亲密团结。", advice: "加强合作与联盟。"))

    static let hexagram_比 = Hexagram(name: "水地比", symbol: "䷇", upper: "坎(水)", lower: "坤(地)", palace: "坤宫", element: "土", judge: "大吉", lines: [8,8,9,8,9,8], guaCi: "吉。原筮元永贞，无咎。不宁方来，后夫凶。", meaning: "亲辅团结之象。利于合作结盟，广交朋友，互帮互助。", allusion: "地上有水，比。", poem: "四海之内皆兄弟\n携手同行共进退\n团结一心力量大\众志成城创奇迹", poemMeaning: "团结的力量可以克服任何困难。", qainDetail: "【事业】合作共赢。<br>【财运】合伙经营。<br>【感情】相互扶持。", qainYiJi: "宜合作|忌孤立", yaos: [], advice: Advice(career: "团队合作", love: "相互扶持",财富: "合资共赢", warning: "选对合作伙伴"), bianGua: BianGuaInfo(name: "水地比", symbol: "䷇", upper: "坎(水)", lower: "坤(地)", palace: "坤宫", element: "土", judge: "大吉", nature: "循环往复", trend: "维持", meaning: "维持现状。", advice: "继续保持良好状态。"))

    // 其余占位卦...
    static let hexagram_丰 = Hexagram(name: "雷火丰", symbol: "䷶", upper: "震(雷)", lower: "离(火)", palace: "坎宫", element: "水", judge: "大吉", lines: [9,8,9,7,9,8], guaCi: "亨。王假之，勿忧，宜日中。", meaning: "丰盛盛大之象，如日中天，光明照耀。", allusion: "雷电皆至，丰。", poem: "日月同辉照九州\n丰功伟绩万古留\n盛极之时须谨慎\居安思危方无忧", poemMeaning: "丰盛之时更要保持清醒。", qainDetail: "运势鼎盛。", qainYiJi: "宜展示|忌自满", yaos: [], advice: Advice(career: "事业巅峰", love: "感情美满",wealth: "财运鼎盛", warning: "盛极而衰"), bianGua: BianGuaInfo(name: "地火明夷", symbol: "䷣", upper: "坤(地)", lower: "离(火)", palace: "坎宫", element: "水", judge: "小凶", nature: "光明受损", trend: "韬光养晦", meaning: "明夷，韬光养晦。", advice: "隐藏实力等待时机。"))

    static let hexagram_明夷 = Hexagram(name: "地火明夷", symbol: "䷣", upper: "坤(地)", lower: "离(火)", palace: "坎宫", element: "水", judge: "小凶", lines: [8,8,9,7,9,8], guaCi: "利艰贞。", meaning: "光明受伤之象。宜韬光养晦，隐忍待时。", allusion: "明入地中，明夷。", poem: "韬光养晦待时日\n卧薪尝胆志不移\n暗夜终将迎黎明\n凤凰涅槃再展翼", poemMeaning: "低谷期正是积蓄力量的最佳时机。", qainDetail: "【事业】低调行事。<br>【财运】保守理财。<br>【感情】默默守护。", qainYiJi: "宜隐忍|忌张扬", yaos: [], advice: Advice(career: "低调发展", love: "默默守护", wealth: "保守理财", warning: "黎明前的黑暗最难熬"), bianGua: BianGuaInfo(name: "火地晋", symbol: "䷢", upper: "离(火)", lower: "坤(地)", palace: "坎宫", element: "水", judge: "大吉", nature: "光明再现", trend: "走出困境", meaning: "光明重现，走出困境。", advice: "把握新的机遇。"))

    static let hexagram_师 = Hexagram(name: "地水师", symbol: "䷆", upper: "坤(地)", lower: "坎(水)", palace: "坎宫", element: "水", judge: "小吉", lines: [8,8,8,9,8,8], guaCi: "贞，丈人吉，无咎。", meaning: "行军打仗之象。需要有组织有纪律地行动。", allusion: "地中有水，师。", poem: "运筹帷幄决胜千里\n军令如山纪律严\n统帅有方战必胜\凯旋归来庆功宴", poemMeaning: "有组织的行动才能取得胜利。", qainDetail: "【事业】团队作战。<br>【财运】集体投资。<br>【感情】共同努力。", qainYiJi: "宜组织|忌散漫", yaos: [], advice: Advice(career: "带领团队", love: "共同经营", wealth: "集体理财", warning: "纪律是成功的关键"), bianGua: BianGuaInfo(name: "水地比", symbol: "䷇", upper: "坎(水)", lower: "坤(地)", palace: "坤宫", element: "土", judge: "大吉", nature: "团结协作", trend: "合作共赢", meaning: "转为团结协作。", advice: "加强团队合作。"))

    // 艮宫补充
    static let hexagram_损 = Hexagram(name: "山泽损", symbol: "䷨", upper: "艮(山)", lower: "兑(泽)", palace: "艮宫", element: "土", judge: "平", lines: [8,8,7,9,8,8], guaCi: "有孚，元吉，无咎，可贞，利有攸往。曷之用？二簋可用享。", meaning: "减损之象。有失必有得，舍得之间见智慧。", allusion: "山下有泽，损。", poem: "失之东隅收桑榆\n舍小得大智无穷\n退一步海阔天空\n放下方能得始终", poemMeaning: "有时候失去是为了更好的得到。", qainDetail: "【事业】短期利益换取长期发展。<br>【财运】先投入后产出。<br>【感情】付出才有收获。", qainYiJi: "宜舍弃|忌贪婪", yaos: [], advice: Advice(career: "以退为进", love: "学会付出", wealth: "先投后赚", warning: "不要计较一时得失"), bianGua: BianGuaInfo(name: "风雷益", symbol: "䷩", upper: "巽(风)", lower: "震(雷)", palace: "巽宫", element: "木", judge: "大吉", nature: "增益成长", trend: "日益精进", meaning: "增益之象，越来越好。", advice: "把握增长的机会。"))

    static let hexagram_睽 = Hexagram(name: "火泽睽", symbol: "䷥", upper: "离(火)", lower: "兑(泽)", palace: "艮宫", element: "土", judge: "小凶", lines: [9,8,9,8,9,8], guaCi: "小事吉。", meaning: "乖离对立之象。意见分歧，需求同存异。", allusion: "上火下泽，睽。", poem: "同床异梦难同心\n求同存异化干戈\殊途同归终相聚\理解和解万事兴", poemMeaning: "差异并不意味着对立，理解可以化解一切。", qainDetail: "【事业】协调各方意见。<br>【财运】平衡风险收益。<br>【感情】化解矛盾分歧。", qainYiJi: "宜沟通|忌对立", yaos: [], advice: Advice(career: "协调沟通", love: "化解矛盾", wealth: "平衡配置", warning: "不要让分歧演变成对立"), bianGua: BianGuaInfo(name: "天泽履", symbol: "䷉", upper: "乾(天)", lower: "兑(泽)", palace: "艮宫", element: "土", judge: "吉", nature: "谨慎践行", trend: "循规蹈矩", meaning: "履行实践之象。", advice: "谨慎行事按规矩办。"))

    static let hexagram_履 = Hexagram(name: "天泽履", symbol: "䷉", upper: "乾(天)", lower: "兑(泽)", palace: "艮宫", element: "土", judge: "吉", lines: [9,7,9,8,9,8], guaCi: "履虎尾，不咥人，亨。", meaning: "谨慎践行之象。如踩老虎尾巴般小心谨慎，反而平安无事。", allusion: "上天下泽，履。", poem: "小心翼翼踏征途\n如履薄冰志不改\n谨慎行事保平安\n步步为营达彼岸", poemMeaning: "谨慎不是胆怯而是智慧的体现。", qainDetail: "【事业】谨慎推进项目。<br>【财务管理风险。<br>【感情】细心呵护关系。", qainYiJi: "宜谨慎|忌鲁莽", yaos: [], advice: Advice(career: "谨慎推进", love: "细心呵护", wealth: "风险管理", warning: "粗心大意是大忌"), bianGua: BianGuaInfo(name: "地天泰", symbol: "䷊", upper: "坤(地)", lower: "乾(天)", palace: "坤宫", element: "土", judge: "大吉", nature: "通达顺畅", trend: "万事亨通", meaning: "转为通泰之象。", advice: "大胆行动。"))

    static let hexagram_中孚 = Hexagram(name: "风泽中孚", symbol: "䷼", upper: "巽(风)", lower: "兑(泽)", palace: "艮宫", element: "土", judge: "大吉", lines: [9,8,9,8,9,8], guaCi: "豚鱼，吉，利涉大川，利贞。", meaning: "诚信中正之象。以诚待人，信守诺言，必获信任。", allusion: "泽上有风，中孚。", poem: "一言九鼎重千金\n诚实守信立根本\以诚感人金石开\德行天下传美名", poemMeaning: "诚信是这个世界上最宝贵的无形资产。", qainDetail: "【事业】以诚信为本。<br>【财运】信用带来财富。<br>【感情】真诚换来真爱。", qainYiJi: "宜诚信|忌欺骗", yaos: [], advice: Advice(career: "诚信经营", love: "以诚相待", wealth: "信用理财", warning: "失信代价巨大"), bianGua: BianGuaInfo(name: "山雷颐", symbol: "䷐", upper: "艮(山)", lower: "震(雷)", palace: "艮宫", element: "土", judge: "吉", nature: "养育修养", trend: "充实自我", meaning: "颐卦，修养养育。", advice: "注重自我提升。"))

    static let hexagram_渐 = Hexagram(name: "风山渐", symbol: "䷴", upper: "巽(风)", lower: "艮(山)", palace: "艮宫", element: "土", judge: "吉", lines: [8,8,7,7,9,8], guaCi: "女归吉，利贞。", meaning: "循序渐进之象。如鸿雁南飞，一步步接近目标。", allusion: "山上有木，渐。", poem: "鸿雁南飞循序进\n步步为营稳扎营\水滴石穿终有日\积跬步致千里程", poemMeaning: "成功从来都不是一蹴而就的，而是日积月累的结果。", qainDetail: "【事业】稳步发展。<br>【财运】长期投资。<br>【感情】慢慢培养。", qainYiJi: "宜渐进|忌急进", yaos: [], advice: Advice(career: "稳步发展", love: "慢慢培养",财富: "长期投资", warning: "欲速则不达"), bianGua: BianGuaInfo(name: "泽地萃", symbol: "䷢", upper: "兑(泽)", lower: "坤(地)", palace: "兑宫", element: "金", judge: "吉", nature: "聚合汇聚", trend: "团结力量", meaning: "聚合之象。", advice: "凝聚力量共创未来。"))

    // 震宫补充
    static let hexagram_随 = Hexagram(name: "雷泽随", symbol: "䷐", upper: "震(雷)", lower: "兑(泽)", palace: "震宫", element: "木", judge: "大吉", lines: [9,8,9,8,9,8], guaCi: "元亨利贞，无咎。", meaning: "随从顺随之象。与时俱进，顺势而为，灵活变通。", allusion: "泽中有雷，随。", poem: "顺风行船快如飞\n因势利导显智慧\随机应变转乾坤\与时俱进创辉煌", poemMeaning: "最聪明的人不是改变世界而是适应世界。", qainDetail: "【事业】紧跟趋势。<br>【财运】顺势投资。<br>【感情**随缘相处。", qainYiJi: "宜随顺|忌固执", yaos: [], advice: Advice(career: "紧跟趋势", love: "随缘相处", wealth: "顺势投资", warning: "不要逆势而行"), bianGua: BianGuaInfo(name: "天雷无妄", symbol: "䷘", upper: "乾(天)", lower: "震(雷)", palace: "巽宫", element: "木", judge: "吉", nature: "无妄而得", trend: "意外之福", meaning: "无妄之象。", advice: "保持平常心。"))

    static let hexagram_无妄 = Hexagram(name: "天雷无妄", symbol: "䷘", upper: "乾(天)", lower: "震(雷)", palace: "震宫", element: "木", judge: "吉", lines: [9,7,9,8,9,8], guaCi: "元亨利贞。其匪正有眚，不利有攸往。", meaning: "无妄而得之象。不存妄想，顺其自然，反而有意外的收获。", allusion: "天下雷行，物与无妄。", poem: "无心插柳柳成荫\n顺其自然福自来\n不存妄念心坦荡\无心之举显情怀", poemMeaning: "有时候最好的结果来自于不刻意的努力。", qainDetail: "【事业】顺其自然。<br>【财运】意外收获。<br>【感情**缘分天注定。", qainYiJi: "宜平常心|忌妄念", yaos: [], advice: Advice(career: "顺其自然", love: "缘分天定", wealth: "意外之财", warning: "不要强求"), bianGua: BianGuaInfo(name: "火雷噬嗑", symbol: "䷔", upper: "离(火)", lower: "震(雷)", palace: "巽宫", element: "木", judge: "吉", nature: "决断执行", trend: "破除障碍", meaning: "噬嗑，咬合决断。", advice: "果断处理问题。"))

    static let hexagram_噬嗑 = Hexagram(name: "火雷噬嗑", symbol: "䷔", upper: "离(火)", lower: "震(雷)", palace: "震宫", element: "木", judge: "吉", lines: [9,8,9,9,9,8], guaCi: "亨。利用狱。", meaning: "咬合决断之象。面对障碍要果断处理，如同咀嚼食物一般彻底。", allusion: "雷电噬嗑。", poem: "当断则断不拖延\n雷厉风行除障碍\咬碎困难吞下去\破茧成蝶展翅翔", poemMeaning: "面对问题时果断行动往往比犹豫不决要好得多。", qainDetail: "【事业】果断决策。<br>【财运】快速反应。<br>【感情**直面问题。", qainYiJi: "宜决断|忌拖延", yaos: [], advice: Advice(career: "果断决策", love: "直面问题", wealth: "快速反应", warning: "犹豫不决会错过良机"), bianGua: BianGuaInfo(name: "山雷颐", symbol: "䷑", upper: "艮(山)", lower: "震(雷)", palace: "艮宫", element: "土", judge: "吉", nature: "养育修养", trend: "充实内在", meaning: "颐卦，修养养育。", advice: "注重内在修养。"))

    static let hexagram_颐 = Hexagram(name: "山雷颐", symbol: "䷑", upper: "艮(山)", lower: "震(雷)", palace: "震宫", element: "木", judge: "吉", lines: [8,8,7,9,8,8], guaCi: "贞吉。观颐，自求口实。", meaning: "颐养修炼之象。注重内在修养和能力提升，充实自己。", allusion: "山下有雷，颐。", poem: "十年磨剑待今朝\n潜心修行练内功\腹有诗书气自华\修养到家万事通", poemMeaning: "投资自己是永远不会亏损的选择。", qainDetail: "【事业】提升技能。<br>【财力投资自己。<br>【感情】修炼性格。", qainYiJi: "宜修养|忌浮躁", yaos: [], advice: Advice(career: "提升能力", love: "修炼性格", wealth: "投资自己", warning: "不要急于求成"), bianGua: BianGuaInfo(name: "风雷益", symbol: "䷩", upper: "巽(风)", lower: "震(雷)", palace: "巽宫", element: "木", judge: "大吉", nature: "增益成长", trend: "日益精进", meaning: "益卦，增益成长。", advice: "把握每一个成长的机会。"))

    static let hexagram_屯2 = hexagram_屯  // 复用

    static let hexagram_复 = Hexagram(name: "地雷复", symbol: "䷗", upper: "坤(地)", lower: "震(雷)", palace: "震宫", element: "木", judge: "大吉", lines: [8,8,8,9,8,8], guaCi: "亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。", meaning: "一阳来复之象。冬至阳生，万物复苏，否极泰来的转折点。", allusion: "雷在地中，复。", poem: "一阳来复万物生\n冬去春来又一年\否极泰来转机现\重整旗鼓再向前", poemMeaning: "最坏的时刻往往是好转的开始，永远不要放弃希望。", qainDetail: "【事业】触底反弹。<br>【财运】回暖迹象。<br>【感情】破镜重圆。", qainYiJi: "宜重启|忌放弃", yaos: [], advice: Advice(career: "重新出发", love: "挽回感情", wealth: "抄底布局", warning: "转折点需要勇气把握"), bianGua: BianGuaInfo(name: "山地剥", symbol: "䷖", upper: "艮(山)", lower: "坤(地)", palace: "乾宫", element: "金", judge: "小凶", nature: "剥落损耗", trend: "固本培元", meaning: "剥卦，根基受损。", advice: "稳固基础。"))

    static let hexagram_益 = Hexagram(name: "风雷益", symbol: "䷩", upper: "巽(风)", lower: "震(雷)", palace: "震宫", element: "木", judge: "大吉", lines: [9,8,9,9,9,8], guaCi: "利有攸往，利涉大川。", meaning: "增益受益之象。如风吹助雷鸣之势，各方面都在增长进步。", allusion: "风雷，益。", poem: "风助雷威声势浩\n日新月异步步高\锦上添花更上一层\蒸蒸日上领风骚", poemMeaning: "当所有因素都有利于你时，成功就是自然而然的结果。", qainDetail: "【事业】快速增长。<br>【财运】收益增加。<br>【感情】关系升温。", qainYiJi: "宜进取|忌保守", yaos: [], advice: Advice(career: "快速发展", love: "感情升温", wealth: "收益大增", warning: "高速发展也要注意质量"), bianGua: BianGuaInfo(name: "风雷益", symbol: "䷩", upper: "巽(风)", lower: "震(雷)", palace: "巽宫", element: "木", judge: "大吉", nature: "循环向上", trend: "持续增长", meaning: "持续增益。", advice: "继续保持增长势头。"))

    // 巽宫补充
    static let hexagram_小畜 = Hexagram(name: "风天小畜", symbol: "䷈", upper: "巽(风)", lower: "乾(天)", palace: "巽宫", element: "木", judge: "小吉", lines: [9,8,9,9,7,9], guaCi: "亨。密云不雨，自我西郊。", meaning: "小有积蓄之象。虽然进展不大但稳步前进，积少成多。", allusion: "风行天上，小畜。", poem: "积沙成塔聚滴水\跬步千里始于足\点滴积累终成海\持之以恒必有所成", poemMeaning: "伟大的成就都是由无数个小进步积累而成的。", qainDetail: "【事业】稳步推进。<br>【财运**小额积累。<br>【感情**慢慢培养。", qainYiJi: "宜积累|忌急躁", yaos: [], advice: Advice(career: "稳步推进", love: "细水长流",财富: "小额定投", warning: "不要嫌进步慢"), bianGua: BianGuaInfo(name: "天火同人", symbol: "䷌", upper: "乾(天)", lower: "离(火)", palace: "离宫", element: "火", judge: "大吉", nature: "同心协力", trend: "合作共赢", meaning: "同人，志同道合。", advice: "寻找志同道合的伙伴。"))

    static let hexagram_家人 = Hexagram(name: "风火家人", symbol: "䷤", upper: "巽(风)", lower: "离(火)", palace: "巽宫", element: "木", judge: "吉", lines: [9,8,9,7,9,8], guaCi: "利女贞。", meaning: "家庭伦理之象。家和万事兴，注重家庭关系和内部和谐。", allusion: "风自火出，家人。", poem: "家和万事兴百业旺\父慈子孝乐融融\相亲相爱一家人\温暖港湾挡风浪", poemMeaning: "家庭和谐是一切幸福的基石。", qainDetail: "【事业】团队如家。<br>【财力家庭理财。<br>【感情】家庭和睦。", qainYiJi: "宜和谐|忌争吵", yaos: [], advice: Advice(career: "团队建设", love: "家庭和睦",财富: "家庭理财", warning: "家和万事兴"), bianGua: BianGuaInfo(name: "风火家人", symbol: "䷤", upper: "巽(风)", lower: "离(火)", palace: "巽宫", element: "木", judge: "吉", nature: "循环往复", trend: "维持", meaning: "维持和谐。", advice: "继续维护良好关系。"))

    static let hexagram_益2 = hexagram_益  // 复用

    static let hexagram_无妄2 = hexagram_无妄  // 复用

    static let hexagram_噬嗑2 = hexagram_噬嗑  // 复用

    static let hexagram_颐2 = hexagram_颐  // 复用

    static let hexagram_蛊 = Hexagram(name: "山风蛊", symbol: "䷑", upper: "艮(山)", lower: "巽(风)", palace: "巽宫", element: "木", judge: "小凶", lines: [8,8,7,9,8,8], guaCi: "元亨，利涉大川。先甲三日，后甲三日。", meaning: "整顿改革之象。事物败坏需要从根本上进行整顿和革新。", allusion: "山下有风，蛊。", poem: "刮骨疗毒治沉疴\推陈出新焕生机\大胆改革破陈规\凤凰涅槃再起飞", poemMeaning: "有时候彻底的改变是唯一的出路。", qainDetail: "【事业】改革整顿。<br>【财运清理债务。<br>【感情**修复关系。", qainYiJi: "宜改革|忌守旧", yaos: [], advice: Advice(career: "改革整顿", love: "修复关系",财富: "清理重组", warning: "不破不立"), bianGua: BianGuaInfo(name: "地风升", symbol: "䷭", upper: "坤(地)", lower: "巽(风)", palace: "巽宫", element: "木", judge: "大吉", nature: "上升发展", trend: "步步高升", meaning: "升卦，上升发展。", advice: "把握上升的机会。"))

    // 离宫补充
    static let hexagram_旅 = Hexagram(name: "火山旅", symbol: "䷷", upper: "离(火)", lower: "艮(山)", palace: "离宫", element: "火", judge: "小吉", lines: [9,8,9,8,8,8], guaCi: "小亨。旅贞吉。", meaning: "旅行漂泊之象。身处异乡或变动之中，需要适应环境和保持初心。", allusion: "山上有火，旅。", poem: "天涯何处无芳草\身在异乡念故乡\随遇而安心自在\他乡亦是好风光", poemMeaning: "无论身在何地都能找到属于自己的位置和价值。", qainDetail: "【事业】外出发展。<br>【财运异地赚钱。<br>【感情**异地恋/新认识。", qainYiJi: "宜适应|忌固执", yaos: [], advice: Advice(career: "外出发展", love: "异地相处", wealth: "异地投资", warning: "入乡随俗"), bianGua: BianGuaInfo(name: "火风鼎", symbol: "䷱", upper: "离(火)", lower: "巽(风)", palace: "离宫", element: "火", judge: "大吉", nature: "鼎新变革", trend: "革故鼎新", meaning: "鼎卦，革故鼎新。", advice: "勇于改革创新。"))

    static let hexagram_鼎 = Hexagram(name: "火风鼎", symbol: "䷱", upper: "离(火)", lower: "巽(风)", palace: "离宫", element: "火", judge: "大吉", lines: [9,8,9,8,9,8], guaCi: "元吉，亨。", meaning: "鼎新革故之象。如烹煮美食般精心打造新的事物，去芜存菁。", allusion: "木上有火，鼎。", poem: "革故鼎新创伟业\去粗取精铸辉煌\精益求精出精品\匠心独运传四方", poemMeaning: "只有不断地改进和创新才能创造出真正有价值的东西。", qainDetail: "【事业】创新改革。<br>【财运打造产品。<br>【感情**重塑关系。", qainYiJi: "宜创新|忌守旧", yaos: [], advice: Advice(career: "改革创新", love: "重塑关系", wealth: "打造产品", warning: "不进则退"), bianGua: BianGuaInfo(name: "火天大有", symbol: "䷍", upper: "离(火)", lower: "乾(天)", palace: "乾宫", element: "金", judge: "大吉", nature: "丰盛昌隆", trend: "繁荣发展", meaning: "大有，丰盛昌隆。", advice: "充分利用现有优势。"))

    static let hexagram_未济 = Hexagram(name: "火水未济", symbol: "䷿", upper: "离(火)", lower: "坎(水)", palace: "离宫", element: "火", judge: "平", lines: [9,8,8,8,9,8], guaCi: "亨。小狐汔济，濡其尾，无攸利。", meaning: "事未完成之象。虽然尚未成功但也不必气馁，继续努力终将达成目标。", allusion: "火在水上，未济。", poem: "功亏一篑惜未成\再接再厉续长征\坚持到底终不负\水滴石穿事竟成", poemMeaning: "未完成并不等于失败，只是还需要更多的时间和努力。", qainDetail: "【事业】接近成功。<br>【财运**即将见效。<br>【感情**只差一步。", qainYiJi: "宜坚持|忌放弃", yaos: [], advice: Advice(career: "坚持到底", love: "再努把力",财富: "耐心等待", warning: "黎明前最黑暗"), bianGua: BianGuaInfo(name: "水火既济", symbol: "䷾", upper: "坎(水)", lower: "离(火)", palace: "坎宫", element: "水", judge: "吉", nature: "功德圆满", trend: "善始善终", meaning: "既济，功德圆满。", advice: "完美收官。"))

    static let hexagram_蒙 = Hexagram(name: "山水蒙", symbol: "䷃", upper: "艮(山)", lower: "坎(水)", palace: "离宫", element: "火", judge: "小吉", lines: [8,8,7,9,8,8], guaCi: "亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。", meaning: "启蒙教导之象。处于学习探索阶段，虚心求教，开启智慧之门。", allusion: "山下出泉，蒙。", poem: "学海无涯苦作舟\启蒙明智开慧眼\虚心求学得真知\博古通今成大器", poemMeaning: "保持学习的态度是通往成功的必经之路。", qainDetail: "【事业】学习阶段。<br>【财力投资教育。<br>【感情**互相学习。", qainYiJi: "宜学习|忌自满", yaos: [], advice: Advice(career: "学习进修", love: "共同成长", wealth: "教育投资", warning: "活到老学到老"), bianGua: BianGuaInfo(name: "山风蛊", symbol: "䷑", upper: "艮(山)", lower: "巽(风)", palace: "巽宫", element: "木", judge: "小凶", nature: "整顿改革", trend: "破旧立新", meaning: "蛊卦，整顿改革。", advice: "勇于改革和创新。"))

    static let hexagram_涣 = Hexagram(name: "风水涣", symbol: "䷺", upper: "巽(风)", lower: "坎(水)", palace: "离宫", element: "火", judge: "小凶", lines: [9,8,9,8,9,8], guaCi: "亨。王假有庙，利涉大川，利贞。", meaning: "离散涣散之象。原有结构正在解体需要重新整合，也可以理解为打破束缚获得自由。", allusion: "风行水上，涣。", poem: "烟消云散见晴空\破茧成蝶获自由\打散重来更坚强\涅槃重生展宏图", poemMeaning: "有时候解散是为了更好地重组，放手是为了更好地拥有。", qainDetail: "【事业】重组调整。<br>【财力分散投资。<br>【感情**给予空间。", qainYiJi: "宜分散|忌集中", yaos: [], advice: Advice(career: "重组调整", love: "给予空间", wealth: "分散配置", warning: "分散不等于混乱"), bianGua: BianGuaInfo(name: "天水讼", symbol: "䷅", upper: "乾(天)", lower: "坎(水)", palace: "离宫", element: "火", judge: "小凶", nature: "争端诉讼", trend: "以和为贵", meaning: "讼卦，争论诉讼。", advice: "尽量避免冲突。"))

    static let hexagram_讼 = Hexagram(name: "天水讼", symbol: "䷅", upper: "乾(天)", lower: "坎(水)", palace: "离宫", element: "火", judge: "小凶", lines: [9,7,9,8,9,8], guaCi: "有孚窒。惕中吉。终凶。利见大人，不利涉大川。", meaning: "争端争议之象。容易与他人发生分歧和冲突，宜退让和解。", allusion: "天与水违行，讼。", poem: "退一步海阔天空\让三分心平气和\争强好胜伤和气\以和为贵万事兴", poemMeaning: "赢得争论往往意味着失去关系，有时候退让是更大的智慧。", qainDetail: "【事业】避免纠纷。<br>【财力法律风险。<br>【感情**化解矛盾。", qainYiJi: "宜和解|忌争斗", yaos: [], advice: Advice(career: "避免冲突", love: "化解矛盾", wealth: "规避法务", warning: "和气生财"), bianGua: BianGuaInfo(name: "地天泰", symbol: "䷊", upper: "坤(地)", lower: "乾(天)", palace: "坤宫", element: "土", judge: "大吉", nature: "和解通泰", trend: "重归于好", meaning: "转为通泰之象。", advice: "握手言和。"))

    static let hexagram_同人 = Hexagram(name: "天火同人", symbol: "䷌", upper: "乾(天)", lower: "离(火)", palace: "离宫", element: "火", judge: "大吉", lines: [9,7,9,9,9,8], guaCi: "同人于野，亨。利涉大川，利君子贞。", meaning: "志同道合之象。找到与自己理念相同的人和伙伴，团结协作共创辉煌。", allusion: "天与火，同人。", poem: "志同道合聚一堂\同心协力创辉煌\众人拾柴火焰高\携手同行共远方", poemMeaning: "找到对的伙伴可以让成功的道路变得轻松许多。", qainDetail: "【事业】寻找合伙人。<br>【财运合作共赢。<br>【感情**灵魂伴侣。", qainYiJi: "宜合作|忌独行", yaos: [], advice: Advice(career: "寻找伙伴", love: "志同道合",财富: "合作共赢", warning: "一个人走得快一群人走得远"), bianGua: BianGuaInfo(name: "火天大有", symbol: "䷍", upper: "离(火)", lower: "乾(天)", palace: "乾宫", element: "金", judge: "大吉", nature: "丰盛昌隆", trend: "繁荣发展", meaning: "大有，丰盛昌隆。", advice: "充分利用资源。"))

    // 坤宫补充
    static let hexagram_复2 = hexagram_复  // 复用
    
    static let hexagram_临2 = hexagram_临  // 复用

    // 兑宫补充
    static let hexagram_困 = Hexagram(name: "泽水困", symbol: "䷮", upper: "兑(泽)", lower: "坎(水)", palace: "兑宫", element: "金", judge: "小凶", lines: [8,9,8,8,9,8], guaCi: "亨。贞大人吉，无咎。有言不信。", meaning: "困境穷乏之象。处于困难之中但并非绝境，需要保持信心和耐心。", allusion: "泽无水，困。", poem: "困顿之中志不移\卧薪尝胆待天机\宝剑锋从磨砺出\梅花香自苦寒来", poemMeaning: "困难只是暂时的考验，坚持下来你会变得更强。", qainDetail: "【事业】面临困境。<br>【财力资金紧张。<br>【感情**经受考验。", qainYiJi: "宜坚持|忌放弃", yaos: [], advice: Advice(career: "咬牙坚持", love: "共度难关", wealth: "缩减开支", warning: "困难是成长的催化剂"), bianGua: BianGuaInfo(name: "泽地萃", symbol: "䷢", upper: "兑(泽)", lower: "坤(地)", palace: "兑宫", element: "金", judge: "吉", nature: "聚集汇聚", trend: "凝聚力量", meaning: "萃卦，聚合汇聚。", advice: "凝聚力量共同发展。"))

    static let hexagram_萃 = Hexagram(name: "泽地萃", symbol: "䷢", upper: "兑(泽)", lower: "坤(地)", palace: "兑宫", element: "金", judge: "吉", lines: [8,8,9,8,9,8], guaCi: "亨。王假有庙，利见大人，亨，利贞。用大牲吉。利有攸往。", meaning: **聚集荟萃之象。人才和资源聚集在一起，形成合力。适合团队合作和资源整合。", allusion: "泽上于地，萃。", poem: "群英荟萃聚一堂\各展所长创辉煌\集聚资源力量大\携手同行谱华章", poemMeaning: "当优秀的资源和人汇聚在一起时就会产生惊人的化学反应。", qainDetail: "【事业】资源整合。<br>【财力集合投资。<br>【感情**圈子社交。", qainYiJi: "宜聚集|忌分散", yaos: [], advice: Advice(career: "资源整合", love: "融入圈子", wealth: "集合投资", warning: "聚沙成塔"), bianGua: BianGuaInfo(name: "泽山咸", symbol: "䷞", upper: "兑(泽)", lower: "艮(山)", palace: "兑宫", element: "金", judge: "大吉", nature: "感应吸引", trend: "心灵相通", meaning: "咸卦，感应相通。", advice: "用心感受对方。"))

    static let hexagram_咸 = Hexagram(name: "泽山咸", symbol: "䷞", upper: "兑(泽)", lower: "艮(山)", palace: "兑宫", element: "金", judge: "大吉", lines: [8,8,7,9,9,8], guaCi: "亨，利贞。取女吉。", meaning: **感应交流之象。心有灵犀一点通，情感上的默契和共鸣。", allusion: "山上有泽，咸。", poem: "心有灵犀一点通\相视一笑意无穷\默契无需言语诉\情深义重两心同", poemMeaning: "真正的连接不需要太多语言，一个眼神就足够。", qainDetail: "【事业】默契配合。<br>【财运直觉判断。<br>【感情**心灵相通。", qainYiJi: "宜感应|忌强迫", yaos: [], advice: Advice(career: "默契配合", love: "心灵相通", wealth: "相信直觉", warning: "强扭的瓜不甜"), bianGua: BianGuaInfo(name: "蹇", symbol: "䷦", upper: "坎(水)", lower: "艮(山)", palace: "兑宫", element: "金", judge: "小凶", nature: "艰难险阻", trend: "迎难而上", meaning: "蹇卦，艰难险阻。", advice: "勇敢面对困难。"))

    static let hexagram蹇 = Hexagram(name: "水山蹇", symbol: "䷦", upper: "坎(水)", lower: "艮(山)", palace: "兑宫", element: "金", judge: "小凶", lines: [8,9,8,8,7,8], guaCi: "利西南，不利东北。利见大人。贞吉。", meaning: "艰难困苦之象。前路充满障碍和困难，需要毅力和智慧来克服。", allusion: "山上有水，蹇。", poem: "披荆斩棘勇向前\千难万险只等闲\世上无难事有心\铁杵磨成绣花针", poemMeaning: "所有的困难都是为了考验我们是否有资格获得最终的奖赏。", qainDetail: "【事业】困难重重。<br>【财力举步维艰。<br>【感情**历经波折。", qainYiJi: "宜坚持|忌退缩", yaos: [], advice: Advice(career: "迎难而上", love: "共渡难关", wealth: "坚守阵地", warning: "困难越大收获越大"), bianGua: BianGuaInfo(name: "地山谦", symbol: "䷎", upper: "坤(地)", lower: "艮(山)", palace: "兑宫", element: "土", judge: "大吉", nature: "谦逊低调", trend: "以退为进", meaning: "谦卦，谦逊有福。", advice: "保持谦虚谨慎。"))

    static let hexagram_谦 = Hexagram(name: "地山谦", symbol: "䷎", upper: "坤(地)", lower: "艮(山)", palace: "兑宫", element: "土", judge: "大吉", lines: [8,8,8,8,7,8], guaCi: "亨，君子有终。", meaning: **谦逊有德之象。谦虚使人进步，骄傲使人落后。谦逊的人最受欢迎也最有福气。", allusion: "地中有山，谦。", poem: "虚怀若谷纳百川\谦恭下士得人心\满招损来谦受益\低调做人高调做事", poemMeaning: "真正的强者从不炫耀因为他们不需要证明什么。", qainDetail: "【事业】谦虚谨慎。<br>【财运低调理财。<br>【感情**谦和相处。", qainYiJi: "宜谦虚|忌骄傲", yaos: [], advice: Advice(career: "谦虚谨慎", love: "谦和相处", wealth: "低调理财", warning: "骄傲是失败的开始"), bianGua: BianGuaInfo(name: "雷山小过", symbol: "䷽", upper: "震(雷)", lower: "艮(山)", palace: "兑宫", element: "金", judge: "小吉", nature: "小有过失", trend: "及时修正", meaning: "小过卦，小的过失。", advice: "及时发现并改正小问题。"))

    static let hexagram_小过 = Hexagram(name: "雷山小过", symbol: "䷽", upper: "震(雷)", lower: "艮(山)", palace: "兑宫", element: "金", judge: "小吉", lines: [8,8,7,9,8,8], guaCi: "亨，利贞。可小事，不可大事。飞鸟遗之音，不宜上宜下，大吉。", meaning: "小有过失之象。有些小的偏差和过失需要及时纠正，不影响大局。", allusion: "山上有雷，小过。", poem: "人非圣贤孰无过\过而能改善莫大焉\小错及时修正好\防微杜渐免大祸", poemMeaning: "犯错不可怕可怕的是不知道自己在犯错或者知道了不改正。", qainDetail: "【事业】小问题修正。<br>【财力小误差调整。<br>【感情**小摩擦化解。", qainYiJi: "宜修正|忌放大", yaos: [], advice: Advice(career: "修正偏差", love: "化解小摩擦", wealth: "调整策略", warning: "小错不改酿大祸"), bianGua: BianGuaInfo(name: "泽雷随", symbol: "䷐", upper: "兑(泽)", lower: "震(雷)", palace: "震宫", element: "木", judge: "大吉", nature: "顺时应势", trend: "灵活应变", meaning: "随卦，顺势而为。", advice: "灵活适应变化。"))

    static let hexagram_归妹 = Hexagram(name: "雷泽归妹", symbol: "䷵", upper: "震(雷)", lower: "兑(泽)", palace: "兑宫", element: "金", judge: "小凶", lines: [9,8,9,8,9,8], guaCi: "征凶，无攸利。", meaning: "归宿归宿之象。寻找属于自己的位置和归属，过程可能曲折但终点值得期待。", allusion: "泽上有雷，归妹。", poem: "千里寻寻觅归宿\历尽千帆终靠岸\家是温暖的港湾\心安之处即是家", poemMeaning: "无论走了多远最终都会找到属于自己的地方。", qainDetail: "【事业】寻找定位。<br>【财力确定方向。<br>【感情**寻找归属。", qainYiJi: "宜寻找|忌迷茫", yaos: [], advice: Advice(career: "找准定位", love: "寻找归属", wealth: "明确方向", warning: "方向比速度更重要"), bianGua: BianGuaInfo(name: "火泽睽", symbol: "䷥", upper: "离(火)", lower: "兑(泽)", palace: "艮宫", element: "土", judge: "小凶", nature: "乖离不合", trend: "求同存异", meaning: "睽卦，差异分歧。", advice: "尊重差异求同存异。"))
}
