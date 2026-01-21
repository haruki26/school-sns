import MaterialIcon from '../../../components/MaterialIcon'
import { cn } from '../../../utils/cn'

type SettingsRowProps = {
  icon: string
  label: string
  iconClassName: string
  withDivider?: boolean
}

export default function SettingsRow({
  icon,
  label,
  iconClassName,
  withDivider = false,
}: SettingsRowProps) {
  return (
    <button
      className={cn(
        'w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors active:bg-slate-100 group',
        withDivider && 'border-b border-slate-100',
      )}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            'w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm',
            iconClassName,
          )}
        >
          <MaterialIcon name={icon} className="text-[22px]" />
        </div>
        <span className="text-base font-medium text-left text-slate-900">
          {label}
        </span>
      </div>
      <MaterialIcon name="chevron_right" className="text-slate-400" />
    </button>
  )
}
