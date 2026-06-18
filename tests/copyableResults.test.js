const assert = require('assert');
const LiuyaoEngine = require('../core/liuyaoEngine');
const TarotEngine = require('../core/tarotEngine');

const liuyao = LiuyaoEngine.divinate('这个项目是否适合现在推进？', '男', '2026-06-18T12:00:00+08:00', '事业');
assert.ok(liuyao.copyText.includes('【六爻排盘原始结果】'));
assert.ok(liuyao.copyText.includes(`本卦：${liuyao.hexagram}`));
assert.ok(liuyao.copyText.includes(`变卦：${liuyao.changingHexagram}`));
assert.ok(liuyao.copyText.includes('六爻（自上而下）：'));
assert.ok(liuyao.copyText.includes('动爻：'));
assert.ok(!liuyao.copyText.includes(liuyao.topicAnalysis), 'copy text must not contain generated interpretation');
assert.ok(!liuyao.copyText.includes(liuyao.suggestion), 'copy text must not contain generated advice');

const tarot = TarotEngine.divinate('这段关系接下来如何发展？', '关系牌阵', '女');
assert.ok(tarot.copyText.includes('【塔罗抽牌原始结果】'));
assert.ok(tarot.copyText.includes(`牌阵：${tarot.spread}`));
tarot.spreadResult.forEach(item => {
  assert.ok(tarot.copyText.includes(item.position));
  assert.ok(tarot.copyText.includes(item.card.name));
  assert.ok(tarot.copyText.includes(item.card.isReversed ? '逆位' : '正位'));
});
assert.ok(!tarot.copyText.includes(tarot.analysis), 'copy text must not contain generated interpretation');
assert.ok(!tarot.copyText.includes(tarot.suggestion), 'copy text must not contain generated advice');

console.log('copyable result tests passed');
