import { searchData } from '../../mocks/search'
import { formatCount } from '../../utils/format'
import type {
  RecommendedArtifact,
  RecommendedMedia,
  RecommendedScrap,
  RecommendedUser,
  TrendingItem,
} from './types'

type RecommendedArtifactView = RecommendedArtifact & {
  likesLabel: string
}

type RecommendedScrapView = RecommendedScrap & {
  likesLabel: string
  commentsLabel: string
}

type RecommendedMediaView = RecommendedMedia & {
  likesLabel: string
}

type SearchViewData = {
  recentSearches: Array<string>
  trendingItems: Array<TrendingItem>
  recommendedUser: RecommendedUser
  recommendedArtifact: RecommendedArtifactView
  recommendedScrap: RecommendedScrapView
  recommendedMedia: RecommendedMediaView
}

export function getSearchViewData(): SearchViewData {
  return {
    ...searchData,
    recommendedArtifact: {
      ...searchData.recommendedArtifact,
      likesLabel: formatCount(searchData.recommendedArtifact.likes),
    },
    recommendedScrap: {
      ...searchData.recommendedScrap,
      likesLabel: formatCount(searchData.recommendedScrap.likes),
      commentsLabel: formatCount(searchData.recommendedScrap.comments),
    },
    recommendedMedia: {
      ...searchData.recommendedMedia,
      likesLabel: formatCount(searchData.recommendedMedia.likes),
    },
  }
}
