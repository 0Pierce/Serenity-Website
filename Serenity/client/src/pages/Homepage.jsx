import React from 'react';
import Landing from '/src/components/Landing.jsx';
import Header from '/src/components/Header.jsx';
import { useNavigate } from 'react-router-dom';import "/src/styles/Homepage.css";

export default function Homepage() {


  const navigate = useNavigate();
  const btnBookNow = () =>{

    console.log("click");
    navigate("/Contact");

  }



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

                <p><span>How does hair removal work?</span> Dynamic Pulse Control™ (DPC) technology is a powerful light-based technology that targets the hair follicle <span>without harming any other parts of the skin.</span> During the treatment, <span>the heat energy denaturizes the melanin in the hair follicle</span>, and as a result, that follicle cannot grow new hair.</p>
                <p>Imagine never having to take care of unwanted hair on your body ever again. In a split second,<span>you can wear the outfit of your choice without thinking about your exposed skin.</span> </p>
                <br />
                <p><span>Hair removal is the #1 aesthetic treatment</span> among non-invasive procedures.</p>
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
                <p>There are so many factors out there that prematurely age your skin: <span>the sun, pollution, smoking, malnutrition etc..</span> But this doesn't mean that you have to just accept it! Today, more than ever, <span>you can easily fight the signs of aging</span> and restore your skin’s youthful appearance.</p>
                <br />
                <p>During treatment, DPC pulses are emitted onto the target area. Depending on the condition that is being treated, your aesthetic physician can choose the best energy level - from very high to low pulses. <span>The pulses penetrate the dermal layer of the skin and heat up the tissue.</span></p>
              </div>
              
            </div>

            <div className="hp1Info">
            <h1>Sharplight Technology</h1>
              <div className="hp1InfoTop">
                
                <p>The Rapid DPC provides a <span>safe and effective solution</span> for hair removal, acne, pigmented and vascular lesions, wrinkles, fine lines, and more.</p>

                <p>With the Rapid DPC, you receive quick treatments that will not cut into your busy live. In most cases, <span>visible results can be seen after just a few sessions.</span></p>


              </div>
              <div className="hp1InfoBottom">
              <div className="buttonBookNow" onClick={btnBookNow}><h3>Book now!</h3></div>

              </div>

            </div>
            
          </div>


        </div>
        <div className="hpSecondPage"></div>
      </div>
    </>
  );
}
