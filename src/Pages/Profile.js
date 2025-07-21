import React from 'react';
import Background from '../Components/Background';
import NavBar from '../Components/NavBar';
import '../Styles/Profile.css';
import { Link } from 'react-router-dom';
import ProfileI from '../Components/Profile';
function ProfilePage() {
  const user = JSON.parse(localStorage.getItem('user')) || {
    name: "Manohar",
    email: "manohargupta@gmail.com",
    joined: "Unknown"
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    alert("You have been logged out.");
  };

  return (
    <div>
      <Background />
      <NavBar />
      <ProfileI />
      
      <div className="profile-container">
        <div className="profile-card">
          <img
            src="https://i.imgur.com/3JjKs5g.png"
            alt="Profile"
            className="profile-avatar"
          />
          <h2>{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Joined:</strong> {user.joined}</p>
          <Link to="/"><button className="logout-button" onClick={handleLogout}>
            Logout 🚪
          </button></Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
