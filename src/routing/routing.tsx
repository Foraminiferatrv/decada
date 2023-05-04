import { Route, Navigate } from 'react-router-dom'

import { LayoutRoute } from './LayoutRoute'
import { ROUTES } from '../constants/routes'
import { Home } from '../pages/Home/Home'

//TODO: Add 404
export const routing = [
  <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.HOME} />} />,
  <Route element={<LayoutRoute />}>
    <Route path={ROUTES.HOME} element={<Home />} />
  </Route>,
]
