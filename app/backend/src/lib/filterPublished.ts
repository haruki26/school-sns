export const isPublished = <T extends Record<PropertyKey, unknown>>(
  data: T & { publishedAt: Date | null },
): data is T & { publishedAt: Date } => data.publishedAt !== null
