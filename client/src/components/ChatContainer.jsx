import Users from './Users';
import Chat from "../pages/Chat";


const ChatContainer = () => {
  
    
    return (
        <div className='container mx-auto h-[80vh]   border flex rounded-xl'>
           <Users/>
           <Chat/>
        </div>
    )
}

export default ChatContainer
