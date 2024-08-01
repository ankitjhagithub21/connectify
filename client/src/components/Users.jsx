import React, { useEffect, useState } from 'react'
import User from './User'

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
        <div className='lg:w-1/4 w-full md:relative absolute  flex flex-col gap-3 border-r p-2'>

            {
                users.map((user) => {
                    return <User key={user._id} user={user}/>
                    
                })
            }

        </div>
    )
}

export default Users
