'use strict';

const TAROT_MAJOR = [
  {id:0,name_cn:'愚者',name_en:'The Fool',keywords_upright:['开始','冒险','自由'],keywords_reversed:['鲁莽','逃避','不成熟'],meaning_upright:'你正站在新旅程起点，未知并非风险本身，而是机会。',meaning_reversed:'你可能因冲动而偏离方向，先厘清动机再行动。',advice_upright:'轻装上阵，先迈出小步。',advice_reversed:'先补足信息，再做选择。'},
  {id:1,name_cn:'魔术师',name_en:'The Magician',keywords_upright:['创造','行动','掌控'],keywords_reversed:['操控','分心','空谈'],meaning_upright:'你具备落地执行所需资源，关键是聚焦。',meaning_reversed:'能力被分散，容易说得多做得少。',advice_upright:'整合资源，先完成关键一步。',advice_reversed:'减少分心，停止过度包装。'},
  {id:2,name_cn:'女祭司',name_en:'The High Priestess',keywords_upright:['直觉','内在','洞察'],keywords_reversed:['封闭','迟疑','误读'],meaning_upright:'隐藏信息比表面更重要，倾听直觉。',meaning_reversed:'你可能忽略了内心信号。',advice_upright:'放慢节奏，先观察。',advice_reversed:'主动求证关键细节。'},
  {id:3,name_cn:'皇后',name_en:'The Empress',keywords_upright:['丰盛','滋养','成长'],keywords_reversed:['依赖','放纵','停滞'],meaning_upright:'耐心投入会迎来成长与产出。',meaning_reversed:'精力可能耗在不必要处。',advice_upright:'持续投入可复利事项。',advice_reversed:'设边界，回到核心目标。'},
  {id:4,name_cn:'皇帝',name_en:'The Emperor',keywords_upright:['秩序','结构','责任'],keywords_reversed:['僵化','控制','压迫'],meaning_upright:'通过规则与计划可稳定局面。',meaning_reversed:'过度控制会带来反作用。',advice_upright:'先立框架再执行。',advice_reversed:'给计划预留弹性。'},
  {id:5,name_cn:'教皇',name_en:'The Hierophant',keywords_upright:['传统','学习','规范'],keywords_reversed:['质疑','反叛','脱轨'],meaning_upright:'借鉴成熟经验可少走弯路。',meaning_reversed:'旧规则可能不再适配。',advice_upright:'向可靠前辈请教。',advice_reversed:'保留原则，创新形式。'},
  {id:6,name_cn:'恋人',name_en:'The Lovers',keywords_upright:['选择','连接','一致'],keywords_reversed:['分歧','诱惑','失衡'],meaning_upright:'重点在价值观一致的选择。',meaning_reversed:'你可能在选择里摇摆。',advice_upright:'先明确最重视的事。',advice_reversed:'停止两边讨好。'},
  {id:7,name_cn:'战车',name_en:'The Chariot',keywords_upright:['推进','意志','胜利'],keywords_reversed:['失控','冲突','停滞'],meaning_upright:'统一方向后，你能突破阻碍。',meaning_reversed:'力量分散导致原地拉扯。',advice_upright:'锁定单一目标冲刺。',advice_reversed:'先处理内部冲突。'},
  {id:8,name_cn:'力量',name_en:'Strength',keywords_upright:['勇气','耐心','柔韧'],keywords_reversed:['焦虑','怀疑','失衡'],meaning_upright:'真正力量来自稳定与耐心。',meaning_reversed:'恐惧被放大，行动受阻。',advice_upright:'温和但坚定地推进。',advice_reversed:'先恢复状态再决策。'},
  {id:9,name_cn:'隐者',name_en:'The Hermit',keywords_upright:['反思','独处','寻路'],keywords_reversed:['孤立','封闭','迷失'],meaning_upright:'暂时退后有助看清本质。',meaning_reversed:'过度封闭会错过支持。',advice_upright:'安排一段深度反思。',advice_reversed:'与可信的人交流。'},
  {id:10,name_cn:'命运之轮',name_en:'Wheel of Fortune',keywords_upright:['转机','周期','变化'],keywords_reversed:['阻滞','反复','失机'],meaning_upright:'局势在转动，顺势更省力。',meaning_reversed:'你可能重复同一问题。',advice_upright:'抓住出现的新窗口。',advice_reversed:'复盘并改策略。'},
  {id:11,name_cn:'正义',name_en:'Justice',keywords_upright:['公正','因果','决断'],keywords_reversed:['偏见','逃责','失衡'],meaning_upright:'事实与责任将决定结果。',meaning_reversed:'忽略责任会拖慢进程。',advice_upright:'依据证据做决定。',advice_reversed:'先承担，再修正。'},
  {id:12,name_cn:'倒吊人',name_en:'The Hanged Man',keywords_upright:['暂停','换位','等待'],keywords_reversed:['拖延','僵持','牺牲'],meaning_upright:'暂停是为了换视角与重估。',meaning_reversed:'长期停滞正在消耗你。',advice_upright:'设置观察期与复盘点。',advice_reversed:'结束无效等待。'},
  {id:13,name_cn:'死神',name_en:'Death',keywords_upright:['结束','重生','转化'],keywords_reversed:['抗拒改变','滞留','惧怕'],meaning_upright:'旧阶段结束，新的机会将出现。',meaning_reversed:'抗拒变化只会延长痛感。',advice_upright:'主动清理不适配部分。',advice_reversed:'先放下执念。'},
  {id:14,name_cn:'节制',name_en:'Temperance',keywords_upright:['平衡','整合','耐心'],keywords_reversed:['极端','失调','急躁'],meaning_upright:'温和整合资源，结果更稳定。',meaning_reversed:'走极端会降低效率。',advice_upright:'保持节奏，稳步推进。',advice_reversed:'回到中间地带。'},
  {id:15,name_cn:'恶魔',name_en:'The Devil',keywords_upright:['束缚','欲望','执念'],keywords_reversed:['松绑','觉察','脱离'],meaning_upright:'你可能被习惯或恐惧绑定。',meaning_reversed:'你已意识到束缚并在松绑。',advice_upright:'识别依赖点并设限。',advice_reversed:'巩固新习惯。'},
  {id:16,name_cn:'高塔',name_en:'The Tower',keywords_upright:['突变','真相','重构'],keywords_reversed:['余震','拖延','危机'],meaning_upright:'旧结构被打破，是重建开端。',meaning_reversed:'拖延调整会放大代价。',advice_upright:'先止损，再重建。',advice_reversed:'直面问题。'},
  {id:17,name_cn:'星星',name_en:'The Star',keywords_upright:['希望','疗愈','指引'],keywords_reversed:['失望','分散','失信心'],meaning_upright:'前路正变清晰，长期有利。',meaning_reversed:'暂时无果不代表方向错。',advice_upright:'保留愿景并持续行动。',advice_reversed:'先恢复信心。'},
  {id:18,name_cn:'月亮',name_en:'The Moon',keywords_upright:['潜意识','不确定','想象'],keywords_reversed:['澄清','醒悟','落地'],meaning_upright:'局势有迷雾，需要谨慎判断。',meaning_reversed:'真相开始显现。',advice_upright:'分开记录猜测和事实。',advice_reversed:'依据新证据调整。'},
  {id:19,name_cn:'太阳',name_en:'The Sun',keywords_upright:['成功','清晰','活力'],keywords_reversed:['延迟','疲惫','过度乐观'],meaning_upright:'积极信号增强，结果趋向明朗。',meaning_reversed:'好结果可能延后。',advice_upright:'展示成果，争取支持。',advice_reversed:'降低预期，稳步做。'},
  {id:20,name_cn:'审判',name_en:'Judgement',keywords_upright:['觉醒','召唤','复盘'],keywords_reversed:['自责','逃避','迟疑'],meaning_upright:'你来到关键转折点。',meaning_reversed:'过去包袱影响了迈步。',advice_upright:'复盘后明确下一阶段。',advice_reversed:'先做小规模重启。'},
  {id:21,name_cn:'世界',name_en:'The World',keywords_upright:['完成','整合','圆满'],keywords_reversed:['未竟','循环','收尾不足'],meaning_upright:'阶段趋于完成，准备升级。',meaning_reversed:'接近完成但差最后收尾。',advice_upright:'庆祝成果并规划下一轮。',advice_reversed:'补齐最后拼图。'}
];

