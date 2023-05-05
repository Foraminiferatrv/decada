import type { ReactNode } from 'react'

import { Header } from '../../Components/Header/Header'

import * as S from './styles'
import { Navbar } from '../../Components/Navbar/Navbar'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <Navbar />
      <S.Main>
        <S.ContentWrapper>{children}</S.ContentWrapper>
      </S.Main>
      <footer></footer>
    </>
  )
}

export { MainLayout }
