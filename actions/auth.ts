'use server'
import { loadEnvConfig } from '@next/env'
import { SignUpSchema, LoginSchema } from '@/schemas/auth.schema'
import * as z from 'zod'
import bcrypt from 'bcryptjs'
import { db } from '@/lib/db/db'
import { v4 as uuidv4 } from 'uuid'
import { getUserByEmail } from '@/lib/db/utils/user.utils'
import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/constants/routes.constants'

import { AuthError } from 'next-auth'

const { PASSWORD_SALT } = loadEnvConfig('../').combinedEnv

export const logIn = async (credentials: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(credentials)

  if (!validatedFields.success) {
    return { error: 'Invalid credentials!' }
  }

  const { password, email } = validatedFields.data

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials!' }

        default:
          return { error: 'Something went wrong!' }
      }
    }
    throw error
  }
}

export const signUp = async (credentials: z.infer<typeof SignUpSchema>) => {
  const validatedFields = SignUpSchema.safeParse(credentials)

  if (!validatedFields.success) {
    return { error: 'Invalid credentials!' }
  }

  const { email, password, name, image } = credentials

  const hashedPassword = await bcrypt.hash(password, Number(PASSWORD_SALT!))

  const existingUser = await getUserByEmail(email)

  if (existingUser) return { error: 'This email is already registered' }

  const newUser = await db
    .insertInto('User')
    .values({ id: uuidv4(), email, password: hashedPassword, name, image })
    .execute()

  return { success: 'User created!' }
}
