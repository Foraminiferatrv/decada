import NextAuth from 'next-auth'
import { KyselyAdapter } from '@auth/kysely-adapter'

import authConfig from '@/auth.config'
import { db } from './lib/db/db'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: KyselyAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
})
