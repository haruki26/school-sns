import { z } from 'zod'

// サインアップ用のバリデーション
const signupSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
  name: z.string().max(30).optional(),
})

// ログイン用のバリデーション
const loginSchema = z.object({
  email: z.email(),
  password: z.string(),
})

// ユーザー情報の型（パスワードを含まない）
const userResponseSchema = z.object({
  id: z.string(),
  userName: z.string(),
  email: z.email(),
  role: z.string(),

  bio: z.string().nullable(),
  avatarUrl: z.string().nullable(),

  createdAt: z.date(),
  updatedAt: z.date(),
})

// ログイン成功時のレスポンス
const authResponseSchema = z.object({
  token: z.string(),
  user: userResponseSchema,
})

export { signupSchema, loginSchema, authResponseSchema }
export type SignupInput = z.infer<typeof signupSchema>
export type LoginInput = z.infer<typeof loginSchema>
