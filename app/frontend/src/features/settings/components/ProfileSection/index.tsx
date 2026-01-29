import { Camera, ChevronRight, PencilLine, UserRound } from 'lucide-react'
import { useMemo, useState } from 'react'
import ProfileEditForm from '@/features/settings/components/ProfileEditForm'

interface Props {
  user: {
    id: string
    userName: string
    bio: string | null
    avatarUrl: string | null
  }
}

const ProfileSection: React.FC<Props> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const avatarContent = useMemo(() => {
    if (user.avatarUrl) {
      return (
        <img
          src={user.avatarUrl}
          alt={`${user.userName}のアバター`}
          className="h-full w-full object-cover"
        />
      )
    }
    return (
      <div
        className="flex h-full w-full items-center justify-center bg-amber-50 text-amber-400"
        data-testid="avatar-placeholder"
      >
        <UserRound className="h-12 w-12" />
      </div>
    )
  }, [user.avatarUrl, user.userName])

  const bioText =
    user.bio && user.bio.trim().length > 0 ? user.bio : '自己紹介が未設定です'

  if (isEditing) {
    return (
      <div className="px-4 pt-6">
        <ProfileEditForm
          initialValues={{
            userName: user.userName,
            bio: user.bio,
            avatarUrl: user.avatarUrl,
          }}
          onSuccess={() => {
            setIsEditing(false)
            setShowSuccess(true)
            setTimeout(() => setShowSuccess(false), 2000)
          }}
          onCancel={() => setIsEditing(false)}
        />
      </div>
    )
  }

  return (
    <>
      <section className="flex flex-col items-center rounded-b-2xl bg-white px-4 pb-6 pt-8 shadow-sm">
        <div className="relative mb-4">
          <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-white bg-amber-50 shadow-xl">
            {avatarContent}
          </div>
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-white shadow-md transition-colors hover:bg-slate-800 active:scale-95"
            aria-label="プロフィールを編集"
          >
            <PencilLine className="h-4 w-4" />
          </button>
        </div>
        <h2 className="mb-1 text-2xl font-bold text-slate-900">
          {user.userName}
        </h2>
        <p className="mb-3 text-base font-medium text-slate-500">自己紹介</p>
        <p className="max-w-75 text-center text-base leading-relaxed text-slate-700">
          {bioText}
        </p>
        {showSuccess && (
          <p className="mt-3 text-sm text-emerald-600">
            プロフィールを更新しました
          </p>
        )}
      </section>

      <div className="mt-6 px-4">
        <h3 className="mb-2 ml-3 text-xs font-bold uppercase tracking-wider text-slate-400">
          プロフィール
        </h3>
        <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="flex w-full items-center justify-between border-b border-slate-100 p-4 transition-colors hover:bg-slate-50 active:bg-slate-100"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600 shadow-sm">
                <Camera className="h-5 w-5" />
              </div>
              <span className="text-base font-medium text-slate-900">
                アイコンを変更
              </span>
            </div>
            <ChevronRight className="h-4 w-4 text-slate-400" />
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="flex w-full items-center justify-between p-4 transition-colors hover:bg-slate-50 active:bg-slate-100"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600 shadow-sm">
                <PencilLine className="h-5 w-5" />
              </div>
              <span className="text-base font-medium text-slate-900">
                自己紹介を編集
              </span>
            </div>
            <ChevronRight className="h-4 w-4 text-slate-400" />
          </button>
        </div>
      </div>
    </>
  )
}

export default ProfileSection
