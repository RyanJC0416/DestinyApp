/**
 * 数据层 - 星座数据
 * 包含：十二星座基础数据、日期范围、特性等
 */

// 十二星座
const ZODIAC_SIGNS = [
  {
    id: 0, name: '白羊座', nameEn: 'Aries', symbol: '♈',
    startDate: { month: 3, day: 21 }, endDate: { month: 4, day: 19 },
    element: '火', modality: '开创', ruler: '火星',
    traits: ['热情', '冲动', '勇敢', '直率', '自信'],
    description: '白羊座是黄道十二宫的第一个星座，代表着新的开始和活力。',
    strengths: '勇敢、自信、热情、直率、有领导力',
    weaknesses: '冲动、急躁、自我中心、缺乏耐心'
  },
  {
    id: 1, name: '金牛座', nameEn: 'Taurus', symbol: '♉',
    startDate: { month: 4, day: 20 }, endDate: { month: 5, day: 20 },
    element: '土', modality: '固定', ruler: '金星',
    traits: ['稳重', '务实', '耐心', '忠诚', '享受'],
    description: '金牛座代表着稳定和物质享受，是最务实的星座之一。',
    strengths: '可靠、耐心、务实、忠诚、有决心',
    weaknesses: '固执、占有欲强、保守、懒惰'
  },
  {
    id: 2, name: '双子座', nameEn: 'Gemini', symbol: '♊',
    startDate: { month: 5, day: 21 }, endDate: { month: 6, day: 21 },
    element: '风', modality: '变动', ruler: '水星',
    traits: ['机智', '多变', '好奇', '善于沟通', '灵活'],
    description: '双子座代表着沟通和变化，是最机智灵活的星座。',
    strengths: '聪明、机智、善于沟通、适应力强、多才多艺',
    weaknesses: '善变、肤浅、不可靠、话多'
  },
  {
    id: 3, name: '巨蟹座', nameEn: 'Cancer', symbol: '♋',
    startDate: { month: 6, day: 22 }, endDate: { month: 7, day: 22 },
    element: '水', modality: '开创', ruler: '月亮',
    traits: ['敏感', '关怀', '保护', '怀旧', '直觉'],
    description: '巨蟹座代表着家庭和情感，是最富有同情心的星座。',
    strengths: '富有同情心、忠诚、保护欲强、直觉敏锐、有创造力',
    weaknesses: '情绪化、敏感、过度保护、怀旧'
  },
  {
    id: 4, name: '狮子座', nameEn: 'Leo', symbol: '♌',
    startDate: { month: 7, day: 23 }, endDate: { month: 8, day: 22 },
    element: '火', modality: '固定', ruler: '太阳',
    traits: ['自信', '慷慨', '热情', '领导', '创造'],
    description: '狮子座代表着创造力和领导力，是最自信的星座。',
    strengths: '慷慨、热情、自信、有创造力、忠诚',
    weaknesses: '骄傲、自我中心、固执、爱面子'
  },
  {
    id: 5, name: '处女座', nameEn: 'Virgo', symbol: '♍',
    startDate: { month: 8, day: 23 }, endDate: { month: 9, day: 22 },
    element: '土', modality: '变动', ruler: '水星',
    traits: ['完美', '分析', '务实', '细致', '服务'],
    description: '处女座代表着完美和服务，是最注重细节的星座。',
    strengths: '细致、分析能力强、务实、可靠、勤奋',
    weaknesses: '挑剔、完美主义、过度担忧、保守'
  },
  {
    id: 6, name: '天秤座', nameEn: 'Libra', symbol: '♎',
    startDate: { month: 9, day: 23 }, endDate: { month: 10, day: 23 },
    element: '风', modality: '开创', ruler: '金星',
    traits: ['和谐', '公正', '优雅', '社交', '犹豫'],
    description: '天秤座代表着平衡和和谐，是最注重公正的星座。',
    strengths: '公正、优雅、善于交际、 diplomatic、有品味',
    weaknesses: '犹豫不决、 superficial、依赖他人、逃避冲突'
  },
  {
    id: 7, name: '天蝎座', nameEn: 'Scorpio', symbol: '♏',
    startDate: { month: 10, day: 24 }, endDate: { month: 11, day: 22 },
    element: '水', modality: '固定', ruler: '冥王星',
    traits: ['深刻', '神秘', '激情', '控制', '转化'],
    description: '天蝎座代表着转化和深度，是最神秘的星座。',
    strengths: '有决心、直觉敏锐、忠诚、有洞察力、热情',
    weaknesses: '嫉妒、控制欲强、记仇、 secretive'
  },
  {
    id: 8, name: '射手座', nameEn: 'Sagittarius', symbol: '♐',
    startDate: { month: 11, day: 23 }, endDate: { month: 12, day: 21 },
    element: '火', modality: '变动', ruler: '木星',
    traits: ['自由', '乐观', '冒险', '哲学', '诚实'],
    description: '射手座代表着自由和探索，是最乐观的星座。',
    strengths: '乐观、诚实、慷慨、冒险精神、 philosophical',
    weaknesses: '粗心、不负责任、直率过头、 restless'
  },
  {
    id: 9, name: '摩羯座', nameEn: 'Capricorn', symbol: '♑',
    startDate: { month: 12, day: 22 }, endDate: { month: 1, day: 19 },
    element: '土', modality: '开创', ruler: '土星',
    traits: ['野心', '责任', '纪律', '实际', '成就'],
    description: '摩羯座代表着成就和责任，是最有野心的星座。',
    strengths: '有责任感、自律、有野心、实际、有耐心',
    weaknesses: ' pessimistic、固执、工作狂、冷漠'
  },
  {
    id: 10, name: '水瓶座', nameEn: 'Aquarius', symbol: '♒',
    startDate: { month: 1, day: 20 }, endDate: { month: 2, day: 18 },
    element: '风', modality: '固定', ruler: '天王星',
    traits: ['独立', '创新', '人道', '理想', '独特'],
    description: '水瓶座代表着创新和人道主义，是最独立的星座。',
    strengths: '独立、创新、人道主义、聪明、有远见',
    weaknesses: '疏离、固执、 unpredictable、情感冷漠'
  },
  {
    id: 11, name: '双鱼座', nameEn: 'Pisces', symbol: '♓',
    startDate: { month: 2, day: 19 }, endDate: { month: 3, day: 20 },
    element: '水', modality: '变动', ruler: '海王星',
    traits: ['直觉', '同情', '艺术', '梦想', '敏感'],
    description: '双鱼座代表着梦想和直觉，是最富有想象力的星座。',
    strengths: '富有同情心、直觉敏锐、有艺术天赋、善良、 adaptability',
    weaknesses: '逃避现实、过于敏感、优柔寡断、容易受影响'
  }
];

