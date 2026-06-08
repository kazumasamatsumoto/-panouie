import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/format-date";
import { getArticle, getArticleSlugs } from "@/lib/content/articles";

const MEDIA = "epanouie";

// generateStaticParams で生成したスラッグ以外は 404 にする
export const dynamicParams = false;

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getArticleSlugs(MEDIA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await getArticle(MEDIA, slug);
    return {
      title: article.title,
      description: article.description,
      openGraph: {
        title: article.title,
        description: article.description,
        type: "article",
        publishedTime: article.publishedAt,
      },
    };
  } catch {
    return { title: "記事が見つかりません" };
  }
}

export async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  let article;
  try {
    article = await getArticle(MEDIA, slug);
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/epanouie/articles"
        className="text-sm text-lavender-600 transition-colors hover:text-lavender-500"
      >
        ← 読みものへ戻る
      </Link>

      <header className="mt-8 border-b border-plum-100 pb-10">
        <span className="text-xs font-medium tracking-wide text-lavender-600">
          {article.category}
        </span>
        <h1 className="mt-3 font-serif text-3xl font-medium leading-snug text-plum-900">
          {article.title}
        </h1>
        <p className="mt-4 leading-relaxed text-plum-500">
          {article.description}
        </p>
        <div className="mt-6 flex items-center gap-3 text-xs text-champagne-600">
          <span>{article.author}</span>
          <span aria-hidden>·</span>
          <time dateTime={article.publishedAt}>
            {formatDate(article.publishedAt)}
          </time>
          <span aria-hidden>·</span>
          <span>{article.readingMinutes}分で読めます</span>
        </div>
      </header>

      <div
        className="article-body mt-10"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />

      <footer className="mt-16 rounded-2xl bg-plum-100/50 p-8 text-center">
        <p className="font-serif text-lg text-plum-900">
          今日も、ここまで読んでくれてありがとう。
        </p>
        <p className="mt-2 text-sm text-plum-500">
          あなたのペースで、また会いに来てください。
        </p>
      </footer>
    </article>
  );
}

export default ArticlePage;
