import { prisma } from '../../lib/prisma.js'
import type { GoogleLoginInput, SignupInput } from '../../routes/auth/schema.js'

export const authRepository = {
  // メールアドレスでユーザー検索
  findByEmail: async (email: string) => {
    return await prisma.users.findUnique({
      where: { email },
    })
  },

  findByGoogleId: async (googleId: string) => {
    return await prisma.users.findFirst({
      where: { googleId },
    })
  },

  updateGoogleId: async (userId: string, googleId: string) => {
    return await prisma.users.update({
      where: { id: userId },
      data: { googleId },
    })
  },

  createWithGoogle: async (input: GoogleLoginInput) => {
    return await prisma.users.create({
      data: {
        googleId: input.googleId,
        email: input.email,
        userName: input.name ?? 'No Name',
        avatarUrl: input.picture,
      },
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
