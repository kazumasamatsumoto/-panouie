import Link from "next/link";
import { formatDate } from "@/lib/format-date";
import type { ArticleMeta } from "@/types/article";

interface ArticleCardProps {
  article: ArticleMeta;
  /** 記事が属するメディアのスラッグ（リンク生成に使用） */
  media: string;
}

export function ArticleCard({ article, media }: ArticleCardProps) {
  return (
    <Link
      href={`/${media}/articles/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-plum-100 bg-white/70 transition-all hover:-translate-y-1 hover:border-lavender-300 hover:shadow-lg hover:shadow-lavender-300/20"
    >
      <div className="flex h-40 items-center justify-center bg-gradient-to-br from-plum-100 to-champagne-300/60 text-5xl">
        <span aria-hidden>{article.coverEmoji ?? "🌸"}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-medium tracking-wide text-lavender-600">
          {article.category}
        </span>
        <h3 className="mt-2 font-serif text-lg leading-snug text-plum-900 transition-colors group-hover:text-lavender-500">
          {article.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-plum-500">
          {article.description}
        </p>
        <div className="mt-5 flex items-center gap-3 text-xs text-champagne-600">
          <time dateTime={article.publishedAt}>
            {formatDate(article.publishedAt)}
          </time>
          <span aria-hidden>·</span>
          <span>{article.readingMinutes}分で読めます</span>
        </div>
      </div>
    </Link>
  );
}
