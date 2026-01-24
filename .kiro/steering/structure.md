# Project Structure

## Organization Philosophy

- **Monorepo（pnpm workspace）**で backend/frontend を明確に分離する
- Backend は **layered（routes → services → lib/db）** の流れで責務を分ける
- Frontend は **routes（画面）** と **features（ドメインUI）** と **components（汎用UI）** を分ける

## Directory Patterns

### Backend: API ルーティング

**Location**: `/app/backend/src/routes/`
**Purpose**: Hono のルート定義（ドメイン単位に分割）
**Example**: `index.ts` で `.basePath('/api/v2')` を定義し、`/auth`, `/users`, `/tags` などを `.route()` で合成

### Backend: サービス層

**Location**: `/app/backend/src/services/`
**Purpose**: ビジネスロジック（DB 操作やドメイン処理）を集約し、route ハンドラを薄く保つ
**Example**: `services/tags/*` のように routes と同じドメイン粒度で配置

### Backend: 共通ユーティリティ

**Location**: `/app/backend/src/lib/`
**Purpose**: 横断関心（env/jwt/cookie/prisma など）を集める
**Example**: `env.ts` は Zod で環境変数を検証して `env` を export

### Backend: middleware

**Location**: `/app/backend/src/middleware/`
**Purpose**: 認証などの横断処理を Hono middleware として提供
**Example**: `checkAuth.ts` が Cookie の JWT を検証し、`c.set('userId', ...)` で downstream に渡す

### Backend: Prisma

**Location**: `/app/backend/prisma/`
**Purpose**: Prisma schema と migration を管理
**Example**: `schema.prisma`（SQLite） + `migrations/` に履歴を蓄積

### Frontend: ルーティング

**Location**: `/app/frontend/src/routes/`
**Purpose**: TanStack Router のファイルベースルート
**Example**: `__root.tsx` に共通レイアウト（`<AppShell>`）を定義し、各画面を追加していく

### Frontend: 機能（ドメイン）

**Location**: `/app/frontend/src/features/`
**Purpose**: 画面横断で再利用するドメインUI/ロジックの単位
**Example**: `features/profile`, `features/artifacts` のようにドメイン別にまとめる

### Frontend: UI コンポーネント

**Location**: `/app/frontend/src/components/` と `/app/frontend/src/components/ui/`
**Purpose**: 汎用コンポーネント（デザイン/レイアウトの再利用）
**Example**: `BottomNav`, `ScreenHeader`, `PhoneFrame` など

## Naming Conventions

- **Backend**
  - ルート: ドメイン名ディレクトリ（例: `routes/tags/`）
  - ESM import: `./foo/index.js` のように拡張子を含む運用を前提（tsc の出力に合わせる）
- **Frontend**
  - ルート: `src/routes` のファイル名=パス（TanStack Router 生成に合わせる）
  - React コンポーネント: PascalCase

## Import Organization

- Frontend はパスエイリアスを使用

```ts
import { cn } from "@/utils/cn";
import Button from "@/components/ui/Button";
import { something } from "./local";
```

**Path Aliases**:

- `@/*` → `app/frontend/src/*`

## Code Organization Principles

- routes は「HTTP の形」に寄せ、**ドメイン処理は services に寄せる**
- env / auth / db は **lib と middleware** に集約して重複を減らす
- Frontend は **routes = 画面、features = 再利用単位**という前提で分割を進める

---

updated_at: 2026-01-22

_ファイルツリーの列挙ではなく、配置パターンを記録する_
