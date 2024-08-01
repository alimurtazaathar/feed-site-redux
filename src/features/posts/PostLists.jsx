import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

export default function PostLists()
{
    const posts=useSelector(state=>state.post)
    const list=posts.map((post)=>{
        return(
            
            <div key={post.id} style={{border:"2px solid purple",margin:"10px 0px"
            }}>
                <h3>{post.id}</h3>
                <p>{post.title}</p>
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