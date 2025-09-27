const wordList = [
    { english: "sick", japanese: "病気の、具合が悪い" },
    { english: "ill", japanese: "病気の、具合が悪い" },
    { english: "sickness", japanese: "病気" },
    { english: "illness", japanese: "病気" },
    { english: "disease", japanese: "病気、疾患" },
    { english: "onset", japanese: "発症" },
    { english: "outbreak", japanese: "集団発生、流行" },
    { english: "complication", japanese: "合併症" },
    { english: "sign", japanese: "徴候、症状(他覚)" },
    { english: "symptom", japanese: "症状(自覚)" },
    { english: "hurt", japanese: "痛む、痛い、傷つける" },
    { english: "sore", japanese: "(けがや筋肉痛などで)痛い" },
    { english: "pain", japanese: "痛み" },
    { english: "ache", japanese: "痛む、うずく" },
    { english: "bleeding", japanese: "出血" },
    { english: "dizzy", japanese: "めまいがする" },
    { english: "light-headed", japanese: "立ちくらみがする" },
    { english: "drowsiness", japanese: "眠気" },
    { english: "thirsty", japanese: "喉が渇いた" },
    { english: "hiccup", japanese: "しゃっくり、吃逆" },
    { english: "acute", japanese: "急性の" },
    { english: "chronic", japanese: "慢性の" },
    { english: "benign", japanese: "良性の" },
    { english: "malignant", japanese: "悪性の" },
    { english: "lethal", japanese: "致死の" },
    { english: "fatal", japanese: "致命的な、致死の" },
    { english: "persistent", japanese: "持続的な" },
    { english: "progressive", japanese: "進行性の" },
    { english: "transient", japanese: "一過性の、一時的な" },
    { english: "intermittent", japanese: "断続的な" },
    { english: "constant", japanese: "絶え間ない" },
    { english: "mild", japanese: "軽度の、軽症の" },
    { english: "moderate", japanese: "中等度の" },
    { english: "severe", japanese: "重度の、ひどい" },
    { english: "serious", japanese: "重篤な、重症の" },
    { english: "critical", japanese: "危篤の" },
    { english: "blister", japanese: "水疱、まめ" },
    { english: "clot", japanese: "かたまり、凝固する" },
    { english: "lump", japanese: "腫れ物、しこり" },
    { english: "swollen", japanese: "腫れ上がった" },
    { english: "bump", japanese: "こぶ、隆起" },
    { english: "inflammation", japanese: "炎症" },
    { english: "cancer", japanese: "がん" },
    { english: "tumor", japanese: "腫瘍" },
    { english: "fever", japanese: "熱" },
    { english: "fatigue", japanese: "疲労" },
    { english: "high blood pressure", japanese: "高血圧" },
    { english: "diabetes", japanese: "糖尿病" },
    { english: "gout", japanese: "痛風" },
    { english: "flushing", japanese: "潮紅、紅潮" },
    { english: "virus", japanese: "ウイルス" },
    { english: "contagious", japanese: "(接触)感染の" },
    { english: "infection", japanese: "感染" },
    { english: "transmit", japanese: "うつす、伝播させる" },
    { english: "carrier", japanese: "キャリア、保因者" },
    { english: "airborne", japanese: "空気感染性の" },
    { english: "measles", japanese: "麻疹、はしか" },
    { english: "rubella", japanese: "風疹" },
    { english: "chickenpox", japanese: "水ぼうそう" },
    { english: "mumps", japanese: "おたふくかぜ" },
    { english: "whooping cough", japanese: "百日咳" },
    { english: "bed-wetting", japanese: "おねしょ、夜尿症" },
    { english: "injury", japanese: "けが、傷害、損傷" },
    { english: "wound", japanese: "傷、創傷" },
    { english: "scar", japanese: "傷痕" },
    { english: "twist", japanese: "ねじる、ねん挫する" },
    { english: "broken", japanese: "骨折した" },
    { english: "fracture", japanese: "骨折(する)" },
    { english: "trauma", japanese: "外傷、トラウマ" },
    { english: "near-sighted", japanese: "近視の" },
    { english: "far-sightedness", japanese: "遠視" },
    { english: "astigmatism", japanese: "乱視" },
    { english: "blurry", japanese: "ぼやけた" },
    { english: "blindness", japanese: "盲目、失明" },
    { english: "cold", japanese: "風邪、感冒" },
    { english: "cough", japanese: "咳" },
    { english: "runny nose", japanese: "鼻水" },
    { english: "stuffy nose", japanese: "鼻づまり" },
    { english: "influenza, the flu", japanese: "インフルエンザ" },
    { english: "snore", japanese: "いびき" },
    { english: "deafness", japanese: "難聴" },
    { english: "cavity", japanese: "虫歯" },
    { english: "plaque", japanese: "歯垢、プラーク" },
    { english: "calculus", japanese: "歯石、結石" },
    { english: "gum disease", japanese: "歯周病" },
    { english: "canker sore", japanese: "口内炎" },
    { english: "cold sore", japanese: "口唇ヘルペス" },
    { english: "allergy", japanese: "アレルギー" },
    { english: "hives", japanese: "蕁麻疹" },
    { english: "sneeze", japanese: "くしゃみ" },
    { english: "hay fever", japanese: "花粉症" },
    { english: "asthma", japanese: "喘息" },
    { english: "atopic eczema", japanese: "アトピー性皮膚炎" },
    { english: "anaphylaxis", japanese: "アナフィラキシー" },
    { english: "itchy", japanese: "かゆい" },
    { english: "rash", japanese: "発疹、吹き出物" },
    { english: "athlete's foot", japanese: "水虫" },
    { english: "burn", japanese: "やけど、熱傷" },
    { english: "sunburn", japanese: "日焼け" },
    { english: "dandruff", japanese: "(頭の)ふけ" },
    { english: "wrinkle", japanese: "しわ" },
    { english: "bee sting", japanese: "ハチ刺され" },
    { english: "fear", japanese: "恐怖、不安" },
    { english: "panic attack", japanese: "パニック発作" },
    { english: "anxiety", japanese: "不安、心配" },
    { english: "depression", japanese: "うつ状態、うつ病" },
    { english: "addict", japanese: "中毒患者、常習" },
    { english: "drug abuse", japanese: "薬物乱用" },
    { english: "hallucination", japanese: "幻覚、幻聴" },
    { english: "consciousness", japanese: "意識" },
    { english: "coma", japanese: "昏睡" },
    { english: "spell", japanese: "(一時的な)発作" },
    { english: "pass out", japanese: "意識を失う" },
    { english: "seizure", japanese: "発作、痙攣" },
    { english: "epilepsy", japanese: "てんかん" },
    { english: "tremor", japanese: "振戦、ふるえ" },
    { english: "cramp", japanese: "けいれん、こむら返り" },
    { english: "numb", japanese: "しびれた、麻痺した" },
    { english: "stiffness", japanese: "硬直、こわばり" },
    { english: "migraine", japanese: "片頭痛" },
    { english: "stroke", japanese: "脳卒中" },
    { english: "dementia", japanese: "認知症" },
    { english: "heartburn", japanese: "胸やけ" },
    { english: "ulcer", japanese: "潰瘍" },
    { english: "hernia", japanese: "ヘルニア" },
    { english: "bowel movement", japanese: "お通じ" },
    { english: "constipation", japanese: "便秘" },
    { english: "diarrhea", japanese: "下痢" },
    { english: "loose stool", japanese: "軟便、下痢" },
    { english: "food poisoning", japanese: "食中毒" },
    { english: "hangover", japanese: "二日酔い" },
    { english: "nausea", japanese: "吐き気、悪心" },
    { english: "throw up", japanese: "吐く、もどす" },
    { english: "anorexia", japanese: "拒食症" },
    { english: "obesity", japanese: "肥満" },
    { english: "clinical", japanese: "臨床の" },
    { english: "treatment", japanese: "治療" },
    { english: "cure", japanese: "治癒、治療法" },
    { english: "heal", japanese: "(けがを)治す、治る" },
    { english: "rest", japanese: "安静" },
    { english: "outcome", japanese: "転帰、予後、結果" },
    { english: "pass away", japanese: "亡くなる" },
    { english: "appointment", japanese: "予約" },
    { english: "admit", japanese: "入院させる" },
    { english: "hospitalization", japanese: "入院" },
    { english: "first aid", japanese: "応急処置" },
    { english: "ambulance", japanese: "救急車" },
    { english: "triage", japanese: "トリアージ" },
    { english: "incident", japanese: "インシデント" },
    { english: "temperature", japanese: "温度、体温" },
    { english: "appetite", japanese: "食欲" },
    { english: "family history", japanese: "家族歴" },
    { english: "insurance", japanese: "保険" },
    { english: "lifestyle", japanese: "生活習慣" },
    { english: "occupation", japanese: "職業" },
    { english: "exercise", japanese: "運動" },
    { english: "male", japanese: "男性" },
    { english: "patient", japanese: "患者" },
    { english: "outpatient", japanese: "外来患者" },
    { english: "inpatient", japanese: "入院患者" },
    { english: "relative", japanese: "血縁者、親族" },
    { english: "corpse", japanese: "死体、遺体" },
    { english: "doctor", japanese: "医師、博士" },
    { english: "surgeon", japanese: "外科医" },
    { english: "dentist", japanese: "歯科医" },
    { english: "nurse", japanese: "看護師" },
    { english: "pharmacist", japanese: "薬剤師" },
    { english: "midwife", japanese: "助産師" },
    { english: "therapist", japanese: "セラピスト" },
    { english: "hospital", japanese: "病院" },
    { english: "ward", japanese: "病棟" },
    { english: "internal medicine", japanese: "内科" },
    { english: "surgery", japanese: "外科、手術" },
    { english: "clinic", japanese: "診療所" },
    { english: "pharmacy", japanese: "薬局" },
    { english: "bandage", japanese: "包帯" },
    { english: "gauze", japanese: "ガーゼ" },
    { english: "cast", japanese: "ギプス" },
    { english: "crutch", japanese: "松葉づえ" },
    { english: "stretcher", japanese: "担架、ストレッチャー" },
    { english: "injection", japanese: "注射" },
    { english: "syringe", japanese: "注射器" },
    { english: "scalpel", japanese: "メス" },
    { english: "X-ray", japanese: "エックス線、レントゲン" },
    { english: "operation", japanese: "手術" },
    { english: "transplant", japanese: "移植" },
    { english: "suction", japanese: "吸引" },
    { english: "puncture", japanese: "穿刺、刺し傷" },
    { english: "filling", japanese: "詰め物" },
    { english: "denture", japanese: "義歯、入れ歯" },
    { english: "hearing aid", japanese: "補聴器" },
    { english: "labor", japanese: "分娩、陣痛" },
    { english: "childbirth", japanese: "出産" },
    { english: "diaper", japanese: "おむつ" },
    { english: "fetus", japanese: "胎児" },
    { english: "newborn", japanese: "新生児" },
    { english: "infant", japanese: "乳児、幼児" },
    { english: "toddler", japanese: "幼児" },
    { english: "stillbirth", japanese: "死産" },
    { english: "arm", japanese: "腕" },
    { english: "armpit", japanese: "脇の下" },
    { english: "upper arm", japanese: "上腕" },
    { english: "forearm", japanese: "前腕" },
    { english: "elbow", japanese: "肘" },
    { english: "wrist", japanese: "手首" },
    { english: "fist", japanese: "握りこぶし" },
    { english: "palm", japanese: "手のひら" },
    { english: "back of the hand", japanese: "手の甲" },
    { english: "thumb", japanese: "親指" },
    { english: "index finger", japanese: "人差し指" },
    { english: "ring finger", japanese: "薬指" },
    { english: "little finger", japanese: "小指" },
    { english: "groin", japanese: "鼠蹊部" },
    { english: "thigh", japanese: "太腿" },
    { english: "knee", japanese: "膝" },
    { english: "shin", japanese: "脛" },
    { english: "calf", japanese: "ふくらはぎ" },
    { english: "ankle", japanese: "足首" },
    { english: "heel", japanese: "かかと" },
    { english: "toe", japanese: "足指、つま先" },
    { english: "breast", japanese: "乳房、胸" },
    { english: "chest", japanese: "胸部" },
    { english: "tummy", japanese: "おなか" },
    { english: "belly button", japanese: "へそ" },
    { english: "back", japanese: "背中" },
    { english: "lower back", japanese: "腰" },
    { english: "buttocks", japanese: "臀部、お尻" },
    { english: "forehead", japanese: "額" },
    { english: "cheek", japanese: "頬" },
    { english: "jaw", japanese: "顎" },
    { english: "chin", japanese: "あご先" },
    { english: "front teeth", japanese: "前歯" },
    { english: "wisdom tooth", japanese: "親知らず" },
    { english: "gum", japanese: "歯茎、歯肉" },
    { english: "eyebrow", japanese: "眉毛" },
    { english: "eyelash", japanese: "まつ毛" },
    { english: "eyelid", japanese: "瞼" },
    { english: "lens", japanese: "水晶体" },
    { english: "pupil", japanese: "瞳孔" },
    { english: "blink", japanese: "まばたきする" },
    { english: "vision", japanese: "視力、視覚" },
    { english: "inner ear", japanese: "内耳" },
    { english: "middle ear", japanese: "中耳" },
    { english: "external ear", japanese: "外耳" },
    { english: "eardrum", japanese: "鼓膜" },
    { english: "earwax", japanese: "耳垢" },
    { english: "nostril", japanese: "鼻孔" },
    { english: "nasal cavity", japanese: "鼻腔" },
    { english: "skull", japanese: "頭蓋骨" },
    { english: "rib", japanese: "肋骨" },
    { english: "spine", japanese: "脊柱、脊椎" },
    { english: "pelvis", japanese: "骨盤" },
    { english: "hip joint", japanese: "股関節" },
    { english: "joint", japanese: "関節" },
    { english: "bone density", japanese: "骨密度" },
    { english: "esophagus", japanese: "食道" },
    { english: "stomach", japanese: "胃、腹部" },
    { english: "bowel", japanese: "腸" },
    { english: "intestine", japanese: "腸" },
    { english: "colon", japanese: "結腸" },
    { english: "rectum", japanese: "直腸" },
    { english: "anus", japanese: "肛門" },
    { english: "organ", japanese: "臓器、器官" },
    { english: "lung", japanese: "肺" },
    { english: "liver", japanese: "肝臓" },
    { english: "gallbladder", japanese: "胆嚢" },
    { english: "pancreas", japanese: "膵臓" },
    { english: "spleen", japanese: "脾臓" },
    { english: "kidney", japanese: "腎臓" },
    { english: "bladder", japanese: "膀胱" },
    { english: "period", japanese: "月経、生理" },
    { english: "pregnant", japanese: "妊娠した" },
    { english: "placenta", japanese: "胎盤" },
    { english: "vagina", japanese: "膣" },
    { english: "uterus", japanese: "子宮" },
    { english: "prostate", japanese: "前立腺" },
    { english: "testis", japanese: "精巣、睾丸" },
    { english: "pink eye", japanese: "結膜炎" },
    { english: "sty", japanese: "ものもらい" },
    { english: "aorta", japanese: "大動脈" },
    { english: "artery", japanese: "動脈" },
    { english: "vein", japanese: "静脈" },
    { english: "atrium", japanese: "心房" },
    { english: "ventricle", japanese: "心室、脳室" },
    { english: "circulation", japanese: "循環" },
    { english: "red blood cell", japanese: "赤血球" },
    { english: "white blood cell", japanese: "白血球" },
    { english: "plasma", japanese: "血漿" },
    { english: "platelet", japanese: "血小板" },
    { english: "serum", japanese: "血清" },
    { english: "lymph", japanese: "リンパ" },
    { english: "secretion", japanese: "分泌" },
    { english: "saliva", japanese: "唾液" },
    { english: "sweat", japanese: "汗" },
    { english: "excretion", japanese: "排出、排泄" },
    { english: "urine", japanese: "尿" },
    { english: "gas", japanese: "おなら、放屁" },
    { english: "feces", japanese: "糞便" },
    { english: "stool", japanese: "大便" },
    { english: "heart rate", japanese: "心拍" },
    { english: "pulse", japanese: "拍動、脈拍" },
    { english: "medicine", japanese: "薬、医学" },
    { english: "medication", japanese: "薬、薬物治療" },
    { english: "prescription", japanese: "処方箋" },
    { english: "dosage", japanese: "用量" },
    { english: "administer", japanese: "投与する" },
    { english: "apply", japanese: "塗布する" },
    { english: "swallow", japanese: "飲み込む" },
    { english: "overdose", japanese: "過剰摂取" },
    { english: "side effect", japanese: "副作用" },
    { english: "adverse effect", japanese: "副作用、有害作用" },
    { english: "indicate", japanese: "適応がある" },
    { english: "absorption", japanese: "吸収" },
    { english: "tolerance", japanese: "耐性" },
    { english: "oral", japanese: "経口の" },
    { english: "tablet", japanese: "錠剤" },
    { english: "powder", japanese: "散剤、粉薬" },
    { english: "drip", japanese: "点滴" },
    { english: "ointment", japanese: "軟膏" },
    { english: "plaster", japanese: "膏薬、湿布剤" },
    { english: "painkiller", japanese: "痛み止め、鎮痛剤" },
    { english: "cold medicine", japanese: "風邪薬" },
    { english: "sedative", japanese: "鎮静剤" },
    { english: "antacid", japanese: "制酸剤" },
    { english: "laxative", japanese: "下剤" },
    { english: "vaccine", japanese: "ワクチン" },
    { english: "dietary", japanese: "食事の" },
    { english: "digestion", japanese: "消化" },
    { english: "nutrition", japanese: "栄養" },
    { english: "lean", japanese: "引き締まった、赤身の" },
    { english: "supplement", japanese: "栄養補助食品、サプリ" },
    { english: "caffeine", japanese: "カフェイン" },
    { english: "calcium", japanese: "カルシウム" },
    { english: "protein", japanese: "タンパク質" },
    { english: "enzyme", japanese: "酵素" },
    { english: "gene", japanese: "遺伝子" },
    { english: "hormone", japanese: "ホルモン" },
    { english: "toxicity", japanese: "毒性" },
    { english: "contamination", japanese: "汚染" },
    { english: "hygiene", japanese: "衛生" },
    { english: "incidence", japanese: "発生率、発病率" },
    { english: "microscope", japanese: "顕微鏡" },
    { english: "apparatus", japanese: "装置、器具" },
    { english: "device", japanese: "装置、器具" },
    { english: "tool", japanese: "器具、ツール" },
    { english: "equipment", japanese: "装置、器具" },
    { english: "supernatant", japanese: "上澄み、上清" },
    { english: "acid", japanese: "酸" },
    { english: "alkali", japanese: "アルカリ" }
];

