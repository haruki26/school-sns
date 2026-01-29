import { useForm } from '@tanstack/react-form'
import z from 'zod'
import { useUpdateProfileMutation } from '@/api/routes/users'

const profileEditSchema = z.object({
  userName: z.string().trim().min(1, 'ユーザー名は必須です'),
  bio: z.string().nullable(),
  avatarUrl: z.string().url().nullable().or(z.literal('')),
})

export type ProfileEditFormValues = z.infer<typeof profileEditSchema>

type UseProfileEditFormOptions = {
  initialValues: {
    userName: string
    bio: string | null
    avatarUrl: string | null
  }
  onSuccess: () => void
  onCancel: () => void
}

export const useProfileEditForm = (options: UseProfileEditFormOptions) => {
  const updateProfileMutation = useUpdateProfileMutation()

  const form = useForm<ProfileEditFormValues>({
    defaultValues: {
      userName: options.initialValues.userName,
      bio: options.initialValues.bio,
      avatarUrl: options.initialValues.avatarUrl,
    },
    validators: {
      onSubmit: profileEditSchema,
    },
    onSubmit: async ({ value }) => {
      const payload = {
        userName: value.userName.trim(),
        bio: value.bio?.trim() ? value.bio.trim() : null,
        avatarUrl: value.avatarUrl?.trim() ? value.avatarUrl.trim() : null,
      }

      await updateProfileMutation.mutateAsync(payload)
      options.onSuccess()
    },
  })

  return { form, isSubmitting: updateProfileMutation.isPending }
}
