import React, { useContext } from "react";
import UserPhoto1 from "../../components/unsplash-1.jpg";
import { Container, Row, Col } from "react-bootstrap";
import ChatList from "../../components/ChatList";
import "./Chat.css";
import { MOCK_CHAT_USERLIST } from "./MockChatData";
import { useHistory } from "react-router-dom";
import { AuthUserContext } from "../../components/Session";
import ChatBubble from "../../components/ChatBubble";

const Chat = () => {
  const user = useContext(AuthUserContext);
  const history = useHistory();

  if (!user) {
    // history.push("/login");
  }

  return (
    <Container className="flex-grow-1">
      <Row>
        <Col lg={4}>
          <ChatList chatList={MOCK_CHAT_USERLIST} />
        </Col>
        <Col lg={8}>
          <h1>chat w user</h1>
          <div className="d-flex flex-column ">
            <ChatBubble
              message="Hello"
              direction="left"
              photo={UserPhoto1}
              name="User 1"
            />
            <ChatBubble
              message="Hello"
              direction="right"
              photo={UserPhoto1}
              name="User 1"
            />
          </div>
          <div>
            <Form>
              <Form.Group controlId="chat">
                <Form.Control type="email" placeholder="type message here..." />
              </Form.Group>
            </Form>
          </div>
          <div className="chat-send-button">
            <Button variant="primary">.</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
