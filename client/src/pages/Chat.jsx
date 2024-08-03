import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from "../components/Navbar";
import MessageContainer from "../components/MessageContainer";
import SendMessage from "../components/SendMessage";
import Welcome from '../components/Welcome';

const Chat = () => {
    const { currChat, user } = useSelector(state => state.app); 

    return (
        <div className={`lg:w-3/4 w-full lg:flex items-center justify-center  flex-col`}>
            {
                currChat ? (
                    <>
                        <Navbar />
                        <MessageContainer />
                        <SendMessage />
                    </>
                ) : (
                    <Welcome name={user?.name} /> 
                )
            }
        </div>
    );
};

export default Chat;
