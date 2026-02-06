import { createFileRoute } from '@tanstack/react-router'
import { useFetchArtifactsOptions } from '@/api/routes/artifacts'

export const Route = createFileRoute('/timeline/artifacts/')({
  loader: ({ context: { queryClient } }) => {
    queryClient.ensureQueryData(useFetchArtifactsOptions())
  },
})
