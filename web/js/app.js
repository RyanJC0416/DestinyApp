(function () {
  'use strict';

  const escapeHTML = value => String(value ?? '').replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[char]);

  const fortuneClass = value => value.includes('凶') ? 'danger' : value.includes('吉') ? 'good' : 'neutral';
  const formatLines = value => escapeHTML(value).replace(/\n/g, '<br>');
  let corePromise;
  let jiaobeiHistory = [];
  let jiaobeiPresenceConfirmed = false;

  function getCore() {
    corePromise ||= window.loadDestinyCore();
    return corePromise;
  }

  function setDefaultDate() {
    const now = new Date(Date.now() - new Date().getTimezoneOffset() * 60000);
    document.querySelector('[name="date"]').value = now.toISOString().slice(0, 16);
  }

  async function copyText(value) {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return;
    }
    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }

  document.addEventListener('click', async event => {
    const button = event.target.closest('[data-copy-result]');
    if (!button) return;
    const text = button.closest('.copy-result-panel')?.querySelector('.copy-result-text')?.textContent;
    if (!text) return;
    const originalLabel = button.textContent;
    try {
      await copyText(text);
      button.textContent = '✓ 已复制，可粘贴给 AI';
    } catch (_) {
      button.textContent = '复制失败，请手动选择文本';
    }
    setTimeout(() => { button.textContent = originalLabel; }, 2200);
  });

  document.querySelectorAll('.nav-item').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.nav-item, .tool-view').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      document.getElementById(`${button.dataset.view}-view`).classList.add('active');
      document.title = `${button.textContent.trim()} · 命运占卜`;
    });
  });

  document.getElementById('liuyao-form').addEventListener('submit', async event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const output = document.getElementById('liuyao-result');
    output.innerHTML = '<div class="loading">正在起卦…</div>';
    try {
      const core = await getCore();
      const result = core.liuyao.divinate(
        form.get('question').trim(), form.get('gender'), form.get('date'), form.get('topic')
      );
      output.innerHTML = `
        <div class="result-stack">
          <article class="summary-panel">
            <div class="hexagram-symbol">${escapeHTML(result.hexagramSymbol)}</div>
            <div><h2>${escapeHTML(result.hexagram)}</h2><p>上${escapeHTML(result.upperGua)} · 下${escapeHTML(result.lowerGua)}</p>
            <span class="status ${fortuneClass(result.fortune)}">${escapeHTML(result.fortune)}</span></div>
          </article>
          <article class="content-panel copy-result-panel"><div class="copy-result-heading"><div><h3>原始排盘</h3>
            <p>不含本站解读，可直接复制给 AI。</p></div><button class="secondary-button" type="button" data-copy-result>一键复制给 AI</button></div>
            <pre class="copy-result-text">${escapeHTML(result.copyText)}</pre></article>
          <article class="content-panel"><h3>卦象</h3><strong>${escapeHTML(result.hexagramMeaning)}</strong>
            <p>${escapeHTML(result.description)}</p><p>${escapeHTML(result.analysis)}</p></article>
          <article class="content-panel change-panel"><h3>本卦与变卦</h3>
            <div class="hexagram-flow">
              <section class="hexagram-detail">
                <header><span class="hexagram-kind">本卦</span><div><strong>${escapeHTML(result.hexagram)}</strong>
                  <small>上${escapeHTML(result.upperGua)} · 下${escapeHTML(result.lowerGua)}</small></div>
                  <div class="detail-symbol" aria-hidden="true">${escapeHTML(result.hexagramSymbol)}</div></header>
                <div class="hexagram-detail-body"><pre aria-label="${escapeHTML(result.hexagram)}卦画">${escapeHTML(result.yaoText)}</pre>
                  <div class="classic-text"><h4>《象传》大象</h4><p>${escapeHTML(result.xiangCi)}</p>
                    <h4>卦辞原文</h4><blockquote>${escapeHTML(result.guaCi)}</blockquote>
                    <h4>白话解读</h4><p>${escapeHTML(result.plainInterpretation)}</p></div></div>
              </section>
              <section class="changing-process"><div class="flow-arrow" aria-hidden="true">↓</div><h4>变爻过程</h4>
                <p>${formatLines(result.changingAnalysis)}</p></section>
              <section class="hexagram-detail changed">
                <header><span class="hexagram-kind">变卦</span><div><strong>${escapeHTML(result.changingHexagram)}</strong>
                  <small>${escapeHTML(result.changingHexagramMeaning)}</small></div>
                  <div class="detail-symbol" aria-hidden="true">${escapeHTML(result.changingHexagramSymbol)}</div></header>
                <div class="hexagram-detail-body"><pre aria-label="${escapeHTML(result.changingHexagram)}卦画">${escapeHTML(result.changingYaoText)}</pre>
                  <div class="classic-text"><h4>《象传》大象</h4><p>${escapeHTML(result.changingXiangCi)}</p>
                    <h4>卦辞原文</h4><blockquote>${escapeHTML(result.changingGuaCi)}</blockquote>
                    <h4>白话解读</h4><p>${escapeHTML(result.changingPlainInterpretation)}</p></div></div>
              </section>
            </div></article>
          <article class="content-panel topic-guidance"><div class="guidance-title"><h3>${escapeHTML(result.topic)}分析建议</h3>
            <span>${escapeHTML(result.topic)}</span></div><h4>主题分析</h4><p>${escapeHTML(result.topicAnalysis)}</p>
            <h4>行动建议</h4><p>${escapeHTML(result.suggestion)}</p></article>
        </div>`;
    } catch (error) {
      output.innerHTML = `<div class="error-state"><h2>起卦失败</h2><p>${escapeHTML(error.message)}</p></div>`;
    }
  });

  document.getElementById('tarot-form').addEventListener('submit', async event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const output = document.getElementById('tarot-result');
    output.innerHTML = '<div class="loading">正在洗牌…</div>';
    try {
      const core = await getCore();
      const result = core.tarot.divinate(form.get('question').trim(), form.get('spread'), form.get('gender'));
      const cards = result.spreadResult.map(item => `
        <article class="tarot-card-result">
          <div class="card-image-wrap ${item.card.isReversed ? 'reversed' : ''}">
            <img src="${escapeHTML(item.card.imageURL)}" alt="${escapeHTML(item.card.name)}" loading="lazy">
          </div>
          <div class="card-copy"><div class="card-meta"><strong>${escapeHTML(item.position)}</strong>
            <span class="orientation ${item.card.isReversed ? 'reversed-label' : ''}">${item.card.isReversed ? '逆位' : '正位'}</span></div>
            <h3>${escapeHTML(item.card.name)}</h3><p class="muted">${escapeHTML(item.positionMeaning)}</p>
            <hr><p>${escapeHTML(item.interpretation)}</p><small>Rider-Waite-Smith · 1909</small></div>
        </article>`).join('');
      output.innerHTML = `<div class="result-stack"><article class="result-title"><p class="eyebrow">${escapeHTML(result.spread)}</p>
        <h2>${escapeHTML(result.question)}</h2></article>
        <article class="content-panel copy-result-panel"><div class="copy-result-heading"><div><h3>原始牌面</h3>
          <p>不含本站解读，可直接复制给 AI。</p></div><button class="secondary-button" type="button" data-copy-result>一键复制给 AI</button></div>
          <pre class="copy-result-text">${escapeHTML(result.copyText)}</pre></article>${cards}
        <article class="content-panel"><h3>综合指引</h3><p>${escapeHTML(result.analysis)}</p><p>${escapeHTML(result.suggestion)}</p></article></div>`;
    } catch (error) {
      output.innerHTML = `<div class="error-state"><h2>抽牌失败</h2><p>${escapeHTML(error.message)}</p></div>`;
    }
  });

  const jiaobeiSVG = (piece, index) => {
    const gradientId = `cup-${piece.key}-${index}`;
    const upperCurve = piece.key === 'round' ? 'C 5,-30 40,-20 40,0' : 'C 0,-20 40,-20 40,0';
    const underside = piece.key === 'flat'
      ? '<path class="cup-underside" d="M40 0 C40 28 0 25 0 10 C10 15 31 14 40 0Z"/>'
      : '';
    return `<svg class="jiaobei-cup-svg ${escapeHTML(piece.key)}" viewBox="-4 -34 48 66" role="img" aria-label="${escapeHTML(piece.nature)}·${escapeHTML(piece.side)}">
      <defs><linearGradient id="${gradientId}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e26b4f"/><stop offset=".52" stop-color="#b94730"/><stop offset="1" stop-color="#7f251d"/></linearGradient></defs>
      ${underside}<path class="cup-body" fill="url(#${gradientId})" d="M40 0 C40 20 0 20 0 10 Q15 0 0-10 ${upperCurve}Z"/>
      <path class="cup-highlight" d="M34-10 C23-17 9-14 4-8"/><circle class="cup-tip" cx="1.5" cy="10" r="1.6"/>
    </svg>`;
  };

  const renderJiaobei = record => {
    const result = record.result;
    const questionResults = jiaobeiHistory.filter(item => item.stage === 'question');
    const sacredCount = questionResults.findIndex(item => item.result.type !== 'sacred');
    const consecutiveSacred = sacredCount < 0 ? questionResults.length : sacredCount;
    const history = jiaobeiHistory.length > 1 ? `<article class="content-panel"><h3>本次请示记录</h3>
      <div class="jiaobei-history">${jiaobeiHistory.map(item => `<div><span>${item.stage === 'presence' ? '对象确认' : '具体问事'}</span>
        <span title="${escapeHTML(item.prompt)}">${escapeHTML(item.prompt)}</span><strong class="${escapeHTML(item.result.type)}">${escapeHTML(item.result.name)}</strong></div>`).join('')}</div></article>` : '';
    return `<div class="result-stack"><article class="jiaobei-result-card ${escapeHTML(result.type)}">
      <div class="jiaobei-stage-label">${record.stage === 'presence' ? '请示对象确认' : '具体事项请示'}</div><h3>${escapeHTML(record.prompt)}</h3>
      <div class="jiaobei-cups">${result.pieces.map((piece, index) => `<div>${jiaobeiSVG(piece, index)}
        <small>${escapeHTML(piece.nature)}·${escapeHTML(piece.side)}</small></div>`).join('')}</div>
      <h2>${escapeHTML(result.name)}</h2><p>${escapeHTML(result.verdict)}</p>
      ${record.stage === 'presence' && result.type !== 'sacred' ? '<div class="presence-locked">🔒 未解锁具体问事</div>' : ''}
      ${consecutiveSacred >= 3 ? '<div class="triple-sacred">✓ 具体事项已连得三次圣杯</div>' : ''}</article>
      <article class="content-panel"><h3>珓意</h3><p>${escapeHTML(result.meaning)}</p><p>${escapeHTML(result.guidance)}</p></article>${history}</div>`;
  };

  const recordJiaobeiCast = (stage, prompt, result) => {
    const record = { stage, prompt, result };
    jiaobeiHistory.unshift(record);
    document.getElementById('jiaobei-result').innerHTML = renderJiaobei(record);
  };

  document.getElementById('jiaobei-presence').addEventListener('click', async event => {
    const presenceButton = event.currentTarget;
    const form = document.getElementById('jiaobei-form');
    const inviteeInput = form.elements.invitee;
    if (!inviteeInput.reportValidity()) return;
    const invitee = inviteeInput.value.trim();
    const prompt = `请问${invitee}是否在座，并愿意受询？`;
    const output = document.getElementById('jiaobei-result');
    output.innerHTML = '<div class="loading">正在确认请示对象…</div>';
    presenceButton.disabled = true;
    try {
      const core = await getCore();
      const result = core.jiaobei.confirmPresence(invitee);
      recordJiaobeiCast('presence', prompt, result);
      const inlineResult = document.getElementById('jiaobei-presence-result');
      inlineResult.hidden = false;
      inlineResult.className = `presence-result ${result.type}`;
      inlineResult.innerHTML = `<strong>${escapeHTML(result.name)}·${escapeHTML(result.verdict)}</strong><span>${escapeHTML(result.meaning)}</span>`;
      if (result.type === 'sacred') {
        jiaobeiPresenceConfirmed = true;
        inviteeInput.disabled = true;
        form.elements.question.disabled = false;
        form.querySelector('[type="submit"]').disabled = false;
        document.getElementById('jiaobei-presence-confirmed').hidden = false;
        document.getElementById('jiaobei-question-step').classList.remove('locked');
        presenceButton.hidden = true;
      } else {
        presenceButton.textContent = '再次确认请示对象';
      }
    } catch (error) {
      output.innerHTML = `<div class="error-state"><h2>掷杯失败</h2><p>${escapeHTML(error.message)}</p></div>`;
    }
    presenceButton.disabled = false;
  });

  document.getElementById('jiaobei-form').addEventListener('submit', async event => {
    event.preventDefault();
    const jiaobeiForm = event.currentTarget;
    const output = document.getElementById('jiaobei-result');
    if (!jiaobeiPresenceConfirmed) return;
    const question = new FormData(jiaobeiForm).get('question').trim();
    output.innerHTML = '<div class="loading">正在掷杯…</div>';
    try {
      const core = await getCore();
      const result = core.jiaobei.askQuestion(question, jiaobeiPresenceConfirmed);
      recordJiaobeiCast('question', question, result);
      jiaobeiForm.querySelector('[type="submit"]').textContent = '再掷一次';
    } catch (error) {
      output.innerHTML = `<div class="error-state"><h2>掷杯失败</h2><p>${escapeHTML(error.message)}</p></div>`;
    }
  });

  document.getElementById('jiaobei-reset').addEventListener('click', () => {
    jiaobeiHistory = [];
    jiaobeiPresenceConfirmed = false;
    const form = document.getElementById('jiaobei-form');
    form.reset();
    form.elements.invitee.disabled = false;
    form.elements.question.disabled = true;
    form.querySelector('[type="submit"]').disabled = true;
    form.querySelector('[type="submit"]').textContent = '请示具体事项';
    const presenceButton = document.getElementById('jiaobei-presence');
    presenceButton.hidden = false;
    presenceButton.disabled = false;
    presenceButton.textContent = '掷杯请示是否在座';
    document.getElementById('jiaobei-presence-confirmed').hidden = true;
    const inlineResult = document.getElementById('jiaobei-presence-result');
    inlineResult.hidden = true;
    inlineResult.className = 'presence-result';
    inlineResult.textContent = '';
    document.getElementById('jiaobei-question-step').classList.add('locked');
    document.getElementById('jiaobei-result').innerHTML = '<div class="empty-state"><span>◖</span><h2>第一步：先问谁</h2><p>填写请示对象，确认是否在座。</p></div>';
  });

  setDefaultDate();
})();
