import { Hono } from 'hono'
import type { Context } from 'hono'
import { setCookie } from 'hono/cookie'
import { jwt } from 'hono/jwt'
import type { JwtVariables } from 'hono/jwt'
import { describeRoute, resolver, validator } from 'hono-openapi'
import { authService } from '../../services/auth/service.js'
import type { app } from '../index.js'
import { loginSchema, signupSchema, authResponseSchema } from './schema.js'

type Variables = JwtVariables
const JWT_SECRET = process.env.JWT_SECRET ?? 'it-is-very-secret'
const TOKEN_EXPIRATION_SEC =
  Number(process.env.TOKEN_EXPIRATION_SEC) || 60 * 60 * 24

const authCheck = jwt({
  secret: JWT_SECRET,
  cookie: 'token',
})
const setAuthCookie = (c: Context, token: string) => {
  setCookie(c, 'token', token, {
    httpOnly: true,
    sameSite: 'Lax',
    path: '/',
    maxAge: TOKEN_EXPIRATION_SEC,
  })
}

export const auth = new Hono<{ Variables: Variables }>()
  .post(
    '/signup',
    describeRoute({
      tags: ['Auth'],
      description: 'Signup endpoint',
      responses: {
        200: {
          description: 'Successful Signup',
          content: {
            'application/json': {
              schema: resolver(authResponseSchema),
            },
          },
        },
        409: {
          description: 'Email already exists',
        },
      },
    }),
    validator('json', signupSchema),
    async (c) => {
      const input = c.req.valid('json')
      const result = await authService.signup(input)
      if (result.type === 'Failure') {
        return c.json({ message: result.error.message }, 409)
      }

      setAuthCookie(c, result.value.token)
      return c.json(result.value, 201)
    },
  )
  .post(
    '/login',
    describeRoute({
      tags: ['Auth'],
      description: 'Login endpoint',
      responses: {
        200: {
          description: 'Successful Login',
          content: {
            'application/json': {
              schema: resolver(authResponseSchema),
            },
          },
        },
        401: {
          description: 'Invalid email or password',
        },
      },
    }),
    validator('json', loginSchema),
    async (c) => {
      const input = c.req.valid('json')
      const result = await authService.login(input)
      if (result.type === 'Failure') {
        return c.json({ message: result.error.message }, 401)
      }

      setAuthCookie(c, result.value.token)
      return c.json(result.value)
    },
  )
  .post(
    '/logout',
    authCheck,
    describeRoute({
      tags: ['Auth'],
      description: 'Logout endpoint',
      responses: {
        200: {
          description: 'Successful Logout',
        },
      },
    }),
    (c) => {
      setCookie(c, 'token', '', {
        httpOnly: true,
        path: '/',
        maxAge: 0, // 即座に期限切れにする
      })
      authService.logout()
      return c.json({ message: 'Logged out' })
    },
  )

export type AppType = typeof app
