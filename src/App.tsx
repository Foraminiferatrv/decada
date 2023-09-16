import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'
import { routing } from './routing/routing'

const router = createBrowserRouter(createRoutesFromElements(routing))

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer hideProgressBar autoClose={2000} />
    </>
  )
}
