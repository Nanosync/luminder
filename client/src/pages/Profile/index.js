import React from 'react';
import UserPhoto1 from '../../components/unsplash-1.jpg';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import ProfileDetailCard from '../../components/ProfileDetailCard';
import ProfileImageCard from '../../components/ProfileImageCard';

const Profile = (props) => {
  // TODO
  const { displayName, email, bio, acadPlan } = props;

  return (
    <Container className="flex-grow-1">
      <Row>
        <Col>
          <h1>Profile</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex">
            <Image src={UserPhoto1} width="150px" height="150px" roundedCircle style={{ objectFit: "cover" }} />
            <div className="ml-4 align-self-center">
              <p>Name: {displayName}</p>
              <p>Email: {email}</p>
            </div>
          </div>
          <div className="mt-4 mb-4">
            <h1>Photo Booth</h1>
            <ProfileImageCard />
          </div>
        </Col>
        <Col>
          <ProfileDetailCard header="Bio" text={bio} />
          <ProfileDetailCard className="mt-4" header="Academic Plan" text={acadPlan} />
          <div className="text-right mt-4">
            <Button variant="danger">Discard Changes</Button>
            <Button className="ml-2" variant="success">Apply Changes</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
