import { cn } from '../utils/cn'
import type { ReactNode } from 'react'

type PhoneFrameProps = {
  children: ReactNode
  className?: string
}

export default function PhoneFrame({ children, className }: PhoneFrameProps) {
  return <div className={cn('app-frame', className)}>{children}</div>
}
