import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const Filter = ({
  filterTitle,
  setFilterTitle,
  filterRating,
  setFilterRating,
}) => (
  <Form className="my-4">
    <Row className="align-items-center">
      <Col md={6} className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search by title..."
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
          style={{
            borderColor: "#f48fb1",
            fontWeight: "600",
            color: "#4a235a",
          }}
        />
      </Col>
      <Col md={6}>
        <Form.Label
          htmlFor="ratingRange"
          className="fw-bold"
          style={{ color: "#A83279" }}
        >
          Minimum Rating: {filterRating}
        </Form.Label>
        <Form.Range
          id="ratingRange"
          min={0}
          max={5}
          step={1}
          value={filterRating}
          onChange={(e) => setFilterRating(Number(e.target.value))}
          style={{ accentColor: "#f48fb1" }}
        />
      </Col>
    </Row>
  </Form>
);

export default Filter;
