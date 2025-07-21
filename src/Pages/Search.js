import React, { useState } from "react";
import Background from "../Components/Background";
import Loading from "../Components/Loader.js";
import NavBar from "../Components/NavBar";
import "../Styles/Search.css";
import ProfileI from "../Components/Profile";


function Search() {
  const [ticketId, setTicketId] = useState("");
  const [loading, setLoading] = useState(false);
  const [flightData, setFlightData] = useState([]);
  const [expandedCards, setExpandedCards] = useState({}); 
  const key = "215a0a04e58212b317b73f8300ceda52"

  const handleSearch = async () => {
    if (!ticketId.trim()) {
      alert("Please enter your Ticket ID or PNR Number!");
      return;
    }

    setLoading(true);
    setFlightData(null);

    try {
      const response = await fetch(
        `https://api.aviationstack.com/v1/flights?access_key=${key}&flight_iata=${ticketId.trim()}`
      );

      const data = await response.json();
      console.log("Flight data response:", data);

      setFlightData(data.data);
      if (!data.data || data.data.length === 0) {
        alert("No flight found with that number. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching flight data:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      <Background />
      <NavBar />
      <ProfileI />

      <div className="search-container">
        <input
          className="search-input"
          placeholder="Enter Flight Number (e.g., AI202)"
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
                <div className="flight-card" key={index}>
                  <h3>{flight.airline.name} - {flight.flight.iata}</h3>
                  <p><strong>From:</strong> {flight.departure.airport} ({flight.departure.iata})</p>
                  <p><strong>To:</strong> {flight.arrival.airport} ({flight.arrival.iata})</p>
                  <p><strong>Status:</strong> {flight.flight_status}</p>
                  <p><strong>Scheduled Departure:</strong> {flight.departure.scheduled}</p>
                  <p><strong>Scheduled Arrival:</strong> {flight.arrival.scheduled}</p>

                  <button className="more-button" onClick={() => toggleExpand(index)}>
                    {expandedCards[index] ? "Less ▲" : "More ▼"}
                  </button>

                  {expandedCards[index] && (
                    <div className="flight-details">
                      <p><strong>Terminal (Departure):</strong> {flight.departure.terminal || "N/A"}</p>
                      <p><strong>Gate (Departure):</strong> {flight.departure.gate || "N/A"}</p>
                      <p><strong>Terminal (Arrival):</strong> {flight.arrival.terminal || "N/A"}</p>
                      <p><strong>Gate (Arrival):</strong> {flight.arrival.gate || "N/A"}</p>
                      <p><strong>Delay (Departure):</strong> {flight.departure.delay ? `${flight.departure.delay} mins` : "N/A"}</p>
                      <p><strong>Aircraft:</strong> {flight.aircraft?.icao || "N/A"}</p>
                    </div>
                  )}
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
