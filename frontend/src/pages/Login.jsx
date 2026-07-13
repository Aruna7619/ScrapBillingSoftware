import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/login.css";

const Login = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      alert("Please enter Email and Password.");
      return;
    }

    if (
      formData.email.trim() === "admin@gmail.com" &&
      formData.password === "admin123"
    ) {

      alert("Login Successful!");

      navigate("/dashboard");

    } else {

      alert("Invalid Email or Password");

      setFormData({
        ...formData,
        password: "",
      });

    }

  };

  return (

    <div className="login-page">

      <div className="login-card">

        <div className="login-header">

          <img
            src="/logo192.png"
            alt="Logo"
            className="login-logo"
          />

          <h2>Scrap Billing Software</h2>

          <p>Admin Login</p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />

          </div>

          <div className="form-group">

            <label>Password</label>

            <div className="password-box">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
              />

              <span
                className="password-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

            </div>

          </div>

          <div className="login-options">

            <label>

              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />

              Remember Me

            </label>

            <span className="forgot-password">
              Forgot Password?
            </span>

          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

      </div>

    </div>

  );

};

export default Login;