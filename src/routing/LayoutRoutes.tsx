import { Navigate, Outlet } from 'react-router-dom'

import { ROUTES } from '../constants/routes'
import { AuthLayout } from '../layouts/Auth/AuthLayout'
import { MainLayout } from '../layouts/MainLayout/MainLayout'

export const AuthLayoutRoute = () => {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  )
}

export const ProtectedRoute = () => {
  const session = true
  const isAuth = false

  if (!session || !isAuth) return <Navigate to={ROUTES.LOGIN} />

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}
