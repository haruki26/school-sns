import { createLazyFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import Editor from '@/features/timeline/components/Editor'
import { usePostScrapForm } from '@/features/timeline/scraps/create/hooks/usePostScrpaForm'
import { useFetchTagsOptions } from '@/api/routes/tags'
import FilterTag from '@/components/ui/FilterTag'
import Button from '@/components/ui/Button'

export const Route = createLazyFileRoute('/timeline/scraps/create/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { replyTo } = Route.useSearch()
  const { form } = usePostScrapForm(replyTo)

  const { data: tags } = useSuspenseQuery(useFetchTagsOptions())

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className="flex flex-col gap-2 min-h-full px-5 py-4 bg-slate-100"
    >
      <form.Field name="title">
        {(field) => (
          <div className="w-full flex flex-col gap-1">
            <label htmlFor={field.name} className="text-lg font-medium">
              Title
            </label>
            <input
              id={field.name}
              name={field.name}
              type="text"
              placeholder="Title"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              className="px-1 py-2 bg-slate-50 border rounded-lg"
            />
          </div>
        )}
      </form.Field>
      <form.Field name="body">
        {(field) => (
          <div className="w-full flex flex-col gap-1 flex-1">
            <label htmlFor={field.name} className="text-lg font-medium">
              Body
            </label>
            <Editor
              id={field.name}
              initialContent={field.state.value}
              onChange={(content) => field.handleChange(content)}
              className="max-h-full overflow-y-auto"
            />
          </div>
        )}
      </form.Field>
      <form.Field name="tags">
        {(field) => (
          <div className="w-full flex flex-col gap-1">
            <label className="text-lg font-medium whitespace-nowrap">
              Tags
            </label>
            <div className="w-full flex overflow-x-auto gap-2 py-2 scrollbar-hidden">
              {tags.map((tag) => {
                const isSelected = field.state.value.includes(tag.id)
                return (
                  <FilterTag
                    key={tag.id}
                    label={tag.name}
                    isSelected={isSelected}
                    onClick={() =>
                      isSelected
                        ? field.removeValue(field.state.value.indexOf(tag.id))
                        : field.pushValue(tag.id)
                    }
                  />
                )
              })}
            </div>
          </div>
        )}
      </form.Field>
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <Button
            type="submit"
            disabled={!canSubmit || isSubmitting}
            className="w-full"
          >
            投稿
          </Button>
        )}
      </form.Subscribe>
    </form>
  )
}
