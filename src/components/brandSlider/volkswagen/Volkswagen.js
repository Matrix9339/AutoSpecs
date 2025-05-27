import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import card1 from "../../../assets/audi.jpeg";
import card2 from "../../../assets/skoda.webp";
import card3 from "../../../assets/bentley.avif";
import card4 from "../../../assets/Porsche.jpeg";
import card5 from "../../../assets/lambo.jpg";
import card6 from "../../../assets/volks.jpg";

const data = [
  {
    img: card1,
    path:""
  },
  {
    img: card2,
    path:""
  },
  {
    img: card3,
    path:""
  },
  {
    img: card4,
    path:""
  },
  {
    img: card5,
    path:""
  },
  {
    img: card6,
    path:""
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

function Volkswagen() {
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

export default Volkswagen;
