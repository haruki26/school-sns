export class ApiError extends Error {
  statusCode: number

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
    this.name = 'ApiError'
  }
}

const isErrorPayload = (data: unknown): data is { message: string } => {
  return (
    typeof data === 'object' &&
    data !== null &&
    'message' in data &&
    typeof (data as { message: unknown }).message === 'string'
  )
}

export const parseApiResponse = async <T>(res: Response): Promise<T> => {
  const data = (await res.json()) as unknown

  if (!res.ok) {
    if (isErrorPayload(data)) {
      throw new ApiError(data.message, res.status)
    }
    throw new ApiError('An unknown error occurred', res.status)
  }

  return data as T
}
