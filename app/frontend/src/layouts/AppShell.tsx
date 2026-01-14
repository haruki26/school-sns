import { useMatches } from '@tanstack/react-router'
import BottomNav from '../components/BottomNav'
import PhoneFrame from '../components/PhoneFrame'
import ScreenHeader from '../components/ScreenHeader'
import { cn } from '../utils/cn'
import type { BottomNavItem } from '../components/BottomNav'
import type { ReactNode } from 'react'

export type AppShellConfig = {
  backgroundClassName?: string
  frameClassName?: string
  headerClassName?: string
  header?: React.ComponentType
  bottomNav?: BottomNavItem
  showBottomNav?: boolean
  disableShell?: boolean
}

type AppShellProps = {
  children: ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  const matches = useMatches()
  const currentMatch = matches[matches.length - 1]
  const shell =
    (currentMatch.staticData as { shell?: AppShellConfig }).shell ?? {}
  const Header = shell.header
  const bottomNav = shell.bottomNav
  const showBottomNav = shell.showBottomNav ?? Boolean(bottomNav)

  if (shell.disableShell) {
    return <>{children}</>
  }

  return (
    <div className={cn('app-shell', shell.backgroundClassName)}>
      <PhoneFrame className={shell.frameClassName}>
        {Header ? (
          <ScreenHeader className={shell.headerClassName}>
            <Header />
          </ScreenHeader>
        ) : null}
        {children}
        {showBottomNav && bottomNav ? <BottomNav active={bottomNav} /> : null}
      </PhoneFrame>
    </div>
  )
}
