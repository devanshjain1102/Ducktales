/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="wrapper">
      <form action="">
    
        <h1>Login</h1>
    
        <div className="input-box">
          <input type="text" placeholder="Email" required />
          <FaUser className="icon" />
        </div>
        
        <div className="input-box">
          <input type="Password" placeholder="password" required />
          <FaLock className="icon" />
        </div>
        
        <div className="remember-forget">
          <label>
            <input type="checkbox" />
            Remeber me
          </label>
          <a href="#">Forget password?</a>
        </div>
        
        <button type="submit">Login</button>
        
        <div className="resister-link">
          <p>
            Don't have an account? <Link to ="/Signup">Register</Link>
          </p>
        </div>
      
      </form>
    
    </div>
  );
};
export default Login;
