// import ' /globals.css'
import React, { ReactNode } from 'react'

import { ROUTES } from '@/constants/routes.constants'
import { getPageSession } from '@/lucia'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation'

import { Header } from '../../Components/Header/Header'
import { Navbar } from '../../Components/Navbar/Navbar'
import S from './styles.module.scss'

type T_MainLayoutProps = {
  children: ReactNode
}

export default async ({ children }: T_MainLayoutProps) => {
  const session = await getPageSession()
  console.log({ layout: session })
  if (!session) redirect(ROUTES.LOGIN)

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
