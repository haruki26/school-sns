import { createFileRoute } from '@tanstack/react-router'
import { useFetchTagsOptions } from '@/api/routes/tags'
import { useFetchSelfInfoOptions } from '@/api/routes/users'
import { useFetchArtifactsDetailOptions } from '@/api/routes/artifacts'
import { UneditableError } from '@/features/timeline/errors'

export const Route = createFileRoute('/timeline/artifacts/edit/$id/')({
  loader: async ({ context: { queryClient }, params }) => {
    queryClient.ensureQueryData(useFetchTagsOptions())

    const {
      user: { id: targetUserId },
    } = await queryClient.ensureQueryData(
      useFetchArtifactsDetailOptions(params.id),
    )
    const { id: accessUserId } = await queryClient.ensureQueryData(
      useFetchSelfInfoOptions(),
    )

    if (targetUserId !== accessUserId) {
      throw new UneditableError('artifact')
    }
  },
})
