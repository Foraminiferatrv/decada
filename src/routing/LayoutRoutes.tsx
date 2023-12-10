import { Navigate, Outlet } from 'react-router-dom'

import { ROUTES } from '../constants/routes'
import { useStoreSelector } from '../hooks/useStore'
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
  const isAuth = useStoreSelector((state) => state.auth.isAuthenticated)
  console.log({ isAuth })
  // debugger
  if (!isAuth) return <Navigate to={ROUTES.LOGIN} />

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}
