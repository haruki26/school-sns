export type TrendingItem = {
  rank: number
  title: string
  meta: string
  accent?: boolean
}

export type RecommendedUser = {
  name: string
  avatar: string
  dept: string
  verified?: boolean
}

export type RecommendedArtifact = {
  title: string
  tags: Array<string>
  time: string
  thumbnail: string
  author: {
    name: string
    avatar: string
  }
  likes: number
}

export type RecommendedScrap = {
  author: {
    name: string
    handle: string
    avatar: string
  }
  time: string
  category: string
  text: string
  tags: Array<string>
  comments: number
  likes: number
}

export type RecommendedMedia = {
  title: string
  tags: Array<string>
  time: string
  source: string
  likes: number
}

export type SearchData = {
  recentSearches: Array<string>
  trendingItems: Array<TrendingItem>
  recommendedUser: RecommendedUser
  recommendedArtifact: RecommendedArtifact
  recommendedScrap: RecommendedScrap
  recommendedMedia: RecommendedMedia
}
