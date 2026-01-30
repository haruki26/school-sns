import z from 'zod'

export class ApiError extends Error {
  statusCode: number

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
    this.name = 'ApiError'
  }
}

const errorResponseSchema = z.object({
  message: z.string(),
})

export const parseApiError = async (res: Response): Promise<never> => {
  const data = (await res.json()) as unknown
  const parsed = errorResponseSchema.safeParse(data)

  if (parsed.success) {
    throw new ApiError(parsed.data.message, res.status)
  }

  throw new ApiError('An unknown error occurred', res.status)
}
