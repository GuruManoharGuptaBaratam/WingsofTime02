import React, { useState } from "react";
import Background from "../Components/Background";
import Loading from "../Components/Loader.js";
import NavBar from "../Components/NavBar";
import "../Styles/Search.css";
import Profile from "../Components/Profile";

function Search() {
  const [ticketId, setTicketId] = useState("");
  const [loading, setLoading] = useState(false);
  const [flightData, setFlightData] = useState([]);

  const handleSearch = async () => {
    if (!ticketId.trim()) {
      alert("Please enter your Ticket ID or PNR Number!");
      return;
    }

    setLoading(true);
    setFlightData(null);

    try {
      const response = await fetch(
        `https://api.aviationstack.com/v1/flights?access_key=${process.env.REACT_APP_AVIATION_API_KEY}&limit=5`
      );

      const data = await response.json();
      console.log("Flight data response:", data);

      setFlightData(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching flight data:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Background />
      <NavBar />
      <Profile />

      <div className="search-container">
        <input
          className="search-input"
          placeholder="Enter Your Ticket ID or PNR Number"
          value={ticketId}
          onChange={(e) => setTicketId(e.target.value)}
        />
        <button onClick={handleSearch} className="search-button">
          🔍
        </button>
      </div>

      <div className="flight-data-container">
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <Loading />
          </div>
        ) : (
          flightData && (
            <div className="flight-results">
              {flightData.map((flight, index) => (
                <div key={index} className="flight-card">
                  <h3>{flight.airline.name}</h3>
                  <p>From: {flight.departure.iata}</p>
                  <p>To: {flight.arrival.iata}</p>
                  <p>Departure: {flight.departure.scheduled}</p>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Search;
