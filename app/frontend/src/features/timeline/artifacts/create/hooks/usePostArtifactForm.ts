import { useNavigate } from '@tanstack/react-router'
import { usePostArtifactMutation } from '@/api/routes/artifacts'
import { useArtifactForm } from '@/features/timeline/artifacts/hooks/useArtifactForm'

export const usePostArtifactForm = () => {
  const navigate = useNavigate()
  const mutation = usePostArtifactMutation()

  return useArtifactForm({
    onSubmit: (value) => {
      mutation.mutate(
        {
          ...value,
          tagIds: value.tags.length > 0 ? value.tags : undefined,
        },
        {
          onSuccess: (data) => {
            navigate({
              to: '/timeline/artifacts/detail/$id',
              params: { id: data.id },
            })
          },
        },
      )
    },
  })
}
