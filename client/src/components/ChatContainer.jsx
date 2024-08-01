import {useSelector} from "react-redux"
import Users from './Users';
import Welcome from "../pages/Welcome";
import Chat from "../pages/Chat";

const ChatContainer = () => {
    
    const {currChat} = useSelector(state=>state.app)
   
    
    return (
        <div className='container mx-auto h-[80vh] relative border flex rounded-xl'>
           <Users/>
            {
                currChat ? <Chat/>  : <Welcome/>
            }
        </div>
    )
}

export default ChatContainer
