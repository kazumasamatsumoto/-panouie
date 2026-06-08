export interface ArticleFrontmatter {
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  author: string;
  coverEmoji?: string;
  /** 所属する特集の slug（任意）。特集に属さない通常記事は未設定。 */
  feature?: string;
  /** 特集内での並び順（任意、小さいほど先頭）。 */
  featureOrder?: number;
}

export interface ArticleMeta extends ArticleFrontmatter {
  slug: string;
  readingMinutes: number;
}

export interface Feature {
  /** URL セグメント（例: "younger-men"） */
  slug: string;
  /** 特集タイトル */
  title: string;
  /** 特集のリード文 */
  lead: string;
  /** 一覧カード等で使う短い説明 */
  description: string;
  /** 特集を象徴する絵文字 */
  emoji: string;
  /** カードのグラデーション用 Tailwind クラス */
  cardGradient: string;
  /** 章立て（記事のグルーピング表示に使う） */
  sections: { title: string; description?: string }[];
  published: boolean;
}

export interface Article extends ArticleMeta {
  contentHtml: string;
}
