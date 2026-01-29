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
    <div className="min-h-full bg-slate-50 text-slate-900">
      <div className="mx-auto flex max-w-md flex-col pb-10">
        <ProfileSection user={data} />
        <div className="mt-6 px-4">
          <h3 className="mb-2 ml-3 text-xs font-bold uppercase tracking-wider text-slate-400">
            アカウント
          </h3>
          <AccountSettings />
        </div>
        <div className="mt-6 px-4">
          <LogoutSection />
        </div>
        <div className="mt-8 text-center">
          <VersionInfo />
        </div>
      </div>
    </div>
  )
}
