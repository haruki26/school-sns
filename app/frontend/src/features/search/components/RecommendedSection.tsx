import MaterialIcon from '../../../components/MaterialIcon'
import Avatar from '../../../components/ui/Avatar'
import Badge from '../../../components/ui/Badge'
import SectionHeader from '../../../components/ui/SectionHeader'
import type {
  RecommendedArtifact,
  RecommendedMedia,
  RecommendedScrap,
  RecommendedUser,
} from '../types'

type RecommendedSectionProps = {
  user: RecommendedUser
  artifact: RecommendedArtifact & { likesLabel: string }
  scrap: RecommendedScrap & { likesLabel: string; commentsLabel: string }
  media: RecommendedMedia & { likesLabel: string }
}

export default function RecommendedSection({
  user,
  artifact,
  scrap,
  media,
}: RecommendedSectionProps) {
  return (
    <section className="pt-5">
      <SectionHeader title="おすすめ" className="px-4 mb-2" />
      <div className="px-4 py-3 hover:bg-slate-50 transition-colors border-b border-slate-200/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar src={user.avatar} alt="User avatar" size="lg" />
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-[15px] font-bold text-slate-900">
                  {user.name}
                </p>
                {user.verified ? (
                  <MaterialIcon
                    name="verified"
                    filled
                    className="text-[14px] text-blue-600"
                  />
                ) : null}
              </div>
              <p className="text-xs text-slate-500">{user.dept}</p>
            </div>
          </div>
          <button className="px-4 py-1.5 rounded-full bg-black text-white text-xs font-bold hover:bg-slate-800 transition-colors">
            フォロー
          </button>
        </div>
      </div>

      <div className="px-4 py-4 border-b border-slate-200/50 hover:bg-slate-50 transition-colors cursor-pointer group">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-blue-50 text-emerald-600">
            <MaterialIcon name="grid_view" className="text-[12px]" />
            Artifact
          </Badge>
          <span className="text-xs text-slate-500">{artifact.time}</span>
        </div>
        <div className="flex gap-4">
          <div className="w-28 h-24 shrink-0 rounded-xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200/50">
            <img
              alt="Project thumbnail"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src={artifact.thumbnail}
            />
          </div>
          <div className="flex-1 flex flex-col h-24 justify-between py-0.5">
            <div>
              <h4 className="text-[15px] font-bold text-slate-900 leading-snug mb-1 line-clamp-2">
                {artifact.title}
              </h4>
              <div className="flex flex-wrap gap-1 mb-1">
                {artifact.tags.map((tag) => (
                  <span key={tag} className="text-xs text-blue-600 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Avatar
                src={artifact.author.avatar}
                alt="Creator avatar"
                size="xs"
                className="ring-1 ring-white"
              />
              <span className="text-xs text-slate-500 font-medium">
                {artifact.author.name}
              </span>
              <div className="ml-auto flex items-center gap-3 text-slate-500">
                <span className="flex items-center gap-0.5 text-xs font-medium">
                  <MaterialIcon name="favorite" className="text-[14px]" />
                  {artifact.likesLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 border-b border-slate-200/50 hover:bg-slate-50 transition-colors cursor-pointer">
        <div className="flex items-start gap-3">
          <div className="shrink-0 pt-1">
            <Avatar
              src={scrap.author.avatar}
              alt={scrap.author.name}
              size="lg"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5 overflow-hidden">
                <span className="text-[15px] font-bold text-slate-900 truncate">
                  {scrap.author.name}
                </span>
                <span className="text-xs text-slate-500 truncate">
                  {scrap.author.handle}
                </span>
                <span className="text-xs text-slate-500">• {scrap.time}</span>
              </div>
              <Badge className="bg-blue-50 text-blue-600">
                {scrap.category}
              </Badge>
            </div>
            <p className="text-[15px] text-slate-900 leading-relaxed mb-3">
              {scrap.text}{' '}
              {scrap.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  {tag}{' '}
                </span>
              ))}
            </p>
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-1.5 group p-1 -ml-1 hover:bg-blue-50 rounded-lg transition-colors">
                <MaterialIcon
                  name="chat_bubble"
                  className="text-[18px] text-slate-500 group-hover:text-blue-600"
                />
                <span className="text-xs text-slate-500 group-hover:text-blue-600 font-medium">
                  {scrap.commentsLabel}
                </span>
              </button>
              <button className="flex items-center gap-1.5 group p-1 hover:bg-pink-50 rounded-lg transition-colors">
                <MaterialIcon
                  name="favorite"
                  className="text-[18px] text-slate-500 group-hover:text-pink-500"
                />
                <span className="text-xs text-slate-500 group-hover:text-pink-500 font-medium">
                  {scrap.likesLabel}
                </span>
              </button>
              <button className="flex items-center gap-1.5 group p-1 hover:bg-emerald-50 rounded-lg transition-colors">
                <MaterialIcon
                  name="share"
                  className="text-[18px] text-slate-500 group-hover:text-emerald-500"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 border-b border-slate-200/50 hover:bg-slate-50 transition-colors cursor-pointer group">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-emerald-50 text-emerald-600">
            <MaterialIcon name="grid_view" className="text-[12px]" />
            Artifact
          </Badge>
          <span className="text-xs text-slate-500">{media.time}</span>
        </div>
        <div className="flex gap-4">
          <div className="w-28 h-24 shrink-0 rounded-xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200/50">
            <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
              <MaterialIcon name="movie" className="text-3xl" />
            </div>
          </div>
          <div className="flex-1 flex flex-col h-24 justify-between py-0.5">
            <div>
              <h4 className="text-[15px] font-bold text-slate-900 leading-snug mb-1 line-clamp-2">
                {media.title}
              </h4>
              <div className="flex flex-wrap gap-1 mb-1">
                {media.tags.map((tag) => (
                  <span key={tag} className="text-xs text-blue-600 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-5 rounded-full bg-slate-300" />
              <span className="text-xs text-slate-500 font-medium">
                {media.source}
              </span>
              <div className="ml-auto flex items-center gap-3 text-slate-500">
                <span className="flex items-center gap-0.5 text-xs font-medium">
                  <MaterialIcon name="favorite" className="text-[14px]" />
                  {media.likesLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
