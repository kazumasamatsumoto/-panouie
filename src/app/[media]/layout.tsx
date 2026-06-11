import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/features/site-header";
import { SiteFooter } from "@/components/features/site-footer";
import { mediaBrands, getMediaBySlug } from "@/lib/media/registry";
import { getSiteCopy } from "@/lib/media/site-copy";

// registry に登録されたメディア以外は 404 にする
export const dynamicParams = false;

interface MediaLayoutProps {
  children: React.ReactNode;
  params: Promise<{ media: string }>;
}

export function generateStaticParams() {
  return mediaBrands.map((media) => ({ media: media.slug }));
}

export async function generateMetadata({
  params,
}: Pick<MediaLayoutProps, "params">): Promise<Metadata> {
  const { media: slug } = await params;
  const media = getMediaBySlug(slug);
  const copy = getSiteCopy(slug);
  if (!media || !copy) {
    return {};
  }
  return {
    title: {
      default: `${media.name} — ${media.tagline}`,
      template: `%s | ${media.name}`,
    },
    description: media.description,
    keywords: copy.keywords,
    openGraph: {
      title: `${media.name} — ${media.tagline}`,
      description: media.description,
      type: "website",
      locale: "ja_JP",
      siteName: media.name,
    },
    // 準備中のメディアはURL直打ちでプレビュー可能にしつつ、検索インデックスからは除外する
    ...(media.published ? {} : { robots: { index: false, follow: false } }),
  };
}

export default async function MediaLayout({
  children,
  params,
}: MediaLayoutProps) {
  const { media: slug } = await params;
  const media = getMediaBySlug(slug);
  if (!media) {
    notFound();
  }

  return (
    <>
      <SiteHeader media={media} />
      <main className="flex-1">{children}</main>
      <SiteFooter media={media} />
    </>
  );
}
