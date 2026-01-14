export type ProfileBadge = {
  label: string
  tone: 'purple' | 'blue'
}

export type ProfileStat = {
  label: string
  value: number
}

export type ProfileUser = {
  handle: string
  name: string
  avatar: string
  bio: string
  badges: Array<ProfileBadge>
  stats: Array<ProfileStat>
}

export type ProfileHighlight = {
  name: string
  time: string
  text: string
  image: string
  avatar: string
  comments: number
  likes: number
  pinned?: boolean
}

export type ProfileScrap = {
  name: string
  time: string
  text: string
  tags: Array<string>
  comments: number
  likes: number
  avatar: string
}

export type ProfileArtifact = {
  name: string
  time: string
  title: string
  description: string
  image: string
  avatar: string
  contributors: Array<string>
  contributorsTotal: number
}

export type ProfileData = {
  user: ProfileUser
  highlight: ProfileHighlight
  scrap: ProfileScrap
  artifact: ProfileArtifact
}
