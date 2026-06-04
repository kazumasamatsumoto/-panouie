export interface ArticleFrontmatter {
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  author: string;
  coverEmoji?: string;
}

export interface ArticleMeta extends ArticleFrontmatter {
  slug: string;
  readingMinutes: number;
}

export interface Article extends ArticleMeta {
  contentHtml: string;
}
