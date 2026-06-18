/**
 * 核心层 - 八字计算引擎
 * 负责：根据出生年月日时计算八字、五行分析等核心算法
 */

const {
  TIAN_GAN, DI_ZHI, TIAN_GAN_WUXING, DI_ZHI_WUXING,
  SHI_CHEN, YEAR_GAN_OFFSET, YEAR_ZHI_OFFSET,
  MONTH_GAN_TABLE, HOUR_GAN_TABLE,
  BAZI_ANALYSIS_TEMPLATES, WUXING_ANALYSIS
} = require('../data/baziData');

class BaziEngine {
  /**
   * 计算年柱
   * @param {number} year - 出生年份
   * @returns {Object} {gan, zhi, ganWuxing, zhiWuxing}
   */
  static calcYearPillar(year) {
    const ganIndex = (year - 1900 + YEAR_GAN_OFFSET) % 10;
    const zhiIndex = (year - 1900 + YEAR_ZHI_OFFSET) % 12;
    const gan = TIAN_GAN[ganIndex];
    const zhi = DI_ZHI[zhiIndex];
    return {
      gan,
      zhi,
      ganWuxing: TIAN_GAN_WUXING[gan],
      zhiWuxing: DI_ZHI_WUXING[zhi]
    };
  }

  /**
   * 计算月柱
   * @param {number} year - 出生年份
   * @param {number} month - 出生月份
   * @returns {Object} {gan, zhi, ganWuxing, zhiWuxing}
   */
  static calcMonthPillar(year, month) {
    const yearPillar = this.calcYearPillar(year);
    const yearGan = yearPillar.gan;
    const monthGanStart = MONTH_GAN_TABLE[yearGan];
    const monthGanIndex = (monthGanStart + month - 1) % 10;
    // 月支：正月为寅(索引2)
    const monthZhiIndex = (month + 1) % 12;
    const gan = TIAN_GAN[monthGanIndex];
    const zhi = DI_ZHI[monthZhiIndex];
    return {
      gan,
      zhi,
      ganWuxing: TIAN_GAN_WUXING[gan],
      zhiWuxing: DI_ZHI_WUXING[zhi]
    };
  }

  /**
   * 计算日柱（简化版，使用已知基准日推算）
   * @param {number} year - 出生年份
   * @param {number} month - 出生月份
   * @param {number} day - 出生日期
   * @returns {Object} {gan, zhi, ganWuxing, zhiWuxing}
   */
  static calcDayPillar(year, month, day) {
    // 使用简化算法：以1900年1月31日（甲子日）为基准
    const baseDate = new Date(1900, 0, 31);
    const targetDate = new Date(year, month - 1, day);
    const diffDays = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
    const ganIndex = ((diffDays % 10) + 10) % 10;
    const zhiIndex = ((diffDays % 12) + 12) % 12;
    const gan = TIAN_GAN[ganIndex];
    const zhi = DI_ZHI[zhiIndex];
    return {
      gan,
      zhi,
      ganWuxing: TIAN_GAN_WUXING[gan],
      zhiWuxing: DI_ZHI_WUXING[zhi]
    };
  }

  /**
   * 计算时柱
   * @param {Object} dayPillar - 日柱
   * @param {number} hourIndex - 时辰索引(0-11)
   * @returns {Object} {gan, zhi, ganWuxing, zhiWuxing}
   */
  static calcHourPillar(dayPillar, hourIndex) {
    const dayGan = dayPillar.gan;
    const hourGanStart = HOUR_GAN_TABLE[dayGan];
    const hourGanIndex = (hourGanStart + hourIndex) % 10;
    const zhi = DI_ZHI[hourIndex];
    const gan = TIAN_GAN[hourGanIndex];
    return {
      gan,
      zhi,
      ganWuxing: TIAN_GAN_WUXING[gan],
      zhiWuxing: DI_ZHI_WUXING[zhi]
    };
  }

  /**
   * 计算完整八字
   * @param {number} year - 出生年份
   * @param {number} month - 出生月份
   * @param {number} day - 出生日期
   * @param {number} hourIndex - 时辰索引(0-11)
   * @returns {Object} 完整的八字信息
   */
  static calculate(year, month, day, hourIndex) {
    const yearPillar = this.calcYearPillar(year);
    const monthPillar = this.calcMonthPillar(year, month);
    const dayPillar = this.calcDayPillar(year, month, day);
    const hourPillar = this.calcHourPillar(dayPillar, hourIndex);

    const bazi = `${yearPillar.gan}${yearPillar.zhi} ${monthPillar.gan}${monthPillar.zhi} ${dayPillar.gan}${dayPillar.zhi} ${hourPillar.gan}${hourPillar.zhi}`;

    return {
      yearPillar,
      monthPillar,
      dayPillar,
      hourPillar,
      bazi,
      shichen: SHI_CHEN[hourIndex]
    };
  }

