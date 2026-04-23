/**
 * 数据层 - 塔罗牌数据
 * 包含：78张塔罗牌的牌义、牌阵定义等基础数据
 */

// 大阿卡纳（22张）
const MAJOR_ARCANA = [
  {
    id: 0, name: '愚者', nameEn: 'The Fool',
    meaning: '新的开始，冒险，天真，自由',
    upright: '表示新的开始、冒险精神、乐观态度。您正站在人生的新起点上，充满无限可能。',
    reversed: '可能表示鲁莽行事、缺乏计划、过于天真。建议谨慎思考后再做决定。'
  },
  {
    id: 1, name: '魔术师', nameEn: 'The Magician',
    meaning: '创造力，意志力，行动力，自信',
    upright: '您拥有实现目标所需的所有资源和能力。现在是采取行动的最佳时机。',
    reversed: '可能表示能力未被充分利用，或有欺骗的成分。需要诚实面对自己。'
  },
  {
    id: 2, name: '女祭司', nameEn: 'The High Priestess',
    meaning: '直觉，智慧，神秘，内在知识',
    upright: '相信您的直觉和内在智慧。答案往往隐藏在表面之下，需要静心倾听。',
    reversed: '可能表示忽视了内心的声音，或者被表面的现象所迷惑。'
  },
  {
    id: 3, name: '皇后', nameEn: 'The Empress',
    meaning: '丰饶，母性，自然，创造力',
    upright: '象征着丰收和创造力的爆发。您的努力将会得到丰厚的回报。',
    reversed: '可能表示创造力的阻塞，或者过度依赖他人。'
  },
  {
    id: 4, name: '皇帝', nameEn: 'The Emperor',
    meaning: '权威，稳定，结构，父亲形象',
    upright: '需要建立秩序和规则。您的领导能力和决断力将帮助您克服困难。',
    reversed: '可能表示独裁、僵化或缺乏自律。需要找到平衡。'
  },
  {
    id: 5, name: '教皇', nameEn: 'The Hierophant',
    meaning: '传统，信仰，教育，精神指引',
    upright: '遵循传统和规则会带来好处。寻求导师或有经验的人的建议。',
    reversed: '可能表示打破传统，或者盲目追随而不思考。'
  },
  {
    id: 6, name: '恋人', nameEn: 'The Lovers',
    meaning: '爱情，选择，和谐，价值观',
    upright: '重要的关系或选择即将出现。跟随内心，选择真正符合您价值观的道路。',
    reversed: '可能表示关系中的不和谐，或者错误的选择。'
  },
  {
    id: 7, name: '战车', nameEn: 'The Chariot',
    meaning: '胜利，意志力，控制，决心',
    upright: '通过坚定的意志力和自律，您将克服一切障碍，取得胜利。',
    reversed: '可能表示失控，或者方向不明确。需要重新集中注意力。'
  },
  {
    id: 8, name: '力量', nameEn: 'Strength',
    meaning: '内在力量，勇气，耐心，同情心',
    upright: '用温柔和耐心而非武力来克服困难。您的内在力量比想象中更强大。',
    reversed: '可能表示自我怀疑，或者情绪失控。需要找回内心的平静。'
  },
  {
    id: 9, name: '隐者', nameEn: 'The Hermit',
    meaning: '内省，孤独，寻求真理，指引',
    upright: '需要独处和反思的时间。退后一步，从更高的视角审视问题。',
    reversed: '可能表示过度孤立，或者逃避问题。需要与他人连接。'
  },
  {
    id: 10, name: '命运之轮', nameEn: 'Wheel of Fortune',
    meaning: '命运，变化，周期，好运',
    upright: '命运之轮正在转动，好运即将来临。抓住机会，顺势而为。',
    reversed: '可能表示逆境或不顺。记住，困难只是暂时的，一切都会好转。'
  },
  {
    id: 11, name: '正义', nameEn: 'Justice',
    meaning: '公正，真理，因果，法律',
    upright: '公正和平衡即将到来。您的行为将带来相应的结果，做好事的回报正在路上。',
    reversed: '可能表示不公或逃避责任。需要面对真相，承担应有的责任。'
  },
  {
    id: 12, name: '倒吊人', nameEn: 'The Hanged Man',
    meaning: '牺牲，暂停，新视角，放手',
    upright: '需要换个角度看问题。有时候放手和等待比强行推进更明智。',
    reversed: '可能表示抗拒改变，或者无谓的牺牲。需要重新评估情况。'
  },
  {
    id: 13, name: '死神', nameEn: 'Death',
    meaning: '结束，转变，新生，释放',
    upright: '一个重要的阶段即将结束，为新开始腾出空间。拥抱变化，不要害怕。',
    reversed: '可能表示抗拒结束，或者转变的延迟。需要学会放手。'
  },
  {
    id: 14, name: '节制', nameEn: 'Temperance',
    meaning: '平衡，调和，耐心，中庸',
    upright: '寻求平衡和调和。避免极端，找到中庸之道将带来和谐。',
    reversed: '可能表示失衡，或者过度。需要重新调整生活节奏。'
  },
  {
    id: 15, name: '恶魔', nameEn: 'The Devil',
    meaning: '束缚，欲望，物质主义，诱惑',
    upright: '您可能受到某种束缚或不良习惯的困扰。认识到这些束缚，您就有能力挣脱。',
    reversed: '即将从束缚中解放出来。摆脱依赖，重获自由。'
  },
  {
    id: 16, name: '塔', nameEn: 'The Tower',
    meaning: '突变，启示，解放，崩塌',
    upright: '突然的变化或启示将打破旧有的结构。虽然剧烈，但这将为新的成长铺平道路。',
    reversed: '可能表示避免必要的改变，或者从内而外的缓慢崩塌。'
  },
  {
    id: 17, name: '星星', nameEn: 'The Star',
    meaning: '希望，灵感，宁静，指引',
    upright: '希望和灵感之光照亮前方。保持信念，您的愿望正在显化的路上。',
    reversed: '可能表示失去希望，或者信心动摇。需要重新点燃内心的光芒。'
  },
  {
    id: 18, name: '月亮', nameEn: 'The Moon',
    meaning: '幻觉，恐惧，潜意识，直觉',
    upright: '事情可能不像表面看起来那样。信任直觉，但不要被恐惧和幻觉所左右。',
    reversed: '迷雾即将散去，真相将浮出水面。恐惧正在消退。'
  },
  {
    id: 19, name: '太阳', nameEn: 'The Sun',
    meaning: '快乐，成功，活力，真相',
    upright: '充满阳光和正能量的时期。成功、快乐和活力将伴随您。',
    reversed: '可能表示暂时的阴霾，或者快乐被遮蔽。但太阳总会再次照耀。'
  },
  {
    id: 20, name: '审判', nameEn: 'Judgement',
    meaning: '觉醒，重生，评判，召唤',
    upright: '内心的召唤将引导您走向觉醒。审视过去，迎接新生。',
    reversed: '可能表示自我怀疑，或者逃避内心的召唤。需要倾听真我。'
  },
  {
    id: 21, name: '世界', nameEn: 'The World',
    meaning: '完成，成就，整合，圆满',
    upright: '一个完整的循环即将达成。您的努力将带来圆满和成就。',
    reversed: '可能表示未完成的使命，或者最后的障碍。坚持到最后。'
  }
];

