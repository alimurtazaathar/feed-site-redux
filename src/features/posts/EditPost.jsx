import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { postUpdated } from './postSlice'
import { useParams,useNavigate } from 'react-router-dom'
const EditPost = () => {
    const [title,setTitle]=useState("")
    const [text,setText]=useState("")
    const params=useParams()
    const navigate=useNavigate()
    const {postId}=params;
    const post=useSelector(state=>state.post.find(item=>item.id===postId))
    const dispatch=useDispatch()    
    const setTitleOnChange=(e)=>setTitle(e.target.value)
    const setTextOnChange=(e)=>setText(e.target.value)
    const savePost=()=>{
        if(title && text)
            {
                dispatch(postUpdated({id:postId,title,text}))
            }
         setText("")
         setTitle("")   
         navigate(`/posts/${postId}`)
    }
  
    if(!post){
        return(
        <h1>oho! no post found.</h1>
    )
    }
    return (
    <div>
        <form>
        <h2>Edit post</h2>
        <label htmlFor='Title'>
            New Title:
        </label>
        <input id="Title" name="Title" value={title} onChange={setTitleOnChange}/>
        <label htmlFor='text'>
            New text:
        </label>
        <input id="text" name="text" value={text} onChange={setTextOnChange}/>
        </form>
        <button onClick={savePost}>Save Post</button>
    </div>

  )
}

export default EditPost