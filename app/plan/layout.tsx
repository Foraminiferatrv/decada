import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import ' /globals.css'
import React, { ReactNode } from 'react'

import { Header } from '../Components/Header/Header'

import S from './styles.module.scss'
import { Navbar } from '../Components/Navbar/Navbar'

type T_MainLayoutProps = {
  children: ReactNode
}

export default ({ children }: T_MainLayoutProps) => {
  return (
    <>
      <Header />
      <Navbar />
      <main className={S.Main}>
        <div className={S.ContentWrapper}>{children}</div>
      </main>
      <footer></footer>
    </>
  )
}
