// chinese.js
Page({
  data: {
    showBaziModal: false,
    showLiuyaoModal: false,
    showBaziResult: false,
    showLiuyaoResult: false,
    timeRange: [
      { name: '子时 (23:00-01:00)' },
      { name: '丑时 (01:00-03:00)' },
      { name: '寅时 (03:00-05:00)' },
      { name: '卯时 (05:00-07:00)' },
      { name: '辰时 (07:00-09:00)' },
      { name: '巳时 (09:00-11:00)' },
      { name: '午时 (11:00-13:00)' },
      { name: '未时 (13:00-15:00)' },
      { name: '申时 (15:00-17:00)' },
      { name: '酉时 (17:00-19:00)' },
      { name: '戌时 (19:00-21:00)' },
      { name: '亥时 (21:00-23:00)' }
    ],
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
  
  // 八字算命表单提交
  submitBaziForm(e) {
    const { year, month, day, hour, gender } = e.detail.value;
    
    // 模拟测算结果
    this.setData({
      showBaziResult: true,
      baziResult: {
        birthInfo: `${year}年${month}月${day}日 ${hour}`,
        gender: gender,
        bazi: '甲子 乙丑 丙寅 丁卯',
        analysis: '您的八字显示您为人聪明伶俐，做事有计划，财运较好，但需要注意人际关系的处理。',
        suggestion: '保持乐观心态，多与他人交流，抓住机会发展事业。'
      }
    });
  },
  
  // 周易六爻表单提交
  submitLiuyaoForm(e) {
    const { question, gender, date } = e.detail.value;
    
    // 模拟测算结果
    this.setData({
      showLiuyaoResult: true,
      liuyaoResult: {
        question: question,
        gender: gender,
        date: date,
        hexagram: '乾卦',
        analysis: '乾卦象征天，刚健中正，您的问题将会得到积极的解决，需要保持信心和耐心。',
        suggestion: '勇往直前，积极行动，抓住机会，成功在望。'
      }
    });
  }
})