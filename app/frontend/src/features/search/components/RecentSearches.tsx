import MaterialIcon from '../../../components/MaterialIcon'
import SectionHeader from '../../../components/ui/SectionHeader'

type RecentSearchesProps = {
  items: Array<string>
}

export default function RecentSearches({ items }: RecentSearchesProps) {
  return (
    <section className="py-5 px-4">
      <SectionHeader
        title="最近の検索"
        action={
          <button className="text-xs text-blue-600 font-bold hover:opacity-70 px-2 py-1 -mr-2">
            履歴を削除
          </button>
        }
        className="mb-3"
      />
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-sm text-slate-900 font-medium group"
          >
            <MaterialIcon
              name="history"
              className="text-[18px] text-slate-500 group-hover:text-slate-900"
            />
            {item}
          </button>
        ))}
      </div>
    </section>
  )
}
