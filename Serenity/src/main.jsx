import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from '/src/components/SHeader.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   

    <Header /> 
   
    <App />
   
    
  </React.StrictMode>,
)
