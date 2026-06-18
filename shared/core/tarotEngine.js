/**
 * 核心层 - 塔罗占卜引擎
 * 负责：随机抽牌、牌阵布局、牌义解读等核心算法
 */

const {
  MAJOR_ARCANA, MINOR_ARCANA_SUIT, MINOR_ARCANA_ELEMENTS,
  MINOR_ARCANA_MEANINGS, MINOR_ARCANA_CARDS, SPREADS, TAROT_ANALYSIS_DATABASE
} = require('../data/tarotData');

class TarotEngine {
  static majorImageKey(id) {
    return `ar${String(id).padStart(2, '0')}.jpg`;
  }

  static minorImageKey(suit, number) {
    const suitCodes = { '权杖': 'wa', '圣杯': 'cu', '宝剑': 'sw', '星币': 'pe' };
    const rankCodes = { 1: 'ac', 11: 'pa', 12: 'kn', 13: 'qu', 14: 'ki' };
    const rank = rankCodes[number] || String(number).padStart(2, '0');
    return `${suitCodes[suit]}${rank}.jpg`;
  }

  /**
   * 生成小阿卡纳单张牌数据
   * @param {string} suit - 花色
   * @param {number} number - 牌号(1-14, 11-14为宫廷牌)
   * @returns {Object} 牌数据
   */
  static generateMinorArcanaCard(suit, number) {
    const cardData = MINOR_ARCANA_CARDS[suit]?.find(card => card.number === number);
    if (!cardData) {
      throw new Error(`Missing minor arcana data for ${suit} ${number}`);
    }
    const element = MINOR_ARCANA_ELEMENTS[suit];

    return {
      id: 100 + MINOR_ARCANA_SUIT.indexOf(suit) * 14 + number - 1,
      name: cardData.name,
      nameEn: cardData.nameEn,
      suit,
      element,
      number,
      imageKey: this.minorImageKey(suit, number),
      meaning: `${cardData.meaning}；${MINOR_ARCANA_MEANINGS[suit]}`,
      upright: cardData.upright,
      reversed: cardData.reversed
    };
  }

  /**
   * 生成一副完整的78张塔罗牌
   * @returns {Array} 完整牌组
   */
  static generateFullDeck() {
    const deck = MAJOR_ARCANA.map(card => ({
      ...card,
      imageKey: this.majorImageKey(card.id)
    }));
    MINOR_ARCANA_SUIT.forEach(suit => {
      for (let i = 1; i <= 14; i++) {
        deck.push(this.generateMinorArcanaCard(suit, i));
      }
    });
    return deck;
  }

