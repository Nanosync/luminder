import React from "react";
import "./ChatBubble.css";

const ChatBubble = (props) => {
  if (props.direction === "left") {
    return (
      <div className="d-flex flex-row flex-nowrap">
        <div className="chat-user-photo mr-2">
          <img
            src={props.photo}
            width="64px"
            height="64px"
            alt="User Avatar"
            roundedCircle
          />
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{props.name}</h5>
          </div>
        </div>
        <div className="chat-bubble">
          <p className="chat-text mb-1">{props.message}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex flex-row flex-nowrap">
        <div className="chat-bubble-right">
          <p className="chat-text mb-1">{props.message}</p>
        </div>
        <div className="chat-user-photo mr-2">
          <img
            src={props.photo}
            width="64px"
            height="64px"
            alt="User Avatar"
            roundedCircle
          />
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{props.name}</h5>
          </div>
        </div>
      </div>
    );
  }
};

export default ChatBubble;
