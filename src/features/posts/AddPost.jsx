import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";
import { fetchUsername } from "../auth/authSlice";
export default function AddPost() {
    const [text, setText] = useState("")
    const [title, setTitle] = useState("")
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)
    const currUser=useSelector(fetchUsername)
    const onTextChange = e => setText(e.target.value)
    const onTitleChange = e => setTitle(e.target.value)
    const user=users.find((user)=>user.name===currUser)
    const savePost = () => {
        if (text && title) {
            dispatch(postAdded(title, text,user.id))
        }

        //make state empty for next post
        setText("")
        setTitle("")
    }
    return (
      <div>  
        <h1>Hey {currUser}!</h1>
        <div style={{border:"1px solid black",padding:"2em",display:"flex",flexDirection:"column",borderRadius:"10px"}}>
            <h2>Add new post</h2>
            <form style={{display:"flex",flexDirection:"column",maxWidth:"50%"}}>
                <label htmlFor="title">
                    Title:
                </label>
                <input name="title" id="title" value={title} onChange={onTitleChange} />
              
                <label htmlFor="text">
                    Content:
                </label>
                <input name="text" id="text" value={text} onChange={onTextChange} />
                <button type="button" onClick={savePost}style={{marginTop:"14px"}}>Save Post</button>
            </form>
           
        </div>
        </div>

    )


}