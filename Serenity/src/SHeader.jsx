import React, { Fragment, useState, useEffect } from 'react';

import './styles/SHeader.css'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'


function Header(){

    const texts = ['effect..', 'benefit..', 'change..', 'beauty..'];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(texts[0]);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentLetterIndex((prevIndex) => prevIndex + 1);
      }, 200); // Delay for each letter
  
      // Check if we've displayed the entire word, then move to the next word
      if (currentLetterIndex >= texts[currentWordIndex].length) {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setCurrentLetterIndex(0);
        }, 3000); // Delay before changing to the next word
      }
  
      return () => {
        clearInterval(interval);
      };
    }, [currentLetterIndex, currentWordIndex]);
  
    useEffect(() => {
      setCurrentWord(texts[currentWordIndex]);
    }, [currentWordIndex]);
  

    return(
      <Fragment>
        
      <div className="headerImage">
        <div className="hImgtext">
            
            <h2>Experience the <span className='typewriterBackground'><span className='typewriter'>{currentWord.slice(0, currentLetterIndex)}</span></span></h2>
            </div>
            
        <video controls autoplay loop muted preload="auto" ><source src="src/assets/videos/headVid.mp4" type="video/mp4"/></video>
       
       
        
      
       </div>
           
        <div className="headerBody">
            

            
            <div className="headerContent">
            <div className="headerTop">
                


                
            <h1>Serenity Medi Clinic</h1>
            <div class="headerWave">
         <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
        </div>
        <div class="headerWave2">
         <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
        </div>
            </div>
            <div className="headerBottom">
                <div className="buttons"> 
                <div className="navs">
                <a href="/">Home</a>
                <a href="/">Treatments</a>
                <a href="/">Prices</a>
                <a href="/">About us</a>
                <a href="/">Photos</a>
                <a href="/">Equipment</a>
                </div>
              

                </div>
               

            </div>

            </div>


        </div>
        
        </Fragment>

    )
}



export default Header