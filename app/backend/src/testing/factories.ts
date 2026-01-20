import argon2 from 'argon2'
import type { UserRole } from '../../generated/prisma/enums.js'
import { prisma } from '../lib/prisma.js'
import { authRepository } from '../services/auth/repository.js'

const authRepo = authRepository

/**
 * テスト用の共通ユーザー作成関数
 */
export const createTestUser = async (options: {
  email?: string
  name?: string
  password?: string
  role: UserRole
}) => {
  // 指定がなければランダムなメールアドレスを生成
  const email =
    options.email ?? `test-${Math.random().toString(36).slice(2)}@example.com`

  const plainPassword = options.password ?? 'password123'
  const passwordHash = await argon2.hash(plainPassword)

  // ユーザー作成
  const user = await authRepo.createUser({
    email: email,
    name: options.name ?? 'Test User',
    passwordHash: passwordHash,
    password: 'plainPassword',
  })

  // Role の付与
  const updatedUser = await prisma.users.update({
    where: { id: user.id },
    data: {
      role: options.role,
    },
  })

  return {
    ...updatedUser,
    plainPassword,
  }
}
