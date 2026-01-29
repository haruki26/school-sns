import { Edit3, Sparkles, UserRound } from 'lucide-react'
import { useMemo, useState } from 'react'
import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
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
        <Avatar
          size={16}
          src={user.avatarUrl}
          alt={`${user.userName}のアバター`}
        />
      )
    }
    return (
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400"
        data-testid="avatar-placeholder"
      >
        <UserRound className="h-7 w-7" />
      </div>
    )
  }, [user.avatarUrl, user.userName])

  if (isEditing) {
    return (
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
    )
  }

  return (
    <Card className="flex flex-col gap-4 bg-linear-to-br from-pink-50 via-white to-amber-50 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-700">プロフィール</p>
          <p className="text-xs text-slate-500">表示情報を確認・編集できます</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {avatarContent}
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-slate-900">
            {user.userName}
          </p>
          <p className="text-sm text-slate-600">
            {user.bio && user.bio.trim().length > 0
              ? user.bio
              : '自己紹介が未設定です'}
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          className="flex items-center gap-2 bg-black text-white hover:bg-gray-800"
          onClick={() => setIsEditing(true)}
        >
          <Edit3 className="h-4 w-4" />
          プロフィールを編集
        </Button>
      </div>

      {showSuccess && (
        <p className="text-sm text-emerald-600">プロフィールを更新しました</p>
      )}
    </Card>
  )
}

export default ProfileSection
