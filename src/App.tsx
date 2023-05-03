import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import { routing } from './routing/routing'

const router = createBrowserRouter(createRoutesFromElements(routing))

export default function App() {
  return <RouterProvider router={router} />
}
