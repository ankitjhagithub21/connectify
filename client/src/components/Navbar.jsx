import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrChat } from '../redux/slices/appSlice'

const Navbar = () => {
    const dispatch = useDispatch()
    const {currChat} = useSelector(state=>state.app)
    return (
        <div className='flex items-center h-[10%] justify-between p-2 border-b w-full'>
           <div className='flex items-center gap-2'>
           <img src={currChat.profileImg} alt="user" className='w-10 rounded-full' />
           <h2 className='text-xl'>{currChat.name}</h2>
           </div>
            <button onClick={()=>dispatch(setCurrChat(null))} className="bg-purple-500 px-4 py-2  rounded-lg hover:bg-purple-600">
               Back
            </button>
        </div>
    )
}

export default Navbar
