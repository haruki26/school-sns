import { Link } from '@tanstack/react-router'
import { cn } from '../utils/cn'
import MaterialIcon from './MaterialIcon'

export type BottomNavItem = 'scraps' | 'artifacts' | 'search' | 'profile'

type BottomNavProps = {
  active: BottomNavItem
  className?: string
}

const navItems: Array<{
  key: BottomNavItem
  label: string
  icon: string
  to: string
}> = [
  { key: 'scraps', label: 'Scraps', icon: 'article', to: '/' },
  { key: 'artifacts', label: 'Artifacts', icon: 'grid_view', to: '/artifacts' },
  { key: 'search', label: 'Search', icon: 'search', to: '/search' },
  { key: 'profile', label: 'Profile', icon: 'person', to: '/profile' },
]

export default function BottomNav({ active, className }: BottomNavProps) {
  return (
    <nav
      className={cn(
        'absolute bottom-0 left-0 right-0 w-full bg-white border-t border-slate-200 pb-[env(safe-area-inset-bottom)] z-30',
        className,
      )}
    >
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const isActive = item.key === active
          return (
            <Link
              key={item.key}
              to={item.to}
              className={cn(
                'flex flex-col items-center justify-center gap-0.5 h-full w-full transition-colors group',
                isActive
                  ? 'text-slate-900'
                  : 'text-slate-500 hover:text-slate-900',
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <MaterialIcon
                name={item.icon}
                filled={isActive}
                className="text-[26px]"
              />
              <span
                className={cn(
                  'text-[10px] tracking-tight',
                  isActive ? 'font-bold' : 'font-medium',
                )}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
