import RecentSearches from './components/RecentSearches'
import RecommendedSection from './components/RecommendedSection'
import TrendingSection from './components/TrendingSection'
import { getSearchViewData } from './viewModel'

export default function SearchScreen() {
  const data = getSearchViewData()

  return (
    <main className="flex-1 overflow-y-auto scrollbar-hide pb-24 bg-white">
      <RecentSearches items={data.recentSearches} />

      <div className="h-2 bg-slate-50 border-y border-slate-200/50" />

      <TrendingSection items={data.trendingItems} />

      <div className="h-2 bg-slate-50 border-y border-slate-200/50" />

      <RecommendedSection
        user={data.recommendedUser}
        artifact={data.recommendedArtifact}
        scrap={data.recommendedScrap}
        media={data.recommendedMedia}
      />
    </main>
  )
}
