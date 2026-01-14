import { cn } from '../../utils/cn'
import type { ReactNode } from 'react'

type BadgeVariant = 'solid' | 'soft' | 'outline'

type BadgeProps = {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  solid: 'badge badge-solid',
  soft: 'badge badge-soft',
  outline: 'badge badge-outline',
}

export default function Badge({
  children,
  variant = 'soft',
  className,
}: BadgeProps) {
  return (
    <span className={cn(variantClasses[variant], className)}>{children}</span>
  )
}
