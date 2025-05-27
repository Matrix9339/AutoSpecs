import React, { useState, useRef  } from "react";
import axios from 'axios';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {Link, useNavigate} from "react-router-dom";
import '../login/login.css';
import emailjs from '@emailjs/browser';

const Newuser=() => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_fname: '',
    user_lname: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = 'service_tgc7pqs';
    const templateId = 'template_ta913ll';
    const publicKey = 'o-pnqW_q7hhk8FIH0';

    const templateParams = {
      from_name: formData.user_fname,
      from_email: formData.email,
      to_name: 'Web Wizard',
    };

    try {
      const response = await axios.post('http://localhost:8081/register', formData);
      alert(response.data);

      emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      navigate('/login')
      // Handle success
    } catch (error) {
      alert(error);
      // Handle error
    }    
  };


  return (
    <div className="login-form">
    <form className='form' onSubmit={handleSubmit} ref={form}>
        <h1>SignUp</h1>
        <div className="input-box">
            <input type="text" name="user_fname" value={formData.user_fname} onChange={handleChange} placeholder='First Name' required/>
            <FaUser className='icon'/>
        </div>
        <div className="input-box">
            <input type="text" name="user_lname" value={formData.user_lname} onChange={handleChange} placeholder='Last Name' required/>
            <FaUser className='icon'/>
        </div>
        <div className="input-box">
            <input type="text" name="email" value={formData.email} onChange={handleChange}placeholder='Email' required/>
            <MdEmail className='icon'/>
        </div>
        <div className="input-box">
            <input type="password" name="password" value={formData.password} onChange={handleChange}placeholder='Password' required/>
            <FaLock className='icon'/>
        </div> 
        <button type="submit">SignUp</button>
        <div className="register">
            <p>Already have an account? <Link to="/login" className="linker">Login</Link></p>
        </div>
    </form>
    </div>
  );
};

export default Newuser;
