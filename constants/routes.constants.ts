export const ROUTES = {
  ALL: '*',
  ROOT: '/',

  LOGIN: '/auth/login',
  SIGN_UP: '/auth/signup',

  PLAN: '/plan',

  GOAL: '/plan/goal',
  FINANCES: '/plan/finances',
  HABITS: '/plan/habits',
  TIME: '/plan/time',
}

export const PUBLIC_ROUTES = ['/']

export const AUTH_ROUTES = [ROUTES.LOGIN, ROUTES.SIGN_UP]

export const apiAuthPrefix = '/api/auth'

export const DEFAULT_LOGIN_REDIRECT = '/settings'
