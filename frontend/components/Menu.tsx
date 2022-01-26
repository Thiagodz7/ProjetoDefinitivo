import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Menu(propNav) {
  return (
      <div>
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Cursos</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/cursos">Cursos</Nav.Link>
        <Nav.Link href="/usuario">Perfil</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
  );
}
