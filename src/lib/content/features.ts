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
];

export function getPublishedFeatures(): Feature[] {
  return features.filter((f) => f.published);
}

export function getFeatureBySlug(slug: string): Feature | undefined {
  return features.find((f) => f.slug === slug);
}
