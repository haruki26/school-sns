import { hc } from 'hono/client'
import type { AppType } from './routes/index.js'

export const createClient = (...params: Parameters<typeof hc<AppType>>) =>
  hc<AppType>(...params)
