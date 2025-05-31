// src/Player.js
import React from "react";
import { Card } from "react-bootstrap";
import "./Player.css"; // Import custom CSS for animations

// Card styling
const cardStyle = {
  width: "100%",
  marginBottom: "2rem",
  transition: "transform 0.3s",
  borderRadius: "15px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
};

// Player component
const Player = ({
  name = "Unknown Player",
  team = "Unknown Team",
  nationality = "Unknown",
  jerseyNumber = 0,
  age = 0,
  position = "Unknown",
  rating = 0,
  imageUrl = "https://via.placeholder.com/150",
}) => {
  return (
    <Card className="player-card" style={cardStyle}>
      <Card.Img
        variant="top"
        src={imageUrl}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}
          <br />
          <strong>Nationality:</strong> {nationality}
          <br />
          <strong>Position:</strong> {position}
          <br />
          <strong>Jersey #:</strong> {jerseyNumber}
          <br />
          <strong>Age:</strong> {age}
          <br />
          <strong>Rating:</strong> ⭐ {rating}/100
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
