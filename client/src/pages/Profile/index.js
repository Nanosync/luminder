import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Profile = () => {
  return (
    <Container>
      <Row>
      <h1 class="text-center">Profile</h1>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              Photo
            </Col>
            <Col>
              <p>Name: </p>
              <p>Email: </p>
            </Col>
          </Row>
          <Row>
            Photo Booth
          </Row>
        </Col>
        <Col>
          <Row>
            Bio
          </Row>
          <Row>
            Academic Plan
          </Row>
          <Row>
            <Col>
              <Button variant="danger">Discard Changes</Button>
            </Col>
            <Col>
              <Button variant="success">Apply Changes</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
