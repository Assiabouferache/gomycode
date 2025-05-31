// src/App.js
import React, { Component } from "react";

class App extends Component {
  // Step 3: Initialize state in constructor
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Assia Bouferache",
        bio: "A passionate software developer who loves React!",
        imgSrc: "https://i.imgur.com/0y8Ftya.jpg",
        profession: "Frontend Developer",
      },
      shows: false,
      elapsedSeconds: 0,
    };
  }

  // Step 4: Lifecycle method - componentDidMount
  componentDidMount() {
    // Start a timer that updates elapsedSeconds every second
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        elapsedSeconds: prevState.elapsedSeconds + 1,
      }));
    }, 1000);
  }

  // Step 5: Clear the interval on unmount to avoid memory leaks
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // Step 6: Toggle shows state when button clicked
  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.Person;
    const { shows, elapsedSeconds } = this.state;

    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <button
          onClick={this.toggleShow}
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            cursor: "pointer",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            marginBottom: "1rem",
          }}
        >
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div
            style={{
              border: "2px solid #007bff",
              padding: "1.5rem",
              borderRadius: "10px",
              width: "300px",
              margin: "auto",
            }}
          >
            <img
              src={imgSrc}
              alt={fullName}
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "1rem",
              }}
            />
            <h2>{fullName}</h2>
            <h4 style={{ color: "gray", marginBottom: "1rem" }}>
              {profession}
            </h4>
            <p>{bio}</p>
          </div>
        )}

        <p style={{ marginTop: "2rem", fontStyle: "italic" }}>
          Time since component mounted: {elapsedSeconds} second
          {elapsedSeconds !== 1 ? "s" : ""}
        </p>
      </div>
    );
  }
}

export default App;
