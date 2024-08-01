import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {CiLogout} from "react-icons/ci"
import { setCurrChat, setUser } from '../redux/slices/appSlice'
import { toast } from 'react-toastify'

const Profile = () => {
    const {user} = useSelector(state=>state.app)
    const dispatch = useDispatch()
    const handleLogout = async() =>{
        try{
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/logout`,{
                credentials:'include'
            })

            const data = await res.json()

            if(data.success){
                dispatch(setUser(null))
                dispatch(setCurrChat(null))
                toast.success(data.message)
            }
            
        }catch(error){
            console.log(error)
        }
    }
  
  return (
    <div className='flex items-center justify-between w-full  border p-1 rounded-lg'>
      <div className='flex items-center gap-1'>
      <img src={user.profileImg} alt={user.name} className='w-12 rounded-full' loading='lazy'/>
      <h2>{user.name}</h2>
      </div>
        <button onClick={handleLogout}>
            <CiLogout size={25}/>
        </button>
    </div>
  )
}

export default Profile
