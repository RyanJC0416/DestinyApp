(function (global) {
  'use strict';

  const scriptUrl = document.currentScript && document.currentScript.src;
  const siteRoot = new URL('../', scriptUrl || global.location.href);

  async function loadModule(modules, url, key) {
    const moduleUrl = new URL(url, siteRoot);
    const response = await fetch(moduleUrl, { cache: 'no-store' });
    if (!response.ok) throw new Error(`无法加载共享核心：${url}`);
    const source = await response.text();
    const module = { exports: {} };
    const localRequire = name => modules[name];
    new Function('module', 'exports', 'require', source)(module, module.exports, localRequire);
    modules[key] = module.exports;
  }

  global.loadDestinyCore = async function () {
    const modules = {};
    await loadModule(modules, 'data/yaoData.js', './yaoData');
    await loadModule(modules, 'data/hexagramData.js', '../data/hexagramData');
    await loadModule(modules, 'data/tarotData.js', '../data/tarotData');
    await loadModule(modules, 'core/liuyaoEngine.js', 'core/liuyaoEngine');
    await loadModule(modules, 'core/tarotEngine.js', 'core/tarotEngine');
    await loadModule(modules, 'core/jiaobeiEngine.js', 'core/jiaobeiEngine');
    return {
      liuyao: modules['core/liuyaoEngine'],
      tarot: modules['core/tarotEngine'],
      jiaobei: modules['core/jiaobeiEngine']
    };
  };
})(window);
