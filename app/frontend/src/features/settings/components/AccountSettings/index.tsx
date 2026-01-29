import { Bell, Shield } from 'lucide-react'
import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { cn } from '@/utils/cn'

type SettingsState = {
  notifications: {
    email: boolean
    push: boolean
  }
  privacy: {
    profilePublic: boolean
  }
  isSaving: boolean
}

const AccountSettings: React.FC = () => {
  const [state, setState] = useState<SettingsState>({
    notifications: { email: true, push: true },
    privacy: { profilePublic: true },
    isSaving: false,
  })

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined
    if (state.isSaving) {
      timer = setTimeout(() => {
        setState((prev) => ({ ...prev, isSaving: false }))
      }, 500)
    }
    return () => {
      if (timer !== undefined) clearTimeout(timer)
    }
  }, [state.isSaving])

  const handleToggle = (
    path:
      | ['notifications', 'email']
      | ['notifications', 'push']
      | ['privacy', 'profilePublic'],
  ) => {
    setState((prev) => {
      const next = { ...prev }
      if (path[0] === 'notifications') {
        next.notifications = {
          ...prev.notifications,
          [path[1]]: !prev.notifications[path[1]],
        }
      }
      if (path[0] === 'privacy') {
        next.privacy = {
          ...prev.privacy,
          profilePublic: !prev.privacy.profilePublic,
        }
      }
      next.isSaving = true
      return next
    })
  }

  const renderSwitch = (
    label: string,
    checked: boolean,
    onClick: () => void,
  ) => {
    return (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={onClick}
        className={cn(
          'flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 transition-colors',
          checked ? 'bg-emerald-50 border-emerald-200' : 'bg-white',
        )}
      >
        <span className="text-sm font-medium text-slate-800">{label}</span>
        <span
          className={cn(
            'flex h-6 w-11 items-center rounded-full p-1 transition-colors',
            checked ? 'bg-emerald-400' : 'bg-slate-200',
          )}
        >
          <span
            className={cn(
              'h-4 w-4 rounded-full bg-white shadow-sm transition-transform',
              checked ? 'translate-x-4' : 'translate-x-0',
            )}
          />
        </span>
      </button>
    )
  }

  return (
    <Card className="flex flex-col gap-4 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <Bell className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-700">通知設定</p>
          <p className="text-xs text-slate-500">
            メール・プッシュ通知の受信を切り替えます
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {renderSwitch('メール通知', state.notifications.email, () =>
          handleToggle(['notifications', 'email']),
        )}
        {renderSwitch('プッシュ通知', state.notifications.push, () =>
          handleToggle(['notifications', 'push']),
        )}
      </div>

      <div className="flex items-center gap-3 pt-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <Shield className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-700">プライバシー</p>
          <p className="text-xs text-slate-500">
            プロフィール公開設定を管理します
          </p>
        </div>
      </div>
      {renderSwitch('プロフィール公開', state.privacy.profilePublic, () =>
        handleToggle(['privacy', 'profilePublic']),
      )}

      {state.isSaving && (
        <p className="text-xs text-amber-700">設定を保存しています...</p>
      )}

      <div className="pt-1">
        <Button className="w-full bg-linear-to-r from-emerald-400 to-blue-400 text-white">
          設定を保存
        </Button>
      </div>
    </Card>
  )
}

export default AccountSettings
