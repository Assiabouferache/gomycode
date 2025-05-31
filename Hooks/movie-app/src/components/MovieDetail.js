import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Image, Card } from "react-bootstrap";

const MovieDetail = ({ movies }) => {
  const { title } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.title === decodeURIComponent(title));

  if (!movie) {
    return (
      <Container className="mt-4 text-center">
        <h2 style={{ color: "#A83279" }}>Movie not found</h2>
        <Button
          onClick={() => navigate("/")}
          variant="pink"
          style={{ backgroundColor: "#f48fb1", border: "none" }}
        >
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Button
        variant="pink"
        onClick={() => navigate("/")}
        style={{
          backgroundColor: "#f48fb1",
          border: "none",
          borderRadius: "50px",
        }}
      >
        ← Back to Home
      </Button>
      <Card
        className="mt-3 p-4"
        style={{
          backgroundColor: "#fff0f6",
          boxShadow: "0 8px 20px rgba(168, 50, 121, 0.3)",
          borderRadius: "20px",
        }}
      >
        <Row>
          <Col md={4}>
            <Image src={movie.posterURL} alt={movie.title} fluid rounded />
          </Col>
          <Col md={8}>
            <h2 style={{ color: "#A83279" }}>{movie.title}</h2>
            <p style={{ color: "#6a1b4d", fontWeight: "600" }}>
              <strong>Description:</strong> {movie.description}
            </p>
            <p style={{ color: "#6a1b4d", fontWeight: "600" }}>
              <strong>Rating:</strong> {movie.rating}/5
            </p>
            <div
              className="ratio ratio-16x9"
              style={{ borderRadius: "15px", overflow: "hidden" }}
            >
              <iframe
                src={movie.trailerURL}
                title={`${movie.title} Trailer`}
                allowFullScreen
                frameBorder="0"
                style={{ borderRadius: "15px" }}
              />
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default MovieDetail;
