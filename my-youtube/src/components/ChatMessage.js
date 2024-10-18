import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <>
      <div className="flex items-center shadow-sm p-2">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
          alt="user-logo"
        />
        <span className="px-2 font-bold">{name}</span>
        <span>{message}</span>
      </div>
    </>
  );
};

export default ChatMessage;
