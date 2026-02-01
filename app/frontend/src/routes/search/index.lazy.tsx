import { createLazyFileRoute } from '@tanstack/react-router'
import SearchHistories from '@/features/search/components/SearchHistories'

export const Route = createLazyFileRoute('/search/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SearchHistories />
}
