import React from "react";
import { Card, Badge } from "react-bootstrap";

const MovieCard = ({ title, description, posterURL, rating }) => (
  <Card style={{ width: "18rem", margin: "1rem" }} className="shadow-sm">
    <Card.Img
      variant="top"
      src={posterURL}
      alt={title}
      style={{ height: "300px", objectFit: "cover" }}
    />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Badge
        bg="warning"
        text="dark"
        className="mb-2"
      >{`Rating: ${rating}/5`}</Badge>
      <Card.Text style={{ height: "80px", overflow: "hidden" }}>
        {description}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default MovieCard;
