import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { AuthUserContext } from '../../components/Session';
import LoginComponent from '../../components/Login';

const Login = () => {
  const user = useContext(AuthUserContext);
  const history = useHistory();

  if (user) {
    history.push("/");
    return null;
  }
  
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