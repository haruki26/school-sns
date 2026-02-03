import { createFileRoute } from '@tanstack/react-router'
import { useFetchScrapDetailOptions } from '@/api/routes/scraps'

export const Route = createFileRoute('/timeline/scraps/detail/$id/')({
  loader: ({ context: { queryClient }, params }) => {
    queryClient.ensureQueryData(useFetchScrapDetailOptions(params.id))
  },
})
