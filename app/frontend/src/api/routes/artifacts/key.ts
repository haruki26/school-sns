export const artifactsKeys = {
  all: ['artifacts'] as const,
  lists: () => [...artifactsKeys.all, 'lists'] as const,
  list: (query?: Record<PropertyKey, unknown>) =>
    [...artifactsKeys.lists(), { query }] as const,
  details: () => [...artifactsKeys.all, 'details'] as const,
  detail: (id: string) => [...artifactsKeys.details(), id] as const,
}
