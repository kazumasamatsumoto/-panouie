import { LumiHeader } from "@/components/features/lumi-header";
import { LumiFooter } from "@/components/features/lumi-footer";
import { MediaCard } from "@/components/features/media-card";
import { lumi } from "@/lib/media/lumi";
import { mediaBrands } from "@/lib/media/registry";

export function PortalPage() {
  return (
    <>
      <LumiHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-lavender-300/30 via-cream to-cream" />
          <div className="mx-auto max-w-3xl px-6 py-28 text-center">
            <p className="text-sm tracking-[0.3em] text-champagne-600">
              {lumi.name.toUpperCase()}
            </p>
            <h1 className="mt-6 font-serif text-4xl font-medium leading-tight text-plum-900 sm:text-5xl">
              AIで、
              <br />
              あなたの光を。
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-base leading-loose text-plum-500">
              {lumi.description}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-medium text-plum-900">
              Lumiのメディア
            </h2>
            <p className="mt-3 text-sm text-plum-500">
              それぞれのテーマで、あなたの毎日にそっと寄り添います。
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {mediaBrands.map((media) => (
              <MediaCard key={media.slug} media={media} />
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-champagne-600">
            新しいテーマのメディアを、これから少しずつ増やしていきます。
          </p>
        </section>
      </main>
      <LumiFooter />
    </>
  );
}

export default PortalPage;
