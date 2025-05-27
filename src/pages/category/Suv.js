import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

import slide1 from "../../assets/creta.avif";
import slide2 from "../../assets/seltos.jpg";
import slide3 from "../../assets/brezza.webp";
import slide4 from "../../assets/harrier.webp";
import slide5 from "../../assets/xuv700.jpg";
import slide6 from "../../assets/hector.webp";

const data = [
  {
    img: slide1,
  },
  {
    img: slide2,
  },
  {
    img: slide3,
  },
  {
    img: slide4,
  },
  {
    img: slide5,
  },
  {
    img: slide6,
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
function Suv() {
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
                <img src={d.img} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Suv;
