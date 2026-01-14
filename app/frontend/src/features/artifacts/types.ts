export type ArtifactComment = {
  avatar: string
  name: string
  time: string
  text: string
  likes: number
}

export type ArtifactAuthor = {
  name: string
  dept: string
  avatar: string
}

export type ArtifactDetailData = {
  title: string
  date: string
  views: number
  likes: number
  tags: Array<string>
  heroImage: string
  author: ArtifactAuthor
  currentUserAvatar: string
  summary: string
  body: Array<string>
  quote: string
  comments: Array<ArtifactComment>
}

export type ArtifactDetailView = ArtifactDetailData & {
  viewsLabel: string
  likesLabel: string
  commentsCount: string
  comments: Array<ArtifactComment & { likesLabel: string }>
}
