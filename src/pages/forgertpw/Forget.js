import React, { useState } from "react";
import axios from "axios";
import { MdEmail } from "react-icons/md";
import "./forget.css";

const Forget = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/send-otp", {
        email,
      });
      setMessage(response.data.message);
      setIsOtpSent(true);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/reset-password",
        { email, otp, newPassword }
      );
      setMessage(response.data.message);
      setEmail("");
      setOtp("");
      setNewPassword("");
      setIsOtpSent(false);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="reset-form">
      <form onSubmit={isOtpSent ? handleResetPassword : handleSendOtp}>
        
          <h2>Reset Password</h2>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email} onChange={handleChange}
              required
            />
            <MdEmail className="icon" />
          </div>
          {!isOtpSent && (
            <button type="submit">Send OTP</button>
          )}

          {isOtpSent && (
          <>
                  <label htmlFor="">OTP:
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={handleOtpChange}
                    />
                    </label>

                    <label htmlFor="">

                  <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    />
                    </label>
                  <button type="submit">Verify OTP</button>
                  </>
          )}
        
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Forget;
