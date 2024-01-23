// import { signIn } from '@/auth'
import { db } from '@/lib/db/db'
import { getUserByEmail } from '@/lib/db/utils/user.utils'

import { LoginSchema, SignupSchema } from '@/schemas/auth.schema'

import { DEFAULT_LOGIN_REDIRECT } from '@/constants/routes.constants'
import { auth } from '@/lucia'
import { loadEnvConfig } from '@next/env'

import bcrypt from 'bcryptjs'
import { AuthError } from 'next-auth'
import { redirect } from 'next/dist/server/api-utils'
import * as context from 'next/headers'
import { permanentRedirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import * as z from 'zod'

const { PASSWORD_SALT } = loadEnvConfig('../').combinedEnv

//  z.infer<typeof SignUpSchema>
export const POST = async (req: NextRequest) => {
  const { data: credentials }: { data: SignupSchema } = await req.json()
  const validatedFields = SignupSchema.safeParse(credentials)

  if (!validatedFields.success) {
    return NextResponse.json(
      { validatedFields },
      {
        status: 401,
        statusText: 'Invalid credentials!',
      },
    )
  }

  const { email, password, name, image } = credentials

  const existingUser = await getUserByEmail(email)

  if (existingUser)
    return Response.json({ error: 'This email is already registered' }, { status: 409 })

  try {
    const user = await auth.createUser({
      key: {
        providerId: 'email',
        providerUserId: email,
        password: password,
      },
      attributes: {
        username: name,
        email,
      },
    })

    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    })

    console.log({ session })

    const authRequest = auth.handleRequest(req.method, context)
    authRequest.setSession(session)

    return new Response(null, {
      status: 302,
      headers: {
        Location: '/',
      },
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 500 })
  }
  // return { success: 'User created!' }
}
