import React from 'react';
import Landing from '/src/components/Landing.jsx';
import Header from '/src/components/Header.jsx';
import "/src/styles/Homepage.css";

export default function Homepage() {
  return (
    <>
      <Landing />
      <Header />
      <div className="homepageBody">
        <div className="hpFirstPage">
          <div className="hp1Title">
            <h2>Our Treatments</h2>
          </div>
          <div className="hp1CardContainer">
            <div className="hp1card">
              <div className="cardFace cardFront">
                <div className="top"><img src="/src/assets/images/img4.jpg" alt="" />
                </div>
                <div className="bottom">
                <h1>Hair Removal</h1>
                </div>
              </div>
              <div className="cardFace cardBack">
                <h1>Back Side</h1>
              </div>
             
            </div>
            <div className="hp1card">
              <div className="cardFace cardFront">
                <div className="top">
                <img src="/src/assets/images/img5.jpg" alt="" />
                </div>
                <div className="bottom">
                  <h1>Skin Rejuvenation</h1>
                </div>
              </div>
              <div className="cardFace cardBack">
                <h1>Back Side</h1>
              </div>
              
            </div>

            <div className="hp1Info">
              Our tools
           
              
            </div>
          </div>


        </div>
        <div className="hpSecondPage"></div>
      </div>
    </>
  );
}
