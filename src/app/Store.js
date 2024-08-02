import {configureStore} from '@reduxjs/toolkit'
import postReducers from "../features/posts/postSlice"
import userReducers from "../features/users/usersSlice"
import authReducers from "../features/auth/authSlice"
export default configureStore({
    reducer:{
        post:postReducers,
        users:userReducers,
        auth:authReducers,
    }

})