/**
 * 网页版核心引擎 - 浏览器全局对象版本
 * 此文件将 core/ 和 data/ 的逻辑打包为浏览器可用的全局对象
 */

(function(global) {
  'use strict';

  // ========== 数据层 ==========
  const DestinyData = {
    // 八字数据
    bazi: {
      TIAN_GAN: ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'],
      DI_ZHI: ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'],
      TIAN_GAN_WUXING: { '甲': '木', '乙': '木', '丙': '火', '丁': '火', '戊': '土', '己': '土', '庚': '金', '辛': '金', '壬': '水', '癸': '水' },
      DI_ZHI_WUXING: { '子': '水', '丑': '土', '寅': '木', '卯': '木', '辰': '土', '巳': '火', '午': '火', '未': '土', '申': '金', '酉': '金', '戌': '土', '亥': '水' },
      SHI_CHEN: [
        { name: '子时', time: '23:00-01:00', diZhi: '子' }, { name: '丑时', time: '01:00-03:00', diZhi: '丑' },
        { name: '寅时', time: '03:00-05:00', diZhi: '寅' }, { name: '卯时', time: '05:00-07:00', diZhi: '卯' },
        { name: '辰时', time: '07:00-09:00', diZhi: '辰' }, { name: '巳时', time: '09:00-11:00', diZhi: '巳' },
        { name: '午时', time: '11:00-13:00', diZhi: '午' }, { name: '未时', time: '13:00-15:00', diZhi: '未' },
        { name: '申时', time: '15:00-17:00', diZhi: '申' }, { name: '酉时', time: '17:00-19:00', diZhi: '酉' },
        { name: '戌时', time: '19:00-21:00', diZhi: '戌' }, { name: '亥时', time: '21:00-23:00', diZhi: '亥' }
      ],
      MONTH_GAN_TABLE: { '甲': 2, '己': 2, '乙': 4, '庚': 4, '丙': 6, '辛': 6, '丁': 8, '壬': 8, '戊': 0, '癸': 0 },
      HOUR_GAN_TABLE: { '甲': 0, '己': 0, '乙': 2, '庚': 2, '丙': 4, '辛': 4, '丁': 6, '壬': 6, '戊': 8, '癸': 8 },
      BAZI_ANALYSIS_TEMPLATES: {
        strong: [
          '您的八字身强，为人独立自主，有主见，做事果断。',
          '八字显示您精力充沛，意志坚定，有较强的抗压能力。',
          '您天生具有领导才能，适合担当重任。'
        ],
        weak: [
          '您的八字身弱，为人温和谦逊，善于倾听。',
          '八字显示您心思细腻，富有同情心。',
          '您性格柔顺，善于协调人际关系。'
        ],
        balanced: [
          '您的八字五行较为平衡，性格温和，处事圆融。',
          '八字显示您为人稳重，能够理性分析问题。',
          '您具有良好的协调能力，能够在不同环境中找到自己的位置。'
        ]
      },
      WUXING_ANALYSIS: {
        '金': '金主刚毅果断，您具有坚定的意志和决断力。',
        '木': '木主仁慈博爱，您心地善良，富有同情心。',
        '水': '水主智慧灵动，您聪明机智，善于变通。',
        '火': '火主热情积极，您性格开朗，充满活力。',
        '土': '土主诚信稳重，您为人诚实可靠，做事踏实。'
      }
    },

    // 六十四卦数据
    hexagram: {
      BA_GUA: [
        { name: '乾', symbol: '☰', nature: '天', attribute: '刚健', lines: [1,1,1] },
        { name: '坤', symbol: '☷', nature: '地', attribute: '柔顺', lines: [0,0,0] },
        { name: '震', symbol: '☳', nature: '雷', attribute: '动', lines: [0,0,1] },
        { name: '巽', symbol: '☴', nature: '风', attribute: '入', lines: [1,1,0] },
        { name: '坎', symbol: '☵', nature: '水', attribute: '陷', lines: [0,1,0] },
        { name: '离', symbol: '☲', nature: '火', attribute: '丽', lines: [1,0,1] },
        { name: '艮', symbol: '☶', nature: '山', attribute: '止', lines: [0,1,1] },
        { name: '兑', symbol: '☱', nature: '泽', attribute: '悦', lines: [1,0,0] }
      ],
      SIXTY_FOUR_GUA: [
        { id: 1, name: '乾卦', upper: '乾', lower: '乾', fortune: '大吉', 
          meaning: '天行健，君子以自强不息',
          description: '乾卦象征天，刚健中正。表示事物处于最旺盛的阶段。',
          advice: '勇往直前，积极进取。现在是展现领导力、开创事业的最佳时机。' },
        { id: 2, name: '坤卦', upper: '坤', lower: '坤', fortune: '大吉',
          meaning: '地势坤，君子以厚德载物',
          description: '坤卦象征地，柔顺包容。表示需要以柔克刚。',
          advice: '以柔克刚，包容万物。现在适合默默耕耘，积累经验。' },
        { id: 11, name: '泰卦', upper: '坤', lower: '乾', fortune: '大吉',
          meaning: '天地交，泰',
          description: '泰卦象征通达，天地相交。表示阴阳调和，万事亨通。',
          advice: '天地交泰，万事如意。这是最好的时机，一切都将顺利进行。' },
        { id: 12, name: '否卦', upper: '乾', lower: '坤', fortune: '凶',
          meaning: '天地不交，否',
          description: '否卦象征闭塞，天地不交。表示事物处于逆境。',
          advice: '逆境之中，坚守正道。虽然暂时困顿，但请相信否极泰来。' },
        { id: 15, name: '谦卦', upper: '坤', lower: '艮', fortune: '大吉',
          meaning: '地中有山，谦',
          description: '谦卦象征谦虚。表示以谦虚的态度处世。',
          advice: '谦虚待人，厚德载物。保持谦逊，您将赢得更多的尊重和支持。' },
        { id: 29, name: '坎卦', upper: '坎', lower: '坎', fortune: '凶',
          meaning: '水洊至，习坎',
          description: '坎卦象征险陷。表示面临重重困难和危险。',
          advice: '处险不惊，诚信可破。面对困难保持冷静，用诚信和智慧来化解危机。' },
        { id: 30, name: '离卦', upper: '离', lower: '离', fortune: '中平',
          meaning: '明两作，离',
          description: '离卦象征光明。表示内心光明，但需要依附正道。',
          advice: '光明磊落，依附正道。保持内心的光明和正直。' },
        { id: 63, name: '既济卦', upper: '坎', lower: '离', fortune: '中平',
          meaning: '水火既济',
          description: '既济卦象征已经完成。表示事情已经成功，但需要保持警惕。',
          advice: '居安思危，保持警惕。成功之后更要小心。' },
        { id: 64, name: '未济卦', upper: '离', lower: '坎', fortune: '小吉',
          meaning: '火水未济',
          description: '未济卦象征尚未完成。表示事情还在进行中。',
          advice: '继续努力，终将成功。虽然尚未完成，但请不要灰心。' }
      ],
      YAO_TEXTS: {
        '老阳': '老阳变阴，阳极生变。表示事情发展到顶点，即将转向。',
        '老阴': '老阴变阳，阴极生变。表示事情处于低谷，即将好转。',
        '少阳': '少阳不变，阳气初生。表示事情刚开始，充满生机。',
        '少阴': '少阴不变，阴气渐长。表示事情稳定发展，循序渐进。'
      }
    },

    // 塔罗数据
    tarot: {
      MAJOR_ARCANA: [
        { id: 0, name: '愚者', upright: '新的开始、冒险精神、乐观态度。您正站在人生的新起点上。',
          reversed: '可能表示鲁莽行事、缺乏计划、过于天真。' },
        { id: 1, name: '魔术师', upright: '您拥有实现目标所需的所有资源和能力。现在是采取行动的最佳时机。',
          reversed: '可能表示能力未被充分利用，或有欺骗的成分。' },
        { id: 2, name: '女祭司', upright: '相信您的直觉和内在智慧。答案往往隐藏在表面之下。',
          reversed: '可能表示忽视了内心的声音，或者被表面的现象所迷惑。' },
        { id: 6, name: '恋人', upright: '重要的关系或选择即将出现。跟随内心，选择真正符合您价值观的道路。',
          reversed: '可能表示关系中的不和谐，或者错误的选择。' },
        { id: 9, name: '隐者', upright: '需要独处和反思的时间。退后一步，从更高的视角审视问题。',
          reversed: '可能表示过度孤立，或者逃避问题。' },
        { id: 10, name: '命运之轮', upright: '命运之轮正在转动，好运即将来临。抓住机会，顺势而为。',
          reversed: '可能表示逆境或不顺。记住，困难只是暂时的。' },
        { id: 13, name: '死神', upright: '一个重要的阶段即将结束，为新开始腾出空间。拥抱变化。',
          reversed: '可能表示抗拒结束，或者转变的延迟。' },
        { id: 17, name: '星星', upright: '希望和灵感之光照亮前方。保持信念，您的愿望正在显化的路上。',
          reversed: '可能表示失去希望，或者信心动摇。' },
        { id: 19, name: '太阳', upright: '充满阳光和正能量的时期。成功、快乐和活力将伴随您。',
          reversed: '可能表示暂时的阴霾，或者快乐被遮蔽。' }
      ],
      MINOR_ARCANA_SUIT: ['权杖', '圣杯', '宝剑', '星币'],
      MINOR_ARCANA_ELEMENTS: { '权杖': '火', '圣杯': '水', '宝剑': '风', '星币': '土' },
      SPREADS: {
        '三牌阵': { cardCount: 3, positions: ['过去', '现在', '未来'] },
        '凯尔特十字': { cardCount: 10, positions: ['现状', '挑战', '基础', '过去', '目标', '未来', '自我', '环境', '希望', '结果'] },
        '关系牌阵': { cardCount: 5, positions: ['您', '对方', '关系动力', '关系基础', '未来走向'] }
      }
    },

    // 星座数据
    zodiac: {
      ZODIAC_SIGNS: [
        { id: 0, name: '白羊座', symbol: '♈', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19, element: '火' },
        { id: 1, name: '金牛座', symbol: '♉', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20, element: '土' },
        { id: 2, name: '双子座', symbol: '♊', startMonth: 5, startDay: 21, endMonth: 6, endDay: 21, element: '风' },
        { id: 3, name: '巨蟹座', symbol: '♋', startMonth: 6, startDay: 22, endMonth: 7, endDay: 22, element: '水' },
        { id: 4, name: '狮子座', symbol: '♌', startMonth: 7, startDay: 23, endMonth: 8, endDay: 22, element: '火' },
        { id: 5, name: '处女座', symbol: '♍', startMonth: 8, startDay: 23, endMonth: 9, endDay: 22, element: '土' },
        { id: 6, name: '天秤座', symbol: '♎', startMonth: 9, startDay: 23, endMonth: 10, endDay: 23, element: '风' },
        { id: 7, name: '天蝎座', symbol: '♏', startMonth: 10, startDay: 24, endMonth: 11, endDay: 22, element: '水' },
        { id: 8, name: '射手座', symbol: '♐', startMonth: 11, startDay: 23, endMonth: 12, endDay: 21, element: '火' },
        { id: 9, name: '摩羯座', symbol: '♑', startMonth: 12, startDay: 22, endMonth: 1, endDay: 19, element: '土' },
        { id: 10, name: '水瓶座', symbol: '♒', startMonth: 1, startDay: 20, endMonth: 2, endDay: 18, element: '风' },
        { id: 11, name: '双鱼座', symbol: '♓', startMonth: 2, startDay: 19, endMonth: 3, endDay: 20, element: '水' }
      ]
    }
  };

  // ========== 核心层 ==========
  const DestinyCore = {
    // 八字引擎
    bazi: {
      calcYearPillar(year) {
        const d = DestinyData.bazi;
        const ganIndex = (year - 1900 + 6) % 10;
        const zhiIndex = (year - 1900) % 12;
        const gan = d.TIAN_GAN[ganIndex];
        const zhi = d.DI_ZHI[zhiIndex];
        return { gan, zhi, ganWuxing: d.TIAN_GAN_WUXING[gan], zhiWuxing: d.DI_ZHI_WUXING[zhi] };
      },
      calcMonthPillar(year, month) {
        const d = DestinyData.bazi;
        const yearPillar = this.calcYearPillar(year);
        const monthGanStart = d.MONTH_GAN_TABLE[yearPillar.gan];
        const monthGanIndex = (monthGanStart + month - 1) % 10;
        const monthZhiIndex = (month + 1) % 12;
        const gan = d.TIAN_GAN[monthGanIndex];
        const zhi = d.DI_ZHI[monthZhiIndex];
        return { gan, zhi, ganWuxing: d.TIAN_GAN_WUXING[gan], zhiWuxing: d.DI_ZHI_WUXING[zhi] };
      },
      calcDayPillar(year, month, day) {
        const d = DestinyData.bazi;
        const baseDate = new Date(1900, 0, 31);
        const targetDate = new Date(year, month - 1, day);
        const diffDays = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
        const ganIndex = ((diffDays % 10) + 10) % 10;
        const zhiIndex = ((diffDays % 12) + 12) % 12;
        const gan = d.TIAN_GAN[ganIndex];
        const zhi = d.DI_ZHI[zhiIndex];
        return { gan, zhi, ganWuxing: d.TIAN_GAN_WUXING[gan], zhiWuxing: d.DI_ZHI_WUXING[zhi] };
      },
      calcHourPillar(dayPillar, hourIndex) {
        const d = DestinyData.bazi;
        const hourGanStart = d.HOUR_GAN_TABLE[dayPillar.gan];
        const hourGanIndex = (hourGanStart + hourIndex) % 10;
        const zhi = d.DI_ZHI[hourIndex];
        const gan = d.TIAN_GAN[hourGanIndex];
        return { gan, zhi, ganWuxing: d.TIAN_GAN_WUXING[gan], zhiWuxing: d.DI_ZHI_WUXING[zhi] };
      },
      analyzeWuxing(baziResult) {
        const d = DestinyData.bazi;
        const { yearPillar, monthPillar, dayPillar, hourPillar } = baziResult;
        const pillars = [yearPillar, monthPillar, dayPillar, hourPillar];
        const wuxingCount = { '金': 0, '木': 0, '水': 0, '火': 0, '土': 0 };
        pillars.forEach(p => {
          wuxingCount[p.ganWuxing]++;
          wuxingCount[p.zhiWuxing]++;
        });
        let maxWuxing = '', minWuxing = '';
        let maxCount = -1, minCount = 999;
        for (const [wx, count] of Object.entries(wuxingCount)) {
          if (count > maxCount) { maxCount = count; maxWuxing = wx; }
          if (count < minCount) { minCount = count; minWuxing = wx; }
        }
        const dayGanWuxing = dayPillar.ganWuxing;
        const monthZhiWuxing = monthPillar.zhiWuxing;
        const wuxingShengke = {
          '木': { sheng: '水', beiSheng: '火' },
          '火': { sheng: '木', beiSheng: '土' },
          '土': { sheng: '火', beiSheng: '金' },
          '金': { sheng: '土', beiSheng: '水' },
          '水': { sheng: '金', beiSheng: '木' }
        };
        let strength = 'balanced';
        const info = wuxingShengke[dayGanWuxing];
        if (monthZhiWuxing === dayGanWuxing || monthZhiWuxing === info.sheng) strength = 'strong';
        else if (monthZhiWuxing === info.beiSheng) strength = 'weak';
        return { wuxingCount, dominantWuxing: maxWuxing, weakWuxing: minWuxing, strength, dayGanWuxing };
      },
      generateReport(year, month, day, hourIndex, gender) {
        const d = DestinyData.bazi;
        const yearPillar = this.calcYearPillar(year);
        const monthPillar = this.calcMonthPillar(year, month);
        const dayPillar = this.calcDayPillar(year, month, day);
        const hourPillar = this.calcHourPillar(dayPillar, hourIndex);
        const bazi = `${yearPillar.gan}${yearPillar.zhi} ${monthPillar.gan}${monthPillar.zhi} ${dayPillar.gan}${dayPillar.zhi} ${hourPillar.gan}${hourPillar.zhi}`;
        const wuxingAnalysis = this.analyzeWuxing({ yearPillar, monthPillar, dayPillar, hourPillar });
        const templates = d.BAZI_ANALYSIS_TEMPLATES[wuxingAnalysis.strength] || d.BAZI_ANALYSIS_TEMPLATES.balanced;
        const analysis = templates[Math.floor(Math.random() * templates.length)];
        const wuxingText = d.WUXING_ANALYSIS[wuxingAnalysis.dominantWuxing] || '';
        return {
          birthInfo: `${year}年${month}月${day}日 ${d.SHI_CHEN[hourIndex].name}`,
          gender, bazi, shichen: d.SHI_CHEN[hourIndex].name,
          yearPillar: `${yearPillar.gan}${yearPillar.zhi}`,
          monthPillar: `${monthPillar.gan}${monthPillar.zhi}`,
          dayPillar: `${dayPillar.gan}${dayPillar.zhi}`,
          hourPillar: `${hourPillar.gan}${hourPillar.zhi}`,
          wuxing: wuxingAnalysis,
          analysis: `${analysis} ${wuxingText}`,
          suggestion: '保持积极乐观的心态，善用自己的优势，同时注意补足不足。'
        };
      }
    },

    // 六爻引擎
    liuyao: {
      tossCoins() {
        const coins = [Math.random() < 0.5 ? 3 : 2, Math.random() < 0.5 ? 3 : 2, Math.random() < 0.5 ? 3 : 2];
        const sum = coins.reduce((a, b) => a + b, 0);
        if (sum === 9) return { value: 9, type: '老阳', line: 1 };
        if (sum === 8) return { value: 8, type: '少阴', line: 0 };
        if (sum === 7) return { value: 7, type: '少阳', line: 1 };
        return { value: 6, type: '老阴', line: 0 };
      },
      generateHexagram() {
        const yaoArray = [];
        const changingLines = [];
        for (let i = 0; i < 6; i++) {
          const yao = this.tossCoins();
          yaoArray.push(yao);
          if (yao.type === '老阳' || yao.type === '老阴') {
            changingLines.push({ position: i + 1, ...yao });
          }
        }
        return { yaoArray, changingLines };
      },
      parseHexagram(yaoArray) {
        const d = DestinyData.hexagram;
        const lowerLines = [yaoArray[0].line, yaoArray[1].line, yaoArray[2].line];
        const upperLines = [yaoArray[3].line, yaoArray[4].line, yaoArray[5].line];
        const lowerGua = d.BA_GUA.find(g => g.lines[0] === lowerLines[0] && g.lines[1] === lowerLines[1] && g.lines[2] === lowerLines[2]);
        const upperGua = d.BA_GUA.find(g => g.lines[0] === upperLines[0] && g.lines[1] === upperLines[1] && g.lines[2] === upperLines[2]);
        const hexagram = d.SIXTY_FOUR_GUA.find(g => g.lower === lowerGua.name && g.upper === upperGua.name) || d.SIXTY_FOUR_GUA[0];
        return { lowerGua, upperGua, hexagram };
      },
      generateYaoText(yaoArray) {
        const lines = [];
        for (let i = 5; i >= 0; i--) {
          const yao = yaoArray[i];
          if (yao.type === '老阳') lines.push('━━━○');
          else if (yao.type === '老阴') lines.push('━ ━×');
          else if (yao.line === 1) lines.push('━━━');
          else lines.push('━ ━');
        }
        return lines.join('\n');
      },
      divinate(question, gender, date) {
        const d = DestinyData.hexagram;
        const { yaoArray, changingLines } = this.generateHexagram();
        const { lowerGua, upperGua, hexagram } = this.parseHexagram(yaoArray);
        
        let changingAnalysis = '';
        if (changingLines.length > 0) {
          changingAnalysis = changingLines.map(cl => `第${cl.position}爻：${d.YAO_TEXTS[cl.type]}`).join('\n');
        } else {
          changingAnalysis = '六爻皆不变，表示事情发展平稳，按当前趋势进行即可。';
        }

        return {
          question, gender, date,
          hexagram: hexagram.name,
          hexagramMeaning: hexagram.meaning,
          description: hexagram.description,
          fortune: hexagram.fortune,
          yaoText: this.generateYaoText(yaoArray),
          lowerGua: lowerGua.name,
          upperGua: upperGua.name,
          changingLinesCount: changingLines.length,
          changingAnalysis,
          analysis: hexagram.advice,
          suggestion: `${hexagram.advice} 卦象显示${hexagram.fortune === '大吉' ? '大吉大利' : (hexagram.fortune === '吉' ? '吉祥如意' : (hexagram.fortune === '凶' ? '需谨慎行事' : '平稳发展'))}，请根据实际情况做出明智的选择。`
        };
      }
    },

    // 塔罗引擎
    tarot: {
      generateMinorArcanaCard(suit, number) {
        const d = DestinyData.tarot;
        const courtNames = { 11: '侍从', 12: '骑士', 13: '皇后', 14: '国王' };
        const element = d.MINOR_ARCANA_ELEMENTS[suit];
        let name;
        if (number <= 10) name = `${suit}${number}`;
        else name = `${suit}${courtNames[number]}`;
        return {
          id: 100 + d.MINOR_ARCANA_SUIT.indexOf(suit) * 14 + number - 1,
          name, suit, element, number,
          meaning: `${name}，代表${suit}`,
          upright: `这张牌代表${suit}的正面能量。在当前的牌阵位置，它暗示着积极的发展和机会。`,
          reversed: `这张牌暗示${suit}方面可能存在挑战或阻碍。需要更加谨慎地处理相关问题。`
        };
      },
      generateFullDeck() {
        const d = DestinyData.tarot;
        const deck = [...d.MAJOR_ARCANA];
        d.MINOR_ARCANA_SUIT.forEach(suit => {
          for (let i = 1; i <= 14; i++) {
            deck.push(this.generateMinorArcanaCard(suit, i));
          }
        });
        return deck;
      },
      shuffle(deck) {
        const shuffled = [...deck];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      },
      drawCards(count) {
        const deck = this.shuffle(this.generateFullDeck());
        const drawn = [];
        for (let i = 0; i < count; i++) {
          const isReversed = Math.random() < 0.15;
          drawn.push({ ...deck[i], isReversed, interpretation: isReversed ? deck[i].reversed : deck[i].upright });
        }
        return drawn;
      },
      divinate(question, spreadName, gender) {
        const d = DestinyData.tarot;
        const spread = d.SPREADS[spreadName] || d.SPREADS['三牌阵'];
        const cards = this.drawCards(spread.cardCount);
        const spreadResult = cards.map((card, index) => ({
          position: spread.positions[index],
          card: { name: card.name, meaning: card.meaning, isReversed: card.isReversed },
          interpretation: card.interpretation
        }));
        const cardNames = cards.map(c => c.name + (c.isReversed ? '(逆位)' : '')).join('、');
        const reversedCount = cards.filter(c => c.isReversed).length;
        let suggestion;
        if (reversedCount === 0) suggestion = '所有牌均为正位，这是一个非常积极的信号。';
        else if (reversedCount <= spread.cardCount / 2) suggestion = '牌面整体偏向积极，但有一些需要注意的地方。';
        else suggestion = '牌面显示您可能面临一些挑战。保持冷静，逐一应对。';

        return { question, spread: spreadName, gender, cards: cardNames, spreadResult, suggestion };
      }
    },

    // 星盘引擎
    astro: {
      calcSunSign(month, day) {
        const d = DestinyData.zodiac;
        for (const sign of d.ZODIAC_SIGNS) {
          if (sign.startMonth > sign.endMonth) {
            if ((month === sign.startMonth && day >= sign.startDay) ||
                (month === sign.endMonth && day <= sign.endDay) ||
                (month > sign.startMonth) || (month < sign.endMonth)) {
              return sign;
            }
          } else {
            if ((month === sign.startMonth && day >= sign.startDay) ||
                (month === sign.endMonth && day <= sign.endDay) ||
                (month > sign.startMonth && month < sign.endMonth)) {
              return sign;
            }
          }
        }
        return d.ZODIAC_SIGNS[0];
      },
      calcMoonSign(year, month, day, hour) {
        const d = DestinyData.zodiac;
        const dateValue = year * 10000 + month * 100 + day + hour;
        return d.ZODIAC_SIGNS[(dateValue % 12 + 3) % 12];
      },
      calcAscendant(year, month, day, hour, location) {
        const d = DestinyData.zodiac;
        const dateValue = year * 10000 + month * 100 + day;
        const hourOffset = Math.floor(hour / 2);
        const locationHash = location.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return d.ZODIAC_SIGNS[((dateValue + hourOffset + locationHash) % 12 + 6) % 12];
      },
      generateReport(year, month, day, hour, location) {
        const sunSign = this.calcSunSign(month, day);
        const moonSign = this.calcMoonSign(year, month, day, hour);
        const ascendant = this.calcAscendant(year, month, day, hour, location);
        return {
          birthInfo: `${year}年${month}月${day}日 ${hour}:00 ${location}`,
          sunSign: sunSign.name,
          sunSignSymbol: sunSign.symbol,
          sunSignElement: sunSign.element,
          moonSign: moonSign.name,
          moonSignSymbol: moonSign.symbol,
          ascendant: ascendant.name,
          ascendantSymbol: ascendant.symbol,
          analysis: `您具有${sunSign.name}的活力和领导力，月亮${moonSign.name}赋予您深刻的情感，上升${ascendant.name}让您充满自信。`,
          suggestion: '发挥您的领导才能，保持积极的心态面对挑战。'
        };
      }
    }
  };

  // 暴露到全局
  global.DestinyData = DestinyData;
  global.DestinyCore = DestinyCore;

})(window);
