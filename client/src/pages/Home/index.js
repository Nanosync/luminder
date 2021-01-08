import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AuthUserContext } from "../../components/Session";

const Home = () => {

  const user = useContext(AuthUserContext);

  return (
    <Container className="flex-grow-1 mt-2">
      <Row>
        <Col>
          <p className="text-center">Hello World</p>
          {user ? user.uid : "not logged in"}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
