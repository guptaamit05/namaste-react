import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";
const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMsg = useSelector((store) => store.chat.message);

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const intval = setInterval(() => {
      //Api Polling..
      // just fetch live api and get json ...
      // console.log("amit gupta")
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 5000);

    return () => clearInterval(intval);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[600px] bg-gray-100 rounded-lg overflow-scroll flex-col-reverse flex ">
        {chatMsg.map((msg, k) => (
          <div key={Math.random() * k} className="">
            <ChatMessage
              name={msg.name}
              message={msg.message} //"This is dummy message live msg &#128512; &#128512;"
            />
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (liveMessage.length) {
            dispatch(
              addMessage({
                name: generateRandomName(),
                message: liveMessage,
              })
            );
            setLiveMessage("")
          }
        }}
        className="w-full p-2 ml-2 border border-black"
      >
        <input
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="px-2 w-96 "
        />
        <button className="px-3 mx-2 bg-green-100 border border-gray-300">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
