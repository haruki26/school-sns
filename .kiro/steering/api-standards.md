# API Standards

このプロジェクトの Backend API（Hono）で、エンドポイント設計・バージョニング・バリデーション・レスポンス/エラー形式を揃えるためのルールです。

## Philosophy

- **予測可能性**: リソース指向で、URL/Verb/Status を見れば挙動が想像できる
- **破壊的変更の抑制**: 互換性を壊す変更はバージョンで隔離する
- **境界で型を固める**: 入力（json/query）と出力（schema）をスキーマで固定する
- **実装より契約**: `hono-openapi` の `describeRoute` を契約の一次情報とする

## Base Path / Versioning

- API は `basePath('/api/v2')` を前提とする
- **破壊的変更**（レスポンス形変更、意味変更、必須項目追加など）→ `/api/v3` など新バージョン
- **非破壊変更**（項目の追加、オプション化、エラー文言の改善など）→ 同一バージョン内で対応

## Endpoint Pattern

基本形:

- `/api/v2/{resource}`
- `/api/v2/{resource}/{id}`
- `/api/v2/{resource}/{id}/{subResource}`

例:

- `/api/v2/users/me`
- `/api/v2/users/:userId/follow`
- `/api/v2/media/:mediaId`

## HTTP Verbs

- `GET`: 取得（安全・冪等）
- `POST`: 作成/アクション（非冪等になり得る）
- `PATCH`: 部分更新
- `DELETE`: 削除（冪等）

## Status Codes

- `200 OK`: 取得/更新/削除完了などの成功
- `201 Created`: **作成成功**（例: signup など）
- `204 No Content`: 本文不要の成功（採用する場合）
- `400 Bad Request`: バリデーション/パラメータ不備
- `401 Unauthorized`: 未認証
- `403 Forbidden`: 認証済みだが権限/所有権がない
- `404 Not Found`: 対象が存在しない
- `409 Conflict`: 競合（例: Email 重複）
- `500 Internal Server Error`: 想定外

運用ルール:

- **`describeRoute.responses` と実際に返す status を必ず一致**させる（ドキュメントの信頼性を守る）

## Request Validation

- JSON body: `validator('json', schema)` を使用し、`c.req.valid('json')` から取得する
- Query: `validator('query', schema)` を使用し、`c.req.valid('query')` から取得する
- Path param: `c.req.param()` を使用（必要なら zod で追加検証する）

## Response / Error Shape

現状のパターン（この形に寄せる）:

- 成功: **ドメインオブジェクトをそのまま返す**（例: Scrap/Asset など）
- メッセージのみ: `{ "message": string }`
- エラー: 基本は `{ "message": string }`（一部 `{ "error": string }` が混在している）

推奨ルール:

- 新規実装はエラーを `{ "message": string }` に統一する
- クライアント分岐が必要な場合のみ、`code` を追加する（例: `{ message, code }`）
- `BigInt` 等の JSON 非対応型は、API 境界でシリアライズする（例: `sizeBytes: Number(sizeBytes)`）

## OpenAPI / Docs

- ルート定義には `describeRoute` を付ける
- schema は `resolver(zodSchema)` を使って OpenAPI に反映する
- 開発時の導線（dev server）:
  - `/openapi`: OpenAPI spec
  - `/docs`: Swagger UI

## Authentication (API boundary)

- 認証が必要なルートは **早い段階で弾く**（middleware で統一）
- このプロジェクトは **Cookie に JWT を入れる**前提（詳細は authentication.md）

## CORS (dev)

- dev の frontend は `http://localhost:3157` を想定する
- Cookie 認証をブラウザから使う場合は、
  - クライアント: `fetch(..., { credentials: 'include' })`
  - サーバ: CORS で `credentials: true` を許可し、`origin` は固定の配列で返す

---

updated_at: 2026-01-22

_目的は「新規ルートが同じ型・同じ挙動になること」。エンドポイントのカタログ化はしない_
