import MaterialIcon from '../../../components/MaterialIcon'
import { cn } from '../../../utils/cn'

type TimelineActionButtonProps = {
  icon: string
  count: string
  className?: string
  filled?: boolean
}

export default function TimelineActionButton({
  icon,
  count,
  className,
  filled,
}: TimelineActionButtonProps) {
  return (
    <button
      className={cn(
        'flex items-center gap-1 text-slate-500 transition-colors',
        className ?? 'hover:text-pink-500',
      )}
    >
      <MaterialIcon name={icon} filled={filled} className="text-[16px]" />
      <span className="text-[11px] font-medium">{count}</span>
    </button>
  )
}
