/**
 * 交互层 - 西式算命页面
 * 职责：负责UI展示和用户交互，所有计算逻辑委托给核心层引擎
 */

const TarotEngine = require('../../../../shared/core/tarotEngine');
const AstroEngine = require('../../../../shared/core/astroEngine');
const { SPREADS } = require('../../../../shared/data/tarotData');

Page({
  data: {
    showTarotModal: false,
    showAstroModal: false,
    showTarotResult: false,
    showAstroResult: false,
    spreadRange: Object.keys(SPREADS),
    genderRange: ['男', '女'],
    selectedSpread: null,
    selectedTarotGender: null,
    tarotResult: {},
    astroResult: {}
  },

  onLoad() {
    console.log('西式算命页面加载');
  },

  // 打开塔罗占卜弹窗
  openTarotModal() {
    this.setData({
      showTarotModal: true,
      showTarotResult: false
    });
  },

  // 关闭塔罗占卜弹窗
  closeTarotModal() {
    this.setData({
      showTarotModal: false,
      showTarotResult: false
    });
  },

  // 打开星盘解析弹窗
  openAstroModal() {
    this.setData({
      showAstroModal: true,
      showAstroResult: false
    });
  },

  // 关闭星盘解析弹窗
  closeAstroModal() {
    this.setData({
      showAstroModal: false,
      showAstroResult: false
    });
  },

  // 塔罗占卜表单提交 -> 委托给核心层引擎
  submitTarotForm(e) {
    const { question, spread, gender } = e.detail.value;

    // 调用核心层引擎进行塔罗占卜
    const result = TarotEngine.divinate(question, spread, gender);

    this.setData({
      showTarotResult: true,
      tarotResult: result
    });
  },

  copyTarotResult() {
    wx.setClipboardData({
      data: this.data.tarotResult.copyText || '',
      success: () => wx.showToast({ title: '已复制，可发给 AI', icon: 'success' })
    });
  },

  // 星盘解析表单提交 -> 委托给核心层引擎
  submitAstroForm(e) {
    const { year, month, day, hour, location } = e.detail.value;
    
    // 解析小时
    const hourNum = parseInt(hour.split(':')[0]) || 12;

    // 调用核心层引擎进行星盘计算
    const result = AstroEngine.generateReport(
      parseInt(year),
      parseInt(month),
      parseInt(day),
      hourNum,
      location
    );

    this.setData({
      showAstroResult: true,
      astroResult: result
    });
  }
});
