import React, { useState} from 'react';
import { toast } from 'react-toastify';

const SendMessage = () => {
  
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    toast.success(message)
    setMessage('')
  };

  return (
    <form className='flex items-center p-2 gap-2 border-t' onSubmit={handleSendMessage}>
      <input 
        type="text" 
        placeholder='Send message...' 
        onChange={(e) => setMessage(e.target.value)} 
        value={message} 
        className='w-full text-xl' 
      />
      <button className='px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600'>
        Send
      </button>
    </form>
  );
};

export default SendMessage;
