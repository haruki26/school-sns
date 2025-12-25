import * as argon2 from 'argon2'
import { HTTPException } from 'hono/http-exception'
import { sign } from 'hono/jwt'
import type { SignupInput, LoginInput } from '../../routes/auth/schema.js'
import { authRepository } from './repository.js'

// 秘密鍵の取得。本番環境では必ず環境変数を使用すること
const JWT_SECRET = process.env.JWT_SECRET ?? 'it-is-very-secret'
const TOKEN_EXPIRATION_SEC =
  Number(process.env.TOKEN_EXPIRATION_SEC) || 60 * 60 * 24

export const authService = {
  /**
   * 新規ユーザー登録処理
   * @param input 登録情報（email, password, etc.）
   * @returns パスワードハッシュを除外したユーザー情報
   * @throws 400 Emailが既に使用されている場合
   */
  signup: async (input: SignupInput) => {
    // 1. メールアドレスの重複チェック
    const existingUser = await authRepository.findByEmail(input.email)
    if (existingUser) {
      // 既に登録済みの場合は 400 Bad Request を返す
      throw new HTTPException(400, { message: 'Email already exists' })
    }

    // 2. パスワードのハッシュ化
    const passwordHash = await argon2.hash(input.password)

    // 3. ユーザーの作成
    const user = await authRepository.createUser({ ...input, passwordHash })

    return {
      id: user.id,
      email: user.email,
      name: user.userName,
      createdAt: user.createdAt,
    }
  },

  /**
   * ログイン処理
   * @param input ログイン情報（email, password）
   * @returns JWTトークンとユーザー基本情報
   * @throws 401 メールアドレスまたはパスワードが誤っている場合
   */
  login: async (input: LoginInput) => {
    // 1. ユーザーの検索
    const user = await authRepository.findByEmail(input.email)

    if (!user) {
      throw new HTTPException(401, { message: 'Invalid email or password' })
    }

    // 2. パスワードの検証
    const isValidPassword = await argon2.verify(
      user.passwordHash,
      input.password,
    )

    if (!isValidPassword) {
      throw new HTTPException(401, { message: 'Invalid email or password' })
    }

    // 3. JWTトークンの生成
    const payload = {
      sub: user.id, // Subject (ユーザーID)
      role: user.role, // 権限
      exp: Math.floor(Date.now() / 1000) + TOKEN_EXPIRATION_SEC, // 有効期限
    }

    const token = await sign(payload, JWT_SECRET)

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.userName,
        bio: user.bio,
        avatarUrl: user.avatarUrl,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    }
  },

  /**
   * ログアウト処理
   * JWT(ステートレス)の場合、サーバー側でトークン無効化は基本行わないため何もしない
   */
  logout: () => {
    return
  },
}
