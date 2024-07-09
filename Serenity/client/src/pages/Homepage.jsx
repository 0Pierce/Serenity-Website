import React from 'react'
import Landing from '/src/components/Landing.jsx'
import Header from '/src/components/Header.jsx'
import "/src/styles/Homepage.css"


export default function Homepage() {
  return (

    <>
    
    <Landing/>
    <Header/>
    <div className="homepageBody">
      homepage
    </div>
    
    </>
   
  )
}
