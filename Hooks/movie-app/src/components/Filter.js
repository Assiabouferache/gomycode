import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const Filter = ({
  filterTitle,
  setFilterTitle,
  filterRating,
  setFilterRating,
}) => (
  <Form className="mb-4">
    <Row className="align-items-center">
      <Col md={6} className="mb-2">
        <Form.Control
          type="text"
          placeholder="Filter by title..."
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
        />
      </Col>
      <Col md={6} className="mb-2">
        <Form.Select
          value={filterRating}
          onChange={(e) => setFilterRating(Number(e.target.value))}
        >
          <option value={0}>Filter by rating</option>
          <option value={1}>1 and up</option>
          <option value={2}>2 and up</option>
          <option value={3}>3 and up</option>
          <option value={4}>4 and up</option>
          <option value={5}>5 only</option>
        </Form.Select>
      </Col>
    </Row>
  </Form>
);

export default Filter;
