import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from '/src/pages/Homepage.jsx'
import Contact from '/src/pages/Contact.jsx'
import About from '/src/pages/About.jsx'
import './index.css'


import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const mainRouter = createBrowserRouter([

  
  {
    path: "/",
    element: <Homepage/>
  },

  {
    path: "Contact",
    element: <Contact/>
  },
  {
    path: "About",
    element: <About/>
  }



])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={mainRouter}/>
  </React.StrictMode>,
)
