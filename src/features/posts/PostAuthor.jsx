import React from 'react'
import { useSelector } from 'react-redux'   
import { selectUserById } from '../users/usersSlice'
const PostAuthor = ({userId}) => {
  const user=useSelector((state)=>selectUserById(state,userId))
return (

    <span>{user?user.name:"Unknow Author"}</span>
)
}

export default PostAuthor