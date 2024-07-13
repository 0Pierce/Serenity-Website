import React,{useState, useEffect} from 'react'
import "/src/styles/Landing.css"
import BeautyIcon from '/src/assets/svgs/beauty.svg'
import Star from '/src/assets/svgs/starShiny.svg'






export default function Landing() {


  const texts = ['effect..', 'benefit..', 'change..', 'beauty..'];

  const [wordIndex, setWordIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState(texts[0]);
 
  

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 4000); 

    return () => clearInterval(interval); 
  }, [texts.length]);

  useEffect(() => {
    setCurrentWord(texts[wordIndex]);
  }, [wordIndex, texts]);
 



  return (
    <div className="landingBody">
        
        <div className="landingCard">
        <div className="landingLeft">
        <video autoPlay loop muted preload="auto" ><source src="/src/assets/videos/headVid.mp4" type="video/mp4"/></video>
        </div>

        </div>
        <div className="landingCard">
          <div className="landingRight">
            
            <h1>Experience the &nbsp;<span className='curWord'>{currentWord}</span></h1>
            <img src={Star}/>
            <h3>Of</h3>
            <div className="lrTop">
            <h2>Laser</h2>
            </div>
            <div className="lrBott">
            <h2>Technology</h2>
            </div>
            
            
            
          </div>
        </div>





    </div>
  )
}
