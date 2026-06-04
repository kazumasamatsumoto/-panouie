# Épanouie — CLAUDE.md

## Project Overview
35歳以上の独身女性向け自己肯定感メディア。
動画・テキストコンテンツで孤独・自信喪失のペインを解決する。
ECサイトではなく、コンテンツ＋将来的な有料コミュニティ・プログラムが収益軸。

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **ORM**: Prisma
- **Auth**: Supabase Auth
- **Storage**: Supabase Storage（画像・動画サムネイル）
- **Deploy**: Vercel

## Key Commands
```bash
npm run dev          # 開発サーバー起動
npm run build        # ビルド
npm run typecheck    # 型チェック (tsc --noEmit)
npm run lint         # ESLint
npx prisma generate  # Prismaクライアント生成
npx prisma migrate dev --name <name>  # マイグレーション作成・実行
npx prisma studio    # DB GUI
```

## Project Structure
```
src/
  app/              # Next.js App Router (pages & layouts)
  components/       # 再利用可能なUIコンポーネント
    ui/             # 汎用コンポーネント (Button, Card 等)
    features/       # 機能別コンポーネント
  lib/              # ユーティリティ・設定
    supabase/       # Supabaseクライアント設定
    prisma/         # Prismaクライアント (singleton)
  types/            # 型定義
prisma/
  schema.prisma     # DBスキーマ
  migrations/       # マイグレーション履歴
public/             # 静的ファイル
```

## Code Style
- Named exports のみ (default export 禁止)
- `any` 型禁止 — `unknown` を使う
- `console.log` 禁止 — `logger` ユーティリティを使う
- コンポーネントは `function` 宣言 (アロー関数禁止)
- Server Components を基本とし、インタラクションが必要な場合のみ `'use client'`
- import は絶対パス (`@/components/...`)

## Naming Conventions
- ファイル名: `kebab-case.tsx`
- コンポーネント名: `PascalCase`
- 関数・変数: `camelCase`
- 型・インターフェース: `PascalCase`
- DBテーブル: `snake_case`
- 環境変数: `SCREAMING_SNAKE_CASE`

## Architecture Rules
- Prismaは `src/lib/prisma/client.ts` のシングルトン経由のみ使用
- Supabaseクライアントはサーバー用・クライアント用を分ける
- APIルート (`app/api/`) でのみDBアクセス — Server Componentsから直接Prismaを呼ぶのは禁止
- 認証ロジックは `src/lib/auth/` に集約

## Prohibited
- `any` 型の使用
- Default exports
- `console.log` (デバッグ含む)
- Server Components内での直接DB呼び出し
- シークレット・APIキーをコードにハードコーディング
- `src/app/` 以外への直接的なページ追加

## Environment Variables
```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Database (Prisma)
DATABASE_URL=

# Vercel
VERCEL_URL=
```

## Database Notes
- Supabase PostgreSQL に Prisma ORM 経由でアクセス
- Supabase Auth と Prisma の User テーブルは `supabase_uid` で紐付け
- Row Level Security (RLS) は Supabase側で設定
- マイグレーションは必ず `prisma migrate dev` 経由で行う

## Workflow
1. 機能追加は `feature/xxx` ブランチで作業
2. 型チェック (`npm run typecheck`) を必ず通してからPR
3. PR前に `npm run lint` を実行
4. マイグレーションファイルは必ずコミットに含める
5. `main` ブランチへの直接pushは禁止

## Brand Context
- ブランド名: Épanouie（エパノウイ）
- タグライン: 35歳から、本当の自分が咲く。
- トーン: 温かさ・共感・「そのままでいい」
- カラー: 深紫 `#2C1F3E` / ラベンダー `#7F77DD` / シャンパン `#C9B99A`
- ターゲット: 35歳以上の独身女性（職種問わず）
