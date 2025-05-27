import React, { useEffect, useState } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Footer from "../../../../components/footer/footer";
import video from "../../../../assets/bmw.mp4";
import "./bmw_car.css";

import card1 from "../../../../assets/bmw7.webp";
import card2 from "../../../../assets/bmw6.jpg";
import card3 from "../../../../assets/bmw5.cms";
import card4 from "../../../../assets/bmw3.jpg";
import card5 from "../../../../assets/bmwi4.webp";

import card6 from "../../../../assets/bmwm1.webp";
import card7 from "../../../../assets/bmw2.jpg";
import card8 from "../../../../assets/bmwi3.jpg";
import card9 from "../../../../assets/bmwx1.webp";

import card10 from "../../../../assets/m3.jpg";
import card11 from "../../../../assets/m4.jpeg";
import card12 from "../../../../assets/m5.jpg";
import card13 from "../../../../assets/z4.webp";
import card14 from "../../../../assets/bmw8.webp";




function Bmw_cars() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      <div className="iner">
        <div className="vid">
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <span>Sedan</span>
        <div className="cards">
          <div className="card">
            <img src={card1} alt="" />
            <h2>7 Series</h2>
            <p className="hover">
              Price: 74.61L
              <br />
              Seat: 4<br />
              Engine Type: 2.3L GTDI I-4e/ 5.0L Ti-VCT V-8
              <br />
              Displacement: 137.5 cu.in./ 307 cu.in.
              <br />
              Horsepower: 315 @ 5,500rpm/ 500 @ 7,250rpm
              <br />
              Transmission Type: 6-Manual/ 10-Automatic
              <br />
            </p>
          </div>
          <div className="card">
            <img src={card2} alt="" />
            <h2>6 Series</h2>
            <p className="hover">
              Price: 12.6L/ 16.19L
              <br />
              Seat: 5<br />
              Engine Type: Water Cooled Inline 4 Cylinder i-VTEC DOHC with VTC
              <br />
              Displacement: 1498cc
              <br />
              Horsepower: 145 @ 4300
              <br />
              Transmission Type: 6-Manual/ CVT-Automatic
              <br />
            </p>
          </div>
          <div className="card">
            <img src={card3} alt="" />
            <h2>5 Series</h2>
            <p className="hover">
              Price: 33.43L/ 52.44L
              <br />
              Seat: 7<br />
              Engine Type: Turbo Charged
              <br />
              Displacement: 2755cc
              <br />
              Horsepower: 235 @ 5200
              <br />
              Transmission Type: 6-Speed with Sequential Shift
              <br />
            </p>
          </div>
          <div className="card">
            <img src={card4} alt="" />
            <h2>3 Series</h2>
            <p className="hover">
              Price: 50L
              <br />
              Seat: 7<br />
              Engine Type: 2.0L EcoBlue Diesel Engine
              <br />
              Displacement: 1996cc
              <br />
              Horsepower: 197 bhp @ 3000
              <br />
              Transmission Type: 10-Automatic
              <br />
            </p>
          </div>
          <div className="card">
            <img src={card5} alt="" />
            <h2>BMW i4</h2>
            <p className="hover">
              Price: 1.74Cr
              <br />
              Seat: 5<br />
              Engine Type: 4.4-Litre Twin-Turbo V8 Engine
              <br />
              Displacement: 4395 <br />
              Horsepower: 616 @ 6000
              <br />
              Transmission Type: Automatic
              <br />
            </p>
          </div>
        </div>



        <span>Hatchback</span>




        <div className="cards">
          <div className="card">
            <img src={card6} alt="" />
            <h2>1 Series</h2>
            <p className="hover">
              Price: 74.61L
              <br />
              Seat: 4<br />
              Engine Type: 2.3L GTDI I-4e/ 5.0L Ti-VCT V-8
              <br />
              Displacement: 137.5 cu.in./ 307 cu.in.
              <br />
              Horsepower: 315 @ 5,500rpm/ 500 @ 7,250rpm
              <br />
              Transmission Type: 6-Manual/ 10-Automatic
              <br />
            </p>
          </div>
          <div className="card">
            <img src={card7} alt="" />
            <h2>1 Series</h2>
            <p className="hover">
              Price: 12.6L/ 16.19L
              <br />
              Seat: 5<br />
              Engine Type: Water Cooled Inline 4 Cylinder i-VTEC DOHC with VTC
              <br />
              Displacement: 1498cc
              <br />
              Horsepower: 145 @ 4300
              <br />
              Transmission Type: 6-Manual/ CVT-Automatic
              <br />
            </p>
          </div>
          <div className="card">
            <img src={card8} alt="" />
            <h2>BMW i3</h2>
            <p className="hover">
              Price: 33.43L/ 52.44L
              <br />
              Seat: 7<br />
              Engine Type: Turbo Charged
              <br />
              Displacement: 2755cc
              <br />
              Horsepower: 235 @ 5200
              <br />
              Transmission Type: 6-Speed with Sequential Shift
              <br />
            </p>
          </div>
          <div className="card">
            <img src={card9} alt="" />
            <h2>BMW X1</h2>
            <p className="hover">
              Price: 50L
              <br />
              Seat: 7<br />
              Engine Type: 2.0L EcoBlue Diesel Engine
              <br />
              Displacement: 1996cc
              <br />
              Horsepower: 197 bhp @ 3000
              <br />
              Transmission Type: 10-Automatic
              <br />
            </p>
          </div>
        </div>

        <span>Sports</span>


        <div className="cards">
          <div className="card">
            <img src={card10} alt="" />
            <h2>M3</h2>
            <p className="hover">
              Price: 74.61L
              <br />
              Seat: 4<br />
              Engine Type: 2.3L GTDI I-4e/ 5.0L Ti-VCT V-8
              <br />
              Displacement: 137.5 cu.in./ 307 cu.in.
              <br />
              Horsepower: 315 @ 5,500rpm/ 500 @ 7,250rpm
              <br />
              Transmission Type: 6-Manual/ 10-Automatic
              <br />
            </p>
          </div>
          <div className="card">
            <img src={card11} alt="" />
            <h2>M4</h2>
            <p className="hover">
              Price: 12.6L/ 16.19L
              <br />
              Seat: 5<br />
              Engine Type: Water Cooled Inline 4 Cylinder i-VTEC DOHC with VTC
              <br />
              Displacement: 1498cc
              <br />
              Horsepower: 145 @ 4300
              <br />
              Transmission Type: 6-Manual/ CVT-Automatic
              <br />
            </p>
          </div>
          <div className="card">
            <img src={card12} alt="" />
            <h2>M5</h2>
            <p className="hover">
              Price: 33.43L/ 52.44L
              <br />
              Seat: 7<br />
              Engine Type: Turbo Charged
              <br />
              Displacement: 2755cc
              <br />
              Horsepower: 235 @ 5200
              <br />
              Transmission Type: 6-Speed with Sequential Shift
              <br />
            </p>
          </div>
          <div className="card">
            <img src={card13} alt="" />
            <h2>Z4</h2>
            <p className="hover">
              Price: 50L
              <br />
              Seat: 7<br />
              Engine Type: 2.0L EcoBlue Diesel Engine
              <br />
              Displacement: 1996cc
              <br />
              Horsepower: 197 bhp @ 3000
              <br />
              Transmission Type: 10-Automatic
              <br />
            </p>
          </div>
          <div className="card">
            <img src={card14} alt="" />
            <h2>8 Series</h2>
            <p className="hover">
              Price: 50L
              <br />
              Seat: 7<br />
              Engine Type: 2.0L EcoBlue Diesel Engine
              <br />
              Displacement: 1996cc
              <br />
              Horsepower: 197 bhp @ 3000
              <br />
              Transmission Type: 10-Automatic
              <br />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Bmw_cars;
