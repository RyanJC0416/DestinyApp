/**
 * 交互层 - 中式算命页面
 * 职责：负责UI展示和用户交互，所有计算逻辑委托给核心层引擎
 */

const BaziEngine = require('../../core/baziEngine');
const LiuyaoEngine = require('../../core/liuyaoEngine');
const { SHI_CHEN } = require('../../data/baziData');

Page({
  data: {
    showBaziModal: false,
    showLiuyaoModal: false,
    showBaziResult: false,
    showLiuyaoResult: false,
    timeRange: SHI_CHEN.map(s => ({ name: `${s.name} (${s.time})` })),
    genderRange: ['男', '女'],
    selectedTime: null,
    selectedGender: null,
    selectedLiuyaoGender: null,
    baziResult: {},
    liuyaoResult: {}
  },

  onLoad() {
    console.log('中式算命页面加载');
  },

  // 打开八字算命弹窗
  openBaziModal() {
    this.setData({
      showBaziModal: true,
      showBaziResult: false
    });
  },

  // 关闭八字算命弹窗
  closeBaziModal() {
    this.setData({
      showBaziModal: false,
      showBaziResult: false
    });
  },

  // 打开周易六爻弹窗
  openLiuyaoModal() {
    this.setData({
      showLiuyaoModal: true,
      showLiuyaoResult: false
    });
  },

  // 关闭周易六爻弹窗
  closeLiuyaoModal() {
    this.setData({
      showLiuyaoModal: false,
      showLiuyaoResult: false
    });
  },

  // 八字算命表单提交 -> 委托给核心层引擎
  submitBaziForm(e) {
    const { year, month, day, hour, gender } = e.detail.value;
    const hourIndex = parseInt(hour) || 0;

    // 调用核心层引擎进行八字计算
    const result = BaziEngine.generateReport(
      parseInt(year),
      parseInt(month),
      parseInt(day),
      hourIndex,
      gender
    );

    this.setData({
      showBaziResult: true,
      baziResult: result
    });
  },

  // 周易六爻表单提交 -> 委托给核心层引擎
  submitLiuyaoForm(e) {
    const { question, gender, date } = e.detail.value;

    // 调用核心层引擎进行六爻占卜
    const result = LiuyaoEngine.divinate(question, gender, date);

    this.setData({
      showLiuyaoResult: true,
      liuyaoResult: result
    });
  }
});
