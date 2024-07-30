import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from '/src/pages/Homepage.jsx'
import Contact from '/src/pages/ContactPage.jsx'
import About from '/src/pages/AboutPage.jsx'
import Prices from '/src/pages/Prices.jsx'
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
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/prices",
    element: <Prices/>
  }



])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={mainRouter}/>
  </React.StrictMode>,
)
