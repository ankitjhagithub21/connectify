import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setMessages } from '../redux/slices/appSlice';

const SendMessage = () => {

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { currChat, messages } = useSelector(state => state.app);
  const dispatch = useDispatch();

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim().length === 0) return;  // Ensure non-empty message
    try {
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/messages/send/${currChat._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({ message })
      });
      const data = await res.json();
      console.log(data);
      if (data.success) {
        toast.success("Message sent successfully.");
        dispatch(setMessages([...messages, data.message]));
        setMessage('');
      } else {
        toast.error(data.message);  // Display error message
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to send message');  // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className='flex items-center p-2 gap-2 border-t w-full h-[10%]' onSubmit={handleSendMessage}>
      <input
        type="text"
        placeholder='Send message...'
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        className='w-full text-xl'
      />
      <button className='px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600' disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};

export default SendMessage;
