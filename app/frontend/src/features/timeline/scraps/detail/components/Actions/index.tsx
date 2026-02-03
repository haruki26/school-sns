import { Heart, MessageSquare } from 'lucide-react'
import IconWithLabel from '@/components/ui/IconWithLabel'

interface Props {
  likesCount: number
  commentsCount: number
  targetId: string
  isLiked?: boolean
}

const Actions: React.FC<Props> = ({ likesCount, commentsCount, isLiked }) => {
  return (
    <div className="flex flex-row gap-4 py-2 px-4 border-y border-y-slate-800">
      <button className="rounded">
        <IconWithLabel
          icon={() => (
            <Heart className={isLiked ? 'text-red-500' : 'text-slate-600'} />
          )}
          label={() => <span className="text-slate-600">{likesCount}</span>}
        />
      </button>
      <button className="rounded">
        <IconWithLabel
          icon={() => <MessageSquare className="text-slate-600" />}
          label={() => <span className="text-slate-600">{commentsCount}</span>}
        />
      </button>
    </div>
  )
}

export default Actions
