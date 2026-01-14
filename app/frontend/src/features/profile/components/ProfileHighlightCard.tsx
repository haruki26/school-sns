import MaterialIcon from '../../../components/MaterialIcon'
import Avatar from '../../../components/ui/Avatar'
import type { ProfileHighlight } from '../types'

type ProfileHighlightCardProps = {
  highlight: ProfileHighlight & { commentsLabel: string; likesLabel: string }
}

export default function ProfileHighlightCard({
  highlight,
}: ProfileHighlightCardProps) {
  return (
    <div className="p-4 border-b border-slate-200 bg-slate-50">
      <div className="flex items-start gap-3">
        <Avatar src={highlight.avatar} alt={highlight.name} size="lg" />
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-baseline">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-slate-900">
                {highlight.name}
              </span>
              <span className="text-xs text-slate-500">{highlight.time}</span>
            </div>
            {highlight.pinned ? (
              <MaterialIcon
                name="push_pin"
                className="text-blue-500 text-[16px]"
              />
            ) : null}
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            {highlight.text}
          </p>
          <div
            className="mt-2 w-full rounded-lg overflow-hidden border border-slate-200 aspect-video bg-center bg-cover relative group cursor-pointer"
            style={{
              backgroundImage: `url('${highlight.image}')`,
            }}
          >
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/2 transition-colors" />
          </div>
          <div className="flex items-center gap-6 mt-1 text-slate-500">
            <button className="flex items-center gap-1.5 hover:text-blue-500 transition-colors text-xs">
              <MaterialIcon name="chat_bubble" className="text-[18px]" />
              {highlight.commentsLabel}
            </button>
            <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors text-xs">
              <MaterialIcon name="favorite" className="text-[18px]" />
              {highlight.likesLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
