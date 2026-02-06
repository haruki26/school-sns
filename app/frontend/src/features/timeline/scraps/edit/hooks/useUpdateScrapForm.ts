import { useNavigate } from '@tanstack/react-router'
import type { ScrapFormValues } from '@/features/timeline/scraps/hooks/useScrapForm'
import { useUpdateScrapMutation } from '@/api/routes/scraps'
import { useScrapForm } from '@/features/timeline/scraps/hooks/useScrapForm'

export const useUpdateScrapForm = (
  targetId: string,
  initialValues: ScrapFormValues,
) => {
  const mutation = useUpdateScrapMutation(targetId)
  const navigate = useNavigate()

  return useScrapForm({
    initialValues,
    onSubmit: (value) => {
      mutation.mutate(
        {
          title: initialValues.title !== value.title ? value.title : undefined,
          body: initialValues.body !== value.body ? value.body : undefined,
          tagIds:
            JSON.stringify(value.tags) !== JSON.stringify(initialValues.tags)
              ? value.tags
              : undefined,
        },
        {
          onSuccess: () => {
            navigate({
              to: '/timeline/scraps/detail/$id',
              params: { id: targetId },
            })
          },
        },
      )
    },
  })
}
