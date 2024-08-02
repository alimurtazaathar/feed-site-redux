import React from 'react'
import {useNavigate} from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'
import { fetchUsername ,userLoggedOut} from '../features/auth/authSlice'
const Navbar = () => {

  const loggedIn=useSelector(fetchUsername)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  return (
    <nav style={{display:"flex",alignItems:"center",justifyContent:"center",color:"rgb(85, 26, 139)"}}>
        <h1 style={{marginRight:"auto"}}>LearningRedux</h1>
        <h1 onClick={()=>{loggedIn && navigate('/posts')}}>Posts</h1>
        {loggedIn && <button style={{backgroundColor:"rgb(85, 26, 139)",color:"white",border:"none",borderRadius:"15px",padding:"0.74rem",marginLeft:"15px",cursor:"pointer"}}
        onClick={()=>{dispatch(userLoggedOut())
          navigate('/')
        }}>LogOut</button>}
    </nav>
  )
}

export default Navbar