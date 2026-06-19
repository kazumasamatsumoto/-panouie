/**
 * 「あなたはどう輝く？」自己肯定感タイプ診断のデータとロジック。
 *
 * 設計の原則（Épanouie のブランドを守るためのガードレール）:
 * - どのタイプも優劣はない。すべてが美しい輝き方として描く。
 * - 馬鹿にしたり、欠点・短所として書かない。「持ち味」「これからの伸びしろ」として書く。
 * - 結果は必ず読者へのエール。「あなたはこれからさらに輝く」という確信を持たせる。
 * - 2択 × 設問ごとに各タイプへポイントを加算し、合計が最も高いタイプを判定する。
 */

/**
 * 診断を提供するメディアの slug。
 * 診断の内容（35歳から輝く女性像）は Épanouie 専用のため、ここに含まれるメディアでのみ表示する。
 * 他メディア（例: Lueur）では診断ページは 404 になる。
 */
export const diagnosisMediaSlugs = ["epanouie"] as const;

export function hasDiagnosis(mediaSlug: string): boolean {
  return (diagnosisMediaSlugs as readonly string[]).includes(mediaSlug);
}

/** 輝く女性の6タイプ。色や優劣はなく、それぞれの咲き方。 */
export type DiagnosisTypeId =
  | "leader" // きらめきリーダー（キャリア・仕事で輝く）
  | "grace" // 凛と咲く美しさ（外見・装いを磨く）
  | "wisdom" // 深く静かな知性（内面・学びを磨く）
  | "kindness" // やさしさを灯す（社会貢献・人を支える）
  | "bond" // 絆を育む（人とのつながり・愛で輝く）
  | "freedom"; // 自由に羽ばたく（冒険・新しい挑戦で輝く）

export interface DiagnosisType {
  id: DiagnosisTypeId;
  /** 結果ページの大見出しに使う、輝き方の名前 */
  name: string;
  emoji: string;
  /** ひとことキャッチ（カードやシェアで使う） */
  catch: string;
  /** あなたはこういう人、という肯定的な人物像（2〜3文） */
  portrait: string;
  /** その人の「持ち味＝光」。短所ではなく強みとして */
  strength: string;
  /** これからさらに輝くための、やさしい次の一歩 */
  nextStep: string;
  /** 最後に贈るエールの一文 */
  cheer: string;
  /** 結果ページの背景に使うグラデーション（Tailwind） */
  cardGradient: string;
}

export interface DiagnosisChoice {
  /** 選択肢のラベル */
  label: string;
  /** この選択肢が加点するタイプと重み */
  scores: Partial<Record<DiagnosisTypeId, number>>;
}

export interface DiagnosisQuestion {
  id: number;
  /** 設問文 */
  prompt: string;
  /** やわらかい補足（任意） */
  hint?: string;
  choices: DiagnosisChoice[];
}