const ORACLE_TEXTS = {
  YES: [
    { explanation: '整体趋势偏向肯定，当前条件已基本具备。', action: '今天就完成一个最小行动（如发消息或提交申请）。' },
    { explanation: '这是可以推进的时机，阻力可控。', action: '将目标拆成 3 步，并在 24 小时内完成第 1 步。' }
  ],
  NO: [
    { explanation: '目前信号偏否定，时机与资源匹配度不足。', action: '暂停 48 小时，补齐关键短板后再决策。' },
    { explanation: '现在强推代价较高，可能得不偿失。', action: '列出最坏情况与边界，超界则先不行动。' }
  ],
  WAIT: [
    { explanation: '答案尚未成熟，关键信息仍在变化。', action: '设一个观察节点（如 3 天后）再做决定。' },
    { explanation: '现在更适合观察，等待会提升判断准确率。', action: '先做小规模试探，再根据反馈调整。' }
  ]
};

const MODE_TEXT = {
  'tarot-single': '塔罗单张',
  'tarot-three': '塔罗三张（过去/现在/未来）',
  'yesno': 'Yes/No 神谕',
  'yesno-tarot': 'Yes/No + 塔罗解释'
};

const HISTORY_KEY = 'divination_history_v1';

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizeQuestion(question) {
  const s = (question || '').trim().replace(/\s+/g, ' ');
  // 只对拉丁大写字母做小写化，中文等字符保持原样
  return s.replace(/[A-Z]/g, (c) => c.toLowerCase());
}

