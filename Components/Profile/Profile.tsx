'use client'

import { API_ROUTES } from '@/constants/routes.constants'
import PersonIcon from '@mui/icons-material/Person'

import { useRouter } from 'next/navigation'

// import * as S from './styles'
import S from './styles.module.scss'

export const Profile = async () => {
  const router = useRouter()

  const logout = async () => {
    await fetch(API_ROUTES.SIGN_OUT, { method: 'POST' })
    router.refresh()
  }

  return (
    <div className={S.Profile}>
      <PersonIcon sx={{ width: '100%', height: '100%' }} onClick={() => logout()} />
    </div>
  )
}
