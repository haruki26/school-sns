import { createFileRoute } from '@tanstack/react-router'
import { useFetchArtifactsDetailOptions } from '@/api/routes/artifacts'
import { useFetchSelfInfoOptions } from '@/api/routes/users'

export const Route = createFileRoute('/timeline/artifacts/detail/$id/')({
  loader: ({ context: { queryClient }, params }) => {
    queryClient.ensureQueryData(useFetchArtifactsDetailOptions(params.id))
    queryClient.ensureQueryData(useFetchSelfInfoOptions())
  },
})
