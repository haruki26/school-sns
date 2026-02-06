import { useForm } from '@tanstack/react-form'
import z from 'zod'

const artifactFormSchema = z.object({
  title: z.string(),
  body: z.string(),
  status: z.enum(['DRAFT', 'PUBLISHED']),
  tags: z.array(z.string()),
})

export type ArtifactFormValues = z.infer<typeof artifactFormSchema>

export const useArtifactForm = (args: {
  initialValues?: Partial<ArtifactFormValues>
  onSubmit: (value: ArtifactFormValues) => void
}) => {
  const form = useForm({
    defaultValues: {
      title: args.initialValues?.title ?? '',
      body: args.initialValues?.body ?? '',
      status: args.initialValues?.status ?? 'DRAFT',
      tags: args.initialValues?.tags ?? [],
    },
    validators: {
      onSubmit: artifactFormSchema,
    },
    onSubmit: ({ value }) => {
      args.onSubmit(value)
    },
  })

  return { form }
}
