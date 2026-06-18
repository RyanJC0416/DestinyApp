const assert = require('assert');
const { SIXTY_FOUR_GUA } = require('../shared/data/hexagramData');

const NAMES = '\u4e7e \u5764 \u5c6f \u8499 \u9700 \u8bbc \u5e08 \u6bd4 \u5c0f\u755c \u5c65 \u6cf0 \u5426 \u540c\u4eba \u5927\u6709 \u8c26 \u8c6b \u968f \u86ca \u4e34 \u89c2 \u566c\u55d1 \u8d32 \u5265 \u590d \u65e0\u5984 \u5927\u755c \u9890 \u5927\u8fc7 \u574e \u79bb \u54b8 \u6052 \u9041 \u5927\u58ee \u664b \u660e\u5937 \u5bb6\u4eba \u777d \u8e47 \u89e3 \u635f \u76ca \u592c \u59e4 \u8403 \u5347 \u56f0 \u4e95 \u9769 \u9f0e \u9707 \u826e \u6e10 \u5f52\u59b9 \u4e30 \u65c5 \u5dfd \u5151 \u6da3 \u8282 \u4e2d\u5b5a \u5c0f\u8fc7 \u65e2\u6d4e \u672a\u6d4e'.split(' ');
const TRIGRAMS = '\u4e7e\u4e7e \u5764\u5764 \u574e\u9707 \u826e\u574e \u574e\u4e7e \u4e7e\u574e \u5764\u574e \u574e\u5764 \u5dfd\u4e7e \u4e7e\u5151 \u5764\u4e7e \u4e7e\u5764 \u4e7e\u79bb \u79bb\u4e7e \u5764\u826e \u9707\u5764 \u5151\u9707 \u826e\u5dfd \u5764\u5151 \u5dfd\u5764 \u79bb\u9707 \u826e\u79bb \u826e\u5764 \u5764\u9707 \u4e7e\u9707 \u826e\u4e7e \u826e\u9707 \u5151\u5dfd \u574e\u574e \u79bb\u79bb \u5151\u826e \u9707\u5dfd \u4e7e\u826e \u9707\u4e7e \u79bb\u5764 \u5764\u79bb \u5dfd\u79bb \u79bb\u5151 \u574e\u826e \u9707\u574e \u826e\u5151 \u5dfd\u9707 \u5151\u4e7e \u4e7e\u5dfd \u5151\u5764 \u5764\u5dfd \u5151\u574e \u574e\u5dfd \u5151\u79bb \u79bb\u5dfd \u9707\u9707 \u826e\u826e \u5dfd\u826e \u9707\u5151 \u9707\u79bb \u79bb\u826e \u5dfd\u5dfd \u5151\u5151 \u5dfd\u574e \u574e\u5151 \u5dfd\u5151 \u9707\u826e \u574e\u79bb \u79bb\u574e'.split(' ');

assert.strictEqual(SIXTY_FOUR_GUA.length, 64, '\u5fc5\u987b\u5305\u542b\u5b8c\u6574\u7684\u516d\u5341\u56db\u5366');
SIXTY_FOUR_GUA.forEach((gua, index) => {
  const id = index + 1;
  assert.strictEqual(gua.id, id, '\u7b2c ' + id + ' \u5366\u7684\u5366\u5e8f\u9519\u8bef');
  assert.strictEqual(gua.name, NAMES[index] + '\u5366', '\u7b2c ' + id + ' \u5366\u7684\u5366\u540d\u9519\u8bef');
  assert.strictEqual(gua.upper + gua.lower, TRIGRAMS[index], gua.name + '\u7684\u4e0a\u4e0b\u5366\u9519\u8bef');
  assert.strictEqual(gua.symbol.codePointAt(0), 0x4dc0 + index, gua.name + '\u7684 Unicode \u5366\u7b26\u9519\u8bef');
  for (const field of ['guaCi', 'xiangCi', 'plainInterpretation', 'classicSource', 'classicSourceURL']) {
    assert.ok(gua[field], gua.name + '\u7f3a\u5c11 ' + field);
  }
  const expectedLineCount = id <= 2 ? 7 : 6;
  assert.strictEqual(gua.yaoLines.length, expectedLineCount, gua.name + '\u722b\u8f9e\u6570\u91cf\u9519\u8bef');
  gua.yaoLines.forEach((line, lineIndex) => {
    assert.strictEqual(line.position, lineIndex + 1, gua.name + '\u722b\u4f4d\u9519\u8bef');
    assert.ok(line.title && line.original && line.xiang, gua.name + '\u722b\u8f9e\u6216\u5c0f\u8c61\u7f3a\u5931');
  });
  for (const field of ['situation', 'decisionFocus', 'caution', 'career', 'family', 'health', 'love', 'nextStep']) {
    assert.ok(gua.interpretation[field], gua.name + '\u7f3a\u5c11\u73b0\u4ee3\u89e3\u8bfb\u5b57\u6bb5 ' + field);
  }
});

for (const field of ['situation', 'decisionFocus', 'caution', 'career', 'family', 'health', 'love', 'nextStep']) {
  const values = SIXTY_FOUR_GUA.map(gua => gua.interpretation[field]);
  assert.strictEqual(new Set(values).size, 64, field + '\u5b57\u6bb5\u5b58\u5728\u91cd\u590d\u5957\u8bdd');
}

assert.ok(SIXTY_FOUR_GUA[24].guaCi.includes('\u771a'), '\u65e0\u5984\u5366\u5e94\u4e3a\u201c\u6709\u770a\u201d');
assert.ok(SIXTY_FOUR_GUA[50].guaCi.includes('\u8669\u8669'), '\u9707\u5366\u5e94\u4e3a\u201c\u8677\u8677\u201d');
assert.ok(SIXTY_FOUR_GUA[25].xiangCi.includes('\u5929\u5728\u5c71\u4e2d'));
assert.ok(SIXTY_FOUR_GUA[49].xiangCi.includes('\u6728\u4e0a\u6709\u706b'));
assert.ok(SIXTY_FOUR_GUA[62].xiangCi.includes('\u6c34\u5728\u706b\u4e0a'));
assert.strictEqual(SIXTY_FOUR_GUA.reduce((sum, gua) => sum + gua.yaoLines.length, 0), 386, '\u5fc5\u987b\u5305\u542b384\u722b\u53ca\u4e7e\u5764\u7528\u722b');

console.log('\u516d\u5341\u56db\u5366\u5366\u5e8f\u3001\u5366\u540d\u3001\u4e0a\u4e0b\u5366\u3001\u5366\u7b26\u53ca\u7ecf\u5178\u6587\u672c\u5b57\u6bb5\u6821\u9a8c\u901a\u8fc7\u3002');
