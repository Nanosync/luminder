import React, { Component } from "react";
import UserPhoto1 from "../../components/unsplash-1.jpg";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import ChatList from "../../components/ChatList";
import "./Chat.css";
import { AuthUserContext } from "../../components/Session";
import ChatBubble from "../../components/ChatBubble";
import API from "../../api";
import ListGroup from "react-bootstrap/ListGroup";
import api from "../../api";

const INITIAL_STATE = {
  currentChat: 0,
  chatList: [],
  chats: [],
  uid: "",
  name: "",
  newText: "",
  fetchedData: false
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
            recipients[0] === this.state.uid ? recipients[1] : recipients[0];
          const chatId = response1.data._id;
          API.get("users/getchat/" + sender)
            .then((response2) => {
              const chat = {
                chatId: chatId,
                recipient: response2.data.name,
                recipientID: sender,
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

    this.setState({
      fetchedData: true,
    })

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
        name: user.name,
      });
      this.fetchData();
    }
  }

  componentDidUpdate() {
    if (!this.state.fetchedData && this.context) {
      this.fetchData();
    }
  }

  changeFocus(idx) {
    this.setState({
      currentChat: idx,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const text = this.state.newText;

    if (text.trim() !== "") {
      const chat = this.state.chats[this.state.currentChat];
      const chatID = chat.chatId;
      const messages = chat.messages ? chat.messages : [];
      const from = this.state.uid;
      const to = chat.recipientID;

      const message = {
        from: from,
        to: to,
        message: text,
      };

      messages[messages.length] = message;
      const recipients = [from, to];

      const chat1 = {
        recipients: recipients,
        messages: messages,
      };
      console.log(chat1);
      api
        .post("/chats/update/" + chatID, chat1)
        .then((a) => this.updateChats())
        .catch((err) => console.log(err));
    }
  }

  onChange = (event) => {
    this.setState({ newText: event.target.value });
  };

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
            <div className="container">
              <div className="chatbox">
                <div className="top-bar d-flex justify-content-center">
                  <div className="profile">
                    <Image
                      src={UserPhoto1}
                      width="50px"
                      height="50px"
                      roundedCircle
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="name ml-3">
                    {this.state.chats[this.state.currentChat]
                      ? this.state.chats[this.state.currentChat].recipient
                      : ""}
                  </div>
                </div>
                <div
                  className="middle"
                  style={{ overflow: "scroll", paddingBottom: "50px" }}
                >
                  <div className="d-flex flex-column ">
                    {this.state.chats[0] !== undefined &&
                      this.state.chats[
                        this.state.currentChat
                      ].messages.map((element, index) => (
                        <ChatBubble
                          key={index}
                          message={element.message}
                          direction={
                            element.from === this.state.uid ? "right" : "left"
                          }
                          photo={""}
                          name={
                            element.from !== this.state.uid
                              ? this.state.chats[this.state.currentChat]
                                  .recipient
                              : this.state.name
                          }
                        />
                      ))}
                  </div>
                </div>
                <form onSubmit={(e) => this.onSubmit(e)}>
                  <div className="bottom-bar mt-5 d-flex justify-content-center align-content-center">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="type message here..."
                      onChange={this.onChange}
                      value={this.state.newText}
                      name="newText"
                      style={{marginLeft: "30px"}}
                    />
                    <Button
                      type="submit"
                      className="btn-chat-send ml-4"
                      variant="primary"
                    >
                      Send
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Chat;
