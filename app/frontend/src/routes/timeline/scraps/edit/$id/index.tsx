import { createFileRoute } from '@tanstack/react-router'
import { useFetchScrapDetailOptions } from '@/api/routes/scraps'
import { useFetchTagsOptions } from '@/api/routes/tags'
import { useFetchSelfInfoOptions } from '@/api/routes/users'
import { UneditableError } from '@/features/timeline/scraps/edit/errors'

export const Route = createFileRoute('/timeline/scraps/edit/$id/')({
  loader: async ({ context: { queryClient }, params }) => {
    queryClient.ensureQueryData(useFetchTagsOptions())

    const {
      user: { id: targetUserId },
    } = await queryClient.ensureQueryData(useFetchScrapDetailOptions(params.id))
    const { id: accessUserId } = await queryClient.ensureQueryData(
      useFetchSelfInfoOptions(),
    )

    if (targetUserId !== accessUserId) {
      throw new UneditableError()
    }
  },
})
