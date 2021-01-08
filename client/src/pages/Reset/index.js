import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { AuthUserContext } from '../../components/Session';
import ResetComponent from '../../components/Reset';

const Reset = () => {
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
          <ResetComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default Reset;