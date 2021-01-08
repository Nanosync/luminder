import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const ChatList = ({ chat, index, onClick1 }) => {
  if (chat === undefined) {
    return <></>;
  }

  return (
    <ListGroup.Item key={index} action onClick={onClick1}>
      <div className="d-flex">
        <div className="chat-user-photo mr-2">
          {/* <img
            src={chat.recipient}
            width="64px"
            height="64px"
            alt="User Avatar"
          /> */}
        </div>
        <div>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{chat.recipient}</h5>
          </div>
          <p className="chat-text mb-1">
            {chat.message !== undefined && chat.messages[chat.messages.length - 1].message}
          </p>
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default ChatList;
