import React from "react";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ title, description, posterURL, rating }) => (
  <Card
    style={{
      width: "18rem",
      margin: "1rem",
      cursor: "pointer",
      backgroundColor: "#fff0f6",
    }}
    className="shadow-sm"
  >
    <Link
      to={`/movie/${encodeURIComponent(title)}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card.Img
        variant="top"
        src={posterURL}
        alt={title}
        style={{
          height: "280px",
          objectFit: "cover",
          borderRadius: "20px 20px 0 0",
        }}
      />
      <Card.Body>
        <Card.Title
          style={{ fontWeight: "700", fontSize: "1.25rem", color: "#A83279" }}
        >
          {title}
        </Card.Title>
        <Badge
          bg="pink"
          text="dark"
          style={{
            backgroundColor: "#f48fb1",
            fontWeight: "600",
            marginBottom: "0.5rem",
          }}
        >
          {`⭐ ${rating}/5`}
        </Badge>
        <Card.Text
          style={{ height: "80px", overflow: "hidden", color: "#6a1b4d" }}
        >
          {description.length > 90
            ? description.slice(0, 90) + "..."
            : description}
        </Card.Text>
      </Card.Body>
    </Link>
  </Card>
);

export default MovieCard;
