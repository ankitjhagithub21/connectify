import React from 'react'
import { useSelector } from 'react-redux'

const Welcome = () => {
    const {user} = useSelector(state=>state.app)
    return (
        <div className="flex flex-col items-center relative justify-center lg:w-3/4 w-full h-full">
            <img src="/robot.gif" alt="welcome" />
            <h1 className="text-3xl  absolute bottom-10">Welcome {user.name}</h1>
        </div>
    )
}

export default Welcome
