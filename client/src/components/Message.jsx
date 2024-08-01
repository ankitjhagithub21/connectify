import React from 'react'
import { useSelector } from 'react-redux'

const Message = ({msg}) => {
    const {user} = useSelector(state=>state.app)
  return (
    <div className={` my-2 w-full flex  ${user._id == msg.senderId ? 'justify-end ' :'justify-start'}`}>
      <div className={` p-2 rounded-lg ${user._id == msg.senderId ? 'bg-purple-500 text-white ' :'bg-gray-200 text-black'}`}>
      {msg.message}
      </div>
    </div>
  )
}

export default Message