function getToday() {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}

function xmur3(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i += 1) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return h >>> 0;
  };
}

function mulberry32(a) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function createRng(seedStr) {
  const seed = xmur3(seedStr)();
  return mulberry32(seed);
}

function shuffleWithRng(arr, rng) {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function getYesNoWeights(normalizedQ) {
  let yes = 0.4, no = 0.35, wait = 0.25;
  if (/(马上|今天|立刻|现在)/.test(normalizedQ)) {
    wait += 0.05; yes -= 0.025; no -= 0.025;
  }
  if (/(要不要|可以吗|是否|能不能)/.test(normalizedQ)) {
    wait -= 0.05; yes += 0.05;
  }
  const sum = yes + no + wait;
  return { YES: yes / sum, NO: no / sum, WAIT: wait / sum };
}

function pickYesNo(normalizedQ, rng) {
  const w = getYesNoWeights(normalizedQ);
  const r = rng();
  if (r < w.YES) return 'YES';
  if (r < w.YES + w.NO) return 'NO';
  return 'WAIT';
}

function drawTarot(count, rng, fixedPosition) {
  const deck = shuffleWithRng(TAROT_MAJOR, rng);
  const posMap = ['过去', '现在', '未来'];
  return deck.slice(0, count).map((card, i) => {
    const orientation = rng() < 0.5 ? '正位' : '逆位';
    const up = orientation === '正位';
    return {
      position: count === 3 ? posMap[i] : (fixedPosition || ''),
      orientation,
      card,
      keywords: up ? card.keywords_upright : card.keywords_reversed,
      meaning: up ? card.meaning_upright : card.meaning_reversed,
      advice: up ? card.advice_upright : card.advice_reversed
    };
  });
}

function generateResult(mode, question) {
  const date = getToday();
  const normalizedQ = normalizeQuestion(question);
  const seed = `${date}|${mode}|${normalizedQ}`;
  const rng = createRng(seed);

  if (mode === 'tarot-single') {
    return { date, mode, question, tarot: drawTarot(1, rng) };
  }
  if (mode === 'tarot-three') {
    return { date, mode, question, tarot: drawTarot(3, rng) };
  }

  const outcome = pickYesNo(normalizedQ, rng);
  const tpl = ORACLE_TEXTS[outcome][Math.floor(rng() * ORACLE_TEXTS[outcome].length)];
  const result = { date, mode, question, oracle: { outcome, explanation: tpl.explanation, action: tpl.action } };

  if (mode === 'yesno-tarot') {
    const tarotRng = createRng(`${date}|yesno-tarot-reason|${normalizedQ}`);
    result.reasonTarot = drawTarot(1, tarotRng, '原因')[0];
  }
  return result;
}

function formatTarotText(card) {
  const pos = card.position ? `${card.position}：` : '';
  return `${pos}${card.card.name_en}（${card.orientation}）\n关键词：${card.keywords.join('，')}\n解读：${card.meaning}\n建议：${card.advice}`;
}

function toCopyText(r) {
  let body = '';
  if (r.tarot) body = r.tarot.map(formatTarotText).join('\n\n');
  if (r.oracle) {
    body = `结论：${r.oracle.outcome}\n解释：${r.oracle.explanation}\n建议：${r.oracle.action}`;
    if (r.reasonTarot) body += `\n\n塔罗原因：\n${formatTarotText(r.reasonTarot)}`;
  }
  return `【日期】${r.date}\n【模式】${MODE_TEXT[r.mode]}\n【问题】${r.question || '（未填写）'}\n【结果】\n${body}`;
}

function getHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); }
  catch (e) { return []; }
}

function saveHistory(result) {
  const list = getHistory();
  const hasCrypto = (typeof crypto !== 'undefined') && crypto && typeof crypto.randomUUID === 'function';
  const item = {
    id: hasCrypto ? crypto.randomUUID() : String(Date.now()) + '_' + String(Math.random()).slice(2),
    time: new Date().toISOString(),
    result
  };
  localStorage.setItem(HISTORY_KEY, JSON.stringify([item].concat(list)));
  renderHistory();
}

function removeHistory(id) {
  const next = getHistory().filter(item => item.id !== id);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
  renderHistory();
}

