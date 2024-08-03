import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Message from "./Message";

const MessageContainer = () => {
 const {currChat} = useSelector(state=>state.app)
  const [messages,setMessages] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    const fetchMessages = async() =>{
      try{
        setLoading(true)
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/messages/${currChat._id}`,{
          credentials:'include'
        })
        const data = await res.json()
      
        if(data.success){
          setMessages(data.messages)
        }
        
      }catch(error){
        console.log(error)
      }finally{
        setLoading(false)
      }
      
    }
    fetchMessages()
  },[currChat])
  return (
    <div className='h-[80%] p-2 flex flex-col w-full'>
       {
        loading ? 'Loading...' : messages.length==0 ? <p className="text-center text-lg">Let's start conversation</p>:  messages.map((msg)=>{
          return <Message key={msg._id} msg={msg}/>
        })
       }
    </div>
  );
};

export default MessageContainer;
