import React from 'react';
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import RegisterComponent from '../../components/Register';

const Register = () => {
  return (
    <Container className="flex-grow-1 d-flex align-items-center justify-content-center">
      <Row>
        <Col>
          <RegisterComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;