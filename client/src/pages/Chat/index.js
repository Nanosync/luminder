import React, { useContext, Component } from "react";
import UserPhoto1 from "../../components/unsplash-1.jpg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ChatList from "../../components/ChatList";
import "./Chat.css";
import { MOCK_CHAT_USERLIST } from "./MockChatData";
import { useHistory } from "react-router-dom";
import { AuthUserContext } from "../../components/Session";
import ChatBubble from "../../components/ChatBubble";
import API from "../../api";
import ListGroup from "react-bootstrap/ListGroup";

const INITIAL_STATE = {
  currentChat: 0,
  chatList: [],
  chats: [],
  uid: "",
  name: ""
};

class Chat extends Component {
  static contextType = AuthUserContext;

  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  updateChats() {
    this.state.chatList.map((element, index) => {
      const query = "chats/getchat/" + element;
      API.get(query)
        .then((response1) => {
          const recipients = response1.data.recipients;
          const sender =
            recipients[0] === this.uid ? recipients[1] : recipients[0];

          API.get("users/getchat/" + sender)
            .then((response2) => {
              const chat = {
                chatId: response1.data.chatId,
                recipient: response2.data.name,
                photo: response2.data.photo,
                messages: response1.data.messages,
              };

              this.setState((prevState) => {
                const newChats = [...prevState.chats];
                newChats[index] = chat;
                return { chats: newChats };
              });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  fetchData() {
    const user = this.context;
    const uid = user.uid;
    const query = "users/getchat/" + uid;

    API.get(query)
      .then((response) => {
        this.setState({
          chatList: response.data.chats,
        });
        this.updateChats();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    const user = this.context;

    if (user) {
      this.setState({
        uid: user.uid,
        name: user.name
      })
      this.fetchData();
    }
  }

  changeFocus(idx) {
    this.setState({
      currentChat: idx,
    })
  }

  // componentDidUpdate() {
  //   if (this.context) {
  //     this.fetchData();
  //   }
  // }

  render() {
    return (
      <Container className="flex-grow-1">
        <Row>
          <Col lg={4}>
            <h1>Chats</h1>
            <ListGroup>
              {this.state.chats.map((chat, index) => (
                <ChatList
                  chat={chat}
                  onClick1={() => this.changeFocus(index)}
                  index={index}
                />
              ))}
            </ListGroup>
          </Col>
          <Col lg={8}>
            <h1>
              {this.state.chats[this.state.currentChat]
                ? this.state.chats[this.state.currentChat].recipient
                : ""}
            </h1>
            <div className="d-flex flex-column ">
              {this.state.chats[0] !== undefined && this.state.chats[this.state.currentChat].messages.map(
                (element, index) => (
                  <ChatBubble
                    key={index}
                    message={element.message}
                    direction={
                      element.from ===
                      this.state.uid
                        ? "right"
                        : "left"
                    }
                    photo={""}
                    name={
                      element.from ===
                      this.state.uid
                        ? this.state.chats[this.state.currentChat].recipient
                        : this.state.name
                    }
                  />
                )
              )}
              {/* <ChatBubble
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
              /> */}
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
