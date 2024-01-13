import { redirect } from 'next/navigation'
import { ROUTES } from '../../constants/routes.constants'


export default function plan() {
  redirect(ROUTES.GOAL)
}
