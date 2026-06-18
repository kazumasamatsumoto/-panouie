import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";

/**
 * Google Analytics 4 を読み込むコンポーネント。
 *
 * 計測 ID は環境変数 `NEXT_PUBLIC_GA_ID`（G-XXXXXXXXXX 形式）から取得する。
 * ID が未設定の場合（ローカル開発など）は何もレンダリングしないため、
 * 開発時のアクセスが本番の数値を汚さない。
 */
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId) {
    return null;
  }

  return <NextGoogleAnalytics gaId={gaId} />;
}
