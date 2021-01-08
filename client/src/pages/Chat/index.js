import React, { useContext, Component } from "react";
import UserPhoto1 from "../../components/unsplash-1.jpg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ChatList from "../../components/ChatList";
import "./Chat.css";
import { MOCK_CHAT_USERLIST } from "./MockChatData";
import { useHistory } from "react-router-dom";
import { AuthUserContext } from "../../components/Session";
import ChatBubble from "../../components/ChatBubble";

const INITIAL_STATE = {
  currentChat: 0,
  chatList: []
}

class Chat extends Component {
  static contextType = AuthUserContext;

  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE};
  }

  componentDidMount() {
    const user = this.context;
    const uid = user.uid;

    
  }

  render() {
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
                  <Form.Control
                    type="email"
                    placeholder="type message here..."
                  />
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
  }
}

export default Chat;
