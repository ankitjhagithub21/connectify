import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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
        console.log(data.messages)
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
    <div className='h-full p-2'>
       {
        loading ? 'Loading...' : messages.map((msg)=>{
          return <div key={msg._id}>{msg.message}</div>
        })
       }
    </div>
  );
};

export default MessageContainer;
