import './contact.css';
import React, { useEffect, useState } from "react";
import Navbar from '../../components/navbar/Navbar.js';
import Footer from "../../components/footer/footer";
import image from "../../assets/contact.jpg";

function Contact() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);


  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="contimg">
        <img src={image} alt="" />
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
