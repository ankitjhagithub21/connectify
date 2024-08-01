import React from 'react'
import Navbar from "../components/Navbar";
import MessageContainer from "../components/MessageContainer";
import SendMessage from "../components/SendMessage";
import { useSelector } from 'react-redux';
import Welcome from './Welcome';
const Chat = () => {
    const {currChat} = useSelector(state=>state.app)
    return (
        <div className='lg:w-3/4 w-full flex  h-full  flex-col'>
          {
            currChat ? <>
              <Navbar />
            <MessageContainer />
            <SendMessage />
            </> : <Welcome name={user.name}/>
          }
        </div>
    )
}

export default Chat
