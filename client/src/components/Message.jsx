import React from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

const Message = ({ msg }) => {
  const { user, currChat } = useSelector(state => state.app)

  const formattedTime = format(new Date(msg.createdAt), 'MMM d, h:mm a')

  return (
    <div className={`my-2 w-full flex ${user._id === msg.senderId ? 'justify-end' : 'justify-start'}`}>
      <div className={`p-2 flex flex-col rounded-lg ${user._id === msg.senderId ? 'bg-purple-500 text-white' : 'bg-gray-200 text-black'}`}>
       
      
          <p className='text-lg'>{msg.message}</p>
          <p className='text-sm'>{formattedTime}</p>
       
      </div>
    </div>
  )
}

export default Message
