import React from 'react'
import { reactionAdded } from './postSlice'
import { useDispatch,useSelector } from 'react-redux'
const ReactionButtons = ({post}) => {
    const reactionEmoji = {
        thumbsUp: '👍',
        tada: '🎉',
        heart: '❤️',
        rocket: '🚀',
        eyes: '👀'
      };
      const emojiBtns = Object.entries(reactionEmoji).map(([reaction, emoji]) =>{
        const dispatch=useDispatch()
       
        return(
            <button key={reaction} type="button" onClick={
                ()=>{dispatch(reactionAdded({id:post.id,reaction}))}} style={{background:"transparent,",border:"1px solid whitesmoke",borderRadius:"2px",cursor:"pointer"}}>{emoji} {post.reactions[reaction]}</button>
        )
    })

  return (
    <div style={{display:"flex",gap:"5px"}}>
        {emojiBtns}
    </div>
  )
}

export default ReactionButtons