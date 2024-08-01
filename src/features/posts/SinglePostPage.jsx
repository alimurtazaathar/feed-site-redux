import React from 'react'
import {useSelector} from "react-redux"
import { useParams,Link } from 'react-router-dom';

const SinglePostPage = () => {
    const params=useParams()
    //  console.log(params)
    const {postId}=params;
    console.log(postId)
    const post=useSelector(state=>state.post.find(postItem=>postItem.id===postId))
   
    if(!post)
        {
            return(
                <h1>Post not found!</h1>
            )
        }
  
    return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.text}</p>
        <Link to={`/editpost/${post.id}`}>Edit Post</Link>
    </div>
  )
}

export default SinglePostPage