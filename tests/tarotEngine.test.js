const assert = require('assert');

const TarotEngine = require('../shared/core/tarotEngine');
const {
  MINOR_ARCANA_SUIT,
  TAROT_ANALYSIS_TEMPLATES,
  TAROT_ANALYSIS_DATABASE
} = require('../shared/data/tarotData');

function testMinorArcanaHaveCardSpecificMeanings() {
  const deck = TarotEngine.generateFullDeck();
  const minorCards = deck.filter(card => MINOR_ARCANA_SUIT.includes(card.suit));

  assert.strictEqual(minorCards.length, 56, 'deck should include all 56 minor arcana cards');

  for (const card of minorCards) {
    assert.ok(card.meaning.length > 10, `${card.name} should have a meaningful summary`);
    assert.ok(card.upright.length > 20, `${card.name} should have an upright meaning`);
    assert.ok(card.reversed.length > 20, `${card.name} should have a reversed meaning`);
    assert.ok(
      !card.upright.includes('在当前的牌阵位置，它暗示着积极的发展和机会'),
      `${card.name} upright meaning should not use the generic template`
    );
    assert.ok(
      !card.reversed.includes('需要更加谨慎地处理相关问题'),
      `${card.name} reversed meaning should not use the generic template`
    );
  }
}

function testSpreadInterpretationsUsePositionAndCardMeaning() {
  const report = TarotEngine.divinate('我适合换工作吗？', '三牌阵', '女');

  assert.strictEqual(report.spreadResult.length, 3, 'three-card spread should return three positions');

  for (const item of report.spreadResult) {
    assert.ok(
      item.interpretation.includes(item.position),
      `${item.position} interpretation should mention the spread position`
    );
    assert.ok(
      item.interpretation.includes(item.card.name),
      `${item.position} interpretation should mention the card name`
    );
  }

  assert.ok(
    !TAROT_ANALYSIS_TEMPLATES.includes(report.analysis),
    'overall analysis should be generated from the actual spread, not selected from a stock template'
  );
  assert.ok(
    report.analysis.includes('我适合换工作吗？'),
    'overall analysis should reflect the querent question'
  );
}

function testQuestionContextShapesInterpretation() {
  const careerReport = TarotEngine.divinate('我适合换工作吗？', '三牌阵', '女');
  assert.strictEqual(careerReport.questionType, 'career');
  assert.ok(
    careerReport.analysis.includes('事业/工作'),
    'career questions should be interpreted in a career context'
  );
  assert.ok(
    careerReport.spreadResult.every(item => item.interpretation.includes('事业/工作')),
    'each career spread position should mention the career context'
  );

  const loveReport = TarotEngine.divinate('这段感情未来会怎样？', '关系牌阵', '男');
  assert.strictEqual(loveReport.questionType, 'love');
  assert.ok(
    loveReport.analysis.includes('感情/关系'),
    'love questions should be interpreted in a relationship context'
  );
  assert.ok(
    loveReport.spreadResult.every(item => item.interpretation.includes('感情/关系')),
    'each love spread position should mention the relationship context'
  );
}

function testOverallAnalysisUsesExpandedDatabase() {
  assert.ok(TAROT_ANALYSIS_DATABASE, 'tarot analysis database should be exported');
  assert.ok(
    Object.keys(TAROT_ANALYSIS_DATABASE.contexts).length >= 6,
    'analysis database should cover multiple question contexts'
  );
  assert.ok(
    TAROT_ANALYSIS_DATABASE.elementThemes['火'],
    'analysis database should include element themes'
  );

  const report = TarotEngine.divinate('我适合换工作吗？', '凯尔特十字', '女');
  assert.ok(report.analysis.includes('本次重点'), 'analysis should include a context database focus');
  assert.ok(report.analysis.includes('主导元素'), 'analysis should include element distribution');
  assert.ok(report.analysis.includes('牌组结构'), 'analysis should include major/minor arcana structure');
  assert.ok(
    ![
      '所有牌均为正位，这是一个非常积极的信号。保持当前的方向和态度，成功即将到来。',
      '牌面整体偏向积极，但有一些需要注意的地方。保持乐观的同时，留意潜在的挑战。',
      '牌面显示您可能面临一些挑战。这并非坏事，挑战是成长的契机。保持冷静，逐一应对。'
    ].includes(report.suggestion),
    'suggestion should be generated from the expanded database instead of old generic buckets'
  );
}

function testVocabularyBanksStayBroadAndDistinct() {
  const requiredBanks = {
    positionOpeners: 8,
    positionBridges: 6,
    contextBridges: 6,
    analysisOpeners: 8,
    summaryLeads: 8,
    trajectoryBridges: 6,
    suggestionOpeners: 8,
    suggestionClosers: 6
  };

  Object.entries(requiredBanks).forEach(([bank, minimum]) => {
    assert.ok(
      TAROT_ANALYSIS_DATABASE[bank].length >= minimum,
      `${bank} should contain at least ${minimum} variants`
    );
    assert.strictEqual(
      new Set(TAROT_ANALYSIS_DATABASE[bank]).size,
      TAROT_ANALYSIS_DATABASE[bank].length,
      `${bank} should not contain exact duplicate phrases`
    );
  });

  ['火', '水', '风', '土', '大阿卡纳'].forEach(element => {
    assert.ok(
      TAROT_ANALYSIS_DATABASE.elementVariants[element].length >= 3,
      `${element} should have multiple narrative variants`
    );
  });

  const baseCombinations =
    TAROT_ANALYSIS_DATABASE.positionOpeners.length *
    TAROT_ANALYSIS_DATABASE.positionBridges.length *
    TAROT_ANALYSIS_DATABASE.contextBridges.length *
    TAROT_ANALYSIS_DATABASE.orientationVoices.upright.length;
  assert.ok(baseCombinations >= 1700, 'position narration should have a large compositional vocabulary');
}

testMinorArcanaHaveCardSpecificMeanings();
testSpreadInterpretationsUsePositionAndCardMeaning();
testQuestionContextShapesInterpretation();
testOverallAnalysisUsesExpandedDatabase();
testVocabularyBanksStayBroadAndDistinct();

console.log('tarotEngine tests passed');
