import { createSlice } from "@reduxjs/toolkit";

const initialState={
    username:null,
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        userLoggedIn(state,action)
        {
            state.username=action.payload;
        },
        userLoggedOut(state)
        {
            state.username=null;
        }
    }

})
export const {userLoggedIn,userLoggedOut}=authSlice.actions;
export const fetchUsername=state=>state.auth.username;
export default authSlice.reducer;