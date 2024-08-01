import React from 'react'
import { useSelector } from 'react-redux'

const Welcome = () => {
    const {user} = useSelector(state=>state.app)
    return (
       
          <div className='mx-auto text-center '>
            <img src="/robot.gif" alt="welcome" className='mx-auto h-3/4'/>
            <h1 className="text-3xl">Welcome {user.name}</h1>
          </div>
      
    )
}

export default Welcome
