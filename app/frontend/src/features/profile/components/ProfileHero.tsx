import MaterialIcon from '../../../components/MaterialIcon'
import Avatar from '../../../components/ui/Avatar'
import Badge from '../../../components/ui/Badge'
import type { ProfileUser } from '../types'

type ProfileHeroProps = {
  user: ProfileUser
  statValues: Array<{ label: string; value: string }>
}

export default function ProfileHero({ user, statValues }: ProfileHeroProps) {
  return (
    <section className="relative w-full flex flex-col items-center pt-6 px-4 pb-0">
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center w-full max-w-md gap-3">
        <div className="relative">
          <div className="p-[3px] rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-blue-400">
            <Avatar
              src={user.avatar}
              alt={user.name}
              size="xl"
              ring={false}
              className="border-4 border-white"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-white border border-slate-200 p-1 rounded-full shadow-lg">
            <MaterialIcon
              name="palette"
              className="text-[18px] text-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-1.5 mt-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            {user.name}
          </h1>
          <div className="flex flex-wrap justify-center gap-2">
            {user.badges.map((badge) => (
              <Badge
                key={badge.label}
                className={
                  badge.tone === 'purple'
                    ? 'bg-purple-500/15 text-purple-700 border border-purple-500/30 normal-case text-xs'
                    : 'bg-blue-500/15 text-blue-700 border border-blue-500/30 normal-case text-xs'
                }
              >
                {badge.label}
              </Badge>
            ))}
          </div>
          <p className="text-slate-500 text-base font-normal leading-relaxed max-w-sm mt-2">
            {user.bio}
          </p>
        </div>
        <div className="flex w-full gap-3 mt-4">
          <button className="flex-1 h-12 bg-blue-500 hover:bg-blue-500/90 active:scale-[0.98] text-white text-base font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-md">
            <MaterialIcon name="person_add" className="text-xl" />
            Follow
          </button>
          <button className="h-12 w-16 shrink-0 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl flex items-center justify-center hover:bg-slate-100 active:scale-[0.98] transition-all shadow-sm">
            <MaterialIcon name="mail" className="text-xl" />
          </button>
          <button className="h-12 w-16 shrink-0 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl flex items-center justify-center hover:bg-slate-100 active:scale-[0.98] transition-all shadow-sm">
            <MaterialIcon name="share" className="text-xl" />
          </button>
        </div>
        <div className="flex w-full justify-between px-2 py-3 border-y border-slate-200 mt-4 bg-slate-50 rounded-lg shadow-inner">
          {statValues.map((stat, index) => (
            <div key={stat.label} className="flex items-center flex-1">
              <button className="flex flex-1 flex-col items-center cursor-pointer hover:bg-slate-50 rounded-md py-1">
                <span className="text-lg font-bold text-slate-900">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-500">{stat.label}</span>
              </button>
              {index < statValues.length - 1 ? (
                <div className="w-px bg-slate-200 h-8 self-center" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
