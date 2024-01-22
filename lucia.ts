import { lucia } from 'lucia'
import { nextjs_future } from 'lucia/middleware'
import { pg } from '@lucia-auth/adapter-postgresql'
import { pool } from './lib/db/db'

export const auth = lucia({
  env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",
  middleware: nextjs_future(),
  sessionCookie: { expires: false },
  adapter: pg(pool, { user: 'user', key: 'key', session: 'session' }),
  
  getUserAttributes: (data) => {
    console.log({ 'lucia.ts': data })
    return {
      username: data.username,
      email: data.email,
      emailVerified: data.email_verified,
    }
  },
})

export type Auth = typeof auth
