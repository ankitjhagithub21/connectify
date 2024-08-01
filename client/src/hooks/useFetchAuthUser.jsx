import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageLoading, setUser } from '../redux/slices/appSlice'

const useFetchAuthUser = () => {
    const dispatch = useDispatch()
    
    const getUserFromServer = async() =>{
        const url = `${import.meta.env.VITE_SERVER_URL}/api/auth/user`
        try{
            dispatch(setPageLoading(true))
            
            const res = await fetch(url,{
                credentials:'include'
            })
            const data = await res.json()

            if(data.success){
                dispatch(setUser(data.user))
            }else{
                dispatch(setUser(null))
            }
        }catch(error){
            console.log(error)
        }finally{
            dispatch(setPageLoading(false))
        }
    }
  useEffect(()=>{
    getUserFromServer()
  },[])
}

export default useFetchAuthUser