export const isPublished = <T extends Record<PropertyKey, unknown>>(
  data: T & { publishedAt: Date | null },
): data is T & { publishedAt: Date } => data.publishedAt !== null

export const isStatusString = <T extends Record<PropertyKey, unknown>>(
  data: T & { status: string },
): data is T & { status: 'DRAFT' | 'PUBLISHED' } =>
  data.status === 'DRAFT' || data.status === 'PUBLISHED'
