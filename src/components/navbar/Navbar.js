import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/logo.jpg";
import logo_light from "../../assets/night.png";
import logo_dark from "../../assets/day.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  

  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user name from local storage
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setUserName(storedEmail);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("email"); // Remove user email upon logout
    setUserName("");
    navigate("/");
  };

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap"
        rel="stylesheet"
      ></link>

      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
          <div className="na">AutoSpecs</div>
        </div>
        <div className="cont">
          <li>
            <Link className="linker" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="linker" to="/brand">
              Brands
            </Link>
          </li>
          <li className="f1">
            <Link className="linker" to="/category">
              Categories
            </Link>
          </li>
          { userName ? (

            <li className="f1">
            <Link className="linker" to="/test-drive">
              DriveIt
            </Link>
          </li>
          ) : ( 
            <Link></Link>
          )
          }
          
          <li>
            <Link className="linker" to="/contact">
              Contact
            </Link>
          </li>

          <img
            onClick={() => {
              toggle_mode();
            }}
            src={theme === "light" ? logo_light : logo_dark}
            className="logo-light"
            alt="mode"
          />
        </div>

        <div className="userdet">
          <li>
            {userName ? (
              <>
                <div className="after-login">
                  <li>{userName || ""}</li>
                  <li>
                    <button className="Logout" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </div>
              </>
            ) : (
              <li>
                <Link to="/login" className="linker">
                  Login
                </Link>
              </li>
            )}
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
