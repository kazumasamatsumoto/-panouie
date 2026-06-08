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
];

export function getPublishedFeatures(): Feature[] {
  return features.filter((f) => f.published);
}

export function getFeatureBySlug(slug: string): Feature | undefined {
  return features.find((f) => f.slug === slug);
}
