/**
 * 核心层 - 塔罗占卜引擎
 * 负责：随机抽牌、牌阵布局、牌义解读等核心算法
 */

const {
  MAJOR_ARCANA, MINOR_ARCANA_SUIT, MINOR_ARCANA_ELEMENTS,
  MINOR_ARCANA_MEANINGS, SPREADS, TAROT_ANALYSIS_TEMPLATES
} = require('../data/tarotData');

class TarotEngine {
  /**
   * 生成小阿卡纳单张牌数据
   * @param {string} suit - 花色
   * @param {number} number - 牌号(1-14, 11-14为宫廷牌)
   * @returns {Object} 牌数据
   */
  static generateMinorArcanaCard(suit, number) {
    const courtNames = { 11: '侍从', 12: '骑士', 13: '皇后', 14: '国王' };
    const element = MINOR_ARCANA_ELEMENTS[suit];
    const suitMeaning = MINOR_ARCANA_MEANINGS[suit];

    let name, meaning;
    if (number <= 10) {
      name = `${suit}${number}`;
      meaning = `${suitMeaning}之${number}号牌`;
    } else {
      name = `${suit}${courtNames[number]}`;
      meaning = `${suitMeaning}的${courtNames[number]}`;
    }

    return {
      id: 100 + MINOR_ARCANA_SUIT.indexOf(suit) * 14 + number - 1,
      name,
      nameEn: `${suit} ${number}`,
      suit,
      element,
      number,
      meaning: `${meaning}，代表${suitMeaning}`,
      upright: `这张牌代表${suitMeaning}的正面能量。在当前的牌阵位置，它暗示着积极的发展和机会。`,
      reversed: `这张牌暗示${suitMeaning}方面可能存在挑战或阻碍。需要更加谨慎地处理相关问题。`
    };
  }

  /**
   * 生成一副完整的78张塔罗牌
   * @returns {Array} 完整牌组
   */
  static generateFullDeck() {
    const deck = [...MAJOR_ARCANA];
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

  /**
   * 执行塔罗占卜
   * @param {string} question - 问题
   * @param {string} spreadName - 牌阵名称
   * @param {string} gender - 性别
   * @returns {Object} 占卜结果
   */
  static divinate(question, spreadName, gender) {
    const spread = SPREADS[spreadName] || SPREADS['三牌阵'];
    const cards = this.drawCards(spread.cardCount);

    // 构建牌阵结果
    const spreadResult = cards.map((card, index) => ({
      position: spread.positions[index].name,
      positionMeaning: spread.positions[index].meaning,
      card: {
        name: card.name,
        nameEn: card.nameEn,
        meaning: card.meaning,
        isReversed: card.isReversed
      },
      interpretation: card.interpretation
    }));

    // 生成综合分析
    const cardNames = cards.map(c => c.name + (c.isReversed ? '(逆位)' : '')).join('、');
    const template = TAROT_ANALYSIS_TEMPLATES[Math.floor(Math.random() * TAROT_ANALYSIS_TEMPLATES.length)];

    // 根据牌的正逆位生成建议
    const reversedCount = cards.filter(c => c.isReversed).length;
    let suggestion;
    if (reversedCount === 0) {
      suggestion = '所有牌均为正位，这是一个非常积极的信号。保持当前的方向和态度，成功即将到来。';
    } else if (reversedCount <= spread.cardCount / 2) {
      suggestion = '牌面整体偏向积极，但有一些需要注意的地方。保持乐观的同时，留意潜在的挑战。';
    } else {
      suggestion = '牌面显示您可能面临一些挑战。这并非坏事，挑战是成长的契机。保持冷静，逐一应对。';
    }

    return {
      question,
      spread: spread.name,
      gender,
      cards: cardNames,
      spreadResult,
      analysis: template,
      suggestion
    };
  }
}

module.exports = TarotEngine;
