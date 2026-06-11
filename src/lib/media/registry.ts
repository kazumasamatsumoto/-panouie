import type { MediaBrand } from "@/types/media";

/**
 * Lumi プラットフォーム上で展開するメディアの一覧。
 * 新しいメディアを追加するときは、このリストに追記する。
 */
export const mediaBrands: MediaBrand[] = [
  {
    slug: "epanouie",
    name: "Épanouie",
    tagline: "35歳から、本当の自分が咲く。",
    description:
      "35歳からの独身女性のための自己肯定感メディア。孤独や自信のゆらぎに、そっと寄り添う言葉と物語を。",
    audience: "35歳以上の独身女性",
    emoji: "🌷",
    accentColor: "#7f77dd",
    cardGradient: "from-plum-100 to-champagne-300/60",
    published: true,
  },
  {
    slug: "lueur",
    name: "Lueur",
    tagline: "明日、誰かにひとつの光を。",
    description:
      "見ず知らずの誰かへの、明日からできる小さな親切を発信する応援メディア。親切は、先にあなたに効く。",
    audience: "元気が出ない日の、すべての人",
    emoji: "🕯️",
    accentColor: "#c9b99a",
    cardGradient: "from-champagne-300/70 to-plum-100",
    published: false,
  },
];

export function getPublishedMedia(): MediaBrand[] {
  return mediaBrands.filter((media) => media.published);
}

export function getMediaBySlug(slug: string): MediaBrand | undefined {
  return mediaBrands.find((media) => media.slug === slug);
}
