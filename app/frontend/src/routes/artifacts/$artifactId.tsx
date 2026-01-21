import { createFileRoute } from '@tanstack/react-router'
import ArtifactDetailScreen from '../../features/artifacts/ArtifactDetailScreen'
import ArtifactHeader from '../../features/artifacts/components/ArtifactHeader'

export const Route = createFileRoute('/artifacts/$artifactId')({
  component: RouteComponent,
  staticData: {
    shell: {
      header: ArtifactHeader,
      backgroundClassName: 'bg-white',
      frameClassName: 'bg-white border-x border-slate-200 shadow-2xl',
      showBottomNav: false,
    },
  },
})

function RouteComponent() {
  return <ArtifactDetailScreen />
}
