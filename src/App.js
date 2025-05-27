import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/footer";
import Slider from "./components/slideshow/slideshow";
import Cardrow1 from "./components/card/card1";
import Cardrow2 from "./components/card/card2";
import Cardrow3 from "./components/card/card3";
import Brand from "./components/brand/brand1";
import Brand2 from "./components/brand/brand2";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem('token'));

  const handleLogin = () => {
      setIsLoggedIn(true);
  };

  const handleLogout = () => {
      setIsLoggedIn(false);
  };


  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme}  />
        <Slider />
        <div className="cont">
          <p theme={theme}>
            <strong>NEW </strong> ARRIVALS
          </p>
        </div>
          <Cardrow1 theme={theme}/>
          <Cardrow2 theme={theme}/>
          <Cardrow3 theme={theme}/>
        <div className="brand" theme={theme}>

          

          <p>
            <strong>
              MANUFACTURER
            </strong>
          </p>
        </div>
        <Brand/>
        <Brand2/>
        <Footer theme={theme} />
      </div>
    </>
  );
}

export default App;
