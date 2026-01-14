import { getProfileViewData } from '../viewModel'
import ProfileHeader from './ProfileHeader'

export default function ProfileShellHeader() {
  const data = getProfileViewData()
  return <ProfileHeader handle={data.user.handle} />
}
