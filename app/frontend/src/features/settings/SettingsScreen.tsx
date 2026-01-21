import { useNavigate } from '@tanstack/react-router'
import MaterialIcon from '../../components/MaterialIcon'
import Avatar from '../../components/ui/Avatar'
import SettingsRow from './components/SettingsRow'
import { getSettingsViewData } from './viewModel'

export default function SettingsScreen() {
  const navigate = useNavigate()
  const data = getSettingsViewData()

  return (
    <>
      <main className="flex-1 overflow-y-auto pb-10">
        <section className="flex flex-col items-center pt-8 pb-6 px-4 bg-white rounded-b-2xl shadow-sm">
          <div className="relative mb-4 group cursor-pointer">
            <div className="w-36 h-36 rounded-full bg-amber-50 overflow-hidden border-4 border-white shadow-xl">
              <Avatar
                alt="Profile Picture"
                src={data.profile.avatar}
                size="xl"
                ring={false}
                className="h-full w-full"
              />
            </div>
            <div className="absolute bottom-2 right-2 bg-indigo-400 text-white p-2 rounded-full border-2 border-white shadow-md flex items-center justify-center hover:bg-indigo-400/90 transition-colors active:scale-95">
              <MaterialIcon name="edit" className="text-[18px]" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-1 text-slate-900">
            {data.profile.name}
          </h2>
          <p className="text-base text-slate-500 font-medium mb-3">
            {data.profile.dept}
          </p>
          <p className="text-base text-slate-900 text-center max-w-[300px] leading-relaxed">
            {data.profile.bio}
          </p>
        </section>

        {data.sections.map((section) => (
          <section key={section.title} className="px-4 mt-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-3 mb-2">
              {section.title}
            </h3>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
              {section.items.map((item, index) => (
                <SettingsRow
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  iconClassName={item.iconClassName}
                  withDivider={index < section.items.length - 1}
                />
              ))}
            </div>
          </section>
        ))}

        <section className="px-4 mt-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
            <button
              className="w-full flex items-center justify-between p-4 hover:bg-red-50 transition-colors active:bg-red-100 group"
              onClick={() => navigate({ to: '/login' })}
              type="button"
            >
              <span className="text-base font-medium text-red-500 text-left w-full text-center">
                ログアウト
              </span>
            </button>
          </div>
        </section>

        <div className="mt-8 text-center pb-8">
          <p className="text-xs text-slate-500">{data.versionLabel}</p>
        </div>
      </main>
    </>
  )
}
