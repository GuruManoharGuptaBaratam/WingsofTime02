import React, { useState } from "react";
import Background from "../Components/Background";
import NavBar from "../Components/NavBar";
import Profile from "../Components/Profile";
import { Link } from "react-router-dom";

function Home() {
  const [check, setCheck] = useState(false);
  const [PNR, setPNR] = useState(null);
  const [search, setSearch] = useState("");
  function handleSubmit() {
    if (check && PNR) {
      setSearch("/Search");
    } else {
      alert("Fill all the details");
    }
  }
  const styles = {
    wrapper: {
      position: "relative",
      height: "100vh",
      width: "100vw",
      fontFamily: '"Courier New", Courier, monospace',
      overflow: "hidden",
    },

    profile: {
      position: "absolute",
      top: "20px",
      right: "30px",
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
      color: "#000",
      fontWeight: 600,
      zIndex: 10,
      fontFamily: "JetBrains Mono",
    },

    userCircle: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      background: "white",
      opacity: 0.7,
      border: "2px solid #ccc",
      marginRight: "10px",
    },

    centerBox: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      padding: "10px",
      width: "90%",
      maxWidth: "600px",
    },

    input: {
      fontSize: "1.4rem",
      padding: "1.5rem",
      width: "100%",
      borderRadius: "50px",
      border: "3px solid rgba(1, 175, 255, 0.41)",
      outline: "none",
      textAlign: "center",
      marginBottom: "20px",
      fontFamily: "JetBrains Mono",
    },

    checkbox: {
      margin: "20px 0",
      fontSize: "14px",
      color: "#222",
      fontFamily: "JetBrains Mono",
    },

    submitBtn: {
      backgroundColor: "rgba(73, 197, 255, 0.6)",
      padding: "15px 30px",
      fontSize: "1rem",
      borderRadius: "12px",
      border: "none",
      cursor: "pointer",
      fontWeight: "semiBold",
      fontFamily: "JetBrains Mono",
    },
  };

  return (
    <div style={styles.wrapper}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
      </style>

      <Background />
      <div className="Navbar">
        <NavBar />
      </div>

      <Profile />

      <div style={styles.centerBox}>
        <input
          type="text"
          placeholder="Enter Your Ticket ID or PNR Number"
          style={styles.input}
          onChange={(e) => setPNR(e.target.value)}
        />
        <div style={styles.checkbox}>
          <input
            type="checkbox"
            id="confirm"
            onClick={() => {
              setCheck((prev) => !prev);
            }}
          />
          <label htmlFor="confirm"> To Confirm and save your Ticket ID</label>
        </div>
        <Link to={search}>
          <button style={styles.submitBtn} onClick={handleSubmit}>
            Submit ID
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
