import React from 'react'
import Navbar from "../components/Navbar";
import MessageContainer from "../components/MessageContainer";
import SendMessage from "../components/SendMessage";
const Chat = () => {
    return (
        <div className='lg:w-3/4 w-full flex flex-col'>
            <Navbar />
            <MessageContainer />
            <SendMessage />
        </div>
    )
}

export default Chat
