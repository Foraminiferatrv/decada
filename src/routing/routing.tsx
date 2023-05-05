import { Route, Navigate } from 'react-router-dom'

import { LayoutRoute } from './LayoutRoute'
import { ROUTES } from '../constants/routes'
import { Goal } from '../pages/Goal/Goal'

//TODO: Add 404
//TODO: /plans/id:PLAN_ID/
export const routing = [
  <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.PLAN} />} />,
  // <Route path={ROUTES.PLAN} element={<Navigate to={ROUTES.GOAL} />} />,
  <Route element={<LayoutRoute />}>
    <Route path={ROUTES.PLAN}>
      <Route path={ROUTES.GOAL} element={<Goal />} />
      <Route path={ROUTES.FINANCES} element={<div> FINANCES</div>} />
      <Route path={ROUTES.HABITS} element={<div> HABITS</div>} />
      <Route path={ROUTES.TIME} element={<div> TIME</div>} />
    </Route>
  </Route>,
]
