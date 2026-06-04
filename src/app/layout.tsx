import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { SiteHeader } from "@/components/features/site-header";
import { SiteFooter } from "@/components/features/site-footer";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-search-match.org"),
  title: {
    default: "Épanouie — 35歳から、本当の自分が咲く。",
    template: "%s | Épanouie",
  },
  description:
    "35歳からの独身女性のための自己肯定感メディア。孤独や自信のゆらぎに、そっと寄り添う言葉と物語を。そのままのあなたで、いい。",
  keywords: ["自己肯定感", "35歳", "独身女性", "生き方", "Épanouie"],
  openGraph: {
    title: "Épanouie — 35歳から、本当の自分が咲く。",
    description:
      "35歳からの独身女性のための自己肯定感メディア。そのままのあなたで、いい。",
    type: "website",
    locale: "ja_JP",
    siteName: "Épanouie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Épanouie — 35歳から、本当の自分が咲く。",
    description: "35歳からの独身女性のための自己肯定感メディア。",
  },
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSans.variable} ${notoSerif.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

export default RootLayout;
