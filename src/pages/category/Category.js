import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar.js";
import Footer from "../../components/footer/footer";
import axios from 'axios';
import video from "../../assets/video.mp4";
import "./cat-style/Cate.css";

const Category = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  const [carItems, setCarItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  useEffect(() => {
    const fetchCarItems = async () => {
      try {
        const response = await axios.get('http://localhost:8081/carsAll/items');
        setCarItems(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchCarItems();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const storedEmail = localStorage.getItem("email");

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      {storedEmail ? (
        <div className="cat-body">
          <div className="vid">
            <video autoPlay loop>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="categories">
            {/* <h2>Categories</h2> */}
            <ul>
              <li onClick={() => handleCategoryClick('Sports')}>Sports</li>
              <li onClick={() => handleCategoryClick('Suv')}>SUV</li>
              <li onClick={() => handleCategoryClick('Sedan')}>Sedan</li>
              <li onClick={() => handleCategoryClick('Hatchback')}>Hatchback</li>
            </ul>
          </div>
          <div className="car-items">
            {carItems
              .filter((item) => !selectedCategory || item.category === selectedCategory)
              .map((item) => (
                <div key={item.id} className="car-item">
                  <img src={item.photoUrl} alt={item.name} className="car-item-image" />
                  <h3>Model Name: {item.name}</h3>
                  <p className="description">Transmission: {item.description}</p>
                  <p className="price">Price: ₹{item.price.toFixed(2)}</p>
                </div>
              ))}
            {error && <p>Error: {error.message}</p>}
          </div>
        </div>
      ) : (
        <div className="notlogedin">
          <span className="sp">Category is a premium content please Login/Register yourself to access this page.</span>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Category;
