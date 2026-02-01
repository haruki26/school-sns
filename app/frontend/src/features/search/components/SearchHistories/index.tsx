import { ClockFading, X } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { useSearchHistory } from '@/features/search/hooks/useSearchHistory'

const SearchHistories: React.FC = () => {
  const { histories, updateHistoryTimestamp, deleteHistory } =
    useSearchHistory()

  return (
    <div className="flex flex-col gap-2 w-full">
      {histories
        .sort((a, b) => b.searchedAt.getTime() - a.searchedAt.getTime())
        .map((history) => (
          <Link
            key={history.id}
            to="/search/result"
            search={{ keyword: history.keyword }}
            className="flex justify-between items-center px-2 w-full"
            onClick={() => updateHistoryTimestamp(history.id)}
          >
            <div className="flex items-center gap-3">
              <ClockFading className="w-5 h-5 text-slate-500" />
              <span className="text-slate-800 text-lg">{history.keyword}</span>
            </div>
            <button
              className="text-sm text-red-500 hover:underline"
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                deleteHistory(history.id)
              }}
            >
              <X className="w-5 h-5" />
            </button>
          </Link>
        ))}
    </div>
  )
}

export default SearchHistories
