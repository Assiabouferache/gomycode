import React from "react";
import MovieCard from "./MovieCard";
import { Row, Col } from "react-bootstrap";

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <p className="text-center">No movies found matching your criteria.</p>
    );
  }

  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-3 justify-content-center">
      {movies.map((movie, index) => (
        <Col key={index}>
          <MovieCard {...movie} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
