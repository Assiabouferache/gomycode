import React from "react";
import { Card } from "react-bootstrap";

export function Description({ description }) {
  return <Card.Text>{description}</Card.Text>;
}
