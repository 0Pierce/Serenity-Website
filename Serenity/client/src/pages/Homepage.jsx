import React,{useRef, useEffect} from 'react';
import Landing from '/src/components/Landing.jsx';
import Header from '/src/components/Header.jsx';
import Footer from '/src/components/Footer.jsx'
import Lottie, {} from 'lottie-react'
import { useNavigate } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import "/src/styles/Homepage.css";
import animData from '/src/assets/svgs/FlowerSprout.json'
import cloudsAnim from '/src/assets/svgs/CloudAnim.json'
import moonAnim from '/src/assets/svgs/MoonAnim.json'
import fallingStarsAnim from '/src/assets/svgs/FallingStarsAnim.json'
import starsAnim from '/src/assets/svgs/StarsAnim.json'
import birdsAnim from '/src/assets/svgs/BirdsAnim.json'


import img1 from "/src/assets/images/img3.jpg"
import img2 from "/src/assets/images/img3.jpg"
import img3 from "/src/assets/images/img3.jpg"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Homepage() {


  const navigate = useNavigate();
  const btnBookNow = () =>{

    console.log("click");
    navigate("/Contact");

  }

  const flowerRef = useRef(null)
  const birdRef = useRef();
  const meteorRef = useRef();

  

  useEffect(() => {
    if (birdRef.current) {
      birdRef.current.setSpeed(0.3);
    }

    if (meteorRef.current) {
      meteorRef.current.setSpeed(0.2);
    }

    if(flowerRef.current){
      
    }

  }, []);



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
                
                <p>The Rapid DPC provides a <span>safe and effective solution</span> for hair removal, acne, pigmented vascular lesions, wrinkles, fine lines, and more.</p>

                <p>With the Rapid DPC, you receive quick treatments that will not cut into your busy live. In most cases, <span>visible results can be seen after just a few sessions.</span></p>


              </div>
              <div className="hp1InfoBottom">
              <div className="buttonBookNow" onClick={btnBookNow}><h3>Book now!</h3></div>

              </div>

            </div>
            
          </div>


        </div>


     

        <div className="hpSecondPage">

          <div className="hp2left">
            <div className="hp2leftClouds">
              <Lottie animationData={cloudsAnim}/>
            </div>
            <div className="hp2LeftBirds"><Lottie animationData={birdsAnim} lottieRef={birdRef}/></div>
            <h3>Benefits</h3>
          <div className="flowerAnim">
              
              <Lottie lottieRef={flowerRef}
               animationData={animData}
             

               />
          </div>
          </div>
          <div className="hp2right">
            <div className="hp2rightTop">
              <h3>Hair removal</h3>
              <div className="hp2rightCards">
                <div className="hp2Card">
                  <div className="hp2CardTop"><h4>Long term solution</h4></div>
                  
                  <div className="hp2CardBottom"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum quas quia dignissimos laboriosam quisquam ea vel ad quae at est praesentium autem nihil hic iste obcaecati atque, dolorum fugiat.</p></div>
                  </div>
                <div className="hp2Card">
                <div className="hp2CardTop"><h4>Title</h4></div>
                <div className="hp2CardBottom"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum quas quia dignissimos laboriosam quisquam ea vel ad quae at est praesentium autem nihil hic iste obcaecati atque, dolorum fugiat.</p>
                </div>
                </div>
                <div className="hp2Card">
                <div className="hp2CardTop"><h4>Title</h4></div>
                <div className="hp2CardBottom"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum quas quia dignissimos laboriosam quisquam ea vel ad quae at est praesentium autem nihil hic iste obcaecati atque, dolorum fugiat.</p>
                </div>
                </div>

              </div>
              <div className="hp2rightTopBackground">
                <Lottie animationData={fallingStarsAnim} lottieRef={meteorRef}/>
                <div className="hp2MoonContainer">
                <Lottie animationData={moonAnim}/>
                </div>
              </div>
                
            </div>
            <div className="hp2rightBottom">
             
              <h3>Skin Rejuvenation</h3>
              <div className="hp2rightCards">
              <div className="hp2Card">
                  <div className="hp2CardTop"><h4>Restores Youth</h4></div>
                  <div className="hp2CardBottom"><p>It takes years off your age in terms of appearance by regenating the collagen in your skin. Thanks to the increase in collagen it also delays the ageing process and returns the radiant glow of your youth.</p>
                  </div>
                  </div>
                <div className="hp2Card">
                <div className="hp2CardTop"><h4>Treats wrinkes & more</h4></div>
                <div className="hp2CardBottom"><p>Reduce fine lines, wrinkles, sun damage, pigmentation, melasma, open pores, freckles, uneven skin tone and enhance eleasticity. Results are visible just after a couple treatments and may last for years.</p>
                </div>
                </div>
                <div className="hp2Card">
                <div className="hp2CardTop"><h4>IPL Therapy</h4></div>
                <div className="hp2CardBottom"><p>IPL technology is non-invasive and painless. It uses many wavelengths to fix unwanted skin pigment conditions or vein changes. The light waves pass through the top layer of skin (epidermis) to the targeted lesion, either pigmented or vascular. In IPL treatment for pigment issues: The light heats the pigment cells and destroys them. </p>
                </div>
                </div>
                <div className="hp2rightBottomBackground">
                  <Lottie animationData={starsAnim}/>
                </div>
              </div>
                
            </div>
          </div>

      

        </div>

        <div className="hpThirdPage">
          <div className="hp3Top">
            <div className="hp3LeftTop"></div>
            <div className="hp3RightTop">
              <div className="hp3Spacer"></div>
              <h1>See the results</h1>
              <img src="/src/assets/images/img6.jpg" alt="Banner Image" />
              
              </div>
          </div>
          <div className="hp3Bottom">
            <div className="hp3LeftBottom">
              <div className="hp3CarContainer">
                  <div className="hp3Carousel">
                  <h2>Hair Removal</h2>

                  <Carousel interval={6000}>
                        <Carousel.Item>
                          <img src="/src/assets/images/img4.jpg" alt="" />
                          
                      </Carousel.Item>

                      <Carousel.Item>
                          <img src="/src/assets/images/img6.jpg" alt="" />
                          
                      </Carousel.Item>

                    </Carousel>

                  </div>
                </div>

            </div>
            <div className="hp3RightBottom">
              <div className="hp3CarContainer">
                    <div className="hp3Carousel">
                    <h2>Skin Rejuvenation</h2>

                    <Carousel interval={6000}>
                          <Carousel.Item>
                            <img src="/src/assets/images/img4.jpg" alt="" />
                            
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src="/src/assets/images/img6.jpg" alt="" />
                            
                        </Carousel.Item>

                      </Carousel>

                    </div>
                  </div>

            </div>
            
          </div>
      
        </div>
        <button></button>

        {/* <div className="hpFourthPage">
          Placeholder 
        </div> */}
      </div>

      <Footer/>
    </>
  );
}
