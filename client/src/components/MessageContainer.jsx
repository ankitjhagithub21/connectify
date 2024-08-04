import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import useGetRealTimeMessage from "../hooks/useGetRealTimeMessage";

const MessageContainer = () => {
  useGetRealTimeMessage();
  useGetMessages();
  
  const { messages } = useSelector(state => state.app);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className='h-[80%] p-2 flex flex-col overflow-y-scroll scroll w-full'
    >
      {messages.length === 0 ? (
        <p className="text-center text-lg">Let's start conversation</p>
      ) : (
        messages.map((msg) => {
          return <Message key={msg._id} msg={msg} />;
        })
      )}
    </div>
  );
};

export default MessageContainer;
