import React, { Fragment, useState, useEffect } from 'react';

import '/src/styles/SHeader.css'



function Header(){







  

    const texts = ['effect..', 'benefit..', 'change..', 'beauty..'];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(texts[0]);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 850) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
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
           
        <div className={`headerBody ${isSticky ? 'stickyHeader' : ''}`}>
            

            
          <div className="headerContent">
            
                
            

                
            <h1>Serenity Medi Clinic</h1>
        
       
        
              <div className="headerBottom">
                <div className="buttons"> 
                  <div className="navs">
                    <a href="/">Home</a>
                    <a href="/">Contact</a>
                    <a href="/">Treatments</a>
                    <a href="/">Prices</a>
                    <a href="/">About us</a>
                    
                  </div>
              

                </div>
               

              </div>

         
          </div>


        </div>
        
        </Fragment>

    )
}



export default Header