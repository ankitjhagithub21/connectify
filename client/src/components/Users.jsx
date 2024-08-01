import React, { useEffect, useState } from 'react'
import User from './User'
import SearchBar from './SearchBar'
import Profile from './Profile'

const Users = () => {
    const [users, setUsers] = useState([])
    const fetchUsers = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/users`, {
                credentials: 'include'
            })
            const data = await res.json()
            
            if (data.success) {
                setUsers(data.users)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className='lg:w-1/4 w-full md:relative absolute  h-full flex flex-col gap-2 border-r p-2'>
         <SearchBar/>

          <div className='flex flex-col gap-3 h-full overflow-y-scroll  '>
          {
                users.map((user) => {
                    return <User key={user._id} user={user}/>
                    
                })
            }
          </div>
          <Profile/>

        </div>
    )
}

export default Users
