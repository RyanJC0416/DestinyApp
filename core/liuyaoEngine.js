/**
 * 核心层 - 六爻计算引擎
 * 负责：随机生成六爻卦象、变卦分析、卦辞解读等核心算法
 */

const { BA_GUA, SIXTY_FOUR_GUA, YAO_TEXTS } = require('../data/hexagramData');

class LiuyaoEngine {
  /**
   * 抛掷三枚硬币，得到一个爻
   * 3正=老阳(9,变爻)，2正1反=少阴(8)，1正2反=少阳(7)，3反=老阴(6,变爻)
   * @returns {Object} {value, type, line}
   */
  static tossCoins() {
    // 模拟三枚硬币，正面为3，反面为2
    const coins = [
      Math.random() < 0.5 ? 3 : 2,
      Math.random() < 0.5 ? 3 : 2,
      Math.random() < 0.5 ? 3 : 2
    ];
    const sum = coins.reduce((a, b) => a + b, 0);

    let value, type, line;
    if (sum === 9) { // 老阳
      value = 9; type = '老阳'; line = 1; // 阳爻，变阴
    } else if (sum === 8) { // 少阴
      value = 8; type = '少阴'; line = 0; // 阴爻，不变
    } else if (sum === 7) { // 少阳
      value = 7; type = '少阳'; line = 1; // 阳爻，不变
    } else { // 老阴
      value = 6; type = '老阴'; line = 0; // 阴爻，变阳
    }

    return { value, type, line };
  }

  /**
   * 生成六爻卦象（从初爻到上爻）
   * @returns {Object} {yaoArray, changingLines}
   */
  static generateHexagram() {
    const yaoArray = [];
    const changingLines = [];

    for (let i = 0; i < 6; i++) {
      const yao = this.tossCoins();
      yaoArray.push(yao);
      if (yao.type === '老阳' || yao.type === '老阴') {
        changingLines.push({ position: i + 1, ...yao });
      }
    }

    return { yaoArray, changingLines };
  }

  /**
   * 将六爻转换为卦象（下卦3爻 + 上卦3爻）
   * @param {Array} yaoArray - 六爻数组
   * @returns {Object} {lowerGua, upperGua, hexagram}
   */
  static parseHexagram(yaoArray) {
    // 下卦（初爻、二爻、三爻）
    const lowerLines = [yaoArray[0].line, yaoArray[1].line, yaoArray[2].line];
    // 上卦（四爻、五爻、上爻）
    const upperLines = [yaoArray[3].line, yaoArray[4].line, yaoArray[5].line];

    // 查找对应的八卦
    const lowerGua = BA_GUA.find(g => 
      g.lines[0] === lowerLines[0] && g.lines[1] === lowerLines[1] && g.lines[2] === lowerLines[2]
    );
    const upperGua = BA_GUA.find(g => 
      g.lines[0] === upperLines[0] && g.lines[1] === upperLines[1] && g.lines[2] === upperLines[2]
    );

    // 查找六十四卦
    const hexagram = SIXTY_FOUR_GUA.find(g => 
      g.lower === lowerGua.name && g.upper === upperGua.name
    );

    return { lowerGua, upperGua, hexagram };
  }

  /**
   * 计算变卦
   * @param {Array} yaoArray - 六爻数组
   * @returns {Object} 变卦信息
   */
  static calcChangingHexagram(yaoArray) {
    const changedYao = yaoArray.map(yao => ({
      ...yao,
      line: yao.type === '老阳' ? 0 : (yao.type === '老阴' ? 1 : yao.line)
    }));
    return this.parseHexagram(changedYao);
  }

  /**
   * 生成爻象文本表示
   * @param {Array} yaoArray - 六爻数组
   * @returns {string} 爻象文本
   */
  static generateYaoText(yaoArray) {
    // 从下往上显示
    const lines = [];
    for (let i = 5; i >= 0; i--) {
      const yao = yaoArray[i];
      if (yao.type === '老阳') {
        lines.push('━━━○'); // 老阳，阳爻变
      } else if (yao.type === '老阴') {
        lines.push('━ ━×'); // 老阴，阴爻变
      } else if (yao.line === 1) {
        lines.push('━━━'); // 少阳
      } else {
        lines.push('━ ━'); // 少阴
      }
    }
    return lines.join('\n');
  }

  /**
   * 执行六爻占卜
   * @param {string} question - 问题
   * @param {string} gender - 性别
   * @param {string} date - 测算日期
   * @returns {Object} 占卜结果
   */
  static divinate(question, gender, date) {
    const { yaoArray, changingLines } = this.generateHexagram();
    const { lowerGua, upperGua, hexagram } = this.parseHexagram(yaoArray);
    const changingHexagram = this.calcChangingHexagram(yaoArray);

    // 生成变爻分析
    let changingAnalysis = '';
    if (changingLines.length > 0) {
      const lineAnalyses = changingLines.map(cl => {
        const yaoText = YAO_TEXTS[cl.type] || '';
        return `第${cl.position}爻：${yaoText}`;
      });
      changingAnalysis = lineAnalyses.join('\n');
      if (changingHexagram.hexagram) {
        changingAnalysis += `\n\n变卦为「${changingHexagram.hexagram.name}」，象征事物将向「${changingHexagram.hexagram.meaning}」的方向发展。`;
      }
    } else {
      changingAnalysis = '六爻皆不变，表示事情发展平稳，按当前趋势进行即可。';
    }

    // 生成卦象文本
    const yaoText = this.generateYaoText(yaoArray);

    return {
      question,
      gender,
      date,
      hexagram: hexagram ? hexagram.name : '未知卦',
      hexagramSymbol: hexagram ? hexagram.symbol : '',
      hexagramMeaning: hexagram ? hexagram.meaning : '',
      description: hexagram ? hexagram.description : '',
      fortune: hexagram ? hexagram.fortune : '中平',
      yaoText,
      lowerGua: lowerGua ? lowerGua.name : '',
      upperGua: upperGua ? upperGua.name : '',
      changingLinesCount: changingLines.length,
      changingAnalysis,
      analysis: hexagram ? hexagram.advice : '请诚心想事，卦象自会显现。',
      suggestion: hexagram ? 
        `${hexagram.advice} 卦象显示${hexagram.fortune === '大吉' ? '大吉大利' : (hexagram.fortune === '吉' ? '吉祥如意' : (hexagram.fortune === '凶' ? '需谨慎行事' : '平稳发展'))}，请根据实际情况做出明智的选择。` 
        : '心诚则灵，保持正念。'
    };
  }
}

module.exports = LiuyaoEngine;
