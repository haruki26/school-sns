import { useNavigate } from '@tanstack/react-router'
import MaterialIcon from '../../components/MaterialIcon'
import ProfileArtifactCard from './components/ProfileArtifactCard'
import ProfileHero from './components/ProfileHero'
import ProfileHighlightCard from './components/ProfileHighlightCard'
import ProfileScrapCard from './components/ProfileScrapCard'
import ProfileTabs from './components/ProfileTabs'
import { getProfileViewData } from './viewModel'

export default function ProfileScreen() {
  const navigate = useNavigate()
  const data = getProfileViewData()

  return (
    <>
      <ProfileHero user={data.user} statValues={data.user.stats} />
      <ProfileTabs />
      <main className="flex-1 flex flex-col w-full pb-24 bg-slate-50 overflow-y-auto scrollbar-hide">
        <ProfileHighlightCard highlight={data.highlight} />
        <ProfileScrapCard scrap={data.scrap} />
        <ProfileArtifactCard artifact={data.artifact} />
      </main>
      <button
        className="absolute bottom-24 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-xl shadow-blue-500/30 hover:bg-blue-500/90 hover:scale-105 active:scale-95 transition-all group"
        aria-label="Create post"
        onClick={() => navigate({ to: '/posts/new' })}
        type="button"
      >
        <MaterialIcon
          name="edit"
          className="text-2xl group-hover:rotate-90 transition-transform duration-300"
        />
      </button>
    </>
  )
}
