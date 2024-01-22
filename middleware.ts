import NextAuth from 'next-auth'

import authConfig from './auth.config'
import {
  AUTH_ROUTES,
  DEFAULT_LOGIN_REDIRECT,
  PUBLIC_ROUTES,
  ROUTES,
  apiAuthPrefix,
} from './constants/routes.constants'

// const { auth } = NextAuth(authConfig)

// export default auth((req) => {
//   const { nextUrl, auth } = req
//   const isLoggedIn = !!auth
//   const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
//   const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname)
//   const isAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname)

//   if (isApiAuthRoute) {
//     return null
//   }

//   if (isAuthRoute) {
//     if (isLoggedIn) {
//       return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
//     }

//     return null
//   }

//   if (!isLoggedIn && !isPublicRoute) {
//     return Response.redirect(new URL('/auth/login', nextUrl))
//   }
//   return null
// })

export default function middleware() {
  return null
}

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
