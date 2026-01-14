import { createFileRoute } from '@tanstack/react-router'
import SignupScreen from '../features/auth/SignupScreen'
import SignupHeader from '../features/auth/components/SignupHeader'

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
  staticData: {
    shell: {
      header: SignupHeader,
      backgroundClassName: 'bg-slate-100',
      frameClassName: 'bg-slate-100 overflow-hidden shadow-2xl',
      headerClassName: 'bg-slate-100 border-slate-200',
      showBottomNav: false,
    },
  },
})

function RouteComponent() {
  return <SignupScreen />
}
