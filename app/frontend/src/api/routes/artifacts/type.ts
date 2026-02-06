import type {
  getArtifactsQuerySchema,
  registerArtifactSchema,
  updateArtifactSchema,
} from 'backend/src/routes/artifacts/schema'
import type z from 'zod'

type GetArtifactsQuerySchema = z.infer<typeof getArtifactsQuerySchema>

type PostArtifactsRequestBody = z.infer<typeof registerArtifactSchema>

type UpdateArtifactsRequestBody = z.infer<typeof updateArtifactSchema>

export type {
  GetArtifactsQuerySchema,
  PostArtifactsRequestBody,
  UpdateArtifactsRequestBody,
}
