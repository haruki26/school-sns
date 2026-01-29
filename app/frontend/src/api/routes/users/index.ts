import {
  queryOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { usersKeys } from '@/api/routes/users/key'
import { apiClient } from '@/api/shared/apiClient'
import { parseApiResponse } from '@/api/shared/error'

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
    queryFn: async (): Promise<SelfInfo> => {
      const res = await apiClient.users.me.$get()
      return await parseApiResponse<SelfInfo>(res)
    },
  })

const useUpdateProfileMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (body: UpdateProfileInput) => {
      const res = await apiClient.users.me.$patch({ json: body })
      return await parseApiResponse(res)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: usersKeys.me() })
    },
  })
}

export { useFetchSelfInfoOptions, useUpdateProfileMutation }
