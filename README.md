# Lumi

> AIで、あなたの光を。

AIとともに「幸せ」を届けるメディアプラットフォーム。
テーマ別のメディアを `ai-search-match.org` 配下に展開します。

最初のメディアは **Épanouie**（`/epanouie`）— 35歳以上の独身女性向けの自己肯定感メディア。

## 技術スタック

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Content**: Markdown（`content/<メディア>/`）+ remark
- **Deploy**: Vercel

## 開発

```bash
npm install          # 依存インストール
npm run dev          # 開発サーバー (http://localhost:3000)
npm run typecheck    # 型チェック
npm run lint         # ESLint
npm run build        # 本番ビルド
npm run start        # 本番サーバー
```

## 記事の追加方法

`content/<メディア>/`（例: `content/epanouie/`）に Markdown ファイルを追加するだけで、記事ページが自動生成されます。
ファイル名（拡張子なし）がそのまま URL のスラッグになります（例: `/epanouie/articles/<スラッグ>`）。

```markdown
---
title: "記事のタイトル"
description: "一覧やSEOに使われる説明文"
category: "自己肯定感"
publishedAt: "2026-06-01"
author: "Épanouie編集部"
coverEmoji: "🌷"
---

本文を Markdown で書きます。見出し、リスト、引用、表などが使えます。
```

ファイルを追加したら `npm run build` で再ビルドすれば公開されます。

## プロジェクト構成

```
content/
  epanouie/              Épanouieの記事Markdown（メディアごとに分ける）
src/
  app/
    page.tsx             Lumi ポータル（トップ）
    layout.tsx           ルートレイアウト（フォント・全体メタ）
    epanouie/            Épanouie メディア
      layout.tsx         Épanouie用ヘッダー/フッター
      page.tsx           Épanouieトップ
      articles/          記事一覧・記事詳細
      about/             Épanouieについて
    sitemap.ts           全メディアのサイトマップ自動生成
    robots.ts            robots.txt
  components/features/    Lumi/Épanouie のHeader・Footer・各カード
  lib/
    media/               メディア定義（registry）と Lumi 設定
    content/             Markdown読み込みロジック（media slug 対応）
  types/                 型定義
```

## デプロイ

GitHub と Vercel が連携済みです。`main` ブランチに push すると自動で本番デプロイされます。

- 本番URL: https://epanouie.vercel.app
- 独自ドメイン（予定）: `ai-search-match.org`
