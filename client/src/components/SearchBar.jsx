import React, { useState } from 'react'
import { GoSearch } from "react-icons/go"
const SearchBar = () => {
    const [query,setQuery] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
  return (
    <form className='border rounded-lg flex items-center p-3 gap-2' onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} className='w-full'/>
      <GoSearch size={25}/>
    </form>
  )
}

export default SearchBar
