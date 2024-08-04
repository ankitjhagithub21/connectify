import React from 'react'
import { GoSearch } from "react-icons/go"

const SearchBar = ({ query, setQuery }) => {
   

    return (
        <div className='border rounded-lg flex items-center p-2 h-[10%] gap-2'>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className='w-full pl-2'
                placeholder='Search users...'
            />
            <GoSearch size={25} />
        </div>
    )
}

export default SearchBar
