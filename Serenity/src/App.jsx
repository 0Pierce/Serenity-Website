import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  
  

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry)=> {
         
        if(entry.isIntersecting){
           
            entry.target.classList.add('cardShow');
        }else{
            entry.target.classList.remove('cardShow');
        }
    
      });
    
    });
      const serviceCards = document.querySelectorAll(".card");
      serviceCards.forEach((el)=> observer.observe(el));

   //Switches between SR and HR
    function switchCard(e){

      if(e.target.classList.contains('mcardRight')){
        console.log("Entered Right")
        e.target.classList.add('mcardRighthover');
        document.querySelector('.mcardLContent').classList.add('mcardContentHide');
        document.querySelector('.mcardLeft').classList.add('mcardLHover');
        document.querySelector('.mcardRContent').classList.remove('mcardContentHide');
      }

      if(e.target.classList.contains('mcardLeft')){
        console.log("Entered Left")
        
        document.querySelector('.mcardRight').classList.remove('mcardRighthover');
        document.querySelector('.mcardLContent').classList.remove('mcardContentHide');
        document.querySelector('.mcardLeft').classList.remove('mcardLHover');
        document.querySelector('.mcardRContent').classList.add('mcardContentHide');
      }
     
        
    }


  return (
    <Fragment>
      
    <div className="mainBody">
    
    <div className="welcome">
    <div className="welcomeCover"></div>
      <div className="welcomeContent">
        
        <div className="welcRectangle">
          <h1>What is laser treatment?</h1>
          <p>Over the past decade, the trend in cultural
and social perception of the “aesthetically
ideal” amount of body hair has been toward
less and less body hair, for both males and
females.
The most common technique currently used
in hair removal procedures is photoepilation:
the use of lasers or filtered intense pulsed
light (IPL) to cause hair-follicle coagulation.
This technique is based on the theory of
Selective Photothermolysis. It requires a
series of treatment sessions spaced 1-3
months apart and is associated with minimal
discomfort and side effects.
The photoepilation application is an IPL
system which features Dynamic Pulse
Control (DPC) technology and
thermoelectric Skin Contact Cooling to
enhance safety, comfort and efficacy on skin
types I to V.

          </p>
         
        
        
        <img src="src/assets/images/Acne.jpg" alt="" />


      
        </div>
      
        <div className="welcBenefits">
          <div className="topBen"><h1>Benefits</h1></div>
          
          <ul>
            <li className='star'>Skin</li>
            <li className='star'>Skin</li>
            <li className='star'>Skin</li>
            <li className='star'>Skin</li>
            <li className='star'>Skin</li>
            <li className='star'>Skin</li>
            <li className='star'>Skin</li>
            <li className='star'>Skin</li>
          </ul>
        </div>
        
     
         
     

     </div>
    </div>
    <div className="mainCardUnder"></div>
    <div className="mainCard">
      <div className="mcardLeft" onMouseEnter={switchCard} onClick={switchCard}>
      <h1 onClick={switchCard} onMouseEnter={switchCard} >HR</h1>
        <div className="mcardLContent" >
        
        <p>GGTAGAGAGAGAGGAGAGGAAGAr sit amet consectetur adipisicing elit. Neque unde, accusantium ipsa eius consectetur magnam quas harum eveniet! Necessitatibus quia eaque perspiciatis ipsum eligendi iure veniam a velit modi temporibus?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere architecto tempora reiciendis cupiditate tenetur qui cumque recusandae modi labore dolore quis culpa hic exercitationem, at delectus aperiam sit aut! Animi?
        </p>
        </div>
        
      </div>
      <div
        className="mcardRight" onMouseEnter={switchCard} onClick={switchCard}>
        <h1 onClick={switchCard} onMouseEnter={switchCard}>SR</h1>
        <div className="mcardRContent">
          <p>BABABABABBABABABA consectetur adipisicing elit. Sequi esse repellendus voluptates, iure quia quas reprehenderit totam dolores! Placeat assumenda eum beatae quaerat consectetur optio dignissimos hic repellat aliquid quos!.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit minima, impedit repellendus quam ipsa iusto, eius odio exercitationem magnam in similique inventore porro a ullam est et cupiditate. Voluptatum, praesentium.
        
          </p>
        </div>
      </div>
    </div>
 
    <div className="footer"></div>

    </div>
    
    </Fragment>
  )
}

export default App
