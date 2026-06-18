const assert = require('assert');
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const TarotEngine = require('../shared/core/tarotEngine');

function assertExists(relativePath) {
  assert.ok(fs.existsSync(path.join(repoRoot, relativePath)), `${relativePath} should exist`);
}

function assertMissing(relativePath) {
  assert.ok(!fs.existsSync(path.join(repoRoot, relativePath)), `${relativePath} should not exist`);
}

function testRepositoryLayout() {
  [
    'shared/core',
    'shared/data',
    'assets/images/tarot/rws-1909',
    'assets/images/app-icons',
    'assets/images/miniprogram-icons',
    'platforms/web',
    'platforms/macos',
    'platforms/miniprogram',
    'archive/legacy-web'
  ].forEach(assertExists);

  ['core', 'data', 'web', 'pages', 'index.html', 'styles.css', 'script.js', 'test.html'].forEach(assertMissing);
}

function testMiniprogramTabBarIconsAreLocal() {
  const appConfig = require('../platforms/miniprogram/app.json');
  for (const item of appConfig.tabBar.list) {
    assertExists(`platforms/miniprogram/${item.iconPath}`);
    assertExists(`platforms/miniprogram/${item.selectedIconPath}`);
    assertExists(`assets/images/miniprogram-icons/${path.basename(item.iconPath)}`);
    assertExists(`assets/images/miniprogram-icons/${path.basename(item.selectedIconPath)}`);
  }
}

function testTarotImagesAreLocalKeys() {
  const deck = TarotEngine.generateFullDeck();
  assert.strictEqual(deck.length, 78, 'deck should include all 78 tarot cards');

  for (const card of deck) {
    assert.match(card.imageKey, /^[a-z0-9]+\.jpg$/, `${card.name} should expose a local image key`);
    assert.ok(!card.imageURL, `${card.name} should not expose an external image URL`);
    assertExists(`assets/images/tarot/rws-1909/${card.imageKey}`);
  }
}

testRepositoryLayout();
testMiniprogramTabBarIconsAreLocal();
testTarotImagesAreLocalKeys();

console.log('release structure tests passed');
