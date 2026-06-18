/**
 * 核心层 - 六爻计算引擎
 * 负责：随机生成六爻卦象、变卦分析、卦辞解读等核心算法
 */

const { BA_GUA, SIXTY_FOUR_GUA } = require('../data/hexagramData');

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
    const changedYao = yaoArray.map(yao => {
      const line = yao.type === '老阳' ? 0 : (yao.type === '老阴' ? 1 : yao.line);
      return { value: line === 1 ? 7 : 8, type: line === 1 ? '少阳' : '少阴', line };
    });
    return { ...this.parseHexagram(changedYao), yaoArray: changedYao };
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

  static buildCopyText(question, gender, date, topic, yaoArray, hexagram, lowerGua, upperGua, changedHexagram) {
    const positionNames = ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻'];
    const lineText = yaoArray.map((yao, index) => {
      const symbol = yao.line === 1 ? '━━━' : '━ ━';
      const moving = yao.type === '老阳' || yao.type === '老阴' ? '（动爻）' : '（静爻）';
      return `${positionNames[index]}：${symbol} ${yao.type} ${yao.value}${moving}`;
    }).reverse();
    const movingLines = yaoArray
      .map((yao, index) => (yao.type === '老阳' || yao.type === '老阴') ? positionNames[index] : '')
      .filter(Boolean);

    return [
      '【六爻排盘原始结果】',
      `所问：${question}`,
      `性别：${gender}`,
      `起卦时间：${date}`,
      `所问方向：${topic}`,
      '起卦方式：三枚铜钱法',
      `本卦：${hexagram ? `${hexagram.name}${hexagram.symbol}` : '未知卦'}（上${upperGua ? upperGua.name : '未知'}、下${lowerGua ? lowerGua.name : '未知'}）`,
      '六爻（自上而下）：',
      ...lineText,
      `动爻：${movingLines.length ? movingLines.join('、') : '无'}`,
      `变卦：${changedHexagram ? `${changedHexagram.name}${changedHexagram.symbol}` : '未知卦'}`,
      '',
      '请仅依据以上原始排盘进行解读。'
    ].join('\n');
  }

  static buildTopicGuidance(hexagram, changedHexagram, topic) {
    const selectedTopic = ['事业', '家庭', '健康', '感情'].includes(topic) ? topic : '事业';
    const topicField = { '事业': 'career', '家庭': 'family', '健康': 'health', '感情': 'love' }[selectedTopic];
    const interpretation = hexagram.interpretation;
    const transition = changedHexagram && changedHexagram.id !== hexagram.id
      ? `变卦「${changedHexagram.name}」显示后续局势转为：${changedHexagram.interpretation.situation}。`
      : '本次无实质变卦，当前课题仍会延续，不宜自行假定已经转机。';
    return {
      topic: selectedTopic,
      analysis: `${interpretation[topicField]}。此卦的判断重点是：${interpretation.decisionFocus}。${transition}`,
      suggestion: `${interpretation.nextStep}。需特别防范：${interpretation.caution}。`
    };
  }

  static interpretMovingLine(hexagram, changingLine) {
    const phases = [
      '初爻主事之初端，变化刚露苗头',
      '二爻主内在中位，重在打基础与得到配合',
      '三爻处下卦之终，常是进退压力最明显之处',
      '四爻刚入上卦，意味着从内部准备走向外部行动',
      '五爻居主位，重在决策、担当与掌握分寸',
      '上爻主事之穷极，需考虑收尾、退转与防止过度'
    ];
    const change = changingLine.type === '老阳'
      ? '阳爻转阴，力量应从推进转向收敛'
      : '阴爻转阳，力量应从承受转向行动';
    const classic = hexagram.yaoLines.find(line => line.position === changingLine.position);
    const classicText = classic
      ? `${classic.title}「${classic.original}」《象》曰：${classic.xiang}`
      : `第${changingLine.position}爻`;
    return `${classicText}\n${phases[changingLine.position - 1]}；${change}。结合「${hexagram.name}」，此处应聚焦“${hexagram.interpretation.decisionFocus}”，并防止“${hexagram.interpretation.caution}”。`;
  }

  /**
   * 执行六爻占卜
   * @param {string} question - 问题
   * @param {string} gender - 性别
   * @param {string} date - 测算日期
   * @param {string} topic - 分析模块：事业、家庭、健康或感情
   * @returns {Object} 占卜结果
   */
  static divinate(question, gender, date, topic = '事业') {
    const { yaoArray, changingLines } = this.generateHexagram();
    const { lowerGua, upperGua, hexagram } = this.parseHexagram(yaoArray);
    const changingHexagram = this.calcChangingHexagram(yaoArray);
    const changedHexagram = changingHexagram.hexagram || hexagram;
    const topicGuidance = this.buildTopicGuidance(hexagram, changedHexagram, topic);
    const copyText = this.buildCopyText(
      question, gender, date, topicGuidance.topic, yaoArray,
      hexagram, lowerGua, upperGua, changedHexagram
    );

    // 生成变爻分析
    let changingAnalysis = '';
    if (changingLines.length > 0) {
      const lineAnalyses = changingLines.map(cl => {
        return `第${cl.position}爻：${this.interpretMovingLine(hexagram, cl)}`;
      });
      const specialLine = hexagram.yaoLines.find(line => line.position === 7);
      if (changingLines.length === 6 && specialLine) {
        lineAnalyses.push(`六爻皆变，参用爻：${specialLine.title}「${specialLine.original}」《象》曰：${specialLine.xiang}`);
      }
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
      topic: topicGuidance.topic,
      hexagram: hexagram ? hexagram.name : '未知卦',
      hexagramSymbol: hexagram ? hexagram.symbol : '',
      hexagramMeaning: hexagram ? hexagram.meaning : '',
      description: hexagram ? hexagram.description : '',
      guaCi: hexagram ? hexagram.guaCi : '',
      xiangCi: hexagram ? hexagram.xiangCi : '',
      plainInterpretation: hexagram ? hexagram.plainInterpretation : '',
      fortune: hexagram ? hexagram.fortune : '中平',
      yaoText,
      lowerGua: lowerGua ? lowerGua.name : '',
      upperGua: upperGua ? upperGua.name : '',
      changingLinesCount: changingLines.length,
      changingHexagram: changedHexagram ? changedHexagram.name : '未知卦',
      changingHexagramSymbol: changedHexagram ? changedHexagram.symbol : '',
      changingHexagramMeaning: changedHexagram ? changedHexagram.meaning : '',
      changingGuaCi: changedHexagram ? changedHexagram.guaCi : '',
      changingXiangCi: changedHexagram ? changedHexagram.xiangCi : '',
      changingPlainInterpretation: changedHexagram ? changedHexagram.plainInterpretation : '',
      changingYaoText: this.generateYaoText(changingHexagram.yaoArray),
      copyText,
      changingAnalysis,
      analysis: hexagram ? hexagram.advice : '请诚心想事，卦象自会显现。',
      topicAnalysis: topicGuidance.analysis,
      suggestion: topicGuidance.suggestion
    };
  }
}

module.exports = LiuyaoEngine;
