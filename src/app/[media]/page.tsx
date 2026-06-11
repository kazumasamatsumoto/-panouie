import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/features/article-card";
import { Aurora } from "@/components/ui/aurora";
import { Sparkles } from "@/components/ui/sparkles";
import { ButtonLink } from "@/components/ui/button-link";
import { getAllArticles } from "@/lib/content/articles";
import { getPublishedFeatures } from "@/lib/content/media-features";
import { getMediaBySlug } from "@/lib/media/registry";
import { getSiteCopy } from "@/lib/media/site-copy";

interface MediaHomePageProps {
  params: Promise<{ media: string }>;
}

export default async function MediaHomePage({ params }: MediaHomePageProps) {
  const { media: slug } = await params;
  const media = getMediaBySlug(slug);
  const copy = getSiteCopy(slug);
  if (!media || !copy) {
    notFound();
  }

  const articles = getAllArticles(slug);
  const latest = articles.slice(0, 3);
  const features = getPublishedFeatures(slug).slice(0, 4);
  const shimmerLine = copy.hero.titleLines.length - 1;

  return (
    <>
      <section className="relative overflow-hidden">
        <Aurora />
        <Sparkles />
        <div className="mx-auto max-w-3xl px-6 py-28 text-center">
          <p className="animate-fade-up text-sm tracking-[0.3em] text-champagne-600">
            ✦ {media.name.toUpperCase()} ✦
          </p>
          <h1 className="animate-fade-up mt-6 font-serif text-4xl font-medium leading-tight text-plum-900 [animation-delay:150ms] sm:text-5xl">
            {copy.hero.titleLines.map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {index === shimmerLine ? (
                  <span className="shimmer-text">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>
          <p className="animate-fade-up mx-auto mt-8 max-w-xl text-base leading-loose text-plum-500 [animation-delay:300ms]">
            {copy.hero.lede.map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </p>
          <div className="animate-fade-up mt-10 flex items-center justify-center gap-4 [animation-delay:450ms]">
            <ButtonLink href={`/${slug}/articles`}>読みものを見る</ButtonLink>
            <ButtonLink href={`/${slug}/about`} variant="ghost">
              {media.name}について
            </ButtonLink>
          </div>
        </div>
      </section>

      {features.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="scroll-reveal flex items-end justify-between">
            <div>
              <h2 className="font-serif text-2xl font-medium text-plum-900">
                特集
              </h2>
              <p className="mt-2 text-sm text-plum-500">
                {copy.featuresSection.subline}
              </p>
            </div>
            <Link
              href={`/${slug}/articles`}
              className="text-sm text-lavender-600 transition-colors hover:text-lavender-500"
            >
              すべて見る →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <Link
                key={feature.slug}
                href={`/${slug}/features/${feature.slug}`}
                className={`card-shine scroll-reveal group flex items-center gap-5 rounded-2xl bg-gradient-to-br ${feature.cardGradient} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-lavender-400/25`}
              >
                <span
                  className="text-4xl transition-transform duration-300 group-hover:scale-110"
                  aria-hidden
                >
                  {feature.emoji}
                </span>
                <span className="flex-1">
                  <span className="font-serif text-lg font-medium text-plum-900 transition-colors group-hover:text-lavender-600">
                    {feature.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-plum-700">
                    {feature.description}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="scroll-reveal flex items-end justify-between">
          <div>
            <h2 className="font-serif text-2xl font-medium text-plum-900">
              最新の読みもの
            </h2>
            <p className="mt-2 text-sm text-plum-500">
              {copy.latestSection.subline}
            </p>
          </div>
          <Link
            href={`/${slug}/articles`}
            className="text-sm text-lavender-600 transition-colors hover:text-lavender-500"
          >
            すべて見る →
          </Link>
        </div>

        {latest.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((article) => (
              <div key={article.slug} className="scroll-reveal">
                <ArticleCard article={article} media={slug} />
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-plum-500">
            記事を準備しています。もう少しだけお待ちください。
          </p>
        )}
      </section>
    </>
  );
}
