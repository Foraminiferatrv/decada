import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { AppRouterCacheProvider } from '@mui/material-nextjs/build/v14-appRouter'

import './styles/global.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
