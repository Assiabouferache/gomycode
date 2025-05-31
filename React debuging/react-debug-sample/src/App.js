// src/App.js
import React from "react";
import Counter from "./Counter";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Debugging React App</h1>

      {/* Counter with props */}
      <Counter initialCount={5} />

      {/* Intentional bug: age prop is missing */}
      <UserProfile name="Alice" />

      {/* Correct usage for comparison */}
      <UserProfile name="Bob" age={30} />
    </div>
  );
}

export default App;
