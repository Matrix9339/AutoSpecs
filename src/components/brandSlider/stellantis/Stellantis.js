import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";
import "../brandslider.css";


import card1 from "../../../assets/jeep.webp";
import card2 from "../../../assets/citron.webp";
import card3 from "../../../assets/dodgeb.jpg";
import card4 from "../../../assets/masarati.jpg";
import card5 from "../../../assets/fiat.webp";
import card6 from "../../../assets/alfa.jpeg";

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
  {
    img: card4,
  },
  {
    img: card5,
  },
  {
    img: card6,
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

function Stellantis() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
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

export default Stellantis;
