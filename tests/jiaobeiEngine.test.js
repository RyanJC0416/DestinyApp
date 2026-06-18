const assert = require('assert');
const JiaobeiEngine = require('../shared/core/jiaobeiEngine');

const flat = { side: '平面', nature: '阳', key: 'flat' };
const round = { side: '凸面', nature: '阴', key: 'round' };

assert.strictEqual(JiaobeiEngine.interpretPieces([flat, round]).name, '圣杯');
assert.strictEqual(JiaobeiEngine.interpretPieces([round, flat]).name, '圣杯');
assert.strictEqual(JiaobeiEngine.interpretPieces([flat, flat]).name, '笑杯');
assert.strictEqual(JiaobeiEngine.interpretPieces([round, round]).name, '阴杯');
assert.throws(() => JiaobeiEngine.askQuestion('具体事情', false), /尚未/);
assert.strictEqual(JiaobeiEngine.askQuestion('具体事情', true).stage, 'question');
assert.strictEqual(JiaobeiEngine.confirmPresence('妈祖').stage, 'presence');
assert.throws(() => JiaobeiEngine.confirmPresence(''), /对象/);

for (let index = 0; index < 1000; index++) {
  const result = JiaobeiEngine.cast('测试问题');
  assert.strictEqual(result.pieces.length, 2);
  assert.ok(['圣杯', '笑杯', '阴杯'].includes(result.name));
}

console.log('珓杯阴阳组合与返回结构测试通过。');
