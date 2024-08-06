import React, { useEffect } from 'react'
import "/src/styles/Footer.css"
import { useNavigate } from 'react-router-dom';



export default function Footer() {
  const navigate = useNavigate();



 
    //TODO: Optimize - Shouldnt be called outside useEffect, or make const
    function onClickFooter(type){

      // console.log("click"+type)
      // switch (type){
      //   case "Contact":
      //     navigate("/Contact");
      //     break;
  
      //   case "About":
      //     navigate("/About");
      //     break;
  
      //   case "Prices":
      //     navigate("/Prices");
      //     break
  
      //   case "Benefits":
      //     navigate("/Benefits");
  
      //     break
  
      //   case "Landing":
      //     navigate("/");
      //     break
      // }
  
    }


 



  return (
    <>
    <div className="footerBody">

      <div className="footerContent">
        <div className="footerTop">
          <div className="footerCard">
            
            <div className="fCardContent">
              <h2>Serenity</h2>
              <p></p>
            
            </div>
          </div>
          <div className="footerCard">
            <h3>Explore</h3>
            <div className="fCardContent">

            <ul>
              <li onClick={onClickFooter("Contact")}>Contact</li>
              <li onClick={onClickFooter("About")} >About</li>
              <li onClick={onClickFooter("Prices")}>Prices</li>
              <li onClick={onClickFooter("Benefits")}>Benefits</li>
              <li onClick={onClickFooter("Landing")}>Landing</li>
            </ul>

            </div>

    
            
            
            </div>
          <div className="footerCard">
            <h3>Get in touch</h3>
            <div className="fCardContent">

            </div>
            
            </div>

        <hr />
        </div>
        
        <div className="footerBottom">
          <footer>&copy;Serenity Medi-Clinic All rights reserved</footer>
        </div>
      </div>

    </div>
    </>
  )
}
