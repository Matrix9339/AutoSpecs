import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";
import "../brandslider.css";


import card1 from "../../../assets/tata.jpg";
import card2 from "../../../assets/Lrover.png";
import card3 from "../../../assets/jaguar.jpg";



const data = [
    {
      img: card1,
    },
    {
      img: card2,
    },
    {
      img: card3,
    },
  ];
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      />
    );
  }
  
function Tata() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
    
      return (
        <div className="slider-container">
          <Slider {...settings}>
            {data.map((d) => (
              <div className="img-cont">
                <div className="imgs">
                  <Link>
                    <img src={d.img} alt="" />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      );
}

export default Tata
