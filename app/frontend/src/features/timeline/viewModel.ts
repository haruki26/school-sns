import { artifactTimelineFeed } from '../../mocks/artifact-timeline'
import { timelineFeedByVariant } from '../../mocks/timeline'
import { formatCount } from '../../utils/format'
import type {
  ArtifactTimelineItem,
  ArtifactTimelineItemRecord,
  TimelineItem,
  TimelineItemRecord,
  TimelineVariant,
} from './types'

const toTimelineItem = (item: TimelineItemRecord): TimelineItem => ({
  ...item,
  likes: formatCount(item.likes),
  comments:
    item.comments !== undefined ? formatCount(item.comments) : undefined,
})

const toArtifactTimelineItem = (
  item: ArtifactTimelineItemRecord,
): ArtifactTimelineItem => ({
  ...item,
  contributorsCount: formatCount(item.contributorsTotal),
})

export function getTimelineFeed(variant: TimelineVariant) {
  return timelineFeedByVariant[variant].map(toTimelineItem)
}

export function getArtifactTimelineFeed() {
  return artifactTimelineFeed.map(toArtifactTimelineItem)
}
