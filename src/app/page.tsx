import Link from "next/link";
import { ArticleCard } from "@/components/features/article-card";
import { getAllArticles } from "@/lib/content/articles";

export function HomePage() {
  const articles = getAllArticles();
  const latest = articles.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-plum-100/70 via-cream to-cream" />
        <div className="mx-auto max-w-3xl px-6 py-28 text-center">
          <p className="text-sm tracking-[0.3em] text-champagne-600">
            ÉPANOUIE
          </p>
          <h1 className="mt-6 font-serif text-4xl font-medium leading-tight text-plum-900 sm:text-5xl">
            35歳から、
            <br />
            本当の自分が咲く。
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-loose text-plum-500">
            孤独や、自信のゆらぎ。誰にも言えない夜のざわめきに、
            そっと寄り添う言葉と物語を。
            <br />
            ここは、そのままのあなたで、いていい場所です。
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/articles"
              className="rounded-full bg-lavender-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-lavender-600"
            >
              読みものを見る
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-plum-200 px-8 py-3 text-sm font-medium text-plum-700 transition-colors hover:border-lavender-400 hover:text-lavender-500"
            >
              Épanouieについて
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-2xl font-medium text-plum-900">
              最新の読みもの
            </h2>
            <p className="mt-2 text-sm text-plum-500">
              今日のあなたに、届きますように。
            </p>
          </div>
          <Link
            href="/articles"
            className="text-sm text-lavender-600 transition-colors hover:text-lavender-500"
          >
            すべて見る →
          </Link>
        </div>

        {latest.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
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

export default HomePage;
