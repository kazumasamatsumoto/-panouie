import type { Feature } from "@/types/article";

/**
 * Lueur の特集一覧。
 * 新しい特集を追加するときは、このリストに追記し、
 * 記事の frontmatter に `feature: <slug>` を付ける。
 */
export const lueurFeatures: Feature[] = [
  {
    slug: "small-kindness",
    title: "明日できる、小さな親切",
    lead: "大きなことじゃなくていい。30秒の道案内、目を見て言う「ありがとう」、風が倒した自転車を起こすこと。明日できる小さな親切を、場面別に30個集めました。親切は、渡した相手より先に、あなたに効きます。",
    description:
      "お金も勇気もほとんどいらない、明日できる親切を場面別に30個。元気が出ない日の処方箋として。",
    emoji: "🕯️",
    cardGradient: "from-champagne-300/60 to-lavender-300/30",
    sections: [
      {
        title: "すれ違う街で",
        description: "道で、信号で、駅前で。すれ違いざまの数十秒でできること。",
      },
      {
        title: "お店のレジで",
        description:
          "コンビニ、カフェ、スーパー。顔の見える人にも、見えない人にも。",
      },
      {
        title: "電車とバスで",
        description: "宛先のわからない親切が、いちばん多く生まれる場所。",
      },
      {
        title: "はたらく場所で",
        description:
          "よく知らない同僚や、出入りの人へ。場の空気はひと言で変わる。",
      },
      {
        title: "ご近所で",
        description:
          "名前を知らなくていい。続かなくていい。点の親切でじゅうぶん。",
      },
      {
        title: "画面の中で",
        description: "すれ違いがちな場所で、言葉で光を渡す方法。",
      },
    ],
    published: true,
  },
];
