import GitHub from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

import { LoginSchema } from '@/schemas/auth.schema'

import type { NextAuthConfig } from 'next-auth'
import { getUserByEmail } from '@/lib/db/utils/user.utils'
import { db } from './lib/db/db'

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials)

        if (validatedFields.success) {
          const { email, password } = validatedFields.data

          // const user = await getUserByEmail(email)
          const [user] = await db
            .selectFrom('User')
            .selectAll()
            .where('email', '=', email)
            .execute()

          if (!user || !user.password) return null

          const passwordsMatch = await bcrypt.compare(password, user.password)

          if (passwordsMatch) return user
        }

        return null
      },
    }),
  ],
} satisfies NextAuthConfig
