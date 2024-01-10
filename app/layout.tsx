import AppRouterCacheProvider from '@mui/material-nextjs/v14-appRouter/AppRouterCacheProvider'

import './styles/global.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}
