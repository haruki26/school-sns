import { cn } from '../../utils/cn'
import type { ReactNode } from 'react'

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const sizeClasses: Record<AvatarSize, string> = {
  xs: 'size-4',
  sm: 'size-6',
  md: 'size-8',
  lg: 'size-12',
  xl: 'size-24',
}

type AvatarProps = {
  alt?: string
  src?: string
  size?: AvatarSize
  className?: string
  ring?: boolean
  fallback?: ReactNode
}

export default function Avatar({
  alt = 'Avatar',
  src,
  size = 'md',
  className,
  ring = true,
  fallback,
}: AvatarProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center overflow-hidden rounded-full bg-slate-200',
        sizeClasses[size],
        ring && 'ring-1 ring-slate-200',
        className,
      )}
    >
      {src ? (
        <img alt={alt} className="h-full w-full object-cover" src={src} />
      ) : (
        fallback
      )}
    </div>
  )
}
