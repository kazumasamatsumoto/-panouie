# Épanouie

> 35歳から、本当の自分が咲く。

35歳以上の独身女性向けの自己肯定感メディア。
孤独・自信喪失のペインに寄り添う、コンテンツメディアです。

## 技術スタック

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Content**: Markdown（`content/articles/`）+ remark
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

`content/articles/` に Markdown ファイルを追加するだけで、記事ページが自動生成されます。
ファイル名（拡張子なし）がそのまま URL のスラッグになります。

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
content/articles/        記事のMarkdownファイル
src/
  app/                   ページ（App Router）
    page.tsx             トップページ
    articles/            記事一覧・記事詳細
    about/               Épanouieについて
    sitemap.ts           サイトマップ自動生成
    robots.ts            robots.txt
  components/features/    Header / Footer / 記事カード
  lib/content/           Markdown読み込みロジック
  types/                 型定義
```

## デプロイ

Vercel に接続すると、push のたびに自動デプロイされます。
本番ドメイン: `ai-search-match.org`
