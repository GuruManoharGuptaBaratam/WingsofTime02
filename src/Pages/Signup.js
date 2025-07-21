import React, { useState, useRef } from 'react';
import '../Styles/LoginPage.css'; 
import Background from '../Components/Background';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignUp = () => {
    if (!username || !email || !pass) {
      inputRef.current.style.border = '0.5px solid red';
      alert("Please fill out all fields");
      return;
    }

    alert('Account created successfully!');
    navigate('/GetStarted'); 
  };

  return (
    <div className="login-page">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
      </style>

      <Background />
      <div className="login-container">
        <h1>Sign Up</h1>

        <div className="input-box">
          <span className="icon">👤</span>
          <input
            type="text"
            placeholder="  Username"
            onChange={(e) => setUsername(e.target.value)}
            ref={inputRef}
          />
        </div>

        <div className="input-box">
          <span className="icon">📧</span>
          <input
            type="email"
            placeholder="  Email"
            onChange={(e) => setEmail(e.target.value)}
            ref={inputRef}
          />
        </div>

        <div className="input-box">
          <span className="icon">🔒</span>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="  Password"
            onChange={(e) => setPass(e.target.value)}
            ref={inputRef}
          />
          <span className="show" onClick={togglePassword}>
            {showPassword ? 'HIDE' : 'SHOW'}
          </span>
        </div>

        <hr className="divider" />

        <div className="buttons">
          <Link to="/" ><button className="signup-btn">Back to Login</button></Link>
          <span className="or">OR</span>
          <button className="login-btn" onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
