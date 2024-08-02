import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
    id:0,name:"syed"
    },
    {
    id:1,name:"ali"
    },
    {
    id:2,name:"murtaza"
    }
]


const usersSlice=createSlice({
    name:"users",
    initialState,
    reducers:{}
})

export const selectAllUsers=state=>state.users
export const selectUserById=(state,userId)=>{return state.users.find(user=>user.id===userId)}

export default usersSlice.reducer