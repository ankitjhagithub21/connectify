import { useEffect} from 'react'
import ChatContainer from '../components/ChatContainer'
import io from "socket.io-client"
import { useDispatch, useSelector } from 'react-redux'
import { setOnlineUsers, setSocket } from '../redux/slices/appSlice'
const Home = () => {
  
  const dispatch = useDispatch()
  const {user,socket} = useSelector(state=>state.app)
  useEffect(()=>{
   if(user){
    const socket = io(`${import.meta.env.VITE_SERVER_URL}`,{
      query:{
        userId:user._id
      }

    })
    dispatch(setSocket(socket))
    socket.on('getOnlineUsers',(onlineUsers)=>{
      dispatch(setOnlineUsers(onlineUsers))
    })
    return () =>socket.close()
    
   }else{
    if(socket){
       socket.close()
      dispatch(setSocket(null))
    }
   }
  },[user])
 return (
    <section className='h-screen w-full flex items-center justify-center p-5'>
      <ChatContainer />
    </section>
  )
}

export default Home
