import React from 'react'
import {Link} from "react-router-dom"
const NotFound = () => {
  return (
    <div className='h-screen w-full flex flex-col gap-3 items-center justify-center'>
      <h1 className='text-5xl'>Page not found</h1>
      <Link className='bg-purple-500 text-white px-4 py-2 rounded-lg' to={"/"}>Back to Home</Link>
    </div>
  )
}

export default NotFound
