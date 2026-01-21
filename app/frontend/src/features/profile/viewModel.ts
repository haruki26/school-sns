import { profileData } from '../../mocks/profile'
import { formatCount } from '../../utils/format'
import type {
  ProfileArtifact,
  ProfileHighlight,
  ProfileScrap,
  ProfileUser,
} from './types'

type ProfileStatView = {
  label: string
  value: string
}

type ProfileUserView = ProfileUser & {
  stats: Array<ProfileStatView>
}

type ProfileHighlightView = ProfileHighlight & {
  commentsLabel: string
  likesLabel: string
}

type ProfileScrapView = ProfileScrap & {
  commentsLabel: string
  likesLabel: string
}

type ProfileArtifactView = ProfileArtifact & {
  contributorsCount: string
}

type ProfileViewData = {
  user: ProfileUserView
  highlight: ProfileHighlightView
  scrap: ProfileScrapView
  artifact: ProfileArtifactView
}

export function getProfileViewData(): ProfileViewData {
  return {
    user: {
      ...profileData.user,
      stats: profileData.user.stats.map((stat) => ({
        label: stat.label,
        value: formatCount(stat.value),
      })),
    },
    highlight: {
      ...profileData.highlight,
      commentsLabel: formatCount(profileData.highlight.comments),
      likesLabel: formatCount(profileData.highlight.likes),
    },
    scrap: {
      ...profileData.scrap,
      commentsLabel: formatCount(profileData.scrap.comments),
      likesLabel: formatCount(profileData.scrap.likes),
    },
    artifact: {
      ...profileData.artifact,
      contributorsCount: formatCount(profileData.artifact.contributorsTotal),
    },
  }
}