// 小阿卡纳（56张，简化存储关键信息）
const MINOR_ARCANA_SUIT = ['权杖', '圣杯', '宝剑', '星币'];
const MINOR_ARCANA_ELEMENTS = { '权杖': '火', '圣杯': '水', '宝剑': '风', '星币': '土' };
const MINOR_ARCANA_MEANINGS = {
  '权杖': '行动、创造、热情、事业',
  '圣杯': '情感、关系、直觉、心灵',
  '宝剑': '思维、挑战、真理、冲突',
  '星币': '物质、财富、身体、实际'
};

// 牌阵定义
const SPREADS = {
  '三牌阵': {
    name: '三牌阵',
    nameEn: 'Three Card Spread',
    positions: [
      { name: '过去', meaning: '代表问题的根源或过去的影响' },
      { name: '现在', meaning: '代表当前的状况和挑战' },
      { name: '未来', meaning: '代表可能的发展方向和结果' }
    ],
    cardCount: 3
  },
  '凯尔特十字': {
    name: '凯尔特十字',
    nameEn: 'Celtic Cross',
    positions: [
      { name: '现状', meaning: '当前的核心状况' },
      { name: '挑战', meaning: '面临的障碍或挑战' },
      { name: '基础', meaning: '问题的根基和基础' },
      { name: '过去', meaning: '近期的过去影响' },
      { name: ' crown', meaning: '最好的结果或目标' },
      { name: '未来', meaning: '近期的发展方向' },
      { name: '自我', meaning: '您在此情境中的态度' },
      { name: '环境', meaning: '外部环境和他人影响' },
      { name: '希望/恐惧', meaning: '内心的希望或恐惧' },
      { name: '结果', meaning: '最终的结局' }
    ],
    cardCount: 10
  },
  '关系牌阵': {
    name: '关系牌阵',
    nameEn: 'Relationship Spread',
    positions: [
      { name: '您', meaning: '您在关系中的状态' },
      { name: '对方', meaning: '对方在关系中的状态' },
      { name: '关系动力', meaning: '关系中的能量流动' },
      { name: '关系基础', meaning: '关系的基础和根基' },
      { name: '未来走向', meaning: '关系的可能发展方向' }
    ],
    cardCount: 5
  }
};

// 塔罗分析文案模板
const TAROT_ANALYSIS_TEMPLATES = [
  '塔罗牌揭示了您内心深处的能量和潜力。请认真思考牌面的信息，它们将为您指引方向。',
  '牌面显示您正处于一个重要的转折点。保持开放的心态，接受即将到来的变化。',
  '这些牌反映了您当前的生命课题。每一个挑战都是成长的机会，每一个祝福都值得感恩。'
];

module.exports = {
  MAJOR_ARCANA,
  MINOR_ARCANA_SUIT,
  MINOR_ARCANA_ELEMENTS,
  MINOR_ARCANA_MEANINGS,
  SPREADS,
  TAROT_ANALYSIS_TEMPLATES
};
