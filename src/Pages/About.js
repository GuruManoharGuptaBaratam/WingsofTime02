import React from "react";
import Background from "../Components/Background";
import NavBar from "../Components/NavBar";
import "../Styles/About.css";
import Profile from "../Components/Profile";
function About() {
  return (
    <div>
      <Background />
      <NavBar />
      <Profile />

      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to WingsOfTime ✈️ — your go-to platform for tracking real-time
          flight status based on your Ticket ID or PNR Number.
        </p>
        <p className="about-description">
          Our goal is to make travel simpler by providing fast, accurate, and
          user-friendly flight details directly from aviation databases.
        </p>
        <p className="about-description">
          Whether you're traveling for business or leisure, FlightFinder is here
          to ensure you're always one step ahead in your journey.
        </p>
        <p className="about-footer">Thank you for choosing us 💙</p>
      </div>
    </div>
  );
}

export default About;
