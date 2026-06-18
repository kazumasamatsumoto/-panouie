import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { lumi } from "@/lib/media/lumi";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
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
  metadataBase: new URL(lumi.baseUrl),
  title: {
    default: `${lumi.name} — ${lumi.tagline}`,
    template: `%s | ${lumi.name}`,
  },
  description: lumi.description,
  keywords: ["AI", "幸せ", "ウェルビーイング", "メディア", lumi.name],
  openGraph: {
    title: `${lumi.name} — ${lumi.tagline}`,
    description: lumi.description,
    type: "website",
    locale: "ja_JP",
    siteName: lumi.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${lumi.name} — ${lumi.tagline}`,
    description: lumi.description,
  },
};

export default function RootLayout({
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
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
