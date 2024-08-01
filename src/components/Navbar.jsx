import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <h1 style={{marginRight:"auto",color:"rgb(85, 26, 139)"}}>LearningRedux</h1>
        <h1><Link to="/" style={{textDecoration:"none"}}>Posts</Link></h1>
    </nav>
  )
}

export default Navbar