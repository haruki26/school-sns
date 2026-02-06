import {
  queryOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import type {
  GetArtifactsQuerySchema,
  PostArtifactsRequestBody,
  UpdateArtifactsRequestBody,
} from '@/api/routes/artifacts/type'
import { artifactsKeys } from '@/api/routes/artifacts/key'
import { apiClient } from '@/api/shared/apiClient'
import { convertQueryParams } from '@/api/shared/convertQueryParams'
import { parseApiError } from '@/api/shared/error'

const useFetchArtifactsOptions = (query?: GetArtifactsQuerySchema) =>
  queryOptions({
    queryKey: artifactsKeys.list(query),
    queryFn: async () => {
      const res = await apiClient.artifacts.$get({
        query: convertQueryParams(query),
      })

      if (!res.ok) {
        return await parseApiError(res)
      }
      return await res.json()
    },
  })

const useFetchArtifactsDetailOptions = (id: string) =>
  queryOptions({
    queryKey: artifactsKeys.detail(id),
    queryFn: async () => {
      const res = await apiClient.artifacts[':artifactId'].$get({
        param: { artifactId: id },
      })

      if (!res.ok) {
        return await parseApiError(res)
      }
      return await res.json()
    },
  })

const usePostArtifactMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (body: PostArtifactsRequestBody) => {
      const res = await apiClient.artifacts.$post({
        json: body,
      })

      if (!res.ok) {
        return await parseApiError(res)
      }
      return await res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: artifactsKeys.list(),
      })
    },
  })
}

const useUpdateArtifactMutation = (id: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (body: UpdateArtifactsRequestBody) => {
      const res = await apiClient.artifacts[':artifactId'].$patch({
        param: { artifactId: id },
        json: body,
      })

      if (!res.ok) {
        return await parseApiError(res)
      }
      return await res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: artifactsKeys.detail(id),
      })
    },
  })
}

const useDeleteArtifactMutation = (id: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      const res = await apiClient.artifacts[':artifactId'].$delete({
        param: { artifactId: id },
      })

      if (!res.ok) {
        return await parseApiError(res)
      }
      return await res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: artifactsKeys.lists(),
      })
      queryClient.invalidateQueries({
        queryKey: artifactsKeys.detail(id),
      })
    },
  })
}

export {
  useFetchArtifactsOptions,
  useFetchArtifactsDetailOptions,
  usePostArtifactMutation,
  useUpdateArtifactMutation,
  useDeleteArtifactMutation,
}
