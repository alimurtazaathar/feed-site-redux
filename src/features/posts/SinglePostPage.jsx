import React from 'react'
import {useSelector} from "react-redux"
import { useParams,Link } from 'react-router-dom';
import { selectPostById } from './postSlice';
import PostAuthor from './PostAuthor';
import { TimeAgo } from '../../components/TimeAgo';
import ReactionButtons from './ReactionButtons';
const SinglePostPage = () => {
    const params=useParams()
    //  console.log(params)
    const {postId}=params;
    console.log(postId)
    const post=useSelector(state=>selectPostById(state,postId))
   
    if(!post)
        {
            return(
                <h1>Post not found!</h1>
            )
        }
  
    return (
    <div>
        <h1>{post.title}</h1>
        <p>Post By:{<PostAuthor userId={post.userId}/>}</p>
        <TimeAgo timestamp={post.date}/>
        <p>{post.text}</p>
        <ReactionButtons post={post}/>
        <Link to={`/editpost/${post.id}`}>Edit Post</Link>
    </div>
  )
}

export default SinglePostPage