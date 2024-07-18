import React from 'react'
import { FaUser, FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="wrapper">
        <form action="">
            <h1>Register</h1>

            <div className="input-box">
          <input type="text" placeholder="UserName" required />
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input type="email" placeholder="Email-id" required />
          <IoIosMail className="icon" />
        </div>

        <div className="input-box">
          <input type="password" placeholder="password" required />
          <FaLock className="icon" />
        </div>

        <button type="submit">Register</button>

        <div className="resister-link">
          <p>
            Already have an account? <Link to ="/Login">Login</Link>
          </p>
        </div>
        
        </form>
    </div>

  )
}

export default Signup;
