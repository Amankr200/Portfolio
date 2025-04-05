import React from 'react'
import Sidebar from './components/Sidebar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Skills from './components/Skills' // Import the Skills component

const router = createBrowserRouter([
  {
    path:"/",
    element:<About/>
  },
  {
    path:"/resume",
    element:<Resume/>
  },
  {
    path:"/portfolio",
    element:<Portfolio/>
  },
  {
    path:"/skills", // Add the Skills route
    element:<Skills/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
])

const App = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
