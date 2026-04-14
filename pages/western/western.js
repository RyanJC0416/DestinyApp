// western.js
Page({
  data: {
    showTarotModal: false,
    showAstroModal: false,
    showTarotResult: false,
    showAstroResult: false,
    spreadRange: ['三牌阵', '凯尔特十字', '关系牌阵'],
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
  
  // 塔罗占卜表单提交
  submitTarotForm(e) {
    const { question, spread, gender } = e.detail.value;
    
    // 模拟测算结果
    this.setData({
      showTarotResult: true,
      tarotResult: {
        question: question,
        spread: spread,
        gender: gender,
        cards: '魔术师、女祭司、皇帝',
        analysis: '您正处于一个充满创造力和机会的时期，需要运用智慧和权威来实现您的目标。',
        suggestion: '相信自己的能力，保持平衡的心态，勇敢地追求您的梦想。'
      }
    });
  },
  
  // 星盘解析表单提交
  submitAstroForm(e) {
    const { year, month, day, hour, location } = e.detail.value;
    
    // 模拟测算结果
    this.setData({
      showAstroResult: true,
      astroResult: {
        birthInfo: `${year}年${month}月${day}日 ${hour} ${location}`,
        sunSign: '白羊座',
        moonSign: '天蝎座',
        ascendant: '狮子座',
        analysis: '您具有白羊座的活力和领导力，月亮天蝎赋予您深刻的情感和直觉，上升狮子则让您在社交场合中充满自信。',
        suggestion: '发挥您的领导才能，同时注意平衡情感和理性，保持积极的心态面对挑战。'
      }
    });
  }
})