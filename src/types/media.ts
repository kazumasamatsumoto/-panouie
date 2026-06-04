export interface MediaBrand {
  /** URL セグメント（例: "epanouie"）。将来サブドメインにも転用できる識別子。 */
  slug: string;
  /** 表示名（例: "Épanouie"） */
  name: string;
  /** タグライン */
  tagline: string;
  /** ポータルや一覧での短い説明 */
  description: string;
  /** ターゲット読者 */
  audience: string;
  /** メディアを象徴する絵文字 */
  emoji: string;
  /** ブランドの主要カラー（CSS変数 --media-accent に流し込む） */
  accentColor: string;
  /** ポータルカードのグラデーション用 Tailwind クラス */
  cardGradient: string;
  /** 公開中かどうか。false なら「準備中」表示にする。 */
  published: boolean;
}
