import { createFileRoute, redirect } from '@tanstack/react-router'
import type { SelfInfo } from '@/api/routes/users'
import { useFetchSelfInfoOptions } from '@/api/routes/users'

export const Route = createFileRoute('/settings/')({
  beforeLoad: async ({ context }) => {
    try {
      await context.queryClient.ensureQueryData(useFetchSelfInfoOptions())
    } catch (_) {
      throw redirect({ to: '/auth/login' })
    }
  },
  loader: async ({ context }): Promise<SelfInfo> => {
    const data = await context.queryClient.ensureQueryData(
      useFetchSelfInfoOptions(),
    )
    return data
  },
})
