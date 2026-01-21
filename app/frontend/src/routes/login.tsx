import { createFileRoute } from '@tanstack/react-router'
import LoginScreen from '../features/auth/LoginScreen'
import LoginHeader from '../features/auth/components/LoginHeader'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
  staticData: {
    shell: {
      header: LoginHeader,
      backgroundClassName: 'bg-slate-100',
      frameClassName: 'bg-slate-100 overflow-hidden',
      headerClassName: 'bg-slate-100/90 border-slate-200',
      showBottomNav: false,
    },
  },
})

function RouteComponent() {
  return <LoginScreen />
}
