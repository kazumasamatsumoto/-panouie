import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Sparkles } from "@/components/ui/sparkles";
import { formatDate } from "@/lib/format-date";
import { getArticlesByFeature } from "@/lib/content/articles";
import { getFeatureBySlug, getPublishedFeatures } from "@/lib/content/features";

const MEDIA = "epanouie";

export const dynamicParams = false;

interface FeaturePageProps {
  params: Promise<{ feature: string }>;
}

export function generateStaticParams() {
  return getPublishedFeatures().map((f) => ({ feature: f.slug }));
}

export async function generateMetadata({
  params,
}: FeaturePageProps): Promise<Metadata> {
  const { feature: slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) {
    return { title: "特集が見つかりません" };
  }
  return {
    title: `特集：${feature.title}`,
    description: feature.description,
    openGraph: {
      title: `特集：${feature.title}`,
      description: feature.description,
      type: "website",
    },
  };
}

export default async function FeaturePage({ params }: FeaturePageProps) {
  const { feature: slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature || !feature.published) {
    notFound();
  }

  const articles = getArticlesByFeature(MEDIA, slug);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/epanouie/articles"
        className="text-sm text-lavender-600 transition-colors hover:text-lavender-500"
      >
        ← 読みものへ戻る
      </Link>

      <header
        className={`relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-br ${feature.cardGradient} px-8 py-14 text-center sm:px-12`}
      >
        <Sparkles />
        <p className="animate-fade-up text-xs tracking-[0.3em] text-plum-700">
          特集 / FEATURE
        </p>
        <div
          className="animate-fade-up mt-4 text-5xl [animation-delay:120ms]"
          aria-hidden
        >
          {feature.emoji}
        </div>
        <h1 className="animate-fade-up mt-4 font-serif text-3xl font-medium leading-snug text-plum-900 [animation-delay:240ms] sm:text-4xl">
          {feature.title}
        </h1>
        <p className="animate-fade-up mx-auto mt-6 max-w-2xl leading-loose text-plum-700 [animation-delay:360ms]">
          {feature.lead}
        </p>
      </header>

      {articles.length > 0 ? (
        <div className="mt-16 space-y-14">
          {feature.sections.map((section, index) => {
            const sectionArticles = articles.filter(
              (a) => a.category === section.title,
            );
            if (sectionArticles.length === 0) return null;
            return (
              <section key={section.title} className="scroll-reveal">
                <div className="border-b border-plum-100 pb-3">
                  <p className="text-xs tracking-wide text-champagne-600">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-1 font-serif text-xl font-medium text-plum-900">
                    {section.title}
                  </h2>
                  {section.description && (
                    <p className="mt-1 text-sm text-plum-500">
                      {section.description}
                    </p>
                  )}
                </div>
                <ul className="mt-5 divide-y divide-plum-100/70">
                  {sectionArticles.map((article) => (
                    <li key={article.slug}>
                      <Link
                        href={`/${MEDIA}/articles/${article.slug}`}
                        className="group flex items-baseline gap-3 rounded-lg py-4 transition-colors hover:bg-white/50"
                      >
                        <span
                          className="text-lg transition-transform duration-300 group-hover:scale-110"
                          aria-hidden
                        >
                          {article.coverEmoji ?? "🌸"}
                        </span>
                        <span className="flex-1">
                          <span className="font-medium text-plum-900 transition-colors group-hover:text-lavender-500">
                            {article.title}
                          </span>
                          <span className="mt-1 block text-sm leading-relaxed text-plum-500">
                            {article.description}
                          </span>
                        </span>
                        <time
                          dateTime={article.publishedAt}
                          className="hidden shrink-0 text-xs text-champagne-600 sm:block"
                        >
                          {formatDate(article.publishedAt)}
                        </time>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      ) : (
        <p className="mt-16 text-center text-plum-500">
          この特集の記事を、準備しています。もう少しだけお待ちください。
        </p>
      )}
    </div>
  );
}
