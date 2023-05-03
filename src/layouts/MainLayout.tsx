import type { ReactNode } from 'react'
import { Header } from '../Components/Header/Header'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export { MainLayout }
