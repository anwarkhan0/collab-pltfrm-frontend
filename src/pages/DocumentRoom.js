import React, { useState, useEffect } from 'react';
import { Nav, Button, Container, Table, Row, Col, Form, InputGroup, Spinner } from 'react-bootstrap';


const DocumentRoom = () => {
  // State to hold documents
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch documents from the server
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/user/get-documents'); // Your Node.js API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch documents');
        }
        const data = await response.json();
        setDocuments(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <>
      {/* Search and Upload Section */}
      <Container className="py-4">
        <Row className="mb-4">
          <Col md={8}>
            <InputGroup>
              <Form.Control
                placeholder="Search documents..."
                aria-label="Search documents"
              />
              <Button variant="primary">Search</Button>
            </InputGroup>
          </Col>
          <Col md={4} className="text-end">
            <Button variant="success">Upload New Document</Button>
          </Col>
        </Row>

        {/* Loading & Error Handling */}
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
            <p>Loading documents...</p>
          </div>
        )}
        {error && <p className="text-danger">Error: {error}</p>}

        {/* Document List */}
        {!loading && !error && (
          <>
            <h3 className="mb-3">Document Room</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Document Name</th>
                  <th>Type</th>
                  <th>Last Modified</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, index) => (
                  <tr key={doc.id}>
                    <td>{index + 1}</td>
                    <td>{doc.name}</td>
                    <td>{doc.type}</td>
                    <td>{doc.lastModified}</td>
                    <td>
                      <Button variant="primary" size="sm" className="me-2">View</Button>
                      <Button variant="danger" size="sm">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </Container>

      {/* Footer */}
      <Container fluid className="py-3 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <p>© 2024 CollabPlatform. All rights reserved.</p>
        <Nav className="justify-content-center">
          <Nav.Link href="#privacy">Privacy Policy</Nav.Link>
          <Nav.Link href="#terms">Terms of Service</Nav.Link>
        </Nav>
      </Container>
    </>
  );
};

export default DocumentRoom;
