import { Outlet } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout/MainLayout'

const LayoutRoute = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

export { LayoutRoute }
