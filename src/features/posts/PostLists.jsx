import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { selectAllPost } from "./postSlice";
import PostAuthor from "./PostAuthor";
import { TimeAgo } from "../../components/TimeAgo";
import ReactionButtons from './ReactionButtons';

export default function PostLists()
{
    const posts=useSelector(selectAllPost)
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))


    const list=orderedPosts.map((post)=>{
        return(
            
            <div key={post.id} style={{border:"2px solid purple",margin:"10px 0px",borderRadius:"10px",padding:"2rem"
            }}>
                <h3 style={{fontWeight:"bold"}}>{post.title}</h3>
                <p>Post by:{<PostAuthor userId={post.userId}/>}</p>
                <TimeAgo timestamp={post.date}/>
                <ReactionButtons post={post}/>
                <Link to={`/posts/${post.id}`}>View Post</Link>
            </div>
        )
    })

    return(
        <>
        {list}
        </>
    )
}