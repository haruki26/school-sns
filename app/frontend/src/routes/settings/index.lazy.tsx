import { createLazyFileRoute } from '@tanstack/react-router'
import AccountSettings from '@/features/settings/components/AccountSettings'
import LogoutSection from '@/features/settings/components/LogoutSection'
import ProfileSection from '@/features/settings/components/ProfileSection'
import VersionInfo from '@/features/settings/components/VersionInfo'

export const Route = createLazyFileRoute('/settings/')({
  component: SettingsPage,
})

export function SettingsPage() {
  const data = Route.useLoaderData()

  return (
    <div className="min-h-dvh bg-linear-to-b from-amber-50 to-blue-50">
      <div className="mx-auto flex max-w-md flex-col gap-4 px-4 py-6">
        <header className="flex flex-col gap-1">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Settings
          </p>
          <h1 className="text-xl font-bold text-slate-900">設定</h1>
          <p className="text-sm text-slate-600">
            プロフィールや通知の設定を管理します
          </p>
        </header>

        <ProfileSection user={data} />
        <section aria-label="アカウント設定" className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold text-slate-800">
            アカウント設定
          </h2>
          <AccountSettings />
        </section>

        <LogoutSection />
        <VersionInfo />
      </div>
    </div>
  )
}
