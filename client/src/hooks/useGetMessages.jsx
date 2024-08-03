import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/slices/appSlice'

const useGetMessages = () => {
    
    const dispatch = useDispatch()
    const {currChat} = useSelector(state=>state.app)
    const fetchMessages = async() =>{
        dispatch(setMessages([]))
        try{
          
          const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/messages/${currChat._id}`,{
            credentials:'include'
          })
          const data = await res.json()
         console.log(data)
          if(data.success){
           dispatch(setMessages(data.messages))
          }
          
        }catch(error){
          console.log(error)
        }
        
      }

    useEffect(()=>{
        fetchMessages()
      },[currChat])
}

export default useGetMessages
