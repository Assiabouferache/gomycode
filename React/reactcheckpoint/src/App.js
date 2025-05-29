import React from "react";
import { Card, Container } from "react-bootstrap";
import { Name } from "./name";
import { Price } from "./price";
import { Description } from "./description";
import { Image } from "./image";
import { products } from "./Product";

export default function App() {
  // First name variable; change this to test conditional rendering
  const firstName = "Daniel"; // Try "" or undefined to see the alternate greeting

  // Pick the first product to display in the card (you can customize)
  const product = products[0];

  return (
    <Container className="my-5" style={{ maxWidth: "400px" }}>
      <Card
        className="shadow-lg"
        style={{ borderRadius: "20px", backgroundColor: "#f9f9f9" }}
      >
        <Image src={product.image} alt={product.name} />
        <Card.Body>
          <Name productName={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Body>
      </Card>

      <div
        style={{
          marginTop: "20px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </div>

      {firstName && (
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <img
            src="https://avatars.githubusercontent.com/u/583231?v=4" // Sample image; replace if you want
            alt={firstName}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "3px solid #333",
            }}
          />
        </div>
      )}
    </Container>
  );
}
