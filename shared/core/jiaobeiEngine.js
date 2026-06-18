/**
 * 珓杯（掷筊）共享核心。
 * 每枚珓杯独立出现平面（阳）或凸面（阴）：
 * 一阴一阳=圣杯，双阳=笑杯，双阴=阴杯。
 */
class JiaobeiEngine {
  static castPiece(random = Math.random) {
    return random() < 0.5
      ? { side: '平面', nature: '阳', key: 'flat' }
      : { side: '凸面', nature: '阴', key: 'round' };
  }

  static interpretPieces(pieces) {
    const flatCount = pieces.filter(piece => piece.key === 'flat').length;
    if (flatCount === 1) {
      return {
        type: 'sacred',
        name: '圣杯',
        symbol: '☾◖',
        verdict: '允可·阴阳相应',
        meaning: '一阴一阳，传统上表示所问之事得到肯定回应，或当下方向可以继续。',
        guidance: '若问题已经清楚，可按原计划进行下一步；重大事项仍应结合现实信息判断。',
        canProceed: true
      };
    }
    if (flatCount === 2) {
      return {
        type: 'laughing',
        name: '笑杯',
        symbol: '◖◖',
        verdict: '未定·问法需澄清',
        meaning: '两面皆阳，传统上视为笑而不答，常见于问题含糊、时机未到或已有答案却反复追问。',
        guidance: '不要立刻将同一句话重复多次。先把问题改成单一、明确、可以用是否回答的句子。',
        canProceed: null
      };
    }
    return {
      type: 'yin',
      name: '阴杯',
      symbol: '☾☾',
      verdict: '不允·暂勿推进',
      meaning: '两面皆阴，传统上表示否定、不合宜，或当下条件尚不支持所问之事。',
      guidance: '先停止不可逆或高风险行动，检查时机、动机与现实条件，不用反复掷杯强求改变答案。',
      canProceed: false
    };
  }

  static cast(question = '') {
    const pieces = [this.castPiece(), this.castPiece()];
    return {
      question: String(question).trim(),
      pieces,
      ...this.interpretPieces(pieces)
    };
  }

  static confirmPresence(invitee = '') {
    const name = String(invitee).trim();
    if (!name) throw new Error('请先填写请示对象。');
    return {
      stage: 'presence',
      invitee: name,
      ...this.cast(`请问${name}是否在座，并愿意受询？`)
    };
  }

  static askQuestion(question = '', presenceConfirmed = false) {
    if (presenceConfirmed !== true) throw new Error('请示对象尚未以圣杯确认在座，不能进入具体问事。');
    const prompt = String(question).trim();
    if (!prompt) throw new Error('请填写具体事项。');
    return { stage: 'question', ...this.cast(prompt) };
  }
}

module.exports = JiaobeiEngine;
