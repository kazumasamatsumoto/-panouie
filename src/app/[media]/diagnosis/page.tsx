import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Aurora } from "@/components/ui/aurora";
import { Sparkles } from "@/components/ui/sparkles";
import { DiagnosisQuiz } from "@/components/features/diagnosis-quiz";
import { getMediaBySlug } from "@/lib/media/registry";
import { lumi } from "@/lib/media/lumi";
import { diagnosisMediaSlugs, hasDiagnosis } from "@/lib/content/diagnosis";

interface DiagnosisPageProps {
  params: Promise<{ media: string }>;
}

// 診断を提供するメディアの分だけ静的生成する（他メディアでは下の notFound で 404）
export function generateStaticParams() {
  return diagnosisMediaSlugs.map((media) => ({ media }));
}

export async function generateMetadata({
  params,
}: DiagnosisPageProps): Promise<Metadata> {
  const { media: slug } = await params;
  const media = getMediaBySlug(slug);
  if (!media || !hasDiagnosis(slug)) {
    return {};
  }
  const title = "あなたは、どう輝く？診断";
  const description =
    "輝き方に、正解はありません。8つの問いに答えるだけで、あなたの中にある光がどんな色をしているのか、やさしく映し出す自己肯定感の診断。";
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${media.name}`,
      description,
      type: "website",
      locale: "ja_JP",
      siteName: media.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${media.name}`,
      description,
    },
  };
}

export default async function DiagnosisPage({ params }: DiagnosisPageProps) {
  const { media: slug } = await params;
  const media = getMediaBySlug(slug);
  if (!media || !hasDiagnosis(slug)) {
    notFound();
  }

  return (
    <section className="relative overflow-hidden">
      <Aurora />
      <Sparkles />
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <DiagnosisQuiz
          mediaSlug={slug}
          mediaName={media.name}
          baseUrl={lumi.baseUrl}
        />
      </div>
    </section>
  );
}
