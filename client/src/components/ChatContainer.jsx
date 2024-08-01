import {useDispatch, useSelector} from "react-redux"
import {setUser} from "../redux/slices/appSlice"
import {toast} from "react-toastify"
import Users from './Users';
import Welcome from "../pages/Welcome";
import Chat from "../pages/Chat";

const ChatContainer = () => {
    const dispatch = useDispatch()
    const {currChat} = useSelector(state=>state.app)
   
    const handleLogout = async() =>{
        try{
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/logout`,{
                credentials:'include'
            })

            const data = await res.json()

            if(data.success){
                dispatch(setUser(null))
                toast.success(data.message)
            }
            
        }catch(error){
            console.log(error)
        }
    }
  
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
