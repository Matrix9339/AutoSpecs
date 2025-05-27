import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import "./adminLogin.css";

const AdminLoginForm = () => {
  const [adminData, setAdminData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const navigate = useNavigate();
  localStorage.setItem(adminData.email, "email");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8081/admin-login",
        adminData
      );
      localStorage.setItem("email", adminData.email);
      console.log(response.data);

      navigate("/Admin");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="adminlogin-form">
      <form onSubmit={handleSubmit} className="form">
        <h1>Admin</h1>
        <div className="input-box">
          <input
            type="text"
            name="username"
            placeholder="admin@xyz.com"
            value={adminData.username}
            onChange={handleChange}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder="password"
            value={adminData.password}
            onChange={handleChange}
            required
          />
             <FaLock className="icon" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLoginForm;
