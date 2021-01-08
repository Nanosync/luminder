import React from 'react';
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import LoginComponent from '../../components/Login';

const Login = () => {
  return (
    <Container className="flex-grow-1 d-flex align-items-center justify-content-center">
      <Row>
        <Col>
          <LoginComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;