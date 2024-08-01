import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const MessageContainer = () => {
  const {messages} = useSelector(state=>state.app)

 
  return (
    <div className='h-full p-2'>
      {messages.map((message, index) => (
        <div key={index}>{message.text}</div>
      ))}
    </div>
  );
};

export default MessageContainer;
