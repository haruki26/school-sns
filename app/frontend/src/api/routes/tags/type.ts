import type {
  addTagSchema,
  getTagsQuerySchema,
  updateTagSchema,
} from 'backend/src/routes/tags/schema'
import type z from 'zod'

type GetTagsQuerySchema = z.infer<typeof getTagsQuerySchema>

type PostTagRequestBody = z.infer<typeof addTagSchema>

type UpdateTagRequestBody = z.infer<typeof updateTagSchema>

export type { GetTagsQuerySchema, PostTagRequestBody, UpdateTagRequestBody }
