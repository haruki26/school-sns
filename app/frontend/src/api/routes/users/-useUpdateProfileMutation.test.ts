import { describe, expect, it, vi } from 'vitest'
import { useUpdateProfileMutation } from './index'
import { usersKeys } from '@/api/routes/users/key'
import { ApiError } from '@/api/shared/error'

const invalidateQueries = vi.fn()
let capturedOptions: any

vi.mock('@tanstack/react-query', () => {
  return {
    useQueryClient: () => ({ invalidateQueries }),
    useMutation: (options: any) => {
      capturedOptions = options
      return {
        mutateAsync: async (variables: any) => {
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

const patchMock = vi.fn()

vi.mock('@/api/shared/apiClient', () => {
  return {
    apiClient: {
      users: {
        me: {
          $patch: (...args: Array<any>) => patchMock(...args),
        },
      },
    },
  }
})

describe('useUpdateProfileMutation', () => {
  it('sends patch request and invalidates cache on success', async () => {
    patchMock.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ id: 'user-1', userName: 'Alice' }),
    })

    const { mutateAsync } = useUpdateProfileMutation()
    const result = await mutateAsync({ userName: 'Alice' })

    expect(patchMock).toHaveBeenCalledWith({ json: { userName: 'Alice' } })
    expect(result).toEqual({ id: 'user-1', userName: 'Alice' })
    expect(invalidateQueries).toHaveBeenCalledWith({
      queryKey: usersKeys.me(),
    })
  })

  it('throws ApiError when response is not ok', async () => {
    patchMock.mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: () => Promise.resolve({ message: 'invalid' }),
    })

    useUpdateProfileMutation()

    await expect(
      capturedOptions.mutationFn({ userName: 'Bob' }),
    ).rejects.toBeInstanceOf(ApiError)
  })
})
