import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className="flex-grow-1 text-center">
      <Row>
        <Col>
          <h1>Oops!</h1>
          <p>This page doesn't exist.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;