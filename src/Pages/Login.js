import React, { useState,useRef } from 'react';
import '../Styles/LoginPage.css';
import Background from '../Components/Background';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  let inputRef = useRef(null)
  const [username,setName] = useState("")
  const [pass,setPass] = useState("")
  const [login,setLogin] = useState("")
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
   function handleLogin(){
    if (username === "" || pass === ""){
      inputRef.current.style.border = "0.5px solid Red"

    }
     if(username === "user01@gmail.com"){
       if (pass === "12344"){
         setLogin("/GetStarted")
       }
       else{
        inputRef.current.style.border = "0.5px solid lightRed"
    
       }
     }
     
    
   }
  

  return (
    <div className="login-page">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
      </style>

      <Background/>
      <div className="login-container">
        <h1>Login</h1>

        <div className="input-box">
          <span className="icon">👤</span>
          <input type="text" placeholder="  Username" onChange={(e)=>setName(e.target.value)} ref={inputRef}/>
        </div>

        <div className="input-box">
          <span className="icon">🔒</span>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="  Password" onChange={(e)=>setPass(e.target.value)}
            ref={inputRef}
          />
          <span className="show" onClick={togglePassword}>
            {showPassword ? 'HIDE' : 'SHOW'}
          </span>
        </div>

        <hr className="divider" />

        <div className="buttons">
          <button className="signup-btn">Sign Up</button>
          <span className="or">OR</span>
          <Link to={login} onClick={handleLogin}><button className="login-btn">Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
