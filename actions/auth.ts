'use server'

import { loadEnvConfig } from '@next/env'
import { SignupSchema } from '@/schemas/auth.schema'
import bcrypt from 'bcrypt'
import { db } from '@/lib/db/db'
import { v4 as uuidv4 } from 'uuid'

const { PASSWORD_SALT } = loadEnvConfig('../').combinedEnv

export const logIn = async (values: any) => {
  return new Promise((resolve) => setTimeout(resolve, 6000))
}

export const signUp = async ({ email, password, name, image }: SignupSchema) => {
  const hashedPassword = await bcrypt.hash(password, Number(PASSWORD_SALT!))

  const existingUser = await db.selectFrom('users').selectAll().where('email', '=', email).execute()
  console.log({ existingUser })

  if (existingUser.length > 0) return { error: 'This email is already registered' }

  const newUser = await db
    .insertInto('users')
    .values({ user_id: uuidv4(), email, password: hashedPassword, name, image })
    .execute()

  console.log({ newUser })
  return { success: 'User created!' }
}
