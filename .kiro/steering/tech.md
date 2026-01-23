# Technology Stack

## Architecture

- **モノレポ構成**: pnpm workspace で `app/backend` と `app/frontend` を分離し、ルートのスクリプトで統合操作
- **API + SPA**: Backend は Hono の API、Frontend は React + TanStack Router の SPA
- **スキーマ駆動**: DB は Prisma、入力/環境変数は Zod を中心に検証する

## Core Technologies

- **Language**: TypeScript（strict）
- **Backend**: Node.js（ESM） + Hono
- **Frontend**: React 19 + Vite
- **Database/ORM**: Prisma（SQLite）

## Key Libraries

- **Backend**
  - `hono`, `@hono/node-server`: API サーバ
  - `hono-openapi`, `@hono/swagger-ui`: OpenAPI 生成と Swagger UI
  - `zod`: 入力/環境変数のバリデーション
  - `argon2`: パスワードハッシュ
- **Frontend**
  - `@tanstack/react-router`: ルーティング（ファイルベース）
  - `@tanstack/react-query`: データ取得/キャッシュ
  - `tailwindcss` (+ `tailwind-merge`, `clsx`): UI スタイリング

## Development Standards

### Type Safety

- TypeScript `strict: true` を前提にする
- 不要な `any` の導入を避け、境界（API/Env/DB）で型を確定させる

### Code Quality

- ESLint + Prettier を標準の品質ゲートとして運用
- ルートの `lint-staged` で `pnpm check` を走らせ、フォーマット/自動修正を徹底

### Testing

- Vitest を採用（backend/frontend ともに `vitest run`）
- まずはルート/サービス単位でのテスト容易性を優先する

## Development Environment

### Required Tools

- Node.js（推奨: 20 以上）
- pnpm（想定: `10.25.0`）

### Common Commands

```bash
# 依存インストール
pnpm install

# 開発起動（backend + frontend）
pnpm dev

# ビルド（backend + frontend）
pnpm build

# Lint/Format
pnpm lint
pnpm format
pnpm check
```

## Key Technical Decisions

- **Backend API の基盤に Hono**を採用し、ルーティングをドメイン単位に分割する
- **OpenAPI/Swagger UI を dev server に統合**し、API の確認コストを下げる
- **JWT を Cookie で運用**し、middleware で認証必須ルートを統一的に保護する
- **Prisma + SQLite**で軽量に開発を進め、マイグレーションを履歴として残す
- **Frontend は TanStack Router（ファイルベース）**で画面追加をルートファイル追加に寄せる

---

updated_at: 2026-01-22

_依存を列挙するのではなく、開発パターンを決める技術だけを記録する_
