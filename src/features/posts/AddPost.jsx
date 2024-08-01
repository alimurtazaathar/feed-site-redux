import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";

export default function AddPost()
{
    const [text,setText]=useState("")
    const [title,setTitle]=useState("")
    
    const dispatch=useDispatch()

    const onTextChange=e=>setText(e.target.value)
    const onTitleChange=e=>setTitle(e.target.value)

    const savePost=()=>{
        if(text && title)
            {
                dispatch(postAdded(title,text))
            }

        //make state empty for next post
        setText("") 
        setTitle("")
    }
    return(
        <div >
            <h2>Add new post</h2>
            <form>
                <label htmlFor="title">
                     Title: 
                </label>
                <input name="title" id="title" value={title} onChange={onTitleChange}/>
                <label htmlFor="text">
                     Content: 
                </label>
                <input name="text" id="text" value={text} onChange={onTextChange}/>
                
            </form>
            <button type="button" onClick={savePost}>Save Post</button>
        </div>

    )


}