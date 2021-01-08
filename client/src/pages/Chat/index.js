import React from 'react';
import UserPhoto1 from '../../components/unsplash-1.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import ChatList from '../../components/ChatList';
import './Chat.css';
import { MOCK_CHAT_USERLIST } from './MockChatData';

const Chat = () => {
  return (
    <Container className="flex-grow-1">
      <Row>
        <Col lg={4}>
          <ChatList chatList={MOCK_CHAT_USERLIST} />
        </Col>
        <Col lg={8}>
          <h1>chat w user</h1>
          <div className="d-flex">
              <div className="chat-user-photo mr-2">
                <img src={UserPhoto1} width="64px" height="64px" alt="User Avatar" roundedCircle />
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">user</h5>
                </div>
              </div>
              <div className="chat-bubble">
                <p className="chat-text mb-1">message</p>
              </div>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;