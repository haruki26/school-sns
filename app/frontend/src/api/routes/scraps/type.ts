import type z from 'zod'
import type {
  getScrapsQuerySchema,
  registerScrapSchema,
  updateScrapSchema,
} from 'backend/src/routes/scraps/schema'

type GetScrapsQuerySchema =
  | Partial<NonNullable<z.infer<typeof getScrapsQuerySchema>>>
  | undefined

type PostScrapRequestBody = z.infer<typeof registerScrapSchema>

type UpdateScrapRequestBody = z.infer<typeof updateScrapSchema>

export type {
  GetScrapsQuerySchema,
  PostScrapRequestBody,
  UpdateScrapRequestBody,
}
