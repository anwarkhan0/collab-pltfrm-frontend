import React from 'react'
import { Container, Nav } from 'react-bootstrap'


function Footer() {
  return (
    <Container fluid className="py-3 text-center" style={{ 
      backgroundColor: '#f8f9fa',
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0
    }}>
      <p>© 2024 CollabPlatform. All rights reserved.</p>
      <Nav className="justify-content-center">
        <Nav.Link href="#privacy">Privacy Policy</Nav.Link>
        <Nav.Link href="#terms">Terms of Service</Nav.Link>
      </Nav>
    </Container>
  )
}

export default Footer