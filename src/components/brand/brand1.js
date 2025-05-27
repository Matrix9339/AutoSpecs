import React from "react";

import "./brand.css";
import card1 from "../../assets/tata.png";
import card2 from "../../assets/volkswagen.jpg";
import card3 from "../../assets/ford.webp";
import card4 from "../../assets/toyota.png";
import card5 from "../../assets/mitsubisi.jpg";
import card6 from "../../assets/hundai.jpg";

function brand() {
  return (
    <div>
      <div className="m-cards">
        <div className="m-card">
          <img src={card1} alt="" />
          <h2>Tata Motors</h2>
        </div>
        <div className="m-card">
          <img src={card2} alt="" />
          <h2>Vokswagen Group</h2>
        </div>
        <div className="m-card">
          <img src={card3} alt="" />
          <h2>Ford Motor Company</h2>
        </div>
        <div className="m-card">
          <img src={card4} alt="" />
          <h2>Toyota Motor Corporation</h2>
        </div>
        <div className="m-card">
          <img src={card5} alt="" />
          <h2>Mitsubishi Motors Corporation</h2>
        </div>
        <div className="m-card">
          <img src={card6} alt="" />
          <h2>Hyundai Motor India Ltd.</h2>
        </div>
      </div>
    </div>
  );
}

export default brand;
