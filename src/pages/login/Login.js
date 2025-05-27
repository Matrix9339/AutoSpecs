import React, { useState } from "react";
import "./login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  localStorage.setItem(formData.email, "email");
  
  const handleRememberMeChange = (event) => {
    setFormData(event.target.checked);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8081/login",
        formData
      );
      alert(response.data);
      localStorage.setItem("email", formData.email);
      navigate("/");
    } catch (error) {
      alert("Invalid Email or Password");
    }
  };

  return (
    <>
      <div className="login-form">
        <form onSubmit={handleSubmit} className="form">
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="email@xyz.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="rember-forgot">
            <label>
              <input
                type="checkbox"
                checked={formData}
                onChange={handleRememberMeChange}
              />
              Remember me
            </label>
            <Link to="/reset-password" className="linker">
              Forgot password?
            </Link>
          </div>

          <button type="submit">Login</button>
          <div className="register">
            <p>
              Don't have an account?{" "}
              <Link to="/register-signup" className="linker">
                Register
              </Link>
            </p>
          </div>
          <div className="register">
            <p>
              Login as{" "}
              <Link to="/AdminLogin" className="linker">
                Admin
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
