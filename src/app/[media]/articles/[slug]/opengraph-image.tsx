import { ImageResponse } from "next/og";
import { getArticle, getArticleSlugs } from "@/lib/content/articles";
import { getMediaBySlug, mediaBrands } from "@/lib/media/registry";

// 記事タイトル・絵文字からOGP画像を動的生成する。
// SNSシェア時のカード画像（summary_large_image）になる。

export const dynamicParams = false;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Épanouie";

export function generateStaticParams() {
  return mediaBrands.flatMap((media) =>
    getArticleSlugs(media.slug).map((slug) => ({ media: media.slug, slug })),
  );
}

interface OgImageProps {
  params: Promise<{ media: string; slug: string }>;
}

export default async function OpengraphImage({ params }: OgImageProps) {
  const { media, slug } = await params;
  const brand = getMediaBySlug(media);

  let title = brand?.name ?? "Lumi";
  let category = "";
  let emoji = brand?.emoji ?? "🌷";
  try {
    const article = await getArticle(media, slug);
    title = article.title;
    category = article.category;
    emoji = article.coverEmoji ?? emoji;
  } catch {
    // 記事が取れない場合はブランド情報のみで描画する
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          // 深紫 → ラベンダー → シャンパンのブランドグラデーション
          backgroundImage:
            "linear-gradient(135deg, #2c1f3e 0%, #4a3a63 45%, #665fc9 75%, #c9b99a 100%)",
          color: "#faf8f4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ fontSize: "56px" }}>{emoji}</div>
          {category ? (
            <div
              style={{
                fontSize: "26px",
                letterSpacing: "0.15em",
                color: "#ddd2bd",
              }}
            >
              {category}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: title.length > 26 ? "60px" : "72px",
            lineHeight: 1.3,
            fontWeight: 600,
            maxWidth: "1000px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "30px",
            color: "#e9e4f0",
          }}
        >
          <div style={{ display: "flex" }}>{brand?.name ?? "Lumi"}</div>
          <div style={{ display: "flex", color: "#ddd2bd" }}>
            {brand?.tagline ?? "AIで、あなたの光を。"}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
