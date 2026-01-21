import MaterialIcon from '../MaterialIcon'
import { cn } from '../../utils/cn'
import type { ButtonHTMLAttributes } from 'react'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: string
  label?: string
  filled?: boolean
  iconClassName?: string
}

export default function IconButton({
  icon,
  label,
  filled,
  className,
  iconClassName,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn('icon-button', className)}
      aria-label={label}
      type="button"
      {...props}
    >
      <MaterialIcon name={icon} filled={filled} className={iconClassName} />
    </button>
  )
}
