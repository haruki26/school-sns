import { createFileRoute } from '@tanstack/react-router'
import ArtifactDetailScreen from '../../features/artifacts/ArtifactDetailScreen'

export const Route = createFileRoute('/artifacts/$artifactId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ArtifactDetailScreen />
}
