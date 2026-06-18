/**
 * 核心层 - 星盘计算引擎
 * 负责：根据出生日期计算太阳星座、月亮星座、上升星座等核心算法
 */

const {
  ZODIAC_SIGNS, MOON_SIGN_TRAITS, ASCENDANT_EFFECTS,
  ASTRO_ANALYSIS_TEMPLATES
} = require('../data/zodiacData');

class AstroEngine {
  /**
   * 根据日期计算太阳星座
   * @param {number} month - 出生月份
   * @param {number} day - 出生日期
   * @returns {Object} 太阳星座信息
   */
  static calcSunSign(month, day) {
    for (const sign of ZODIAC_SIGNS) {
      const { startDate, endDate } = sign;
      
      // 处理跨年星座（摩羯座和水瓶座）
      if (startDate.month > endDate.month) {
        // 跨年星座
        if ((month === startDate.month && day >= startDate.day) ||
            (month === endDate.month && day <= endDate.day) ||
            (month > startDate.month && month < 13) ||
            (month > 0 && month < endDate.month)) {
          return sign;
        }
      } else {
        if ((month === startDate.month && day >= startDate.day) ||
            (month === endDate.month && day <= endDate.day) ||
            (month > startDate.month && month < endDate.month)) {
          return sign;
        }
      }
    }
    return ZODIAC_SIGNS[0]; // 默认白羊座
  }

  /**
   * 根据出生信息计算月亮星座（简化版算法）
   * @param {number} year - 出生年份
   * @param {number} month - 出生月份
   * @param {number} day - 出生日期
   * @param {number} hour - 出生小时(0-23)
   * @returns {Object} 月亮星座信息
   */
  static calcMoonSign(year, month, day, hour) {
    // 简化算法：基于日期和时间的哈希
    const dateValue = year * 10000 + month * 100 + day + hour;
    const moonSignIndex = (dateValue % 12 + 3) % 12; // 偏移使分布更合理
    return ZODIAC_SIGNS[moonSignIndex];
  }

  /**
   * 根据出生信息计算上升星座（简化版算法）
   * @param {number} year - 出生年份
   * @param {number} month - 出生月份
   * @param {number} day - 出生日期
   * @param {number} hour - 出生小时(0-23)
   * @param {string} location - 出生地点
   * @returns {Object} 上升星座信息
   */
  static calcAscendant(year, month, day, hour, location) {
    // 简化算法：结合日期、时间和地点的哈希
    const dateValue = year * 10000 + month * 100 + day;
    const hourOffset = Math.floor(hour / 2); // 每2小时换一个上升星座
    const locationHash = location.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    const ascendantIndex = ((dateValue + hourOffset + locationHash) % 12 + 6) % 12;
    return ZODIAC_SIGNS[ascendantIndex];
  }

  /**
   * 计算星盘要素之间的相位关系
   * @param {Object} sunSign - 太阳星座
   * @param {Object} moonSign - 月亮星座
   * @param {Object} ascendant - 上升星座
   * @returns {Object} 相位分析
   */
  static calcAspects(sunSign, moonSign, ascendant) {
    const aspects = [];

    // 太阳-月亮关系
    if (sunSign.element === moonSign.element) {
      aspects.push('日月同元素，您的内心和外在表现高度一致，情感表达直接而真诚。');
    } else if (
      (sunSign.element === '火' && moonSign.element === '风') ||
      (sunSign.element === '风' && moonSign.element === '火') ||
      (sunSign.element === '土' && moonSign.element === '水') ||
      (sunSign.element === '水' && moonSign.element === '土')
    ) {
      aspects.push('日月元素和谐，您的外在表现和内在情感能够很好地协调和互补。');
    } else {
      aspects.push('日月元素存在张力，您可能会在自我表达和情感需求之间感到一些冲突，需要找到平衡点。');
    }

    // 太阳-上升关系
    if (sunSign.name === ascendant.name) {
      aspects.push('太阳与上升同星座，您的个性非常鲜明，给人留下的印象与真实的您完全一致。');
    } else if (sunSign.element === ascendant.element) {
      aspects.push('太阳与上升同元素，您给人的第一印象与您的本质非常吻合。');
    }

    // 月亮-上升关系
    const moonTrait = MOON_SIGN_TRAITS[moonSign.name] || '';
    const ascendantEffect = ASCENDANT_EFFECTS[ascendant.name] || '';
    
    return {
      aspects,
      moonTrait,
      ascendantEffect
    };
  }

  /**
   * 生成星盘分析报告
   * @param {number} year - 出生年份
   * @param {number} month - 出生月份
   * @param {number} day - 出生日期
   * @param {number} hour - 出生小时(0-23)
   * @param {string} location - 出生地点
   * @returns {Object} 完整的星盘分析报告
   */
  static generateReport(year, month, day, hour, location) {
    const sunSign = this.calcSunSign(month, day);
    const moonSign = this.calcMoonSign(year, month, day, hour);
    const ascendant = this.calcAscendant(year, month, day, hour, location);
    const aspects = this.calcAspects(sunSign, moonSign, ascendant);

    // 生成分析文本
    const template = ASTRO_ANALYSIS_TEMPLATES[Math.floor(Math.random() * ASTRO_ANALYSIS_TEMPLATES.length)];
    
    const analysis = `${template}

您具有${sunSign.name}的活力和${sunSign.traits.slice(0, 3).join('、')}，月亮${moonSign.name}赋予您${aspects.moonTrait}，上升${ascendant.name}则让您${aspects.ascendantEffect}

${aspects.aspects.join('\n')}

${sunSign.description}

优势：${sunSign.strengths}
需要注意：${sunSign.weaknesses}`;

    const suggestions = [
      `发挥您的${sunSign.traits[0]}特质，同时注意平衡${sunSign.weaknesses.split('、')[0]}的倾向。`,
      `在人际关系中展现${ascendant.name}的魅力，在情感交流中倾听${moonSign.name}的直觉。`,
      '每个人都是独特的，星盘只是指引。最重要的是相信自己，活出真实的自我。'
    ];

    return {
      birthInfo: `${year}年${month}月${day}日 ${hour}:00 ${location}`,
      sunSign: sunSign.name,
      sunSignEn: sunSign.nameEn,
      sunSignSymbol: sunSign.symbol,
      sunSignElement: sunSign.element,
      moonSign: moonSign.name,
      moonSignEn: moonSign.nameEn,
      moonSignSymbol: moonSign.symbol,
      ascendant: ascendant.name,
      ascendantEn: ascendant.nameEn,
      ascendantSymbol: ascendant.symbol,
      analysis,
      suggestion: suggestions[Math.floor(Math.random() * suggestions.length)]
    };
  }
}

module.exports = AstroEngine;
