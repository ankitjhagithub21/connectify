import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrChat } from '../redux/slices/appSlice'

const User = ({ user }) => {
    const dispatch = useDispatch()
    const {currChat} = useSelector(state=>state.app)
    return (
        <div className={`flex  items-center gap-2 p-2 rounded-lg cursor-pointer ${currChat?._id ==  user._id ? 'bg-purple-500 text-white' :' bg-white text-black'}`} onClick={()=>dispatch(setCurrChat(user))}>
            <img src={user.profileImg} alt="" className='w-10  rounded-full' />
            <h2>{user.name}</h2>
        </div>
    )
}

export default User
