import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProfileCard from '../../components/ProfileCard';
import ActionButton from '../../components/ActionButton';
import ProfileDetailCard from '../../components/ProfileDetailCard';
import './Home.css';

const LOREM_IPSUM = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis explicabo ad at aspernatur quam culpa. Officia soluta veritatis accusantium tenetur rem sint dignissimos voluptatibus quisquam, nulla sed, cumque reprehenderit quam?";

const Home = () => {
  return (
    <Container className="flex-grow-1 d-flex">
      <Row className="align-self-center">
        <Col xs={12} sm className="mt-2">
          <ProfileCard name="Jane" age="22" />
          <ActionButton onClickNo={() => console.log("NO")} onClickYes={() => console.log("YES")}/>
        </Col>
        <Col className="d-none d-md-block">
          <ProfileDetailCard header="Bio" text={LOREM_IPSUM} />
          <ProfileDetailCard className="mt-4" header="Academic Plan" text={LOREM_IPSUM} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;