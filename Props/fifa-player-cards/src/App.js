// src/App.js
import React from "react";
import PlayersList from "./components/PlayerList";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center",
          marginTop: "1rem",
          fontWeight: "bold",
          fontSize: "2.5rem",
          color: "#007bff",
        }}
      >
        ⚽ FIFA Player Cards ⚽
      </h1>
      <PlayersList />
    </div>
  );
}

export default App;
