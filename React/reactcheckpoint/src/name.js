import React from "react";
import { Card } from "react-bootstrap";

export function Name({ productName }) {
  return <Card.Title>{productName}</Card.Title>;
}
