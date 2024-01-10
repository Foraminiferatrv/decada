import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React, { ReactNode } from 'react'

import { Header } from '../../Components/Header/Header'

import * as S from './layout.styles'
import { Navbar } from '../../Components/Navbar/Navbar'


type T_MainLayoutProps = {
  children: ReactNode
}

export default ({ children }: T_MainLayoutProps) => {
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