  /**
   * 分析五行强弱
   * @param {Object} baziResult - 八字计算结果
   * @returns {Object} 五行分析结果
   */
  static analyzeWuxing(baziResult) {
    const { yearPillar, monthPillar, dayPillar, hourPillar } = baziResult;
    const pillars = [yearPillar, monthPillar, dayPillar, hourPillar];

    const wuxingCount = { '金': 0, '木': 0, '水': 0, '火': 0, '土': 0 };
    pillars.forEach(p => {
      wuxingCount[p.ganWuxing]++;
      wuxingCount[p.zhiWuxing]++;
    });

    // 找出最强和最弱的五行
    let maxWuxing = '';
    let minWuxing = '';
    let maxCount = -1;
    let minCount = 999;

    for (const [wx, count] of Object.entries(wuxingCount)) {
      if (count > maxCount) {
        maxCount = count;
        maxWuxing = wx;
      }
      if (count < minCount) {
        minCount = count;
        minWuxing = wx;
      }
    }

    // 判断身强身弱（简化版：看日主五行在月令是否得令）
    const dayGanWuxing = dayPillar.ganWuxing;
    const monthZhiWuxing = monthPillar.zhiWuxing;
    const wuxingShengke = {
      '木': { sheng: '水', ke: '土', beiSheng: '火', beiKe: '金' },
      '火': { sheng: '木', ke: '金', beiSheng: '土', beiKe: '水' },
      '土': { sheng: '火', ke: '水', beiSheng: '金', beiKe: '木' },
      '金': { sheng: '土', ke: '木', beiSheng: '水', beiKe: '火' },
      '水': { sheng: '金', ke: '火', beiSheng: '木', beiKe: '土' }
    };

    let strength = 'balanced';
    const dayWuxingInfo = wuxingShengke[dayGanWuxing];
    if (monthZhiWuxing === dayGanWuxing || monthZhiWuxing === dayWuxingInfo.sheng) {
      strength = 'strong';
    } else if (monthZhiWuxing === dayWuxingInfo.beiKe || monthZhiWuxing === dayWuxingInfo.beiSheng) {
      strength = 'weak';
    }

    return {
      wuxingCount,
      dominantWuxing: maxWuxing,
      weakWuxing: minWuxing,
      strength,
      dayGanWuxing
    };
  }

  /**
   * 生成八字分析报告
   * @param {number} year - 出生年份
   * @param {number} month - 出生月份
   * @param {number} day - 出生日期
   * @param {number} hourIndex - 时辰索引
   * @param {string} gender - 性别
   * @returns {Object} 完整的分析报告
   */
  static generateReport(year, month, day, hourIndex, gender) {
    const baziResult = this.calculate(year, month, day, hourIndex);
    const wuxingAnalysis = this.analyzeWuxing(baziResult);

    // 生成分析文本
    const templates = BAZI_ANALYSIS_TEMPLATES[wuxingAnalysis.strength] || BAZI_ANALYSIS_TEMPLATES.balanced;
    const analysis = templates[Math.floor(Math.random() * templates.length)];

    const wuxingText = WUXING_ANALYSIS[wuxingAnalysis.dominantWuxing] || '';

    const suggestions = [
      '保持积极乐观的心态，善用自己的优势，同时注意补足不足。',
      `您的八字五行中${wuxingAnalysis.dominantWuxing}较旺，可以适当发展与此相关的领域。`,
      '人际关系中保持真诚，事业上脚踏实地，生活中注意平衡。'
    ];

    return {
      birthInfo: `${year}年${month}月${day}日 ${baziResult.shichen.name}`,
      gender: gender,
      bazi: baziResult.bazi,
      yearPillar: `${baziResult.yearPillar.gan}${baziResult.yearPillar.zhi}`,
      monthPillar: `${baziResult.monthPillar.gan}${baziResult.monthPillar.zhi}`,
      dayPillar: `${baziResult.dayPillar.gan}${baziResult.dayPillar.zhi}`,
      hourPillar: `${baziResult.hourPillar.gan}${baziResult.hourPillar.zhi}`,
      shichen: baziResult.shichen.name,
      wuxing: wuxingAnalysis,
      analysis: `${analysis} ${wuxingText}`,
      suggestion: suggestions[Math.floor(Math.random() * suggestions.length)]
    };
  }
}

module.exports = BaziEngine;