const dom = {};
const NEXT_QUESTION_DELAY = 1500;

let gameState = {};

function init() {
  gameState = {
    mode: '',
    score: 0,
    questionNumber: 0,
    currentWords: [],
    currentQuestion: null,
    isAnswered: false,
  };
  showScreen('main-menu');
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(el => el.style.display = 'none');
    const domKey = screenId.replace(/-(\w)/g, (m, c) => c.toUpperCase());
    dom[domKey].style.display = 'flex';
}

function startGame(mode) {
  gameState.mode = mode;
  gameState.questionNumber = 0;
  gameState.score = 0;
  gameState.currentWords = shuffleArray([...wordList]);
  showScreen('game-view');
  loadNextQuestion();
}

function endGame() {
    const total = gameState.questionNumber;
    if (total > 0) {
        const accuracy = ((gameState.score / total) * 100).toFixed(0);
        dom.resultSummary.innerHTML = `
            問題数: <span>${total}</span> 問<br>
            正解数: <span>${gameState.score}</span> 問<br>
            正答率: <span>${accuracy}%</span>
        `;
    } else {
         dom.resultSummary.innerHTML = "クイズをプレイしませんでした。";
    }
    showScreen('result-view');
}

function loadNextQuestion() {
  dom.feedbackArea.textContent = '';
  dom.choicesArea.innerHTML = '';
  gameState.isAnswered = false;

  if (gameState.currentWords.length === 0) {
    gameState.currentWords = shuffleArray([...wordList]);
  }

  gameState.questionNumber++;
  gameState.currentQuestion = gameState.currentWords.pop();

  dom.questionCounter.textContent = `問題: ${gameState.questionNumber}`;
  dom.scoreCounter.textContent = `スコア: ${gameState.score}`;
  
  const questionText = gameState.mode === 'en-to-jp' ? gameState.currentQuestion.english : gameState.currentQuestion.japanese;
  dom.questionArea.textContent = questionText;

  const correctAnswer = gameState.mode === 'en-to-jp' ? gameState.currentQuestion.japanese : gameState.currentQuestion.english;
  let choices = new Set([correctAnswer]);
  
  const distractors = wordList.filter(word => {
      const distractorText = gameState.mode === 'en-to-jp' ? word.japanese : word.english;
      return distractorText !== correctAnswer;
  });
  
  while (choices.size < 4 && distractors.length > 0) {
      const randomDistractor = distractors[Math.floor(Math.random() * distractors.length)];
      const distractorText = gameState.mode === 'en-to-jp' ? randomDistractor.japanese : randomDistractor.english;
      choices.add(distractorText);
  }

  const shuffledChoices = shuffleArray(Array.from(choices));

  shuffledChoices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.onclick = () => checkAnswer(choice);
    dom.choicesArea.appendChild(button);
  });
}

