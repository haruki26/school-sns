import { cn } from '@/utils/cn'

interface Props {
  label: string
  isActive: boolean
  className?: string
}

const TabItem: React.FC<Props> = ({ label, isActive, className }) => {
  return (
    <div
      className={cn(
        'relative flex-1 cursor-pointer select-none text-nowrap text-center text-sm font-semibold py-3 transition-colors',
        isActive
          ? 'text-sky-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-sky-500 after:rounded-t-sm'
          : 'text-slate-500 hover:text-slate-800 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-transparent hover:after:bg-sky-200',
        className,
      )}
    >
      {label}
    </div>
  )
}

export default TabItem