function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
  renderHistory();
}

function timeToMinute(iso) {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const h = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  return `${y}-${m}-${day} ${h}:${mm}`;
}

function summarizeResult(r) {
  if (r.oracle) return r.oracle.outcome + (r.reasonTarot ? ` + ${r.reasonTarot.card.name_cn}${r.reasonTarot.orientation}` : '');
  if (r.tarot) return r.tarot.map(c => (c.position ? `${c.position}:` : '') + c.card.name_cn + c.orientation).join(' / ');
  return '-';
}

function createTarotCardHtml(item) {
  return `<div class="tarot">
    ${item.position ? `<div class="pos">${escapeHtml(item.position)}</div>` : ''}
    <div><strong>${escapeHtml(item.card.name_cn)}</strong> / ${escapeHtml(item.card.name_en)}</div>
    <div>${escapeHtml(item.orientation)}</div>
    <div>关键词：${escapeHtml(item.keywords.join('，'))}</div>
    <div>解读：${escapeHtml(item.meaning)}</div>
    <div>建议：${escapeHtml(item.advice)}</div>
  </div>`;
}

function renderResult(result, allowExtraReasonBtn) {
  const box = document.getElementById('result');
  const safeQuestion = escapeHtml(result.question || '（未填写）');

  let html = `<h2>结果</h2>
    <div class="result-meta">
      日期：${escapeHtml(result.date)}<br>
      问题：${safeQuestion}<br>
      模式：${escapeHtml(MODE_TEXT[result.mode])}
    </div>`;

  if (result.tarot) {
    html += `<div class="grid">${result.tarot.map(createTarotCardHtml).join('')}</div>`;
  }

  if (result.oracle) {
    html += `<div class="tarot">
      <div class="badge">${escapeHtml(result.oracle.outcome)}</div>
      <div>解释：${escapeHtml(result.oracle.explanation)}</div>
      <div>行动建议：${escapeHtml(result.oracle.action)}</div>
    </div>`;
    if (result.reasonTarot) html += createTarotCardHtml(result.reasonTarot);
    if (allowExtraReasonBtn) html += `<button id="reasonBtn" class="secondary inline">抽一张塔罗解释原因</button>`;
  }

  html += `<div class="actions">
      <button id="copyBtn" class="inline">复制文案</button>
      <button id="retryBtn" class="secondary inline">再抽一次</button>
      <button id="saveBtn" class="secondary inline">保存到历史</button>
    </div>`;

  box.innerHTML = html;

  document.getElementById('copyBtn').onclick = async () => {
    const text = toCopyText(result);
    try { await navigator.clipboard.writeText(text); alert('已复制'); }
    catch (e) { prompt('复制失败，请手动复制：', text); }
  };

  document.getElementById('retryBtn').onclick = () => {
    alert('当天同问题同模式结果固定，请换问题或等明天。');
  };

  document.getElementById('saveBtn').onclick = () => {
    saveHistory(result);
    alert('已保存到历史');
  };

  const reasonBtn = document.getElementById('reasonBtn');
  if (reasonBtn) {
    reasonBtn.onclick = () => {
      const normalizedQ = normalizeQuestion(result.question);
      const rng = createRng(`${result.date}|yesno-tarot-reason|${normalizedQ}`);
      result.reasonTarot = drawTarot(1, rng, '原因')[0];
      renderResult(result, false);
    };
  }
}

function renderHistory() {
  const list = getHistory();
  const box = document.getElementById('historyList');
  if (!list.length) {
    box.innerHTML = '<div class="small">暂无历史记录</div>';
    return;
  }
  box.innerHTML = list.map(item => `<div class="item">
    <div>时间：${escapeHtml(timeToMinute(item.time))}</div>
    <div>模式：${escapeHtml(MODE_TEXT[item.result.mode])}</div>
    <div>问题摘要：${escapeHtml(item.result.question || '（未填写）')}</div>
    <div>结果摘要：${escapeHtml(summarizeResult(item.result))}</div>
    <button class="danger inline" data-id="${escapeHtml(item.id)}">删除</button>
  </div>`).join('');

  box.querySelectorAll('button[data-id]').forEach(btn => {
    btn.onclick = () => removeHistory(btn.getAttribute('data-id'));
  });
}

document.getElementById('startBtn').onclick = () => {
  const question = document.getElementById('question').value;
  const mode = document.getElementById('mode').value;
  const result = generateResult(mode, question);
  const allowExtraReasonBtn = mode === 'yesno';
  renderResult(result, allowExtraReasonBtn);
};

document.getElementById('clearHistoryBtn').onclick = () => {
  if (confirm('确认清空全部历史吗？')) clearHistory();
};

renderHistory();
