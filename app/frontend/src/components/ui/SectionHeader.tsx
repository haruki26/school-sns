import { cn } from '../../utils/cn'
import type { ReactNode } from 'react'

type SectionHeaderProps = {
  title: string
  action?: ReactNode
  className?: string
}

export default function SectionHeader({
  title,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('section-header', className)}>
      <h3 className="section-title">{title}</h3>
      {action ? <div>{action}</div> : null}
    </div>
  )
}
