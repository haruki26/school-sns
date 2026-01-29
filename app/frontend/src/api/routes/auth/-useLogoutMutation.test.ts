import { describe, expect, it, vi } from 'vitest'
import { useLogoutMutation } from './index'
import { usersKeys } from '@/api/routes/users/key'
import { ApiError } from '@/api/shared/error'

const invalidateQueries = vi.fn()
const navigate = vi.fn()
let capturedOptions: any

vi.mock('@tanstack/react-query', () => {
  return {
    useQueryClient: () => ({ invalidateQueries }),
    useMutation: (options: any) => {
      capturedOptions = options
      return {
        mutateAsync: async (variables?: any) => {
          const result = await options.mutationFn(variables)
          if (options.onSuccess) {
            options.onSuccess(result)
          }
          return result
        },
      }
    },
  }
})

vi.mock('@tanstack/react-router', () => {
  return {
    useNavigate: () => navigate,
  }
})

const logoutMock = vi.fn()

vi.mock('@/api/shared/apiClient', () => {
  return {
    apiClient: {
      auth: {
        logout: {
          $post: (...args: Array<any>) => logoutMock(...args),
        },
      },
    },
  }
})

describe('useLogoutMutation', () => {
  it('logs out and redirects to login on success', async () => {
    logoutMock.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({}),
    })

    const { mutateAsync } = useLogoutMutation()
    await mutateAsync()

    expect(logoutMock).toHaveBeenCalled()
    expect(invalidateQueries).toHaveBeenCalledWith({
      queryKey: usersKeys.me(),
    })
    expect(navigate).toHaveBeenCalledWith({ to: '/auth/login' })
  })

  it('throws ApiError on failure', async () => {
    logoutMock.mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: () => Promise.resolve({ message: 'failed' }),
    })

    useLogoutMutation()

    await expect(capturedOptions.mutationFn()).rejects.toBeInstanceOf(ApiError)
  })
})
