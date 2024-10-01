import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function Header() {
    return (
      <Navbar style={{ backgroundColor: '#007bff' }} variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">CollabPlatform</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
              <Nav.Link href="#documents">Documents</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <Button variant="outline-light" href="#upload">Upload Document</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header