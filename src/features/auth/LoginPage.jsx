import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'
import { useNavigate } from 'react-router-dom'
import { userLoggedIn } from './authSlice'
const LoginPage = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [userName,setuserName]=useState("")
    const users=useSelector(selectAllUsers)
    const onUserChange=e=>setuserName(e.target.value)
    const userOptions=users.map((user)=>{
        return(
        <option key={user.id} value={user.name}>{user.name}</option>
        )
    })
   
    const login=()=>{
        if(userName){
            console.log(userName)
            dispatch(userLoggedIn(userName))
            navigate('/posts')
        }
    }

  return (
    <div style={{display:"flex",flexDirection:"column",width:"50%"}}>
        <h1>Welcome to facebook-esque feed site</h1>
        <span>-developed with redux</span>
        <h2>Login</h2> 
        <select name="userName" value={userName}  onChange={onUserChange} required>
            <option value=""></option>
            {userOptions}
        </select>
        <button type="button" onClick={login} style={{marginTop:"10px"}}>Login</button>
    
    </div>  
  )
}

export default LoginPage