import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";
import "../brandslider.css";

import slide1 from "../../../assets/cardi.webp";
import slide2 from "../../../assets/chevi.jpg";
import slide3 from "../../../assets/GMC.jpg";
import slide4 from "../../../assets/pontiac.jpg";

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

function General() {
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

export default General;
