import { artifactDetailData } from '../../mocks/artifact-detail'
import { formatCount } from '../../utils/format'
import type { ArtifactDetailView } from './types'

export function getArtifactDetailViewData(): ArtifactDetailView {
  return {
    ...artifactDetailData,
    viewsLabel: formatCount(artifactDetailData.views),
    likesLabel: formatCount(artifactDetailData.likes),
    commentsCount: formatCount(artifactDetailData.comments.length),
    comments: artifactDetailData.comments.map((comment) => ({
      ...comment,
      likesLabel: formatCount(comment.likes),
    })),
  }
}
