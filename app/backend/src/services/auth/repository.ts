import { prisma } from '../../lib/prisma.js'
import type { SignupInput } from '../../routes/auth/schema.js'

export const authRepository = {
  // メールアドレスでユーザー検索
  findByEmail: async (email: string) => {
    return await prisma.users.findUnique({
      where: { email },
    })
  },

  // ユーザー作成
  createUser: async (data: SignupInput & { passwordHash: string }) => {
    return await prisma.users.create({
      data: {
        email: data.email,
        passwordHash: data.passwordHash,
        userName: data.name ?? 'No Name',
      },
    })
  },
}
