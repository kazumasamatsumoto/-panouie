export interface MediaBrand {
  /** URL セグメント（例: "epanouie"）。将来サブドメインにも転用できる識別子。 */
  slug: string;
  /** 表示名（例: "Épanouie"） */
  name: string;
  /** タグライン */
  tagline: string;
  /** ポータルや一覧での短い説明 */
  description: string;
  /** ターゲット読者 */
  audience: string;
  /** メディアを象徴する絵文字 */
  emoji: string;
  /** ブランドの主要カラー（CSS変数 --media-accent に流し込む） */
  accentColor: string;
  /** ポータルカードのグラデーション用 Tailwind クラス */
  cardGradient: string;
  /** 公開中かどうか。false なら「準備中」表示にする。 */
  published: boolean;
}

/** メディアごとのページ文言。registry がブランド情報、こちらがページの言葉を持つ。 */
export interface MediaSiteCopy {
  /** メタデータ用キーワード */
  keywords: string[];
  hero: {
    /** 見出し行。最後の行にシマー演出がかかる。 */
    titleLines: string[];
    /** リード文（行ごと） */
    lede: string[];
  };
  featuresSection: {
    subline: string;
  };
  latestSection: {
    subline: string;
  };
  articlesPage: {
    metaDescription: string;
    lede: string[];
  };
  about: {
    metaDescription: string;
    intro: string[];
    values: { emoji: string; title: string; body: string }[];
    cta: { title: string; body: string };
  };
  footer: {
    description: string[];
  };
  articleFooter: {
    title: string;
    body: string;
  };
}
