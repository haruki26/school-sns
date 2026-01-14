import Avatar from '../../../components/ui/Avatar'
import IconButton from '../../../components/ui/IconButton'
import Card from '../../../components/ui/Card'
import { cn } from '../../../utils/cn'
import type { ReactNode } from 'react'

type TimelineCardProps = {
  avatar?: string
  name: string
  time: string
  children: ReactNode
  className?: string
}

export default function TimelineCard({
  avatar,
  name,
  time,
  children,
  className,
}: TimelineCardProps) {
  return (
    <Card
      className={cn(
        'flex flex-row items-start gap-3 p-3 bg-slate-50 border-slate-200 hover:border-slate-400/30 transition-all',
        className,
      )}
    >
      <Avatar
        src={avatar}
        alt={`${name} avatar`}
        size="md"
        fallback={
          <span className="text-[10px] font-bold text-slate-500">
            {name ? name[0] : '?'}
          </span>
        }
      />
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center justify-between h-4 mb-1">
          <div className="flex items-center gap-2 truncate">
            <p className="text-slate-900 text-sm font-bold">{name}</p>
            <span className="text-slate-500 text-[11px]">• {time}</span>
          </div>
          <IconButton
            icon="more_horiz"
            label="More"
            className="text-slate-500 hover:bg-slate-200/60 rounded p-0.5"
            iconClassName="text-[16px]"
          />
        </div>
        {children}
      </div>
    </Card>
  )
}
