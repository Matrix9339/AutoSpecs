import React from "react";
import "./card.css";
import card1 from "../../assets/octivia.jpg";
import card2 from "../../assets/dodge.jpg";
import card3 from "../../assets/camaro.jpg";
import card4 from "../../assets/audi.jpg";
import card5 from "../../assets/maybach.webp";

function card() {
  return (
    <div className="cards">
      <div className="card">
        <img src={card1} alt="" />
        <h2>Skoda Octivia</h2>
        <p className="hover">
          Price: 27.35L/ 30.45<br/>
          Seat: 5<br/>
          Engine Type: 2.0Lt Turbo Charged<br/>
          Displacement: 1984cc<br/>
          Horsepower: 187.74 @ 4180-6000<br/>
          Transmission Type: 7-speed DCT<br/>
        </p>
      </div>
      <div className="card city">
        <img src={card2} alt="" />
        <h2>Dodge Charger EV</h2>
        <p className="hover">
          Price: $40000/ $50000<br/>
          Seat: 4<br/>
          Engine Type: Electric Motor<br/>
          Displacement: N/A<br/>
          Horsepower: N/A<br/>
          Transmission Type: Automatic<br/>
        </p>
      </div>
      <div className="card">
        <img src={card3} alt="" />
        <h2>Chevrolet Camaro</h2>
        <p className="hover">
          Price: 50L<br/>
          Seat: 4<br/>
          Engine Type: V6 / V8<br/>
          Displacement: 6198cc<br/>
          Horsepower: 335@/ 455@<br/>
          Transmission Type: 6-Manual/ 10-Automatic<br/>
        </p>
      </div>
      <div className="card">
        <img src={card4} alt="" />
        <h2>Audi R8</h2>
        <p className="hover">
          Price: 2.30Cr/ 2.76Cr<br/>
          Seat: 2<br/>
          Engine Type: V6 / V8<br/>
          Displacement: 6198cc<br/>
          Horsepower: 335@/ 455@<br/>
          Transmission Type: 7 speed S-tronic automatic<br/>
        </p>
      </div>
      <div className="card">
        <img src={card5} alt="" />
        <h2>Maybach</h2>
        <p className="hover">
          Price: 2.69Cr/ 3.40Cr<br/>
          Seat: 5<br/>
          Engine Type: 4.0-litre V8 Twin-turbocharged Engine<br/>
          Displacement: 3982CC<br/>
          Horsepower: 496 @ 5500-5500<br/>
          Transmission Type: 9-automatic<br/>
        </p>
      </div>
    </div>
  );
}

export default card;
