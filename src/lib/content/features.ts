import type { Feature } from "@/types/article";

/**
 * Épanouie の特集一覧。
 * 新しい特集を追加するときは、このリストに追記し、
 * 記事の frontmatter に `feature: <slug>` を付ける。
 */
export const features: Feature[] = [
  {
    slug: "younger-men",
    title: "年下のパートナーという選択",
    lead: "「年相応の相手と」という固定観念を、そっと手放してみる。年齢ではなく、自立した自分を軸に。35歳からの恋愛の、新しい景色について。",
    description:
      "「年相応」の枠を外したとき見えてくる、新しい関係のかたち。自立した女性が選び、選ばれる時代の恋愛論。",
    emoji: "🌙",
    cardGradient: "from-lavender-300/40 to-champagne-300/50",
    sections: [
      {
        title: "なぜ今、変わってきたのか",
        description: "恋愛市場で起きている変化と、その背景にある社会のうごき。",
      },
      {
        title: "「年相応」という固定観念を手放す",
        description: "年齢で自分の選択肢を狭めない、考え方の転換。",
      },
      {
        title: "出会い方・関係の築き方",
        description: "対等な関係を、無理なく始め、育てていくために。",
      },
      {
        title: "年の差カップルのリアル",
        description: "お金・将来・周囲。現実的に向き合っておきたいこと。",
      },
      {
        title: "自立から始まる魅力",
        description: "「選ばれる」より「自分が選ぶ」。自立という土台。",
      },
      {
        title: "多様な選択とロールモデル",
        description: "結婚という形にこだわらない、自分らしい関係の選び方。",
      },
    ],
    published: true,
  },
  {
    slug: "beyond-3-8-percent",
    title: "「3.8%」の向こう側",
    lead: "内閣府の論文が突きつけた数字を、まず正面から受け止める。逃げない。そのうえで問い返す——その数字は、私たちに何を命じているのか。論文は「条件を下げろ」と言う。私たちは「何を大切にするかは、あなたが決める」と言う。",
    description:
      "「結婚市場」論への、静かな応答。数字は認める。撃つのは、その意味づけと前提。同じ3.8%を、別の角度から読み直す特集。",
    emoji: "🪟",
    cardGradient: "from-plum-100 to-lavender-300/40",
    sections: [
      {
        title: "はじめに",
        description: "この特集が、何に応答し、何を問うのか。",
      },
      {
        title: "「市場価値」という言葉を、置き直す",
        description: "人を6条件で値付けする発想の、その先へ。",
      },
      {
        title: "「成立率3.8%」を、読み替える",
        description: "同じ数字が、別の意味を持ち始める。",
      },
      {
        title: "「条件を下げろ」への、静かな反論",
        description: "下げないことは、居直りではなく意思かもしれない。",
      },
      {
        title: "「結婚がゴール」という前提を、外す",
        description: "ゴールではなく、数ある選択肢の一つとして。",
      },
      {
        title: "少子化の「手段」にされないために",
        description: "私の人生は、誰かの政策の変数ではない。",
      },
      {
        title: "同じデータから、希望を引き出す",
        description: "数字に怯えるのではなく、数字を味方にする。",
      },
    ],
    published: true,
  },
  {
    slug: "tomoni",
    title: "ともに——HeForSheから考える",
    lead: "「いい年して」「結婚は?」——日々ぶつけられる言葉を、まず否定せず置く。その違和感は、本当に\"あなた個人\"の問題なのか。努力で輝けとは言わない。構造を見つめ、男性も含めた「ともに」を描く連載です。",
    description:
      "「あなたが輝けないのは、あなたのせいではない」。HeForSheを土台に、性別役割の構造を見つめ、男女がともに生きる道を考える連載。",
    emoji: "🤝",
    cardGradient: "from-lavender-300/40 to-plum-100",
    sections: [
      {
        title: "宣言",
        description: "この連載が、何を見つめ、何を描くのか。",
      },
      {
        title: "男性も縛られている",
        description: "「男は大黒柱」という役割は、誰を縛っているのか。",
      },
      {
        title: "家庭という最前線",
        description: "ケアと家事。名もなき労働の偏りを見つめる。",
      },
      {
        title: "制度のあり方",
        description: "輝きは意志ではなく、制度設計で決まる。",
      },
      {
        title: "連帯か、分断か",
        description: "敵対ではなく、ともに。味方になるとはどういうことか。",
      },
      {
        title: "HeForSheとは",
        description: "10年前、国連で語られたこと。その意義と限界。",
      },
      {
        title: "輝く女性のあり方",
        description: "輝きの定義を、他人から取り戻す。",
      },
      {
        title: "横断——市場と政策の視線",
        description: "「産むために」「条件を下げろ」。その非対称を問う。",
      },
      {
        title: "結び",
        description: "「あなたのせいではない」を、出発点にする。",
      },
    ],
    published: true,
  },
  {
    slug: "marriage-no-compromise",
    title: "妥協しない、という選択",
    lead: "「もう歳だから、選り好みするな」——その言葉、誰のため? 条件を下げろと言う人ほど、あなたの人生に責任を取りません。妥協は、自己尊重の放棄。基準を下げないことは、わがままではなく、自分への誠実さです。",
    description:
      "「妥協しろ」という社会の圧を、名指しして跳ね返す。基準を下げないことは、自分への誠実さ。35歳からの相手選びを、勝ち負けではなく「納得」で。",
    emoji: "💍",
    cardGradient: "from-champagne-300/50 to-lavender-300/40",
    sections: [
      {
        title: "社会の「妥協しろ」を跳ね返す",
        description: "「選り好みするな」——その言葉は、誰のためのものか。",
      },
      {
        title: "「妥協しない」は自己尊重",
        description: "基準を下げないことは、自分への誠実さである。",
      },
      {
        title: "自分を磨くと、相手が変わる",
        description: "自分の人生を輝かせることが、相手選びの土台になる。",
      },
      {
        title: "一人の時間と、焦りの解体",
        description: "妥協で埋める毎日より、一人で満ちている毎日を。",
      },
      {
        title: "35歳以上を、強みに",
        description: "減ったのは選択肢ではなく、妥協する理由。",
      },
    ],
    published: true,
  },
  {
    slug: "career-breakthrough",
    title: "天井は、もうない",
    lead: "あからさまな差別は、時代がだいぶ倒してくれた。本当の難所は、表に残った建前ではなく、内面化された「私なんかが」という自己制限と、仕組みに残った微妙な偏り。敵は人ではなく、前提。主語を自分に戻して、磨いた力で、場所を取りにいく。",
    description:
      "「私なんかが上を狙うなんて」——内面化した固定観念と、仕組みに残った微妙な偏りを解体する。敵は人ではなく前提。35歳からのキャリアを、本番に。",
    emoji: "🚀",
    cardGradient: "from-plum-100 to-champagne-300/50",
    sections: [
      {
        title: "古い固定観念を、名指しする",
        description: "もう時代錯誤になった「常識」を、晒していく。",
      },
      {
        title: "内面化した固定観念を、解く",
        description: "いちばん手強い天井は、自分の中にある。",
      },
      {
        title: "仕事を磨いて、場所を取りにいく",
        description: "役職は、待つものではなく、取りにいくもの。",
      },
      {
        title: "周囲の声・構造を、跳ね返す",
        description: "聞かなくていい声と、作っていい道がある。",
      },
      {
        title: "再定義し、前へ",
        description: "35歳からのキャリアは、巻き返しではなく本番。",
      },
    ],
    published: true,
  },
  {
    slug: "money-independence",
    title: "お金は、自由のことだった",
    lead: "「女がお金の話をするのは品がない」——その建前が、誰の都合で作られたかを考える。経済的自立は、結婚の反対語ではなく、対等な関係の前提。貯金残高は、あなたが「NO」と言える回数。35歳からの資産形成は、遅いどころか適齢期です。",
    description:
      "「女とお金」の固定観念を解体する。経済的自立とは、選択の自由のこと。35歳からのお金との向き合い方を、不安ではなく主導権の話として。",
    emoji: "💴",
    cardGradient: "from-champagne-300/50 to-plum-100",
    sections: [
      {
        title: "「女とお金」の固定観念を解体",
        description: "「品がない」「男に任せろ」——その圧は、誰の都合か。",
      },
      {
        title: "経済的自立＝選択の自由",
        description: "自分のお金で立てる人は、妥協しない選択ができる。",
      },
      {
        title: "「もう遅い」の解体",
        description: "35歳からの資産形成は、遅いどころか適齢期。",
      },
      {
        title: "求道者──お金と向き合う",
        description: "お金を学ぶことは、自分の人生を引き受けること。",
      },
      {
        title: "再定義・前へ",
        description: "収入は価値ではなく、選択肢の数。",
      },
    ],
    published: true,
  },
  {
    slug: "relearn-challenge",
    title: "始めるのに、最適な日は今日",
    lead: "「今さら勉強しても遅い」——それ、科学的根拠はありません。脳は35歳でも普通に伸び、止まるのは挑戦のほう。比べる相手は若い子ではなく、昨日の自分。学び続ける人は、年齢の檻に入りません。5年後のあなたは、今日始めたかどうかだけで決まります。",
    description:
      "「今さら遅い」「若い子に勝てない」を解体する学び直し特集。挑戦に必要なのは才能ではなく、申込ボタンを押す指。35歳からの学びを、本道に。",
    emoji: "📚",
    cardGradient: "from-lavender-300/40 to-champagne-300/50",
    sections: [
      {
        title: "「今さら遅い」の解体",
        description: "5年後のあなたは、今日始めたかで決まる。",
      },
      {
        title: "「若い子に勝てない」の解体",
        description: "学び直しは競争じゃない。相手は昨日の自分。",
      },
      {
        title: "求道者──学び続ける生き方",
        description: "学び続ける人は、年齢の檻に入らない。",
      },
      {
        title: "周囲の声を跳ね返す",
        description: "「その歳で何になるの？」——なりたい自分に。",
      },
      {
        title: "再定義・前へ",
        description: "35歳の学び直しは、回り道じゃなく本道。",
      },
    ],
    published: true,
  },
  {
    slug: "relationship-inventory",
    title: "友達は、量より濃度",
    lead: "「友達が少ない＝寂しい人」って、誰が決めたのでしょう。100人の知り合いより、3人の本物。あなたを削る関係から、静かに降りていい。35歳からの人間関係は、選び直していいのです。一人で過ごせる人ほど、いい関係を作れます。",
    description:
      "「友達は多いほどいい」を解体する人間関係の棚卸し。大人の友情は量より濃度。一人の時間を、空白ではなく余白として取り戻す特集。",
    emoji: "🍃",
    cardGradient: "from-plum-100 to-lavender-300/40",
    sections: [
      {
        title: "「友達は多いほどいい」の解体",
        description: "100人の知り合いより、3人の本物。",
      },
      {
        title: "削る関係から降りる",
        description: "会った後に疲れる人とは、距離を取っていい。",
      },
      {
        title: "ライフステージのズレ",
        description: "疎遠は絶縁じゃない。違う道でも、友達。",
      },
      {
        title: "求道者──関係を選ぶ",
        description: "一緒にいて機嫌よくいられる人を、基準にする。",
      },
      {
        title: "一人の時間の再定義",
        description: "予定のない週末は、空白じゃなく余白。",
      },
    ],
    published: true,
  },
  {
    slug: "family-spell",
    title: "親の呪いを、解く",
    lead: "「親を安心させるために結婚しろ」——それは、あなたの人生です。親の「心配」は、時々「支配」の顔をしている。子どもの頃に言われた「あなたはダメね」を、まだ信じていませんか。親を否定しなくても、親の言葉は手放せます。自分を生きることが、結局いちばんの親孝行になる。",
    description:
      "「親を安心させろ」圧と、刷り込まれた呪いの言葉を解く特集。距離を取ることは裏切りではなく自立。親の人生の続きではなく、自分の人生を生きるために。",
    emoji: "🪢",
    cardGradient: "from-lavender-300/40 to-plum-100",
    sections: [
      {
        title: "「親を安心させろ」圧の解体",
        description: "親の安心のために、人生を差し出さなくていい。",
      },
      {
        title: "呪いの言葉を解く",
        description: "親の口癖が、あなたの自己評価になっていないか。",
      },
      {
        title: "距離の取り方",
        description: "距離を取るのは、裏切りじゃなく自立。",
      },
      {
        title: "求道者──自分の人生を引き受ける",
        description: "親の娘である前に、一人の人間。",
      },
      {
        title: "再定義・赦しと前進",
        description: "赦すかどうかは、あなたが決めていい。急がなくていい。",
      },
    ],
    published: true,
  },
  {
    slug: "body-redefine",
    title: "体と、仲直りする",
    lead: "「35歳から体は下り坂」——その坂は、誰が引いたのでしょう。衰えではなく、付き合い方が変わるだけ。疲れは敵ではなく、体からの連絡です。今日の体は、これからの人生でいちばん若い。長く付き合う体だから、急がず、諦めず。",
    description:
      "「35歳から下り坂」言説を再定義する、体と健康の特集。衰えではなく関係の築き直し。比較と不安煽りから降り、自分の体と仲直りするために。",
    emoji: "🌿",
    cardGradient: "from-champagne-300/50 to-lavender-300/40",
    sections: [
      {
        title: "「35歳から下り坂」言説の解体",
        description: "衰えじゃなく、付き合い方が変わるだけ。",
      },
      {
        title: "体の声を聞く",
        description: "疲れは敵じゃなく、体からの連絡。",
      },
      {
        title: "求道者──体を磨く・整える",
        description: "体を整えることは、人生を整えること。",
      },
      {
        title: "周囲の声・比較から降りる",
        description: "あなたの体は、誰かに採点されるものじゃない。",
      },
      {
        title: "再定義・前へ",
        description: "今日の体は、これからの人生でいちばん若い。",
      },
    ],
    published: true,
  },
  {
    slug: "time-not-late",
    title: "「もう遅い」を、卒業する",
    lead: "「35歳＝人生の折り返し」——100年時代の計算、合っていますか。人生100年なら、35歳はまだ前半戦。「もう35」と「まだ35」、言葉を選ぶのはあなたです。「もう遅い」は、挑戦しない言い訳にいちばん便利な言葉。今日という日は、残りの人生の初日です。",
    description:
      "「人生の折り返し」「もう遅い」を総解体する時間の特集。遅いかどうかを決めるのは、カレンダーではなくあなた。人生の主導権は、何歳からでも取り戻せる。",
    emoji: "⏳",
    cardGradient: "from-plum-100 to-champagne-300/50",
    sections: [
      {
        title: "「人生の折り返し」言説の解体",
        description: "人生100年なら、35歳はまだ前半戦。",
      },
      {
        title: "「もう遅い」の正体",
        description: "遅いかを決めるのは、カレンダーじゃなくあなた。",
      },
      {
        title: "時間の使い方＝人生の使い方",
        description: "5年後を変えるのは、今日の30分。",
      },
      {
        title: "求道者──時間と生きる",
        description: "焦りは「人の時計」、納得は「自分の時計」。",
      },
      {
        title: "再定義・前へ",
        description: "人生の主導権は、何歳からでも取り戻せる。",
      },
    ],
    published: true,
  },
];

export function getPublishedFeatures(): Feature[] {
  return features.filter((f) => f.published);
}

export function getFeatureBySlug(slug: string): Feature | undefined {
  return features.find((f) => f.slug === slug);
}
