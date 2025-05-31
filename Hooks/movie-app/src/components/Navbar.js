import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => (
  <Navbar bg="dark" variant="dark" expand="md" className="mb-4">
    <Container>
      <Navbar.Brand href="#">My Movie App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#movies">Movies</Nav.Link>
          <Nav.Link href="#add">Add Movie</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;
