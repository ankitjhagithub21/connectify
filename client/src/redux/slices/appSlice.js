import { createSlice } from "@reduxjs/toolkit"

export const appSlice = createSlice({
    name:"app",
    initialState:{
        user:null,
        pageLoading:true,
        currChat:null,
        messages:[]
    },
    reducers:{
        setUser:(state,action)=>{
            state.user = action.payload
        },
        setPageLoading:(state,action)=>{
            state.pageLoading = action.payload
        },
        setCurrChat:(state,action)=>{
            state.currChat = action.payload
        },
        setMessages:(state,action)=>{
            state.messages = action.payload
        }
        
    }
})

export const {setUser,setPageLoading,setCurrChat,setMessages} = appSlice.actions

export default appSlice.reducer