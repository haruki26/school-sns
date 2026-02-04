import { useForm } from '@tanstack/react-form'
import { useNavigate } from '@tanstack/react-router'
import z from 'zod'
import { usePostScrap } from '@/api/routes/scraps'

const postScrapFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  body: z.string().min(1, 'Body is required'),
  tags: z.array(z.string()),
})

export const usePostScrapForm = (replyToScrapId: string | null = null) => {
  const mutation = usePostScrap()
  const navigate = useNavigate()

  const form = useForm({
    defaultValues: {
      title: '',
      body: '',
      // 苦渋の型アサーション
      tags: [] as Array<string>,
    },
    validators: {
      onSubmit: postScrapFormSchema,
    },
    onSubmit: ({ value }) => {
      mutation.mutate(
        {
          parentId: replyToScrapId,
          title: value.title,
          body: value.body,
          tagIds: value.tags.length > 0 ? value.tags : undefined,
        },
        {
          onSuccess: () => {
            navigate({ to: '/timeline/scraps' })
          },
        },
      )
    },
  })

  return { form }
}
