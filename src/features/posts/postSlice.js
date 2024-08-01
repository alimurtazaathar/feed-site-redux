import {createSlice} from '@reduxjs/toolkit'
import  {nanoid} from "@reduxjs/toolkit"
import { act } from 'react'
const initialState=[{
    id:nanoid(),
    title:"First Post",
    text:"hello there im the first"
},
{
    id:nanoid(),
    title:"Second Post",
    text:"hello there im the second"
}]

const postSlice=createSlice({
    name:"post",
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title,text)
            {
                return{
                    payload:{id:nanoid(),title,text}
                };
            }


        }
       
        ,
        postUpdated(state,action)
        {
            const {id,title,text}=action.payload;
            const postToEdit=state.find(post=>post.id===id)
            if(postToEdit)
            {
                postToEdit.title=title;
                postToEdit.text=text;
            }
        },

    }

})

export const {postAdded,postUpdated}=postSlice.actions;
export const selectAllPost=state=>state.post
export const selectPostById=(state,postId)=>state.post.find((item)=>item.id===postId)
export default postSlice.reducer