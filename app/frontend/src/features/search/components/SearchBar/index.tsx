import { Search, X } from 'lucide-react'
import { useSearchForm } from '@/features/search/hooks/useSearchForm'

interface Props {
  placeholder?: string
  keyword: string | null
}

const SearchBar: React.FC<Props> = ({ placeholder = 'Search...', keyword }) => {
  const { form } = useSearchForm({ keyword })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className="flex w-full gap-4"
    >
      <form.Field name="keyword">
        {(field) => (
          <div className="flex w-full justify-between items-center gap-2 bg-slate-300 px-4 py-2 rounded-md">
            <div className="flex gap-3">
              <Search className="h-6 w-6 text-slate-700" />
              <input
                type="text"
                id={field.name}
                name={field.name}
                value={field.state.value ?? ''}
                onChange={(e) =>
                  field.handleChange(
                    e.target.value === '' ? null : e.target.value,
                  )
                }
                placeholder={placeholder}
                className="w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-700"
              />
            </div>
            {field.state.value && (
              <button
                type="button"
                onClick={() => field.handleChange(null)}
                className="text-slate-700 hover:text-slate-900 transition-colors"
                aria-label="Clear search"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        )}
      </form.Field>
      <form.Subscribe selector={(state) => [state.canSubmit]}>
        {([canSubmit]) => (
          <button type="submit" disabled={!canSubmit} aria-label="Search">
            <span className="text-nowrap text-md">検索</span>
          </button>
        )}
      </form.Subscribe>
    </form>
  )
}

export default SearchBar
