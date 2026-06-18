// 平滑滚动功能
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // 减去头部高度
                behavior: 'smooth'
            });
        }
    });
});

// 按钮点击效果
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // 创建点击效果
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        // 移除效果
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// 滚动时头部样式变化
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        header.style.boxShadow = 'none';
    }
});

// 卡片悬停效果增强
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// 模态框功能
const modals = {
    bazi: document.getElementById('bazi-modal'),
    liuyao: document.getElementById('liuyao-modal'),
    tarot: document.getElementById('tarot-modal'),
    astro: document.getElementById('astro-modal')
};

// 打开模态框
const baziCard = document.querySelector('#chinese .card:nth-child(1) .btn');
const liuyaoCard = document.querySelector('#chinese .card:nth-child(2) .btn');
const tarotCard = document.querySelector('#western .card:nth-child(1) .btn');
const astroCard = document.querySelector('#western .card:nth-child(2) .btn');

baziCard.addEventListener('click', function() {
    modals.bazi.style.display = 'block';
});

liuyaoCard.addEventListener('click', function() {
    modals.liuyao.style.display = 'block';
});

tarotCard.addEventListener('click', function() {
    modals.tarot.style.display = 'block';
});

astroCard.addEventListener('click', function() {
    modals.astro.style.display = 'block';
});

// 关闭模态框
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.style.display = 'none';
        // 重置表单和结果
        const form = modal.querySelector('form');
        const result = modal.querySelector('.result');
        form.reset();
        result.style.display = 'none';
    });
});

// 点击模态框外部关闭
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
        // 重置表单和结果
        const form = e.target.querySelector('form');
        const result = e.target.querySelector('.result');
        form.reset();
        result.style.display = 'none';
    }
});

// 八字算命表单提交
const baziForm = document.getElementById('bazi-form');
baziForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const year = document.getElementById('bazi-year').value;
    const month = document.getElementById('bazi-month').value;
    const day = document.getElementById('bazi-day').value;
    const hour = document.getElementById('bazi-hour').value;
    const gender = document.getElementById('bazi-gender').value;
    
    // 模拟测算结果
    const resultDiv = document.getElementById('bazi-result');
    resultDiv.innerHTML = `
        <h4>八字测算结果</h4>
        <p><strong>出生信息：</strong>${year}年${month}月${day}日 ${hour}</p>
        <p><strong>性别：</strong>${gender === 'male' ? '男' : '女'}</p>
        <p><strong>八字：</strong>甲子 乙丑 丙寅 丁卯</p>
        <p><strong>命运分析：</strong>您的八字显示您为人聪明伶俐，做事有计划，财运较好，但需要注意人际关系的处理。</p>
        <p><strong>建议：</strong>保持乐观心态，多与他人交流，抓住机会发展事业。</p>
    `;
    resultDiv.style.display = 'block';
});

// 周易六爻表单提交
const liuyaoForm = document.getElementById('liuyao-form');
liuyaoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const question = document.getElementById('liuyao-question').value;
    const gender = document.getElementById('liuyao-gender').value;
    const date = document.getElementById('liuyao-date').value;
    
    // 模拟测算结果
    const resultDiv = document.getElementById('liuyao-result');
    resultDiv.innerHTML = `
        <h4>六爻测算结果</h4>
        <p><strong>问题：</strong>${question}</p>
        <p><strong>性别：</strong>${gender === 'male' ? '男' : '女'}</p>
        <p><strong>测算日期：</strong>${date}</p>
        <p><strong>卦象：</strong>乾卦</p>
        <p><strong>解读：</strong>乾卦象征天，刚健中正，您的问题将会得到积极的解决，需要保持信心和耐心。</p>
        <p><strong>建议：</strong>勇往直前，积极行动，抓住机会，成功在望。</p>
    `;
    resultDiv.style.display = 'block';
});

// 塔罗占卜表单提交
const tarotForm = document.getElementById('tarot-form');
tarotForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const question = document.getElementById('tarot-question').value;
    const spread = document.getElementById('tarot-spread').value;
    const gender = document.getElementById('tarot-gender').value;
    
    // 模拟测算结果
    const resultDiv = document.getElementById('tarot-result');
    let spreadName = '';
    switch(spread) {
        case 'three':
            spreadName = '三牌阵';
            break;
        case 'celtic':
            spreadName = '凯尔特十字';
            break;
        case 'relationship':
            spreadName = '关系牌阵';
            break;
    }
    
    resultDiv.innerHTML = `
        <h4>塔罗占卜结果</h4>
        <p><strong>问题：</strong>${question}</p>
        <p><strong>牌阵：</strong>${spreadName}</p>
        <p><strong>性别：</strong>${gender === 'male' ? '男' : '女'}</p>
        <p><strong>牌面：</strong>魔术师、女祭司、皇帝</p>
        <p><strong>解读：</strong>您正处于一个充满创造力和机会的时期，需要运用智慧和权威来实现您的目标。</p>
        <p><strong>建议：</strong>相信自己的能力，保持平衡的心态，勇敢地追求您的梦想。</p>
    `;
    resultDiv.style.display = 'block';
});

// 星盘解析表单提交
const astroForm = document.getElementById('astro-form');
astroForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const year = document.getElementById('astro-year').value;
    const month = document.getElementById('astro-month').value;
    const day = document.getElementById('astro-day').value;
    const hour = document.getElementById('astro-hour').value;
    const location = document.getElementById('astro-location').value;
    
    // 模拟测算结果
    const resultDiv = document.getElementById('astro-result');
    resultDiv.innerHTML = `
        <h4>星盘解析结果</h4>
        <p><strong>出生信息：</strong>${year}年${month}月${day}日 ${hour} ${location}</p>
        <p><strong>太阳星座：</strong>白羊座</p>
        <p><strong>月亮星座：</strong>天蝎座</p>
        <p><strong>上升星座：</strong>狮子座</p>
        <p><strong>解读：</strong>您具有白羊座的活力和领导力，月亮天蝎赋予您深刻的情感和直觉，上升狮子则让您在社交场合中充满自信。</p>
        <p><strong>建议：</strong>发挥您的领导才能，同时注意平衡情感和理性，保持积极的心态面对挑战。</p>
    `;
    resultDiv.style.display = 'block';
});

// 页面加载动画
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});