// 月亮星座特性（简化版）
const MOON_SIGN_TRAITS = {
  '白羊座': '情感直接而强烈，需要即时的满足',
  '金牛座': '情感稳定而持久，需要安全感',
  '双子座': '情感多变而好奇，需要沟通',
  '巨蟹座': '情感丰富而敏感，需要归属感',
  '狮子座': '情感热烈而戏剧化，需要关注',
  '处女座': '情感内敛而实际，需要秩序',
  '天秤座': '情感和谐而优雅，需要平衡',
  '天蝎座': '情感深刻而强烈，需要忠诚',
  '射手座': '情感自由而乐观，需要空间',
  '摩羯座': '情感克制而严肃，需要成就',
  '水瓶座': '情感独立而理性，需要自由',
  '双鱼座': '情感丰富而梦幻，需要理解'
};

// 上升星座影响
const ASCENDANT_EFFECTS = {
  '白羊座': '给人直接、有活力的第一印象，行动力强',
  '金牛座': '给人稳重、可靠的印象，注重实际',
  '双子座': '给人机智、善变的印象，善于交流',
  '巨蟹座': '给人温和、关怀的印象，重视家庭',
  '狮子座': '给人自信、大方的印象，充满魅力',
  '处女座': '给人细致、谨慎的印象，注重细节',
  '天秤座': '给人优雅、和善的印象，追求和谐',
  '天蝎座': '给人神秘、深刻的印象，洞察力强',
  '射手座': '给人乐观、开朗的印象，热爱自由',
  '摩羯座': '给人严肃、专业的印象，有责任感',
  '水瓶座': '给人独特、前卫的印象，思想开放',
  '双鱼座': '给人温柔、梦幻的印象，富有同情心'
};

// 星盘分析文案模板
const ASTRO_ANALYSIS_TEMPLATES = [
  '您的星盘揭示了独特的能量组合。太阳星座代表您的核心自我，月亮星座反映您的情感世界，上升星座展示您给外界的印象。',
  '星盘中的行星位置诉说着您的天赋和挑战。了解这些能量，您将更好地认识自己，发挥优势，克服弱点。',
  '每个人都是独一无二的，星盘只是指引而非定论。用开放的心态去探索，您将发现更多关于自己的奥秘。'
];

module.exports = {
  ZODIAC_SIGNS,
  MOON_SIGN_TRAITS,
  ASCENDANT_EFFECTS,
  ASTRO_ANALYSIS_TEMPLATES
};
