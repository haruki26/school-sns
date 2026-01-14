import { cn } from '../utils/cn'
import type { ReactNode } from 'react'

type ScreenHeaderProps = {
  children: ReactNode
  className?: string
}

export default function ScreenHeader({
  children,
  className,
}: ScreenHeaderProps) {
  return <header className={cn('screen-header', className)}>{children}</header>
}
