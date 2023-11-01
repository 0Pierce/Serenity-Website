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


  return (
    <Fragment>
      
    <div className="mainBody">
    
    <div className="welcome">
      <div className="welcomeContent">
        <div className="welcRectangle">
          <h1>What is laser treatment?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum maiores saepe ut rerum est, vitae sint quod voluptatibus omnis, iste ea accusamus impedit neque. Porro molestias vero corrupti odit praesentium.\
           <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, dolore! Perspiciatis tenetur et illum molestias, incidunt, iure nostrum vero nemo distinctio voluptatum doloribus! Earum laudantium, quibusdam reiciendis quis assumenda asperiores.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, dolore! Perspiciatis tenetur et illum molestias, incidunt, iure nostrum vero nemo distinctio voluptatum doloribus! Earum laudantium, quibusdam reiciendis quis assumenda asperiores.

          </p>
         
        
        
        <img src="src/assets/images/Acne.jpg" alt="" />


      
        </div>
      
        <div className="welcBenefits">
          <h1>Benefits</h1>
          <ul>
            <li>Skin</li>
            <li>Skin</li>
            <li>Skin</li>
            <li>Skin</li>
            <li>Skin</li>
            <li>Skin</li>
            <li>Skin</li>
            <li>Skin</li>
          </ul>
        </div>
        
     
         
     

     </div>
    </div>

    <div className="techniqueCards">

    <div className="card">
      <div className="cBody">
       <div className="cbLeft">
          <h2>HR</h2>
          <div className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ratione, maiores fuga iusto quaerat dolore accusamus eos, assumenda, qui molestiae quas earum amet. Eius ex atque nesciunt unde fugiat possimus.</div>
       
        </div>
        <div className="cbRight">
        <div className="h1">Pictures</div>
        <div className="arrowKeys">
          <div className="akLeft"><i class="arrow left"></i></div>
          <div className="akRight"><i class="arrow right"></i></div>
          <div className="akLeft2"><i class="arrow left"></i></div>
          <div className="akRight2"><i class="arrow right"></i></div>
        </div>
        </div>
      </div>
    </div>
    <div className="card">
    <div className="cBody">
    <div className="cbLeft">
    <h2>SR</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusamus numquam molestias? Esse aliquam aperiam quisquam nisi nihil nam, veniam tempore reiciendis suscipit excepturi sequi nulla neque tempora perferendis necessitatibus.</p>

    </div>
        <div className="cbRight">
        <div className="h1">Pictures</div>
        <div className="arrowKeys">
          <div className="akLeft"><i class="arrow left"></i></div>
          <div className="akRight"><i class="arrow right"></i></div>
          <div className="akLeft2"><i class="arrow left"></i></div>
          <div className="akRight2"><i class="arrow right"></i></div>
        </div>
        </div>
    </div>

    </div>



    </div>
    <div className="information">
      <h1>What is laser treatment?</h1>
      <div className="briefDesc">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias provident nisi laboriosam odio expedita sit suscipit enim recusandae a? Corporis consequatur quam doloremque exercitationem sunt enim eveniet in adipisci sit.</p>
      </div>
      <div className="benefits">
        <h1>Benefits</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eveniet sed perferendis tempore accusantium distinctio pariatur dolores? Enim optio, neque accusantium sequi, beatae sit error tempore provident fugit explicabo voluptates.</p>
      </div>
    </div>
    </div>
    
    </Fragment>
  )
}

export default App
