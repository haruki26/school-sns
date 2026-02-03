import UserPreview from '@/components/ui/UserPreview'

interface Props {
  owner: {
    id: string
    avatarUrl: string | null
    name: string
  }
  scrap: {
    id: string
    title: string
    body: string
    createdAt: string
    updatedAt: string
  }
}

const ScrapDetail: React.FC<Props> = ({ owner, scrap }) => {
  return (
    <div className="flex flex-col gap-2 px-2 py-3 bg-slate-50">
      <h3 className="text-2xl font-bold">{scrap.title}</h3>
      <UserPreview
        id={owner.id}
        avatarUrl={owner.avatarUrl}
        name={owner.name}
        classNames={{ avatar: 'w-8 h-8', name: 'text-lg' }}
      />
      <div className="px-2 text-slate-700 whitespace-pre-wrap wrap-break-words">
        {scrap.body}
      </div>
      <div className="flex flex-col gap-1 text-sm text-slate-500">
        <span>Created at: {new Date(scrap.createdAt).toLocaleString()}</span>
        <span>Updated at: {new Date(scrap.updatedAt).toLocaleString()}</span>
      </div>
    </div>
  )
}

export default ScrapDetail
