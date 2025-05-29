import React from "react";
import { Card } from "react-bootstrap";

export function Price({ price }) {
  return <Card.Subtitle className="mb-2 text-muted">${price}</Card.Subtitle>;
}
