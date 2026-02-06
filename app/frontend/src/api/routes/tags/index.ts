import {
  queryOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import type {
  GetTagsQuerySchema,
  PostTagRequestBody,
  UpdateTagRequestBody,
} from '@/api/routes/tags/type'
import { tagsKeys } from '@/api/routes/tags/key'
import { apiClient } from '@/api/shared/apiClient'
import { parseApiError } from '@/api/shared/error'

const useFetchTagsOptions = (query?: GetTagsQuerySchema) =>
  queryOptions({
    queryKey: tagsKeys.list(),
    queryFn: async () => {
      const res = await apiClient.tags.$get({
        query,
      })

      if (!res.ok) {
        return await parseApiError(res)
      }
      return await res.json()
    },
  })

const useFetchTagDetailOptions = (id: string) =>
  queryOptions({
    queryKey: tagsKeys.detail(id),
    queryFn: async () => {
      const res = await apiClient.tags[':tagId'].$get({
        param: { tagId: id },
      })

      if (!res.ok) {
        return await parseApiError(res)
      }
      return await res.json()
    },
  })

const usePostTagMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (body: PostTagRequestBody) => {
      const res = await apiClient.tags.$post({
        json: body,
      })

      if (!res.ok) {
        return await parseApiError(res)
      }
      return await res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: tagsKeys.lists(),
      })
    },
  })
}

const useUpdateTagMutation = (id: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (body: UpdateTagRequestBody) => {
      const res = await apiClient.tags[':tagId'].$patch({
        param: { tagId: id },
        json: body,
      })

      if (!res.ok) {
        return await parseApiError(res)
      }
      return await res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: tagsKeys.lists(),
      })
      queryClient.invalidateQueries({
        queryKey: tagsKeys.detail(id),
      })
    },
  })
}

export {
  useFetchTagDetailOptions,
  useFetchTagsOptions,
  useUpdateTagMutation,
  usePostTagMutation,
}
