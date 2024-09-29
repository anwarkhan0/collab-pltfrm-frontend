import React, { useEffect }  from 'react'
import io from 'socket.io-client';
import { Navbar, Nav, Button, Container, Row, Col, Card } from 'react-bootstrap';


function MainPage() {

const socket = io('http://localhost:4000'); 


  // useEffect(() => {
  //   socket.on('message', (data) => {
  //     console.log(data);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

    return (
        <>
        {/* Hero Section */}
        <Container fluid className="p-5 text-center bg-light">
          <h1>Collaborate Effortlessly</h1>
          <p className="lead">A modern platform for teams to collaborate, communicate, and manage projects efficiently.</p>
          <Button variant="primary" size="lg" href="#getstarted">Get Started</Button>
        </Container>

          {/* Features Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Features</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Real-Time Collaboration</Card.Title>
                <Card.Text>Work together with your team in real-time, no matter where you are.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Task Management</Card.Title>
                <Card.Text>Organize your projects with powerful task management tools.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Video Conferencing</Card.Title>
                <Card.Text>Stay connected with high-quality video conferencing and chat features.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

        </>

    )
}

export default MainPage