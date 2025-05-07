import React from 'react'
import { Link } from 'react-router-dom';

export default function ProfileI() {
    const userInfoStyle = {
        position: 'absolute',
        top: '25px',
        right: '30px',
        display: 'flex',
        alignItems: 'center',
        color: '#000',
        fontWeight: 600,
        fontSize: '14px',
        fontFamily: "JetBrains Mono"
      };
    
      const userIconStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'white',
        opacity: 0.7,
        border: '2px solid #ccc',
        marginRight: '10px',
      };
  return (

    <div style={userInfoStyle}>
        <Link to="/Profile" style={{ textDecoration: 'none', color: '#000' }}><div style={userIconStyle}></div>
        <span >User 01</span></Link>
    </div>
    
  )
}
