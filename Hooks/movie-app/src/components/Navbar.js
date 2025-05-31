import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => (
  <Navbar
    expand="lg"
    style={{
      backgroundColor: "#FADADD",
      boxShadow: "0 2px 8px rgba(250, 218, 221, 0.7)",
    }}
  >
    <Container>
      <Navbar.Brand
        href="/"
        style={{
          fontFamily: "'Pacifico', cursive",
          fontSize: "1.8rem",
          color: "#A83279",
        }}
      >
        PinkFlix
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ borderColor: "#A83279" }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" style={{ fontWeight: "600" }}>
          <Nav.Link href="/" style={{ color: "#A83279" }}>
            Home
          </Nav.Link>
          <Nav.Link href="#add" style={{ color: "#A83279" }}>
            Add Movie
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;
