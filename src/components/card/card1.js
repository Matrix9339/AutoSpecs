import React from "react";
import "./card.css";
import card1 from "../../assets/mustang.jpg";
import card2 from "../../assets/city.jpg";
import card3 from "../../assets/fortuner.jpg";
import card4 from "../../assets/endevor.jpeg";
import card5 from "../../assets/bmw1.jpg";

function card() {
  return (
    <div className="cards">
      <div className="card">
        <img src={card1} alt="" />
        <h2>Mustang GT(2024)</h2>
        <p className="hover">
          Price: 74.61L<br/>
          Seat: 4<br/>
          Engine Type: 2.3L GTDI I-4e/ 5.0L Ti-VCT V-8<br/>
          Displacement: 137.5 cu.in./ 307 cu.in.<br/>
          Horsepower: 315 @ 5,500rpm/ 500 @ 7,250rpm<br/>
          Transmission Type: 6-Manual/ 10-Automatic<br/>
        </p>
      </div>
      <div className="card">
        <img src={card2} alt="" />
        <h2>Honda City(2024)</h2>
        <p className="hover">
          Price: 12.6L/ 16.19L<br/>
          Seat: 5<br/>
          Engine Type: Water Cooled Inline 4 Cylinder i-VTEC DOHC with VTC<br/>
          Displacement: 1498cc<br/>
          Horsepower: 145 @ 4300<br/>
          Transmission Type: 6-Manual/ CVT-Automatic<br/>
        </p>
      </div>
      <div className="card">
        <img src={card3} alt="" />
        <h2>Fortuner(2024)</h2>
        <p className="hover">
          Price: 33.43L/ 52.44L<br/>
          Seat: 7<br/>
          Engine Type: Turbo Charged<br/>
          Displacement: 2755cc<br/>
          Horsepower: 235 @ 5200<br/>
          Transmission Type: 6-Speed with Sequential Shift<br/>
        </p>
      </div>
      <div className="card">
        <img src={card4} alt="" />
        <h2>Endevor(2024)</h2>
        <p className="hover">
          Price: 50L<br/>
          Seat: 7<br/>
          Engine Type: 2.0L EcoBlue Diesel Engine<br/>
          Displacement: 1996cc<br/>
          Horsepower: 197 bhp @ 3000<br/>
          Transmission Type: 10-Automatic<br/>
        </p>
      </div>
      <div className="card">
        <img src={card5} alt="" />
        <h2>BMW M5(2024)</h2>
        <p className="hover">
          Price: 1.74Cr<br/>
          Seat: 5<br/>
          Engine Type: 4.4-Litre Twin-Turbo V8 Engine<br/>
          Displacement: 4395 <br/>
          Horsepower: 616 @ 6000<br/>
          Transmission Type: Automatic<br/>
        </p>
      </div>
    </div>
  );
}

export default card;
