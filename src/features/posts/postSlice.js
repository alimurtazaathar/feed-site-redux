import {createSlice} from '@reduxjs/toolkit'
import  {nanoid} from "@reduxjs/toolkit"
import {sub} from "date-fns"

const initialState=[{
    id:nanoid(),
    title:"First Post",
    text:"hello there im the first",
    userId:0,
    date:sub(new Date(),{minutes:10}).toISOString(),
    reactions:{thumbsUp: 0, tada: 0, heart: 0, rocket: 0, eyes: 0}
},
{
    id:nanoid(),
    title:"Second Post",
    text:"hello there im the second",
    userId:1,
    date:sub(new Date(),{minutes:5}).toISOString(),
    reactions:{thumbsUp: 0, tada: 0, heart: 0, rocket: 0, eyes: 0}
}]

const postSlice=createSlice({
    name:"post",
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title,text,userId)
            {
                return{
                    payload:{
                        id:nanoid(),
                        date:new Date().toISOString(),
                        title,
                        text,
                        userId,
                        reactions:{thumbsUp: 0, tada: 0, heart: 0, rocket: 0, eyes: 0}
                    }
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
        reactionAdded(state,action)
        {
            const {id,reaction}=action.payload;
            const postToEdit=state.find(post=>post.id===id)
            if(postToEdit)
            {
                postToEdit.reactions[reaction]++;
            }
        }

    }

})

export const {postAdded,postUpdated,reactionAdded}=postSlice.actions;
export const selectAllPost=state=>state.post
export const selectPostById=(state,postId)=>state.post.find((item)=>item.id===postId)
export default postSlice.reducer