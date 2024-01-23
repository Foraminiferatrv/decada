import { LoginSchema } from '@/schemas/auth.schema'

import { auth } from '@/lucia'

import { LuciaError } from 'lucia'
import * as context from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  const { data }: { data: LoginSchema } = await req.json()
  const validatedFields = LoginSchema.safeParse(data)

  if (!validatedFields.success) {
    return Response.json(
      { validatedFields },
      {
        status: 401,
        statusText: 'Invalid credentials!',
      },
    )
  }

  try {
    const key = await auth.useKey('email', data.email, data.password)
    // console.log(key)
    const session = await auth.createSession({
      userId: key.userId,
      attributes: {},
    })

    const authRequest = auth.handleRequest(req.method, context)
    authRequest.setSession(session)

    return new Response(null, {
      status: 302,
      headers: {
        Location: '/',
      },
    })
  } catch (error) {
    if (
      error instanceof LuciaError &&
      (error.message === 'AUTH_INVALID_KEY_ID' || error.message === 'AUTH_INVALID_PASSWORD')
    ) {
      // user does not exist or invalid password
      return NextResponse.json(
        {
          error: 'Incorrect username or password',
        },
        {
          status: 400,
        },
      )
    }
    return Response.json(null, { status: 500, statusText: 'Login error' })
  }
}
