import { Navigate, Route } from 'react-router-dom'

import { ROUTES } from '../constants/routes'
import { Goal } from '../pages/Goal/Goal'
import { Login } from '../pages/auth/Login/Login'
import { SignUp } from '../pages/auth/SignUp/SignUp'
import { AuthLayoutRoute, ProtectedRoute } from './LayoutRoutes'

//TODO: Add 404
//TODO: /plans/id:PLAN_ID/
export const routing = [
  <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.PLAN} />} />,
  <Route element={<ProtectedRoute />}>
    <Route path={ROUTES.PLAN}>
      <Route path={ROUTES.PLAN} element={<Navigate to={ROUTES.GOAL} />} />,
      <Route path={ROUTES.GOAL} element={<Goal />} />
      <Route path={ROUTES.FINANCES} element={<div> FINANCES</div>} />
      <Route path={ROUTES.HABITS} element={<div> HABITS</div>} />
      <Route path={ROUTES.TIME} element={<div> TIME</div>} />
    </Route>
  </Route>,
  <Route element={<AuthLayoutRoute />}>
    <Route path={ROUTES.LOGIN} element={<Login />} />
    <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
  </Route>,
]
