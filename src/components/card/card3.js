import React from "react";
import "./card.css";
import card1 from "../../assets/porsche.jpg";
import card2 from "../../assets/ferrari.webp";
import card3 from "../../assets/supra.webp";
import card4 from "../../assets/gtr.webp";
import card5 from "../../assets/bugatti.webp";

function card() {
  return (
    <div className="cards">
      <div className="card">
        <img src={card1} alt="" />
        <h2>Porshe 991 GT3 RS</h2>
        <p className="hover">
          Price: 3.51Cr<br/>
          Seat: 4<br/>
          Engine Type: 4.0-litre high revving 525PS<br/>
          Displacement: 3982CC<br/>
          Horsepower: 379.50 @ 6500rpm <br/>
          Transmission Type: 9-Automatic<br/>
        </p>
      </div>
      <div className="card">
        <img src={card2} alt="" />
        <h2>Ferrari 296 GTB</h2>
        <p className="hover">
          Price: 5.40Cr<br/>
          Seat: 2<br/>
          Engine Type: twin-turbo 120 V6 with electric motor<br/>
          Displacement: 9229CC<br/>
          Horsepower: 831.43<br/>
          Transmission Type: Automatic<br/>
        </p>
      </div>
      <div className="card">
        <img src={card3} alt="" />
        <h2>Supra MK4</h2>
        <p className="hover">
          Price: 85L<br/>
          Seat: 6<br/>
          Engine Type: 2JZ<br/>
          Displacement: 1998cc<br/>
          Horsepower: 326 @ 5600<br/>
          Transmission Type: 5-Manual/ Automatic<br/>
        </p>
      </div>
      <div className="card">
        <img src={card4} alt="" />
        <h2>Nissan GT-R</h2>
        <p className="hover">
          Price: 2.35Cr/ 2.45Cr<br/>
          Seat: 4<br/>
          Engine Type: VR38DETT DOHC V6<br/>
          Displacement: 3799cc<br/>
          Horsepower: 565 @ 5600<br/>
          Transmission Type: 6-Automatic dual-clutch<br/>
        </p>
      </div>
      <div className="card">
        <img src={card5} alt="" />
        <h2>Bugatti Divo</h2>
        <p className="hover">
          Price: 41Cr<br/>
          Seat: 2<br/>
          Engine Type: W16<br/>
          Displacement: 7993cc<br/>
          Horsepower: 1479 @ 6700<br/>
          Transmission Type: 7-Automatic dual-clutch<br/>
        </p>
      </div>
    </div>
  );
}

export default card;
