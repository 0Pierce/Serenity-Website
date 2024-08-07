import React from 'react'
import Header from '/src/components/Header.jsx';
import Footer from '/src/components/Footer.jsx'
import '/src/styles/Aboutpage.css'

export default function AboutPage() {
  return (
    <>
    <Header/>
    
    <div className="aboutPageBody">
      <div className="ap1">

      <div className="ap1Sec1">
        <div className="ap1Sec1L">
          <h2>How does it work?</h2>
        </div>
        <div className="ap1Sec1R"></div>
      </div>
      <div className="ap1Sec1">
      <div className="ap1Sec1L"></div>
      <div className="ap1Sec1R"></div>
      </div>

      </div>
    </div>


    <Footer/>
    </>
  )
}
