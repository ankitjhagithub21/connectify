import React from 'react'


const Welcome = ({name}) => {
    
    return (
       
          <div className='mx-auto text-center '>
            <img src="/robot.gif" alt="welcome" className='mx-auto h-3/4'/>
            <h1 className="text-3xl">Welcome {name}</h1>
            <p className='text-lg'>Let's start conversation</p>
          </div>
      
    )
}

export default Welcome
