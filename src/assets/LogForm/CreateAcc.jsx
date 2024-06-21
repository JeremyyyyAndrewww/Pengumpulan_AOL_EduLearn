import React, { useState } from "react";
import "./LogForm.css";
import { Link } from 'react-router-dom';

const CreateAcc = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    role: "Student", // Default role
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.email !== "" && input.password !== "") {
      console.log("Account created:", input);
      return;
    }
    alert("Please provide valid input");
  };

  return (
    <>
      <div className="formBody">
        <div className="logInCard">
          <h2>Create Account</h2>
          <h3>Please Enter Your Credentials</h3>
          <form className="loginForm" onSubmit={handleSubmitEvent}>
            <input 
              type="text" 
              name="username" 
              placeholder="Username" 
              value={input.username} 
              onChange={handleInput} 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={input.email} 
              onChange={handleInput} 
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={input.password} 
              onChange={handleInput} 
            />
            <select
              name="role"
              value={input.role}
              onChange={handleInput}
              className="roleSelect"
            >
              <option value="Student">Student</option>
              <option value="Tutor">Tutor</option>
            </select>
            <button type="submit">Create Account</button>

            <span className="backToHome"><Link to="/">Back to Home</Link></span>
            <span className="createAccount"><Link to="/login">Log In</Link></span>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAcc;
