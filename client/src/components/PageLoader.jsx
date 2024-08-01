import React from 'react'
import Logo from './Logo'

const PageLoader = () => {
  return (
    <div className='h-screen w-full flex flex-col text-white gap-4  items-center justify-center'>
       
    <img src="/loader.gif" alt="loading"  className='w-1/2 lg:w-1/4'/>
    <h2 className='text-2xl'>Connecting...</h2>
    </div>
  )
}

export default PageLoader
