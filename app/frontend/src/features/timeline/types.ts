export type TimelineVariant = 'scrap' | 'artifact'

export type TimelineItemKind = 'question' | 'quote' | 'official' | 'request'

export type TimelineItemRecord = {
  id: string
  kind: TimelineItemKind
  name: string
  time: string
  text: string
  avatar?: string
  tag?: string
  likes: number
  comments?: number
}

export type TimelineItem = {
  id: string
  kind: TimelineItemKind
  name: string
  time: string
  text: string
  avatar?: string
  tag?: string
  likes: string
  comments?: string
}

export type ArtifactTimelineItemRecord = {
  id: string
  name: string
  time: string
  title: string
  description: string
  image: string
  avatar: string
  contributors: Array<string>
  contributorsTotal: number
}

export type ArtifactTimelineItem = ArtifactTimelineItemRecord & {
  contributorsCount: string
}
