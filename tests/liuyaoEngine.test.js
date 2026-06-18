const assert = require('assert');
const LiuyaoEngine = require('../shared/core/liuyaoEngine');
const { SIXTY_FOUR_GUA } = require('../shared/data/hexagramData');

SIXTY_FOUR_GUA.forEach(hexagram => {
  hexagram.yaoLines.filter(line => line.position <= 6).forEach(line => {
    const value = line.title.includes('\u516d') ? 6 : 9;
    const type = value === 6 ? '\u8001\u9634' : '\u8001\u9633';
    const text = LiuyaoEngine.interpretMovingLine(hexagram, { position: line.position, value, type });
    assert.ok(text.includes(line.original), hexagram.name + line.title + '\u672a\u5f15\u7528\u771f\u5b9e\u722b\u8f9e');
    assert.ok(text.includes(line.xiang), hexagram.name + line.title + '\u672a\u5f15\u7528\u5c0f\u8c61');
  });
});

for (const topic of ['事业', '家庭', '健康', '感情']) {
  const result = LiuyaoEngine.divinate('模块分析测试', '女', '2026-06-17', topic);
  assert.strictEqual(result.topic, topic);
  assert.ok(result.topicAnalysis.length > 30, topic + '模块缺少主题分析');
  assert.ok(result.suggestion.length > 30, topic + '模块缺少行动建议');
}

const fallback = LiuyaoEngine.divinate('默认模块测试', '男', '2026-06-17', '未知模块');
assert.strictEqual(fallback.topic, '事业');

console.log('六爻事业、家庭、健康、感情四模块测试通过。');