export const diagnosisTypes: Record<DiagnosisTypeId, DiagnosisType> = {
  leader: {
    id: "leader",
    name: "きらめきリーダー",
    emoji: "🔥",
    catch: "前へ進む力で、まわりまで照らす人。",
    portrait:
      "あなたは、目標に向かって自分の足で歩いていける人。決めたことをやり切る強さと、まわりを巻き込んでいく熱を持っています。35歳からのあなたは、若い頃の勢いだけでなく、経験に裏打ちされた説得力という最高の武器を手にしています。",
    strength:
      "あなたの光は「推進力」。迷っている人の背中を押し、止まっていた場所を動かせる。その姿は、誰かにとっての憧れになっています。",
    nextStep:
      "走り続けるあなたへ。ときどき立ち止まって「私はもう十分がんばってきた」と自分に言ってあげてください。休むことも、次へ進む力になります。",
    cheer:
      "あなたが進む道は、あなたが思うよりずっと遠くまで続いています。これからの一歩が、いちばん輝く。",
    cardGradient: "from-lavender-500/20 to-champagne-300/40",
  },
  grace: {
    id: "grace",
    name: "凛と咲く美しさ",
    emoji: "🌸",
    catch: "整えることで、自分を大切にできる人。",
    portrait:
      "あなたは、自分を丁寧に扱える人。装いや所作、自分の見せ方に心を配れるのは、自分を粗末にしない美意識があるから。35歳からの美しさは、流行を追うものではなく「自分に似合うもの」を知る美しさ。あなたはその入り口に立っています。",
    strength:
      "あなたの光は「凛とした佇まい」。整えられた人がそこにいるだけで、空気が少し背筋を伸ばす。それは表面的なことではなく、自分への敬意の表れです。",
    nextStep:
      "外側を整えるあなたへ。今度は、鏡の中の自分に「今日もきれいだね」と声をかけてみてください。あなたの美しさは、もう誰かの基準ではなく、あなた自身のものです。",
    cheer:
      "咲き方は、年齢で決まりません。あなたはこれから、いちばん自分らしく咲いていく。",
    cardGradient: "from-champagne-300/50 to-plum-100",
  },
  wisdom: {
    id: "wisdom",
    name: "深く静かな知性",
    emoji: "🌙",
    catch: "学び続けることで、心を豊かにする人。",
    portrait:
      "あなたは、自分の内側を耕せる人。本を読み、考え、感じたことを自分の言葉にできる。派手さより深さを大切にするあなたの世界は、静かでいて、とても豊かです。35歳からは、これまで積み重ねてきた思索が、ゆっくり花開いていく季節。",
    strength:
      "あなたの光は「奥行き」。すぐには見えなくても、関わるほどに「この人は深い」と気づかれる。その深さは、一日では作れない、あなただけの財産です。",
    nextStep:
      "内に向かうあなたへ。心に溜めた豊かさを、ときどき誰かに分けてみてください。あなたの言葉は、思っているよりずっと、誰かの救いになります。",
    cheer:
      "あなたの中には、まだ言葉になっていない光がたくさんある。それがこれから、ひとつずつ輝き出す。",
    cardGradient: "from-plum-200/40 to-lavender-500/20",
  },
  kindness: {
    id: "kindness",
    name: "やさしさを灯す",
    emoji: "🕊",
    catch: "誰かのために動ける、あたたかい人。",
    portrait:
      "あなたは、人の痛みに気づける人。困っている人を放っておけない、その手のあたたかさは、世界をほんの少し優しくしています。35歳からのあなたは、ただ優しいだけでなく「どう支えれば本当に届くか」を知る、成熟した優しさを持ち始めています。",
    strength:
      "あなたの光は「灯火」。あなたがいるだけで、まわりの人は安心して息ができる。その存在は、どんな肩書きよりも価値があります。",
    nextStep:
      "人に注ぐあなたへ。そのやさしさの、いちばん最初の一滴を、自分にも向けてください。あなたを大切にすることは、わがままではなく、長く灯し続けるための知恵です。",
    cheer:
      "あなたが灯してきた光は、ちゃんと誰かの中で生きています。これからも、あなたは誰かの夜を照らす。",
    cardGradient: "from-champagne-300/40 to-lavender-500/15",
  },
  bond: {
    id: "bond",
    name: "絆を育む",
    emoji: "💞",
    catch: "人とのつながりの中で、自分も輝く人。",
    portrait:
      "あなたは、人と心を通わせられる人。一人より、大切な誰かと笑い合う時間に幸せを感じる。その素直さは弱さではなく、人と深くつながれる才能です。35歳からは、数より質——本当に大切な人との絆が、いっそう深まっていく時季。",
    strength:
      "あなたの光は「つながる力」。あなたのまわりには、自然と人が集まり、居場所が生まれる。人と人を結ぶその力は、これからの時代にいちばん必要とされるものです。",
    nextStep:
      "誰かと共にいたいあなたへ。つながりを大切にしながら、一人の時間も「自分とつながる時間」として味わってみてください。自分と仲良くなれた人は、人ともっと深くつながれます。",
    cheer:
      "あなたが結んできた縁は、これからのあなたを支える宝物。まだ出会っていない大切な人も、きっとこの先で待っています。",
    cardGradient: "from-lavender-500/15 to-champagne-300/45",
  },
  freedom: {
    id: "freedom",
    name: "自由に羽ばたく",
    emoji: "✨",
    catch: "新しい世界へ、軽やかに踏み出せる人。",
    portrait:
      "あなたは、自分の心が動く方へ進める人。常識や年齢に縛られず「やってみたい」を大切にできる、その身軽さは生まれ持った才能です。35歳からは、責任や経験という翼を得て、若い頃よりずっと遠くまで飛べる季節が始まります。",
    strength:
      "あなたの光は「しなやかさ」。変化を恐れず、新しい場所でも自分らしくいられる。その自由さは、まわりの人に「私も動いていいんだ」という勇気を渡しています。",
    nextStep:
      "羽ばたくあなたへ。ときには一つの場所に根を下ろして、深く味わう時間も持ってみてください。自由は、帰る場所があるほど、もっと遠くまで飛べます。",
    cheer:
      "あなたの人生は、まだ地図の途中。これから見る景色が、いちばん美しい。さあ、どこへでも。",
    cardGradient: "from-champagne-300/45 to-lavender-500/20",
  },
};

/**
 * 設問。各選択肢が複数タイプに加点することで、現実の人の「グラデーション」を表現する。
 * 重みは 1〜3。その選択がそのタイプを強く示すほど大きく。
 */
