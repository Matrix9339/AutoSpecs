import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../brandslider.css";
import { Link } from "react-router-dom";

import card1 from "../../../assets/bmw.jpg";
import card2 from "../../../assets/mini.jpg";
import card3 from "../../../assets/rolls.jpg";

const data = [
  {
    img: card1,
    link: "/Bmw/cars",
  },
  {
    img: card2,
  },
  {
    img: card3,
  },
];

function Bmw() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((d) => (
          <div className="img-cont">
            <div className="imgs">
              <Link to={d.link}>
                <img src={d.img} alt="" />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Bmw;
