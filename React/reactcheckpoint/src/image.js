import React from "react";
import { Card } from "react-bootstrap";

export function Image({ src, alt }) {
  return <Card.Img variant="top" src={src} alt={alt} />;
}
