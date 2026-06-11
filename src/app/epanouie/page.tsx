import Link from "next/link";
import { ArticleCard } from "@/components/features/article-card";
import { Aurora } from "@/components/ui/aurora";
import { Sparkles } from "@/components/ui/sparkles";
import { ButtonLink } from "@/components/ui/button-link";
import { getAllArticles } from "@/lib/content/articles";
import { getPublishedFeatures } from "@/lib/content/features";

const MEDIA = "epanouie";

export default function HomePage() {
  const articles = getAllArticles(MEDIA);
  const latest = articles.slice(0, 3);
  const features = getPublishedFeatures().slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden">
        <Aurora />
        <Sparkles />
        <div className="mx-auto max-w-3xl px-6 py-28 text-center">
          <p className="animate-fade-up text-sm tracking-[0.3em] text-champagne-600">
            ✦ ÉPANOUIE ✦
          </p>
          <h1 className="animate-fade-up mt-6 font-serif text-4xl font-medium leading-tight text-plum-900 [animation-delay:150ms] sm:text-5xl">
            35歳から、
            <br />
            <span className="shimmer-text">本当の自分が咲く。</span>
          </h1>
          <p className="animate-fade-up mx-auto mt-8 max-w-xl text-base leading-loose text-plum-500 [animation-delay:300ms]">
            孤独や、自信のゆらぎ。誰にも言えない夜のざわめきに、
            そっと寄り添う言葉と物語を。
            <br />
            ここは、そのままのあなたで、いていい場所です。
          </p>
          <div className="animate-fade-up mt-10 flex items-center justify-center gap-4 [animation-delay:450ms]">
            <ButtonLink href="/epanouie/articles">読みものを見る</ButtonLink>
            <ButtonLink href="/epanouie/about" variant="ghost">
              Épanouieについて
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
                ひとつのテーマを、いろんな角度からじっくりと。
              </p>
            </div>
            <Link
              href="/epanouie/articles"
              className="text-sm text-lavender-600 transition-colors hover:text-lavender-500"
            >
              すべて見る →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <Link
                key={feature.slug}
                href={`/${MEDIA}/features/${feature.slug}`}
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
              今日のあなたに、届きますように。
            </p>
          </div>
          <Link
            href="/epanouie/articles"
            className="text-sm text-lavender-600 transition-colors hover:text-lavender-500"
          >
            すべて見る →
          </Link>
        </div>

        {latest.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((article) => (
              <div key={article.slug} className="scroll-reveal">
                <ArticleCard article={article} media={MEDIA} />
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