  /**
   * 洗牌算法（Fisher-Yates）
   * @param {Array} deck - 牌组
   * @returns {Array} 洗牌后的牌组
   */
  static shuffle(deck) {
    const shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  /**
   * 抽取指定数量的牌
   * @param {number} count - 抽取数量
   * @returns {Array} 抽到的牌
   */
  static drawCards(count) {
    const deck = this.shuffle(this.generateFullDeck());
    const drawn = [];
    for (let i = 0; i < count; i++) {
      const isReversed = Math.random() < 0.15; // 15%概率逆位
      drawn.push({
        ...deck[i],
        isReversed,
        interpretation: isReversed ? deck[i].reversed : deck[i].upright
      });
    }
    return drawn;
  }

  static questionContexts() {
    return {
      love: {
        label: '感情/关系',
        keywords: ['感情', '爱情', '恋爱', '复合', '分手', '婚姻', '伴侣', '喜欢', '爱', '关系', '对方'],
        focus: '关注彼此的真实感受、互动模式、边界与承诺'
      },
      career: {
        label: '事业/工作',
        keywords: ['工作', '事业', '职业', '跳槽', '换工作', '升职', '项目', '创业', '老板', '同事', 'offer', '面试'],
        focus: '关注机会、执行力、团队环境、职业定位与长期发展'
      },
      wealth: {
        label: '财务/资源',
        keywords: ['钱', '财', '收入', '投资', '理财', '生意', '赚钱', '亏损', '资产', '预算'],
        focus: '关注资源流动、风险控制、投入回报与安全感'
      },
      study: {
        label: '学习/考试',
        keywords: ['学习', '考试', '读书', '课程', '学校', '考研', '证书', '成绩', '申请'],
        focus: '关注专注度、方法、准备程度与知识吸收'
      },
      health: {
        label: '身心状态',
        keywords: ['健康', '身体', '病', '压力', '焦虑', '睡眠', '恢复', '情绪'],
        focus: '关注能量消耗、恢复节奏、压力来源与自我照顾'
      },
      general: {
        label: '综合议题',
        keywords: [],
        focus: '关注当前局面的核心能量、可选择路径与需要留意的阻力'
      }
    };
  }

  static classifyQuestion(question = '') {
    const contexts = this.questionContexts();
    const normalized = String(question).toLowerCase();
    const orderedTypes = ['love', 'career', 'wealth', 'study', 'health'];
    const type = orderedTypes.find(contextType =>
      contexts[contextType].keywords.some(keyword => normalized.includes(keyword.toLowerCase()))
    ) || 'general';
    return { type, ...contexts[type] };
  }

  static buildSpreadProfile(cards) {
    const elementCounts = cards.reduce((counts, card) => {
      const element = card.element || '大阿卡纳';
      counts[element] = (counts[element] || 0) + 1;
      return counts;
    }, {});
    const sortedElements = Object.entries(elementCounts)
      .filter(([element]) => element !== '大阿卡纳')
      .sort((a, b) => b[1] - a[1]);
    const dominantElement = sortedElements[0]?.[0] || '大阿卡纳';
    const majorCount = cards.filter(card => card.id < 100).length;
    const courtCount = cards.filter(card => card.number >= 11).length;
    const aceCount = cards.filter(card => card.number === 1).length;
    const reversedCount = cards.filter(card => card.isReversed).length;
    const reversalLevel = reversedCount === 0
      ? 'none'
      : (reversedCount > cards.length / 2 ? 'heavy' : 'light');

    return {
      elementCounts,
      dominantElement,
      majorCount,
      minorCount: cards.length - majorCount,
      courtCount,
      aceCount,
      reversedCount,
      reversalLevel
    };
  }

  static pickDatabaseLine(lines, seed) {
    if (!lines || lines.length === 0) return '';
    return lines[Math.abs(seed) % lines.length];
  }

  static fillTemplate(template, values) {
    return Object.keys(values).reduce((text, key) =>
      text.split(`{${key}}`).join(values[key]), template || '');
  }

  static pickContextLine(lines, seed, profile) {
    const suitByElement = { '火': '权杖', '水': '圣杯', '风': '宝剑', '土': '星币' };
    const conflictingSuits = Object.entries(suitByElement)
      .filter(([element]) => element !== profile.dominantElement)
      .map(([, suit]) => suit);
    const compatible = (lines || []).filter(line => {
      if (profile.reversedCount === 0 && line.includes('逆位')) return false;
      return !conflictingSuits.some(suit => line.includes(suit));
    });
    return this.pickDatabaseLine(compatible.length ? compatible : lines, seed);
  }

  static seedFromSpread(question, cards) {
    const questionSeed = String(question).split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return cards.reduce((sum, card, index) => sum + card.id * (index + 1) + (card.isReversed ? 17 : 0), questionSeed);
  }

  static interpretPosition(card, position, context, seed = 0) {
    const orientation = card.isReversed ? '逆位' : '正位';
    const meaning = card.isReversed ? card.reversed : card.upright;
    const values = {
      position: position.name,
      positionMeaning: position.meaning,
      card: card.name,
      orientation,
      context: context.label,
      focus: context.focus
    };
    const opener = this.fillTemplate(
      this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.positionOpeners, seed), values
    );
    const bridge = this.fillTemplate(
      this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.positionBridges, seed + 5), values
    );
    const orientationVoice = this.pickDatabaseLine(
      TAROT_ANALYSIS_DATABASE.orientationVoices[card.isReversed ? 'reversed' : 'upright'], seed + 11
    );
    const contextBridge = this.fillTemplate(
      this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.contextBridges, seed + 17), values
    );
    return `${opener}：${meaning} ${bridge}${orientationVoice} ${context.label}提示：${contextBridge}`;
  }

  static generateOverallAnalysis(question, spread, spreadResult, cards, context) {
    const dbContext = TAROT_ANALYSIS_DATABASE.contexts[context.type] || TAROT_ANALYSIS_DATABASE.contexts.general;
    const profile = this.buildSpreadProfile(cards);
    const seed = this.seedFromSpread(question, cards);
    const reversedCount = cards.filter(card => card.isReversed).length;
    const uprightCount = cards.length - reversedCount;
    const firstCard = cards[0];
    const lastCard = cards[cards.length - 1];
    const cardSummary = spreadResult
      .map(item => `${item.position}是${item.card.name}${item.card.isReversed ? '逆位' : '正位'}`)
      .join('，');

    const contextFocus = this.pickDatabaseLine(dbContext.focus, seed);
    const opportunity = this.pickContextLine(dbContext.opportunity, seed + 1, profile);
    const caution = this.pickContextLine(dbContext.caution, seed + 2, profile);
    const spreadFrame = TAROT_ANALYSIS_DATABASE.spreads[spread.name] || '';
    const analysisOpener = this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.analysisOpeners, seed + 29);
    const summaryLead = this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.summaryLeads, seed + 31);
    const elementVariants = TAROT_ANALYSIS_DATABASE.elementVariants[profile.dominantElement];
    const dominantElementTheme = this.pickDatabaseLine(elementVariants, seed + 37)
      || `主导能量指向${TAROT_ANALYSIS_DATABASE.elementThemes[profile.dominantElement] || '命运主轴、阶段性课题和深层转变'}。`;
    const reversalTheme = this.pickDatabaseLine(
      TAROT_ANALYSIS_DATABASE.reversalVariants[profile.reversalLevel], seed + 41
    ) || TAROT_ANALYSIS_DATABASE.reversalPatterns[profile.reversalLevel];
    const structureThemes = [];
    if (profile.majorCount >= Math.ceil(cards.length / 2)) {
      structureThemes.push(this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.structureVariants.majorHeavy, seed + 43));
    } else {
      structureThemes.push(this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.structureVariants.minorHeavy, seed + 43));
    }
    if (profile.courtCount >= 2) {
      structureThemes.push(this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.structureVariants.courtHeavy, seed + 47));
    }
    if (profile.aceCount > 0) {
      structureThemes.push(this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.structureVariants.acePresent, seed + 53));
    }

    const trajectory = this.fillTemplate(
      this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.trajectoryBridges, seed + 59),
      { first: firstCard.name, last: lastCard.name }
    );

    const balance = reversedCount === 0
      ? '牌面整体顺畅，阻力较少'
      : (reversedCount > uprightCount
        ? '逆位较多，说明当前议题里阻滞、内耗或延迟需要优先处理'
        : '正逆位并存，说明机会与挑战同时存在');

    return `围绕「${question}」这个${context.label}议题，${analysisOpener} ${spreadFrame} ${summaryLead}：${cardSummary}。本次重点：${contextFocus}。主导元素为${profile.dominantElement}：${dominantElementTheme} 牌组结构：${structureThemes.join(' ')} ${reversalTheme} ${trajectory}${balance}。可利用的窗口是：${opportunity} 需要留神的是：${caution}`;
  }

  static generateSuggestion(question, cards, context) {
    const dbContext = TAROT_ANALYSIS_DATABASE.contexts[context.type] || TAROT_ANALYSIS_DATABASE.contexts.general;
    const profile = this.buildSpreadProfile(cards);
    const seed = this.seedFromSpread(question, cards);
    const action = this.pickDatabaseLine(dbContext.action, seed + 3);
    const reversalTheme = this.pickDatabaseLine(
      TAROT_ANALYSIS_DATABASE.reversalVariants[profile.reversalLevel], seed + 61
    ) || TAROT_ANALYSIS_DATABASE.reversalPatterns[profile.reversalLevel];
    const dominantElementTheme = TAROT_ANALYSIS_DATABASE.elementThemes[profile.dominantElement] || '阶段性选择和深层转变';
    const opener = this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.suggestionOpeners, seed + 67);
    const closer = this.pickDatabaseLine(TAROT_ANALYSIS_DATABASE.suggestionClosers, seed + 71);
    return `建议：${opener}${action} 由于当前主轴涉及${dominantElementTheme}，${reversalTheme} ${closer}`;
  }

  static buildCopyText(question, spread, gender, cards) {
    const cardLines = cards.map((card, index) => {
      const position = spread.positions[index];
      return `${index + 1}. ${position.name}（${position.meaning}）：${card.name} · ${card.isReversed ? '逆位' : '正位'}`;
    });
    return [
      '【塔罗抽牌原始结果】',
      `所问：${question}`,
      `性别：${gender}`,
      `牌阵：${spread.name}`,
      '牌面：',
      ...cardLines,
      '',
      '请仅依据以上原始牌面进行解读。'
    ].join('\n');
  }

  /**
   * 执行塔罗占卜
   * @param {string} question - 问题
   * @param {string} spreadName - 牌阵名称
   * @param {string} gender - 性别
   * @returns {Object} 占卜结果
   */
  static divinate(question, spreadName, gender) {
    const spread = SPREADS[spreadName] || SPREADS['三牌阵'];
    const questionContext = this.classifyQuestion(question);
    const cards = this.drawCards(spread.cardCount);

    // 构建牌阵结果
    const spreadResult = cards.map((card, index) => ({
      position: spread.positions[index].name,
      positionMeaning: spread.positions[index].meaning,
      card: {
        name: card.name,
        nameEn: card.nameEn,
        meaning: card.meaning,
        imageKey: card.imageKey,
        isReversed: card.isReversed
      },
      interpretation: this.interpretPosition(
        card,
        spread.positions[index],
        questionContext,
        this.seedFromSpread(question, cards) + card.id * (index + 1) + index * 23
      )
    }));

    // 生成综合分析
    const cardNames = cards.map(c => c.name + (c.isReversed ? '(逆位)' : '')).join('、');
    const analysis = this.generateOverallAnalysis(question, spread, spreadResult, cards, questionContext);

    const suggestion = this.generateSuggestion(question, cards, questionContext);
    const copyText = this.buildCopyText(question, spread, gender, cards);

    return {
      question,
      spread: spread.name,
      gender,
      questionType: questionContext.type,
      cards: cardNames,
      copyText,
      spreadResult,
      analysis,
      suggestion
    };
  }
}

module.exports = TarotEngine;
