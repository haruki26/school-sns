import { createFileRoute } from '@tanstack/react-router'
import NewPostScreen from '../../features/posts/NewPostScreen'
import PostHeader from '../../features/posts/components/PostHeader'

export const Route = createFileRoute('/posts/new')({
  component: RouteComponent,
  staticData: {
    shell: {
      header: PostHeader,
      backgroundClassName: 'bg-slate-100',
      frameClassName:
        'bg-white shadow-2xl overflow-hidden border-x border-slate-200',
      headerClassName: 'z-30 backdrop-blur-sm',
      showBottomNav: false,
    },
  },
})

function RouteComponent() {
  return <NewPostScreen />
}