export const diagnosisQuestions: DiagnosisQuestion[] = [
  {
    id: 1,
    prompt: "ふいに自由な休日が一日できたら、どう過ごしたい？",
    choices: [
      {
        label: "やりたかった仕事や勉強を、思い切り進めたい",
        scores: { leader: 2, wisdom: 1 },
      },
      {
        label: "気になっていたお店や場所へ、ふらりと出かけたい",
        scores: { freedom: 2, grace: 2 },
      },
    ],
  },
  {
    id: 2,
    prompt: "あなたが「自分らしくいられる」と感じるのは、どんな時間？",
    choices: [
      {
        label: "大切な人と笑い合っている時間",
        scores: { bond: 3, kindness: 1 },
      },
      {
        label: "一人で、静かに自分と向き合う時間",
        scores: { wisdom: 3, grace: 1 },
      },
    ],
  },
  {
    id: 3,
    prompt: "新しい服を選ぶとき、いちばん大事にするのは？",
    choices: [
      {
        label: "自分に似合って、気分が上がるかどうか",
        scores: { grace: 3, freedom: 1 },
      },
      {
        label: "動きやすくて、その日の自分を支えてくれるか",
        scores: { leader: 2, kindness: 1 },
      },
    ],
  },
  {
    id: 4,
    prompt: "友人が落ち込んでいたら、あなたはまず何をする？",
    choices: [
      {
        label: "そばにいて、ただ話をぜんぶ聞いてあげる",
        scores: { kindness: 3, bond: 1 },
      },
      {
        label: "一緒に解決策を考えて、前へ進む手伝いをする",
        scores: { leader: 2, bond: 1 },
      },
    ],
  },
  {
    id: 5,
    prompt: "「素敵だな」と憧れるのは、どんな女性？",
    choices: [
      {
        label: "凛として、佇まいまで美しい人",
        scores: { grace: 3, leader: 1 },
      },
      {
        label: "知性があって、言葉に深みのある人",
        scores: { wisdom: 3, kindness: 1 },
      },
    ],
  },
  {
    id: 6,
    prompt: "もし時間もお金も自由になったら、まず何をしたい？",
    choices: [
      {
        label: "見たことのない国や景色を、見に行きたい",
        scores: { freedom: 3, grace: 1 },
      },
      {
        label: "誰かの役に立つ活動や、学び直しを始めたい",
        scores: { kindness: 2, wisdom: 2 },
      },
    ],
  },
  {
    id: 7,
    prompt: "あなたが、ひそかに誇りに思っていることは？",
    choices: [
      {
        label: "やると決めたことを、最後までやり抜いてきたこと",
        scores: { leader: 2, freedom: 1 },
      },
      {
        label: "まわりの人を、大切にし続けてきたこと",
        scores: { bond: 3, kindness: 1 },
      },
    ],
  },
  {
    id: 8,
    prompt: "これからの人生で、あなたが手に入れたいものは？",
    choices: [
      {
        label: "心から信頼し合える、深いつながり",
        scores: { bond: 3, kindness: 1 },
      },
      {
        label: "何歳になっても挑戦できる、軽やかな自分",
        scores: { freedom: 3, leader: 1 },
      },
    ],
  },
];

export interface DiagnosisResult {
  type: DiagnosisType;
  /** 全タイプの得点（同点判定や「第2の輝き」の表示に使える） */
  scores: Record<DiagnosisTypeId, number>;
  /** 最高得点に次ぐ、2番目の輝き方（同点でなければ） */
  secondaryType?: DiagnosisType;
}

const ALL_TYPE_IDS: DiagnosisTypeId[] = [
  "leader",
  "grace",
  "wisdom",
  "kindness",
  "bond",
  "freedom",
];

/**
 * 各設問で選んだ選択肢のインデックス配列から結果を計算する。
 * answers[i] は diagnosisQuestions[i] で選んだ choice の index（0 または 1）。
 * 未回答（-1 や undefined）はスキップする。
 */
export function calculateDiagnosis(answers: number[]): DiagnosisResult {
  const scores = ALL_TYPE_IDS.reduce(
    (acc, id) => {
      acc[id] = 0;
      return acc;
    },
    {} as Record<DiagnosisTypeId, number>,
  );

  diagnosisQuestions.forEach((question, index) => {
    const choiceIndex = answers[index];
    const choice = question.choices[choiceIndex];
    if (!choice) {
      return;
    }
    for (const [typeId, weight] of Object.entries(choice.scores)) {
      scores[typeId as DiagnosisTypeId] += weight ?? 0;
    }
  });

  // 得点の高い順に並べる。同点のときは、より多様な結果が出るよう
  // ALL_TYPE_IDS の並び順（固定）を tiebreaker にして決定的にする。
  const ranked = [...ALL_TYPE_IDS].sort((a, b) => scores[b] - scores[a]);
  const topId = ranked[0];
  const secondId = ranked[1];

  return {
    type: diagnosisTypes[topId],
    scores,
    secondaryType:
      scores[secondId] > 0 && scores[secondId] < scores[topId]
        ? diagnosisTypes[secondId]
        : undefined,
  };
}
