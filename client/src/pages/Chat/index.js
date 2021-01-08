import React, { useContext } from "react";
import UserPhoto1 from "../../components/unsplash-1.jpg";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
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
          <div class="container">
            <div class="chatbox">
              <div class="top-bar d-flex justify-content-center">
                <div class="profile">
                  <Image
                    src={UserPhoto1}
                    width="50px"
                    height="50px"
                    roundedCircle
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div class="name ml-3">User1</div>
              </div>
              <div class="middle">
                <div className="d-flex flex-column ml-3 mr-3 mt-3" >
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
              </div>
              <div class="bottom-bar mt-5">
                <div className="d-flex text-right align-items-center h-100">
                  <Form className="w-100 ml-5" onSubmit={(e) => e.preventDefault()}>
                    <Form.Group controlId="chat">
                      <Form.Control type="text" placeholder="type message here..." />
                    </Form.Group>
                  </Form>
                  <Button className="btn-chat-send ml-4 mr-3" variant="primary">Send</Button>
                </div>
              </div>
            </div>
          </div>


        </Col>
      </Row>
    </Container >
  );
};



export default Chat;
