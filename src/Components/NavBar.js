import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navbar = {
    position: 'absolute',
    top: '16px',
    left: isMobile ? '12px' : '50%',
    transform: isMobile ? 'none' : 'translateX(-50%)',
    background: 'rgba(255, 255, 255, 0.75)',
    padding: isMobile ? '10px' : '10px',
    display: isMobile ? 'block' : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    gap: isMobile ? '0px' : '120px',
    borderRadius: '30px',
    width: isMobile ? 'fit-content' : '65%',
    zIndex: 10,
    fontStyle: "JetBrains Mono",
    border: "0.5px solid lightBlue"
  };

  const navBtn = {
    backgroundColor: 'rgba(175, 219, 255, 0.98)',
    padding: isMobile ? '8px 15px' : '10px 25px',
    fontSize: isMobile ? '14px' : '18px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '100',
    letterSpacing: '1px',
    margin: '5px 0',
    display: isMobile && !menuOpen ? 'none' : 'block',    
    fontFamily: "JetBrains Mono",
    border: "0.5px solid lightBlue"
  };

  const hamburgerBtn = {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    display: isMobile ? 'block' : 'none',
    marginBottom: '10px',
    fontWeight: 'bold',
    fontFamily: "JetBrains Mono"
  };

  return (
    <div>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
      </style>

      <nav style={navbar}>
        {isMobile && (
          <button style={hamburgerBtn} onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        )}
        <Link to="/Home" style={{textDecoration:'None'}}><button style={navBtn}>Home</button></Link>
        <Link to="/Search" style={{textDecoration:'None'}}><button style={navBtn}>Search</button></Link>
        <Link to="/About" style={{textDecoration:'None'}}><button style={navBtn}>About</button></Link>
       <Link to="/Help" style={{textDecoration:'None'}}><button style={navBtn}>Help</button></Link> 
      </nav>
    </div>
  );
}
