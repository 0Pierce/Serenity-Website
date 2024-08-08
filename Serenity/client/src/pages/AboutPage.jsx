import React from 'react'
import Header from '/src/components/Header.jsx';
import Footer from '/src/components/Footer.jsx'
import '/src/styles/Aboutpage.css'

export default function AboutPage() {
  return (
    <>
    <Header/>
    
    <div className="aboutPageBody">
      <div className="apFirstPage">

      <div className="ap1Sec1">
        <div className="ap1Sec1L">
          <h2>How does it work?</h2>
          <div className="ap1Sec1Text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis aliquid alias, at nam nobis consectetur ducimus, iusto et beatae sed ipsa? Eos doloremque unde quia perferendis autem, quaerat quod.</p>
          </div>
        </div>
        <div className="ap1Sec1R">
          <div className="ap1Sec1ImageContainer">
           <img src="/src/assets/images/img4.jpg" alt="Image" className='ap1Img1' />
          </div>
        </div>
      </div>
      <div className="ap1Sec1">
      <div className="ap1Sec1L">
          <div className="ap1Sec1ImageContainer">
           <img src="/src/assets/images/img4.jpg" alt="Image" className='ap1Img2' />
          </div>
      </div>
      <div className="ap1Sec1R">
          <h2>How to prepare?</h2>
          <div className="ap1Sec1Text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis aliquid alias, at nam nobis consectetur ducimus, iusto et beatae sed ipsa? Eos doloremque unde quia perferendis autem, quaerat quod.</p>
          </div>
      </div>
      </div>

      </div>


      <div className="apSecondPage">
        <div className="ap2Spacer"></div>
        <div className="ap2SafetySec">
          <h2>Safety</h2>
            <div className="ap2SafetySecContent">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error explicabo laudantium minus rem delectus sint harum maxime repellat. Ipsam inventore dicta esse, eum amet mollitia optio nisi tempora laboriosam molestiae.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta eos tenetur cum qui sequi dolorum quo libero voluptas doloremque quod dolor velit laborum placeat, enim rerum sapiente error doloribus itaque.
              
              </p>
            </div>
        </div>

        <div className="ap2AboutUs">
          <div className="ap2AboutLeft">Img</div>
          <div className="ap2AboutRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum nemo voluptatum, alias magnam sint nobis eligendi sunt, hic ex nam quod quo incidunt est culpa facere voluptas tempora quia.</div>
        </div>
        FAQ

      </div>
    </div>


    <Footer/>
    </>
  )
}
