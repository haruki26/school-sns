import { useNavigate } from '@tanstack/react-router'
import MaterialIcon from '../../components/MaterialIcon'
import Avatar from '../../components/ui/Avatar'
import { getArtifactDetailViewData } from './viewModel'

export default function ArtifactDetailScreen() {
  const navigate = useNavigate()
  const data = getArtifactDetailViewData()

  return (
    <>
      <main className="flex-1 overflow-y-auto scrollbar-hide pb-20 bg-white">
        <div className="relative w-full aspect-[4/3] bg-slate-100 group overflow-hidden">
          <img
            alt="Artifact hero"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={data.heroImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex gap-2 mb-2">
              {data.tags.map((tag, index) => (
                <span
                  key={tag}
                  className={
                    index === 0
                      ? 'px-2.5 py-1 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg backdrop-blur-md'
                      : 'px-2.5 py-1 bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-md border border-white/30'
                  }
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="px-5 pt-6">
          <h1 className="text-2xl font-bold leading-tight text-slate-900 mb-4 tracking-tight">
            {data.title}
          </h1>
          <div className="flex items-center justify-between py-2 border-b border-slate-200 mb-6">
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <MaterialIcon name="calendar_today" className="text-[16px]" />
              {data.date}
            </span>
            <div className="flex items-center gap-4 text-slate-500">
              <span className="text-xs font-medium flex items-center gap-1">
                <MaterialIcon name="visibility" className="text-[16px]" />
                {data.viewsLabel}
              </span>
              <span className="text-xs font-medium flex items-center gap-1">
                <MaterialIcon
                  name="favorite"
                  className="text-[16px] text-pink-500"
                  filled
                />
                {data.likesLabel}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-1 mb-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar
                  alt={data.author.name}
                  src={data.author.avatar}
                  size="lg"
                  className="ring-2 ring-white shadow-md"
                />
                <div className="absolute -bottom-0.5 -right-0.5 bg-emerald-500 size-3 border-2 border-white rounded-full" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-none mb-1">
                  {data.author.name}
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  {data.author.dept}
                </p>
              </div>
            </div>
            <button
              className="group flex items-center gap-1 pl-4 pr-3 py-2 bg-slate-900 text-white rounded-full shadow-lg shadow-slate-200 hover:scale-105 active:scale-95 transition-all"
              onClick={() => navigate({ to: '/profile' })}
              type="button"
            >
              <span className="text-xs font-bold">Profile</span>
              <MaterialIcon
                name="arrow_forward"
                className="text-[16px] group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </div>

          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 p-5 mb-8 shadow-sm">
            <div className="absolute -right-6 -top-6 text-indigo-200/40 rotate-12 pointer-events-none">
              <MaterialIcon name="smart_toy" className="text-[140px]" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-indigo-100 text-indigo-600 rounded-lg">
                  <MaterialIcon name="smart_toy" className="text-[20px]" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-900">
                  AI Summary
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-700 font-medium">
                {data.summary}
              </p>
            </div>
          </section>

          <section className="text-slate-500 text-sm leading-relaxed space-y-4 mb-10">
            <p>{data.body[0]}</p>
            <p>{data.body[1]}</p>
            <p className="text-slate-900 font-semibold italic border-l-2 border-blue-500 pl-4 my-4">
              &quot;{data.quote}&quot;
            </p>
            <p>{data.body[2]}</p>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900 text-lg">
                Comments{' '}
                <span className="text-slate-500 text-sm font-normal ml-1">
                  ({data.commentsCount})
                </span>
              </h3>
              <button className="flex items-center text-xs font-bold text-blue-500 cursor-pointer">
                Top
                <MaterialIcon name="expand_more" className="text-[16px]" />
              </button>
            </div>
            <div className="flex flex-col gap-5">
              {data.comments.map((comment) => (
                <CommentItem
                  key={comment.name}
                  avatar={comment.avatar}
                  name={comment.name}
                  time={comment.time}
                  text={comment.text}
                  likes={comment.likesLabel}
                />
              ))}
            </div>
            <button className="w-full py-4 text-xs font-bold text-slate-500 hover:text-blue-500 transition-colors mt-2">
              View all comments
            </button>
          </section>
        </div>
      </main>

      <div className="sticky bottom-0 bg-white border-t border-slate-200 px-4 py-3 pb-[env(safe-area-inset-bottom)] z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
        <div className="flex items-center gap-3">
          <Avatar
            className="hidden sm:block border border-slate-200"
            src={data.currentUserAvatar}
            alt="User avatar"
            size="md"
          />
          <div className="relative flex-1">
            <input
              className="w-full bg-slate-50 border-none rounded-full py-3 pl-4 pr-12 text-sm focus:ring-1 focus:ring-blue-500 placeholder:text-slate-500/60 transition-shadow"
              placeholder="Add a comment..."
              type="text"
            />
            <button
              className="absolute right-2 top-2 p-1 text-blue-500 hover:bg-blue-50 rounded-full transition-colors disabled:opacity-50"
              aria-label="Send comment"
            >
              <MaterialIcon name="send" className="text-[20px]" filled />
            </button>
          </div>
          <button
            className="p-3 rounded-full text-slate-500 hover:bg-pink-50 hover:text-pink-500 transition-colors border border-transparent hover:border-pink-100 flex items-center justify-center"
            aria-label="Favorite"
          >
            <MaterialIcon name="favorite" className="text-[24px]" />
          </button>
        </div>
      </div>
    </>
  )
}

type CommentItemProps = {
  avatar: string
  name: string
  time: string
  text: string
  likes: string
}

function CommentItem({ avatar, name, time, text, likes }: CommentItemProps) {
  return (
    <div className="flex gap-3">
      <Avatar
        className="shrink-0 mt-0.5 border border-slate-200"
        src={avatar}
        alt={name}
        size="md"
      />
      <div className="flex-1">
        <div className="bg-slate-50 p-3.5 rounded-2xl rounded-tl-none">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-slate-900">{name}</span>
            <span className="text-[10px] text-slate-500">{time}</span>
          </div>
          <p className="text-xs text-slate-900 leading-relaxed">{text}</p>
        </div>
        <div className="flex items-center gap-4 mt-1.5 ml-2">
          <button className="text-[11px] font-bold text-slate-500 hover:text-slate-900">
            Reply
          </button>
          <button className="flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-pink-500 group">
            <MaterialIcon name="favorite" className="text-[14px]" />
            {likes}
          </button>
        </div>
      </div>
    </div>
  )
}
