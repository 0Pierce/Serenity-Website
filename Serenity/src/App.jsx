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
        
        document.querySelector('.mcardRContent').classList.add('mcardRContentSHOW');
       
       
      }

      if(e.target.classList.contains('mcardLeft')){
        console.log("Entered Left")
        
        document.querySelector('.mcardRight').classList.remove('mcardRighthover');
        document.querySelector('.mcardRContent').classList.remove('mcardRContentSHOW');
        
      }

      








      if(e.target.classList.contains('mcardRightSR')){
        console.log("Entered Right")
        e.target.classList.add('mcardRighthoverSR');
        
        document.querySelector('.mcardRContentSR').classList.add('mcardRContentSHOW');
       
       
      }

      if(e.target.classList.contains('mcardLeftSR')){
        console.log("Entered Left")
        
        document.querySelector('.mcardRightSR').classList.remove('mcardRighthoverSR');
        document.querySelector('.mcardRContentSR').classList.remove('mcardRContentSHOW');
        
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
            <li className='star'>You can get stunning, age-defying results with little to no downtime.</li>
            <li className='star'>Cosmetic laser facial treatments restore a naturally youthful look to your face.</li>
            <li className='star'>Machines are far more accurate than humans.</li>
            <li className='star'>Cosmetic laser treatments can now treat issues that were considered untreatable.</li>
            <li className='star'>Laser treatments can remove unwanted hair in places all over the body.</li>
            <li className='star'>Cosmetic laser treatments can give you a chance to be a whole new you</li>
            
          </ul>
        </div>
        
        
         
     

     </div>

    
     
    </div>

    
    
    
    <div className="sectionSpacer1 s1svg"></div>
    
    <div className="cardTitle">
    
      <h1>Services</h1>
    </div>
    <div className="mainCards">
      
      <div className="chrBackground">
      <div className="cardHR">


      <div className="mcardLeft" onMouseEnter={switchCard} onClick={switchCard}>
      <div className="hrBackground"><h1 >HR</h1></div>
        <div className="mcardLContent" >
        
        <p><span className='mcLHRback'><span className='mcLHR'>Hair Removal</span> </span> sit amet consectetur adipisicing elit. Neque unde, accusantium ipsa eius consectetur magnam quas harum eveniet! Necessitatibus quia eaque perspiciatis ipsum eligendi iure veniam a velit modi temporibus?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere architecto tempora reiciendis cupiditate tenetur qui cumque recusandae modi labore dolore quis culpa hic exercitationem, at delectus aperiam sit aut! Animi?
        </p>
        </div>
        
      </div>
      <div
        className="mcardRight" onMouseEnter={switchCard} onClick={switchCard}>
        <h1>View</h1>
        <div className="mcardRContent" >
        <img src="src/assets/images/HR1.jpg" alt=""/>
        </div>
      </div>

      



      </div>
    </div>
      <div className="csrBackground">
      <div className="cardSR">


      <div className="mcardLeftSR" onMouseEnter={switchCard} onClick={switchCard}>
      <div className="srBackground"><h1>SR</h1></div>
        <div className="mcardLContentSR" >
        
        <p><span className='mcLSRback'><span className='mcLSR'>Skin Rejuvenation</span></span> sit amet consectetur adipisicing elit. Neque unde, accusantium ipsa eius consectetur magnam quas harum eveniet! Necessitatibus quia eaque perspiciatis ipsum eligendi iure veniam a velit modi temporibus?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere architecto tempora reiciendis cupiditate tenetur qui cumque recusandae modi labore dolore quis culpa hic exercitationem, at delectus aperiam sit aut! Animi?
        </p>
        </div>
        
      </div>
      <div
        className="mcardRightSR" onMouseEnter={switchCard} onClick={switchCard}>
        <h1 onClick={switchCard} onMouseEnter={switchCard}>View</h1>
        <div className="mcardRContentSR" onMouseEnter={switchCard}>
        <img src="src/assets/images/SR2.jpg" alt="" onMouseEnter={switchCard} />
        </div>
      </div>

      



      </div>
    </div>


  

    </div>
 
    <div className="sectionSpacer2 s2svg"></div>
    <div className="endingInfo">
      <h1>See the difference</h1>
      <div className="elContainer">
        <div className="eInfo">
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam inventore et sint mollitia ducimus ut cum optio eos iusto qui quaerat quisquam a illum quasi saepe perspiciatis cumque, nulla ullam?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non delectus vero doloremque magnam distinctio! Odit voluptatem ab aspernatur impedit dolorum, eveniet quos harum nam natus illum obcaecati quae. Molestias, dolor!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi cumque aliquam rerum perspiciatis neque accusantium nulla explicabo, perferendis obcaecati qui voluptatibus odit voluptates quam alias cum laudantium sed accusamus repellat?</p>
        </div>
          <div className="PhotoBlock">
            <div className="leftPhoto">
            <img src="src/assets/images/HR1.jpg" alt=""/>
            </div>
        <div className="RightPhotos">
          <div className="topPhoto">
          <img src="src/assets/images/HR1.jpg" alt=""/>
          </div>
          <div className="bottomPhoto">
          <img src="src/assets/images/HR1.jpg" alt=""/>
          </div>
        </div>
       </div>
      </div>
    </div>
    <div className="footer"></div>

    </div>
    
    </Fragment>
  )
}

export default App
