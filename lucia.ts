import { cache } from 'react'

import { pg } from '@lucia-auth/adapter-postgresql'

import { lucia } from 'lucia'
import { nextjs_future } from 'lucia/middleware'
import * as context from 'next/headers'

import { pool } from './lib/db/db'

export const auth = lucia({
  env: process.env.NODE_ENV === 'development' ? 'DEV' : 'PROD',
  middleware: nextjs_future(),
  sessionCookie: { expires: false },
  adapter: pg(pool, { user: 'user', key: 'key', session: 'session' }),

  getUserAttributes: (data) => {
    return {
      username: data.username,
      email: data.email,
      emailVerified: data.email_verified,
    }
  },
})

export type Auth = typeof auth

export const getPageSession = cache(() => {
  const authRequest = auth.handleRequest('GET', context)
  return authRequest.validate()
})
