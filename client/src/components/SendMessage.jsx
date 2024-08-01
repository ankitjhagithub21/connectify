import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const SendMessage = () => {

  const [message, setMessage] = useState('');
  const [loading,setLoading] = useState(false)
  const { currChat } = useSelector(state => state.app)
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      try {
        setLoading(true)
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/messages/send/${currChat._id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: 'include',
          body: JSON.stringify({ message })
        })
        const data = await res.json()
        console.log(data)
        if(data.success){
          toast.success(data.message)
          setMessage('')
        }
      } catch (error) {
        console.log(error)
      }
      finally{
        setLoading(false)
      }
    }
   
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
        {loading ? 'Sending...' :'Send'}
      </button>
    </form>
  );
};

export default SendMessage;
