import { createFileRoute } from '@tanstack/react-router'
import SettingsScreen from '../features/settings/SettingsScreen'
import SettingsHeader from '../features/settings/components/SettingsHeader'

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
  staticData: {
    shell: {
      header: SettingsHeader,
      backgroundClassName: 'bg-slate-50',
      frameClassName: 'bg-slate-50',
      showBottomNav: false,
    },
  },
})

function RouteComponent() {
  return <SettingsScreen />
}
