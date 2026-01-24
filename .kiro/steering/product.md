# Product Overview

このリポジトリは、学校向けの SNS / コミュニティ機能を提供するフルスタックアプリ（Backend API + Frontend SPA）です。
pnpm workspace のモノレポとして運用し、開発時はルートから両方をまとめて起動します。

## Core Capabilities

- **認証/認可**: Cookie + JWT を前提にしたログイン状態の管理
- **ユーザー/プロフィール**: ユーザー情報、ロール（例: ADMIN / STUDENT / TEACHER）
- **投稿系ドメイン**: Artifacts / Scraps / Comments などの作成・閲覧（下書き/公開などの状態を含む）
- **分類/検索**: Tag・検索 API を中心にした情報整理
- **メディア/アセット**: アップロード/参照用の Assets（URL 参照）

※機能一覧を網羅するのではなく、「どの領域が中心か」を示すことを目的にしています。

## Target Use Cases

- 学校（クラス/グループ）内での作品・学習記録の共有
- タグ付けや検索を活用した振り返り・再発見
- 教員/管理者によるモデレーションや権限に基づく運用

## Value Proposition

- **Backend と Frontend を明確分離**しつつ、ルートから一括操作できる運用性（pnpm workspace）
- **型安全・スキーマ駆動**（TypeScript strict / Zod / Prisma）を前提にした実装のしやすさ
- **API ドキュメント（OpenAPI/Swagger）**を開発時に即確認できる導線

---

updated_at: 2026-01-22

_目的とパターンを記録し、機能の網羅は避ける_
