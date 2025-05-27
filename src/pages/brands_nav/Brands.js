import "./brands.css";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar.js";
import Footer from "../../components/footer/footer";

import General from "../../components/brandSlider/general/General.js";
import Stellantis from "../../components/brandSlider/stellantis/Stellantis.js";
import Volkswagen from "../../components/brandSlider/volkswagen/Volkswagen.js";
import Bmw from "../../components/brandSlider/bmw/Bmw.js";
import Honda from "../../components/brandSlider/honda/Honda.js";
import Tata from "../../components/brandSlider/Tata/Tata.js";
import video from "../../assets/eye.mp4";


function Brands() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />

        <div className="brand-body">
          <div className="vid">
            <video autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <span>Stellantis NV</span>
          <Stellantis />
          <span>Volkswagen</span>
          <Volkswagen />
          <span>General Motors</span>
          <General />
          <span>BMW</span>
          <Bmw />

          <span>Honda</span>
          <Honda />
          <span>Tata</span>
          <Tata />
        </div>

        <Footer theme={theme} />
      </div>
    </>
  );
}

export default Brands;
