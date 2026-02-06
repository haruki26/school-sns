export const tagsKeys = {
  all: ['tags'] as const,
  lists: () => [...tagsKeys.all, 'lists'] as const,
  list: (query?: Record<PropertyKey, unknown>) =>
    [...tagsKeys.lists(), { query }] as const,
  details: () => [...tagsKeys.all, 'details'] as const,
  detail: (id: string) => [...tagsKeys.details(), id] as const,
}
