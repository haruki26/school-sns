import MaterialIcon from '../../../components/MaterialIcon'
import { cn } from '../../../utils/cn'

type ToolbarButtonProps = {
  icon: string
  className?: string
}

function ToolbarButton({ icon, className }: ToolbarButtonProps) {
  return (
    <button
      className={cn(
        'p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded transition-colors',
        className,
      )}
    >
      <MaterialIcon name={icon} className="text-[20px]" />
    </button>
  )
}

export default function PostToolbar() {
  return (
    <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide border-y border-slate-200 py-2">
      <ToolbarButton icon="format_bold" />
      <ToolbarButton icon="format_italic" />
      <div className="w-px h-4 bg-slate-200 mx-1" />
      <ToolbarButton icon="title" />
      <ToolbarButton icon="format_list_bulleted" />
      <ToolbarButton icon="format_quote" />
      <div className="w-px h-4 bg-slate-200 mx-1" />
      <ToolbarButton icon="link" />
      <ToolbarButton icon="code" />
      <ToolbarButton icon="help" className="ml-auto" />
    </div>
  )
}
