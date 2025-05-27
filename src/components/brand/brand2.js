import React from 'react'

import "./brand.css";
import card1 from "../../assets/stel.avif";
import card2 from "../../assets/honda.png";
import card3 from "../../assets/gm.jpg";
import card4 from "../../assets/bmw.webp";
import card5 from "../../assets/suzuki.jpg";
import card6 from "../../assets/merc.jpg";

function brand2() {
  return (
    <div>
      <div className="m-cards">
        <div className="m-card">
          <img src={card1} alt="" />
          <h2>Stellantis NV</h2>
        </div>
        <div className="m-card">
          <img src={card2} alt="" />
          <h2>Honda Motor Co., Ltd.</h2>
        </div>
        <div className="m-card">
          <img src={card3} alt="" />
          <h2>General Motors Company</h2>
        </div>
        <div className="m-card">
          <img src={card4} alt="" />
          <h2>BMW</h2>
        </div>
        <div className="m-card">
          <img src={card5} alt="" />
          <h2>Suzuki Motor Corporation</h2>
        </div>
        <div className="m-card">
          <img src={card6} alt="" />
          <h2>Mercedes-Benz Group AG</h2>
        </div>
      </div>
    </div>
  )
}

export default brand2
