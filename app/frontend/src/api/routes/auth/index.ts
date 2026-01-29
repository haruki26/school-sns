import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import type {
  LoginRequestBody,
  SignupRequestBody,
} from '@/api/routes/auth/type'
import { usersKeys } from '@/api/routes/users/key'
import { apiBaseUrl, apiClient } from '@/api/shared/apiClient'
import { parseApiResponse } from '@/api/shared/error'

const useLoginMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (body: LoginRequestBody) => {
      const res = await apiClient.auth.login.$post({ json: body })
      return await parseApiResponse(res)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: usersKeys.me() })
    },
  })
}

const useGoogleLoginMutation = () => {
  return useMutation({
    mutationFn: () => {
      window.location.assign(`${apiBaseUrl}/api/v2/auth/google`)
      return Promise.resolve()
    },
  })
}

const useSignupMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (body: SignupRequestBody) => {
      const res = await apiClient.auth.signup.$post({ json: body })
      return await parseApiResponse(res)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: usersKeys.me() })
    },
  })
}

const useLogoutMutation = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: async () => {
      const res = await apiClient.auth.logout.$post()
      return await parseApiResponse(res)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: usersKeys.me() })
      navigate({ to: '/auth/login' })
    },
  })
}

export {
  useLoginMutation,
  useGoogleLoginMutation,
  useSignupMutation,
  useLogoutMutation,
}
