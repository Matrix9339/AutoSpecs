import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import{Fade} from 'react-slideshow-image'
import './slideshow.css'

import slide1 from '../../assets/f1.jpg'
import slide2 from '../../assets/f2.jpg'
import slide3 from '../../assets/f3.jpg'
import slide4 from '../../assets/f4.jpg'

import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.webp'
import logo3 from '../../assets/logo3.jpg'
import logo4 from '../../assets/logo4.jpg'

const slideImage = [
    {
        img: slide1,
        head:'Ferrari',
        caption: 'Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded in 1939 by Enzo Ferrari (1898–1988).',
        logo: logo1
        
    },
    {
        img: slide2,
        head:'Giulietta',
        caption: 'The first Giulietta to be introduced was the Giulietta Sprint 2+2 coupé at the 1954 Turin Motor Show. Designed by Franco Scaglione at Bertone, it was produced at the coachbuilders Grugliasco plant near Turin.',
        logo: logo2

    },
    {
        img: slide3,
        head:'Rolls-Royce',
        caption: 'Rolls-Royce Limited was a British luxury car and later an aero-engine manufacturing business established in 1904 in Manchester by the partnership of Charles Rolls and Henry Royce.',
        logo: logo3

    },
    {
        img: slide4,
        head:'Lamborghini',
        caption: 'Automobili Lamborghini S.p.A. is an Italian manufacturer of luxury sports cars and SUVs based in Sant Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.',
        logo: logo4
    },
];

function slideshow() {
  return (
    <div className="slide-container">
        <Fade>
            {slideImage.map((image,index)=>(
                <div key={index} className='image'>
                    <img src={image.img} alt="" />
                    <div className="det">
                        <span className="heading">
                            {image.head}
                        </span>

                        <span className='discription'>
                            {image.caption}
                            <div className="logo">
                                <img src={image.logo} alt="" />
                            </div>
                        </span>
                    </div>
                </div>
            ))
            }
        </Fade>
    </div>
  )
}

export default slideshow
