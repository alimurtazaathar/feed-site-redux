import {configureStore} from '@reduxjs/toolkit'
import postReducers from "../features/posts/postSlice"

export default configureStore({
    reducer:{
        post:postReducers
    }

})