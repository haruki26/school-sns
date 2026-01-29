/** @vitest-environment jsdom */
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { redirect } from '@tanstack/react-router'
import { Route } from './index.tsx'
import { useFetchSelfInfoOptions } from '@/api/routes/users'

vi.mock('@tanstack/react-router', () => {
  return {
    redirect: vi.fn((args: any) => ({ ...args, type: 'redirect' })),
    createFileRoute: () => (options: any) => ({ options }),
  }
})

vi.mock('@/api/routes/users', () => {
  return {
    useFetchSelfInfoOptions: vi.fn(() => ({
      queryKey: ['users', 'me'],
      queryFn: vi.fn(),
    })),
  }
})

const createContext = (ensureQueryData: any) => ({
  context: {
    queryClient: {
      ensureQueryData,
    },
  },
})

describe('settings route beforeLoad', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('prefetches self info for authenticated users', async () => {
    const ensureQueryData = vi.fn().mockResolvedValue({ id: 'user-1' })

    await Route.options.beforeLoad!(createContext(ensureQueryData) as any)

    expect(useFetchSelfInfoOptions).toHaveBeenCalled()
    expect(ensureQueryData).toHaveBeenCalledWith(
      expect.objectContaining({ queryKey: ['users', 'me'] }),
    )
  })

  it('redirects to login when fetching self info fails', async () => {
    const ensureQueryData = vi.fn().mockRejectedValue(new Error('unauthorized'))

    await expect(
      Route.options.beforeLoad!(createContext(ensureQueryData) as any),
    ).rejects.toMatchObject({ to: '/auth/login', type: 'redirect' })

    expect(redirect).toHaveBeenCalledWith({ to: '/auth/login' })
  })

  it('returns self info from loader', async () => {
    const ensureQueryData = vi.fn().mockResolvedValue({ id: 'user-1' })

    const result = await Route.options.loader!(
      createContext(ensureQueryData) as any,
    )

    expect(result).toEqual({ id: 'user-1' })
    expect(useFetchSelfInfoOptions).toHaveBeenCalled()
  })
})
