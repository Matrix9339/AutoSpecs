import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar.js";
import Footer from "../../components/footer/footer.js";
import video from "../../assets/test.mp4";
import "./test.css";

const TestDrive = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    car: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8081/bookings/NewBooking",
        formData
      );

      alert(
        response +
          " Thank You, Booking successful. you are now redirected to home page."
      );
      navigate("/");
    } catch (error) {
      alert("Error: Booking failed, user already booked a test drive.");
    }
  };

  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      <div className="drive-cont">
        <div className="video">
          <video autoPlay loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <form onSubmit={handleSubmit} className="for">
          <div className="App">
            <h1>Book A Test Drive</h1>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="name"
              placeholder="Jone Smith"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              placeholder="example@gmail.com"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              placeholder="+91 0099009900"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <select
              name="car"
              value={formData.car}
              onChange={handleChange}
              required
            >
              <option value="">Select a car</option>
              <option value="Swift (Automatic)">Swift (Automatic)</option>
              <option value="Swift Dzire (Manual)"> Swift Dzire (Manual)</option>
              <option value="Honda City (Manual)">Honda City (Manual)</option>
              <option value="BMW i4 (Manual)">BMW i4 (Manual)</option>
              <option value="Supra (Manual)">Supra (Manual)</option>
              <option value="Honda Civic (Manua)l">Honda Civic (Manual)</option>
              <option value="Audi A4 (Automatic)">Audi A4 (Automatic)</option>
            </select>
          </div>

          <div className="input-box">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Apply</button>
        </form>
      </div>

      <Footer/>
    </div>
  );
};

export default TestDrive;
