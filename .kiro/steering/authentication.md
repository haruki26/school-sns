# Authentication & Authorization Standards

このプロジェクトの認証/認可を「実装の前提」として揃えるためのルールです。
（Cookie + JWT を前提にしています）

## Philosophy

- **Fail closed**: 不確かな状態は通さない
- **境界で検証**: Token/Env/Input は境界で検証してから内部に渡す
- **認証と認可の分離**: authentication（誰）と authorization（何ができる）を混ぜない

## Authentication

### Method

- **JWT を httpOnly cookie に保存**する
- Cookie 名は `token`（`authCookie.cookieName`）

Cookie の性質（現状の設定）:

- `httpOnly: true`（JS から触れない）
- `sameSite: 'Lax'`
- `path: '/'`
- `maxAge: TOKEN_EXPIRATION_SEC`（未設定時は 1日）

### Flow (high-level)

1. `POST /api/v2/auth/signup` でユーザー作成
2. `POST /api/v2/auth/login` で認証
3. サーバは JWT を発行し、`Set-Cookie` で `token` を設定
4. クライアントは以降のリクエストで cookie を送信
5. `POST /api/v2/auth/logout` で cookie を削除

### Token Claims

JWT には最低限、以下を含める（現状の生成パターン）:

- `sub`: userId
- `role`: ユーザーの role
- `exp`: 有効期限（秒）

### Verification (重要)

- **署名検証なしの decode は認証にならない**
- 保護ルートでは必ず「署名検証」を実施する

推奨パターン（どちらかに統一）:

- `hono/jwt` middleware（cookie 指定）で検証し、検証済みの claims を利用する
- もしくは自前実装する場合も「verify」を行い、`JWT_SECRET` で署名検証する

※ `sub` を `c.var.userId` 等に格納して downstream に渡す場合、**検証済みの値のみ**を渡す。

### Frontend / Browser usage

- Cookie 認証で cross-origin（port 違い）アクセスする場合:
  - クライアントは `credentials: 'include'` を付ける
  - サーバは CORS で `credentials: true` を許可し、`origin` は固定（`*` 不可）にする

## Authorization

### Permission Model

- 基本は **RBAC（UserRole） + 所有権（owner）** のハイブリッドを想定する
- 役割例: `ADMIN`, `STUDENT`, `TEACHER`

### Where to enforce

- **Route/middleware**: 「ログイン必須」のゲート
- **Service/domain**: 「その操作をしてよいか」の最終判断（所有権チェック等）
- **UI**: 表示制御はしてよいが、セキュリティ根拠にはしない

推奨:

- 403/404 を使い分ける（権限なし=403、対象なし=404）

## Passwords

- パスワードは **平文保存しない**
- ハッシュは `argon2` を使用する
- ログ/エラーレスポンスにパスワードやトークンを出さない

## Environment Variables

- `JWT_SECRET`: 署名検証/署名生成に必須（値自体は steering に書かない）
- `TOKEN_EXPIRATION_SEC`: token/cookie の有効期限

---

updated_at: 2026-01-22

_目的は「新規ルートを追加しても認証/認可の判断がブレないこと」。秘密情報は書かない_
