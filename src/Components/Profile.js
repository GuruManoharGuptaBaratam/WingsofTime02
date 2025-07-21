import React from 'react'
import { Link } from 'react-router-dom';
import user from "../Sources/user.png"
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
        opacity: 0.9,
        border: '2px solid #ccc',
        marginRight: '10px',
      };
  return (

    <div style={userInfoStyle}>
        <Link to="/Profile" style={{ textDecoration: 'none', color: '#000'}}><div >
          <img src={user} alt='User_logo' style={userIconStyle}></img>
        </div>
        <span >Manohar</span></Link>
    </div>
    
  )
}
