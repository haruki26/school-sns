import {
  queryOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { usersKeys } from '@/api/routes/users/key'
import { apiClient } from '@/api/shared/apiClient'
import { parseApiError } from '@/api/shared/error'

type UpdateProfileInput = {
  userName?: string
  bio?: string | null
  avatarUrl?: string | null
}

export type SelfInfo = {
  id: string
  userName: string
  bio: string | null
  avatarUrl: string | null
}

const useFetchSelfInfoOptions = () =>
  queryOptions({
    queryKey: usersKeys.me(),
    queryFn: async () => {
      const res = await apiClient.users.me.$get()
      if (!res.ok) {
        return await parseApiError(res)
      }
      return await res.json()
    },
  })

const useUpdateProfileMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (body: UpdateProfileInput) => {
      const res = await apiClient.users.me.$patch({ json: body })
      if (!res.ok) {
        return await parseApiError(res)
      }
      return await res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: usersKeys.me() })
    },
  })
}

export { useFetchSelfInfoOptions, useUpdateProfileMutation }
