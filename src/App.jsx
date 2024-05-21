import React from "react"
import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./pages/About"
import Services from "./pages/Services"
import Event from "./pages/Event"



function App() {

  
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/services',
    element:<Services/>
  },
  {
    path:'/events',
    element:<Event/>
  }
])

  return (
    <div className="bg-dark">
        <RouterProvider router={router}/>
    </div>
  )
}

export default App
