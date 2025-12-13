import { hc } from 'hono/client'
import type { AppType } from './index.ts'

export const createClient = (...params: Parameters<typeof hc>) =>
  hc<AppType>(...params)
