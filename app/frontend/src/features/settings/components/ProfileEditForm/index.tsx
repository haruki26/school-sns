import { Image, UserRound } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { useProfileEditForm } from '@/features/settings/hooks/useProfileEditForm'
import { cn } from '@/utils/cn'

interface Props {
  initialValues: {
    userName: string
    bio: string | null
    avatarUrl: string | null
  }
  onSuccess: () => void
  onCancel: () => void
}

const ProfileEditForm: React.FC<Props> = ({
  initialValues,
  onSuccess,
  onCancel,
}) => {
  const { form, isSubmitting } = useProfileEditForm({
    initialValues,
    onSuccess,
    onCancel,
  })

  return (
    <Card className="flex flex-col gap-4 border border-slate-100 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-600">
          <Image className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-700">
            プロフィールを編集
          </p>
          <p className="text-xs text-slate-500">
            アイコンと自己紹介を更新します
          </p>
        </div>
      </div>

      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
      >
        <form.Field name="avatarUrl">
          {(field) => {
            const value = field.state.value
            const hasImage = Boolean(value && value.length > 0)
            return (
              <div className="flex flex-col gap-2">
                <label
                  htmlFor={field.name}
                  className="text-sm font-medium text-slate-700"
                >
                  アバターURL
                </label>
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      'flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-slate-50',
                      hasImage ? 'p-0' : 'p-2',
                    )}
                  >
                    {hasImage ? (
                      <img
                        src={value ?? ''}
                        alt="avatar preview"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <UserRound className="h-7 w-7 text-slate-400" />
                    )}
                  </div>
                  <input
                    id={field.name}
                    name={field.name}
                    type="url"
                    placeholder="https://example.com/avatar.png"
                    value={value ?? ''}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="flex-1 rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
                  />
                </div>
                <p className="text-xs text-slate-500">
                  画像URLを入力するとプレビューが表示されます
                </p>
              </div>
            )
          }}
        </form.Field>

        <form.Field name="userName">
          {(field) => (
            <div className="flex flex-col gap-2">
              <label
                htmlFor={field.name}
                className="text-sm font-medium text-slate-700"
              >
                ユーザー名
              </label>
              <input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
              />
            </div>
          )}
        </form.Field>

        <form.Field name="bio">
          {(field) => (
            <div className="flex flex-col gap-2">
              <label
                htmlFor={field.name}
                className="text-sm font-medium text-slate-700"
              >
                自己紹介
              </label>
              <textarea
                id={field.name}
                name={field.name}
                rows={4}
                value={field.state.value ?? ''}
                onChange={(e) => field.handleChange(e.target.value)}
                className="rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
                placeholder="自己紹介や興味を入力"
              />
            </div>
          )}
        </form.Field>

        <div className="flex justify-end gap-3">
          <Button
            type="button"
            onClick={() => {
              form.reset()
              onCancel()
            }}
            className="border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
          >
            キャンセル
          </Button>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
          >
            {([canSubmit, isSubmittingState]) => (
              <Button
                type="submit"
                disabled={!canSubmit || isSubmittingState || isSubmitting}
                className="bg-linear-to-r from-amber-400 to-pink-400 text-white"
              >
                {isSubmittingState || isSubmitting ? '保存中...' : '保存'}
              </Button>
            )}
          </form.Subscribe>
        </div>
      </form>
    </Card>
  )
}

export default ProfileEditForm
