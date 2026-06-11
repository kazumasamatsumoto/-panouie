import type { Metadata } from "next";
import { SiteHeader } from "@/components/features/site-header";
import { SiteFooter } from "@/components/features/site-footer";
import { getMediaBySlug } from "@/lib/media/registry";

const epanouie = getMediaBySlug("epanouie");

export const metadata: Metadata = {
  title: {
    default: `Épanouie — ${epanouie?.tagline ?? ""}`,
    template: "%s | Épanouie",
  },
  description: epanouie?.description,
  keywords: ["自己肯定感", "35歳", "独身女性", "生き方", "Épanouie"],
  openGraph: {
    title: `Épanouie — ${epanouie?.tagline ?? ""}`,
    description: epanouie?.description,
    type: "website",
    locale: "ja_JP",
    siteName: "Épanouie",
  },
};

export default function EpanouieLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
