import { cn } from '../utils/cn'

type MaterialIconProps = {
  name: string
  className?: string
  filled?: boolean
}

export default function MaterialIcon({
  name,
  className,
  filled = false,
}: MaterialIconProps) {
  return (
    <span
      className={cn('material-symbols-outlined', filled && 'fill-1', className)}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}
