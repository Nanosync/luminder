import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProfileCard from '../../components/ProfileCard';
import ActionButton from '../../components/ActionButton';
import ProfileDetailCard from '../../components/ProfileDetailCard';
import { AuthUserContext } from '../../components/Session';
import './Home.css';
import API from "../../api";

const sendAction = (uid, targetUid, action) => {
  API.post("swipe", { "uid": uid, "targetUid": targetUid, "action": action })
  .then(res => {
    console.log(res.data);
  })
  .catch(err => console.log(err));
}

const handleNo = (e, { uid, targetUid }) => {
  sendAction(uid, targetUid, "dislike");
};

const handleYes = (e, { uid, targetUid }) => {
  sendAction(uid, targetUid, "like");
};

const Home = () => {
  const user = useContext(AuthUserContext);
  const history = useHistory();
  const [advertised, setAdvertised] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (!advertised && user && user.uid) {
      setAdvertised(true);
      console.log("Advertised");
      API.post("cards/advertise", { uid: user.uid })
        .then(() => console.log("advertised"))
        .catch(err => console.log("err advertise"));

      API.get("cards", { params: { uid: user.uid } })
        .then(res => {
          setCards(res.data);
          console.log(res.data);
        })
        .catch(err => console.log("err advertise"));
    }
  }, [user]);

  if (!user) {
    history.push("/login");
    return null;
  }

  if (cards.length === 0) {
    return (
      <Container className="flex-grow-1">
        <Row className="align-self-center justify-content-center text-center mt-2">
          <p className="primary">No one left to swipe!</p>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="flex-grow-1 d-flex">
      <Row className="align-self-center">
        <Col xs={12} sm className="mt-2">
          <ProfileCard name={cards[0].name} age={cards[0].age} />
          <ActionButton onClickNo={(e) => handleNo(e, user.uid, cards[0].uid)} onClickYes={(e) => handleYes(e, user.uid, cards[0].uid)} />
        </Col>
        <Col className="d-none d-md-block">
          <ProfileDetailCard header="Bio" text={cards[0].bio} />
          <ProfileDetailCard className="mt-4" header="Academic Plan" text={cards[0].modules} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
