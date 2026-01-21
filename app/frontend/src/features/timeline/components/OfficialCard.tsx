import TimelineActionButton from './TimelineActionButton'

type OfficialCardProps = {
  name: string
  time: string
  text: string
  likes: string
}

export default function OfficialCard({
  name,
  time,
  text,
  likes,
}: OfficialCardProps) {
  return (
    <article className="flex flex-row items-start gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
      <div className="size-8 shrink-0 flex items-center justify-center rounded-full bg-slate-900 text-white font-bold text-[10px] tracking-wide ring-1 ring-slate-200 shadow-sm">
        AD
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center justify-between h-4 mb-1">
          <div className="flex items-center gap-2 truncate">
            <p className="text-slate-900 text-sm font-bold">{name}</p>
            <span className="bg-slate-100 text-slate-900 text-[9px] font-bold px-1.5 py-0.5 rounded border border-slate-200">
              OFFICIAL
            </span>
            <span className="text-slate-500 text-[11px]">• {time}</span>
          </div>
        </div>
        <p className="text-slate-900 text-[13px] leading-relaxed">{text}</p>
        <div className="flex items-center gap-4 mt-2">
          <TimelineActionButton icon="favorite" count={likes} />
        </div>
      </div>
    </article>
  )
}
