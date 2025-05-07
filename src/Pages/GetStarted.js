import React from 'react'
import { Link } from 'react-router-dom';
import ProfileI from '../Components/Profile.js';
import Background from '../Components/Background.js';

const GetStarted = () => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    fontFamily: 'Courier New, monospace',
  };

  

  
  const mainContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '42px',      
    fontWeight: 'bold',
    marginBottom: '30px',
  };
  const centerLogoStyle = {
    width: '300px',
    height: '300px',
    borderRadius: '60%',
    backgroundColor: 'white',
    opacity: 0.7,        
    margin: '0 auto 20px',
  };

  const buttonStyle = {
    backgroundColor: '#49C5FF9C',
    opacity: 0.61,
    color: 'white',
    fontWeight: "bold",
    fontSize: '20px',
    padding: '14px 28px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontFamily: 'Courier New, monospace',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    marginTop: '30px',
  };

  return (
    <div style={containerStyle}>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
      </style>

      <Background/>
      <ProfileI/>

      <div style={mainContentStyle}>
        
        <h1 style={headingStyle}>Welcome To <br /> WingsOfTime</h1>
        <div style={centerLogoStyle}></div>
        <Link to='/Home'> <button style={buttonStyle}>Find your Flight..</button> </Link>
      </div>
    </div>
  );
};

export default GetStarted;
