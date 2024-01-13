import PersonIcon from '@mui/icons-material/Person'

// import * as S from './styles'
import S from './styles.module.scss'

export const Profile = () => {
  return (
    <div className={S.Profile}>
      <PersonIcon sx={{ width: '100%', height: '100%' }} />
    </div>
  )
}
