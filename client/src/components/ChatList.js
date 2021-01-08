import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const ChatList = ({chatList}) => {
  console.log(chatList);
  return (
    <>
      <h1>Chats</h1>
      <ListGroup>
        {chatList.map((chat, index) => (
          <ListGroup.Item action href={`#${index}`} key={index}>
            <div className="d-flex">
              <div className="chat-user-photo mr-2">
                <img src={chat.recipients[0]} width="64px" height="64px" alt="User Avatar" />
              </div>
              <div>
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">TEST</h5>
                </div>
                <p className="chat-text mb-1">{chat.messages[chat.messages.length - 1].message}</p>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default ChatList;