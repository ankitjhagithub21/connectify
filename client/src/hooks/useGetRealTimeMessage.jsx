import { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux" 
import { setMessages } from '../redux/slices/appSlice'

const useGetRealTimeMessage = () => {
    const {socket,messages} = useSelector(state=>state.app)
    const dispatch = useDispatch()
    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            dispatch(setMessages([...messages,newMessage]))
        })
    },[socket,setMessages,messages])
}

export default useGetRealTimeMessage
