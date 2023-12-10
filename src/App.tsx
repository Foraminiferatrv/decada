import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'
import { routing } from './routing/routing'
import { authApi } from './services/auth.api'
import { setIsAuthenticated } from './store/slices/auth.slice'

const router = createBrowserRouter(createRoutesFromElements(routing))

export default function App() {
  const dispatch = useDispatch()
  const [checkAuth] = authApi.useLazyCheckAuthQuery()

  useEffect(() => {
    checkAuth()
      .unwrap()
      .then(() => {
        dispatch(setIsAuthenticated(true))
        console.log('unwrap')
      })
      .catch((error) => {
        setIsAuthenticated(false)
        console.log(error)
      })
  }, [])

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer hideProgressBar autoClose={2000} />
    </>
  )
}
