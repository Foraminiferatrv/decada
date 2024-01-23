import { auth } from '@/lucia'

import * as context from 'next/headers'
import type { NextRequest } from 'next/server'

export const POST = async (req: NextRequest) => {
  const authRequest = auth.handleRequest(req.method, context)
  // check if user is authenticated
  const session = await authRequest.validate()
  if (!session) {
    return new Response(null, {
      status: 401,
    })
  }

  // make sure to invalidate the current session!
  await auth.invalidateSession(session.sessionId)
  // delete session cookie
  authRequest.setSession(null)
  return new Response(null, {
    status: 200,
    // headers: {
    //   Location: 'auth/login', // redirect to login page
    // },
  })
}