function checkAnswer(selectedAnswer) {
  if (gameState.isAnswered) return;
  gameState.isAnswered = true;

  const correctAnswer = gameState.mode === 'en-to-jp' ? gameState.currentQuestion.japanese : gameState.currentQuestion.english;
  const isCorrect = selectedAnswer === correctAnswer;
  
  if (isCorrect) {
    gameState.score++;
    dom.feedbackArea.textContent = '✅ 正解！';
    dom.scoreCounter.textContent = `スコア: ${gameState.score}`;
  } else {
    dom.feedbackArea.textContent = `❌ 不正解... (正解は「${correctAnswer}」)`;
  }

  Array.from(dom.choicesArea.children).forEach(button => {
    button.disabled = true;
    if (button.textContent === correctAnswer) {
      button.classList.add('correct');
    } else if (button.textContent === selectedAnswer) {
      button.classList.add('incorrect');
    }
  });
  
  setTimeout(loadNextQuestion, NEXT_QUESTION_DELAY);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// --- NEW --- 単語帳のテーブルを作成して表示する関数
function createWordbookTable() {
    const container = dom.wordbookListContainer;
    // テーブルが既に作成されていれば何もしない
    if (container.querySelector('table')) {
        return;
    }

    const table = document.createElement('table');
    table.id = 'wordbook-table';

    // ヘッダーを作成
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    const th1 = document.createElement('th');
    th1.textContent = '英語';
    headerRow.appendChild(th1);
    const th2 = document.createElement('th');
    th2.textContent = '日本語';
    headerRow.appendChild(th2);
    
    // ボディを作成
    const tbody = table.createTBody();
    wordList.forEach(word => {
        const row = tbody.insertRow();
        const cell1 = row.insertCell();
        cell1.textContent = word.english;
        const cell2 = row.insertCell();
        cell2.textContent = word.japanese;
    });

    container.appendChild(table);
}

document.addEventListener('DOMContentLoaded', () => {
  // Cache DOM elements
  const ids = [
    'main-menu', 'game-view', 'result-view', 'wordbook-view', // 'wordbook-view' を追加
    'question-counter', 'score-counter', 'question-area', 'choices-area', 
    'feedback-area', 'result-summary', 'wordbook-list-container' // 'wordbook-list-container' を追加
  ];
  ids.forEach(id => dom[id.replace(/-(\w)/g, (m, c) => c.toUpperCase())] = document.getElementById(id));
  
  // Add Event Listeners
  dom.mainMenu.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;
    
    const mode = e.target.dataset.mode;
    if (mode) {
      startGame(mode);
    } else if (e.target.id === 'view-wordbook-btn') {
      createWordbookTable(); // 単語帳テーブルを生成
      showScreen('wordbook-view'); // 単語帳画面を表示
    }
  });
  
  document.querySelectorAll('#home-btn').forEach(btn => btn.addEventListener('click', endGame));
  document.getElementById('retry-btn').addEventListener('click', () => startGame(gameState.mode));
  document.getElementById('back-to-home-btn').addEventListener('click', init);
  document.getElementById('wordbook-home-btn').addEventListener('click', init); // 単語帳画面の戻るボタン
  
  // Initial Load
  init();
});