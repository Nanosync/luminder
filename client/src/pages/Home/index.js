import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="flex-grow-1 mt-2">
      <Row>
        <Col>
          <p className="text-center">Hello World</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;