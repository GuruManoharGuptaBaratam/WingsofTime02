import React, { useState } from "react";
import Background from "../Components/Background";
import NavBar from "../Components/NavBar";
import Profile from "../Components/Profile";

function Help() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How do I search for flight data?",
      answer:
        "Simply enter your Ticket ID or PNR number on the home page and click the search button.",
    },
    {
      question: "Why can't I find my flight?",
      answer:
        "Make sure your PNR or flight code is correct and the flight exists in the aviation database.",
    },
    {
      question: "Is this service free?",
      answer:
        "Yes, all features available on our platform are completely free to use.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      <Background />
      <NavBar />
      <Profile />

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: "800px",
          height: "75%",
          overflowY: "auto",
          padding: "2rem",
          backgroundColor: "rgba(255, 255, 255, 0.799)",
          color: "#000",
          borderRadius: "20px",
          fontFamily: "JetBrains Mono",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Help & FAQ
        </h1>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} style={{ marginBottom: "1.5rem" }}>
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  backgroundColor: "#b3e0ff",
                  color: "#000",
                  fontWeight: "bold",
                  width: "100%",
                  padding: "1rem",
                  textAlign: "left",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "JetBrains Mono",
                }}
              >
                {faq.question}
              </button>
              {openFAQ === index && (
                <div
                  style={{
                    backgroundColor: "#e6f5ff",
                    color: "#000",
                    padding: "1rem",
                    borderRadius: "10px",
                    marginTop: "0.5rem",
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "3rem",
            backgroundColor: "#e6f5ff",
            padding: "20px",
            borderRadius: "5px",
            overflowX: "auto"
          }}
        >
          <h2 style={{ color: "#0077b6" }}>Contact Us</h2>
          <br></br>
          <p>Email: manoharguptabaratam@gmail.com</p>
          <p>Phone: +91 1234****234 </p>
          <p>Location: Vizag, India </p>
        </div>
      </div>
    </div>
  );
}

export default Help;
