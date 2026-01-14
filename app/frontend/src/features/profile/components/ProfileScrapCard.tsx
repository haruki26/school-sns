import MaterialIcon from '../../../components/MaterialIcon'
import Avatar from '../../../components/ui/Avatar'
import Badge from '../../../components/ui/Badge'
import type { ProfileScrap } from '../types'

type ProfileScrapCardProps = {
  scrap: ProfileScrap & { commentsLabel: string; likesLabel: string }
}

export default function ProfileScrapCard({ scrap }: ProfileScrapCardProps) {
  return (
    <div className="p-4 border-b border-slate-200 hover:bg-slate-50 transition-colors">
      <div className="flex items-start gap-3">
        <Avatar src={scrap.avatar} alt={scrap.name} size="lg" />
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-between items-baseline">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-slate-900">
                {scrap.name}
              </span>
              <span className="text-xs text-slate-500">{scrap.time}</span>
            </div>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">{scrap.text}</p>
          <div className="flex items-center gap-2 mt-2">
            {scrap.tags.map((tag) => (
              <Badge
                key={tag}
                className="bg-slate-100 border border-slate-200 text-slate-500 normal-case"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-6 mt-2 text-slate-500">
            <button className="flex items-center gap-1.5 hover:text-blue-500 transition-colors text-xs">
              <MaterialIcon name="chat_bubble" className="text-[18px]" />
              {scrap.commentsLabel}
            </button>
            <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors text-xs">
              <MaterialIcon name="favorite" className="text-[18px]" />
              {scrap.likesLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
