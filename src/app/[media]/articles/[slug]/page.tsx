import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/format-date";
import { getArticle, getArticleSlugs } from "@/lib/content/articles";
import { getSiteCopy } from "@/lib/media/site-copy";
import { getMediaBySlug } from "@/lib/media/registry";
import { lumi } from "@/lib/media/lumi";
import { ArticleShare } from "@/components/features/article-share";

// generateStaticParams で生成したスラッグ以外は 404 にする
export const dynamicParams = false;

interface ArticlePageProps {
  params: Promise<{ media: string; slug: string }>;
}

export function generateStaticParams({
  params,
}: {
  params: { media: string };
}) {
  return getArticleSlugs(params.media).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { media, slug } = await params;
  try {
    const article = await getArticle(media, slug);
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

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { media, slug } = await params;
  const copy = getSiteCopy(media);
  const brand = getMediaBySlug(media);
  const shareUrl = `${lumi.baseUrl}/${media}/articles/${slug}`;

  let article;
  try {
    article = await getArticle(media, slug);
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl px-6 py-20">
      <div aria-hidden className="reading-progress" />

      <Link
        href={`/${media}/articles`}
        className="text-sm text-lavender-600 transition-colors hover:text-lavender-500"
      >
        ← 読みものへ戻る
      </Link>

      <header className="mt-8 border-b border-plum-100 pb-10">
        <span className="animate-fade-up inline-block text-xs font-medium tracking-wide text-lavender-600">
          {article.category}
        </span>
        <h1 className="animate-fade-up mt-3 font-serif text-3xl font-medium leading-snug text-plum-900 [animation-delay:120ms]">
          {article.title}
        </h1>
        <p className="animate-fade-up mt-4 leading-relaxed text-plum-500 [animation-delay:240ms]">
          {article.description}
        </p>
        <div className="animate-fade-up mt-6 flex items-center gap-3 text-xs text-champagne-600 [animation-delay:360ms]">
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

      <ArticleShare
        url={shareUrl}
        title={article.title}
        mediaName={brand?.name ?? "Lumi"}
      />

      <p
        aria-hidden
        className="mt-16 text-center text-xs tracking-[1em] text-champagne-500"
      >
        ✦ ✦ ✦
      </p>

      <footer className="mt-8 rounded-2xl bg-gradient-to-br from-lavender-300/40 via-champagne-300/30 to-plum-100/60 p-px">
        <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-cream/90 p-8 text-center">
          <p className="font-serif text-lg text-plum-900">
            {copy?.articleFooter.title ??
              "今日も、ここまで読んでくれてありがとう。"}
          </p>
          <p className="mt-2 text-sm text-plum-500">
            {copy?.articleFooter.body ??
              "あなたのペースで、また会いに来てください。"}
          </p>
        </div>
      </footer>
    </article>
  );
}
