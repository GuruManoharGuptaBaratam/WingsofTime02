// NavBar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

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

  return (
    <div>
      <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
        {isMobile && (
          <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        )}
        <Link to="/Home" className="nav-link">
          <button className={`nav-btn ${isMobile && !menuOpen ? 'hidden' : ''}`}>Home</button>
        </Link>
        <Link to="/Search" className="nav-link">
          <button className={`nav-btn ${isMobile && !menuOpen ? 'hidden' : ''}`}>Search</button>
        </Link>
        <Link to="/About" className="nav-link">
          <button className={`nav-btn ${isMobile && !menuOpen ? 'hidden' : ''}`}>About</button>
        </Link>
        <Link to="/Help" className="nav-link">
          <button className={`nav-btn ${isMobile && !menuOpen ? 'hidden' : ''}`}>Help</button>
        </Link>
      </nav>
    </div>
  );
}
