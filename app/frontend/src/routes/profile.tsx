import { createFileRoute } from '@tanstack/react-router'
import ProfileScreen from '../features/profile/ProfileScreen'
import ProfileShellHeader from '../features/profile/components/ProfileShellHeader'

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
  staticData: {
    shell: {
      header: ProfileShellHeader,
      bottomNav: 'profile',
      backgroundClassName: 'bg-white',
      frameClassName: 'bg-white',
    },
  },
})

function RouteComponent() {
  return <ProfileScreen />
}
