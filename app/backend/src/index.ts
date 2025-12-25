import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

export const app = new Hono()
  .use(
    '*',
    cors({
      origin: ['http://localhost:3157'],
    }),
  )
  .get('/', (c) => {
    return c.text('Hello Hono!')
  })
  .get('/demo', (c) => {
    return c.json({ message: 'This is a demo endpoint.' })
  })

export type AppType = typeof app

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server running on http://localhost:${info.port.toString()}`)
  },
)
