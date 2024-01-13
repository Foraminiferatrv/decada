import { redirect } from 'next/navigation'
import { ROUTES } from '../constants/routes.constants'

export default async function Home() {
  // redirect(ROUTES.PLAN)
  redirect(ROUTES.LOGIN)
}
