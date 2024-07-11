import React,{useState, useEffect} from 'react'
import "/src/styles/Landing.css"
import { handle } from 'express/lib/application';


// // var images = [
// //   '/src/assets/images/img1.jpg',
// //   '/src/assets/images/img2.jpg',
// //   '/src/assets/images/img3.jpg',
// //   '/src/assets/images/img4.jpg',
// //   '/src/assets/images/img5.jpg'
  
// // ];




export default function Landing() {


  // const texts = ['effect..', 'benefit..', 'change..', 'beauty..'];

  // const [currentWordIndex, setCurrentWordIndex] = useState(0);
  // const [currentWord, setCurrentWord] = useState(texts[0]);
  


 



  return (
    <div className="landingBody">
        
        <div className="landingCard">
        <div className="landingLeft">
        <video autoPlay loop muted preload="auto" ><source src="/src/assets/videos/headVid.mp4" type="video/mp4"/></video>
        </div>

        </div>
        <div className="landingCard">
          <div className="landingRight">
            <h1>Experience the</h1>
            
          </div>
        </div>





    </div>
  )
}
