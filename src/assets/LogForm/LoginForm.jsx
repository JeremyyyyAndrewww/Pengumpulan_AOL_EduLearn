import React, { useState } from "react";
import "./LogForm.css";
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.email !== "" && input.password !== "") {
      return;
    }
    alert("Please input the right email and password");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="formBody">
        <div className="logInCard">
          <h2>Login</h2>
          <h3>Please Enter Your Credentials</h3>
          <form className="loginForm" onSubmit={handleSubmitEvent}>
            <input 
              type="email" 
              id="user-email" 
              name="email" 
              placeholder="Email"
              aria-describedby="user-email"
              aria-invalid="false"
              onChange={handleInput}
            />

            <input 
              type="password" 
              id="password"
              name="password"
              placeholder="Password"
              aria-describedby="user-password"
              aria-invalid="false"
              onChange={handleInput}
            />

            <span className="forgotPassword">Forgot Your Password?</span>
            <button type="submit">Log In</button>

            <span className="createAccount"><Link to="/createAccount">Create Account</Link></span>
            <span className="backToHome"><Link to="/">Back to Home</Link></span>

           
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
