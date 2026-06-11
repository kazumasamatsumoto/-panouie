import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Aurora } from "@/components/ui/aurora";
import { Sparkles } from "@/components/ui/sparkles";
import { ButtonLink } from "@/components/ui/button-link";
import { getMediaBySlug } from "@/lib/media/registry";
import { getSiteCopy } from "@/lib/media/site-copy";

interface AboutPageProps {
  params: Promise<{ media: string }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { media: slug } = await params;
  const media = getMediaBySlug(slug);
  const copy = getSiteCopy(slug);
  if (!media || !copy) {
    return {};
  }
  return {
    title: `${media.name}について`,
    description: copy.about.metaDescription,
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { media: slug } = await params;
  const media = getMediaBySlug(slug);
  const copy = getSiteCopy(slug);
  if (!media || !copy) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <section className="relative text-center">
        <Aurora />
        <p className="animate-fade-up text-sm tracking-[0.3em] text-champagne-600">
          ✦ ABOUT ✦
        </p>
        <h1 className="animate-fade-up mt-6 font-serif text-3xl font-medium leading-snug text-plum-900 [animation-delay:150ms]">
          {media.name} について
        </h1>
        <div className="animate-fade-up mx-auto mt-8 max-w-xl [animation-delay:300ms]">
          {copy.about.intro.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-loose text-plum-500">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="scroll-reveal text-center font-serif text-2xl font-medium text-plum-900">
          わたしたちが大切にしていること
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {copy.about.values.map((value) => (
            <div
              key={value.title}
              className="card-shine scroll-reveal rounded-2xl border border-plum-100 bg-white/70 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-lavender-300 hover:shadow-lg hover:shadow-lavender-400/20"
            >
              <div className="text-4xl" aria-hidden>
                {value.emoji}
              </div>
              <h3 className="mt-4 font-serif text-lg text-plum-900">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-plum-500">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="scroll-reveal relative mt-20 overflow-hidden rounded-3xl bg-gradient-to-br from-plum-900 to-plum-700 px-8 py-14 text-center text-cream">
        <Aurora tone="dark" />
        <Sparkles tone="dark" />
        <p className="shimmer-text-dark relative font-serif text-2xl leading-relaxed">
          {copy.about.cta.title}
        </p>
        <p className="relative mx-auto mt-5 max-w-md text-sm leading-loose text-plum-200">
          {copy.about.cta.body}
        </p>
        <ButtonLink href={`/${slug}/articles`} className="relative mt-8">
          読みものを見る
        </ButtonLink>
      </section>
    </div>
  );
}
