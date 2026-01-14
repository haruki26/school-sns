import { createFileRoute } from '@tanstack/react-router'
import SearchScreen from '../features/search/SearchScreen'
import SearchHeader from '../features/search/components/SearchHeader'

export const Route = createFileRoute('/search')({
  component: RouteComponent,
  staticData: {
    shell: {
      header: SearchHeader,
      bottomNav: 'search',
      backgroundClassName: 'bg-slate-100',
      frameClassName: 'bg-white shadow-2xl overflow-hidden',
      headerClassName: 'pt-[env(safe-area-inset-top)]',
    },
  },
})

function RouteComponent() {
  return <SearchScreen />
}
