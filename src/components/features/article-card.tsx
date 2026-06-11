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
      className="card-shine group flex h-full flex-col overflow-hidden rounded-2xl border border-plum-100 bg-white/70 transition-all duration-300 hover:-translate-y-1.5 hover:border-lavender-300 hover:shadow-xl hover:shadow-lavender-400/25"
    >
      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-plum-100 to-champagne-300/60">
        <span
          aria-hidden
          className="absolute h-24 w-24 rounded-full bg-white/50 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-lavender-300/40"
        />
        <span
          aria-hidden
          className="relative text-5xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
        >
          {article.coverEmoji ?? "🌸"}
        </span>
        <span
          aria-hidden
          className="absolute right-5 top-4 text-champagne-600/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        >
          ✦
        </span>
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
