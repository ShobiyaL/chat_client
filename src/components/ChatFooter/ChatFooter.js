import React, { useContext,useState,useEffect } from 'react'
import './ChatFooter.css'
import {FaPaperPlane } from 'react-icons/fa'
import { ChatContext } from '../../context/chat'
import { AuthContext } from '../../context/auth'

const ChatFooter = ({handleChange,setNewMessage,newMessage,currentFriend,socket}) => {

  

const {user}=useContext(AuthContext)
// console.log(user)
  const {sendMessage} = useContext(ChatContext)


let handleSubmit = (event)=>{
  event.preventDefault()
  
  socket.current.emit('send-message',{
    members:[currentFriend.receiverId,user.userInfo._id],
    message:
      {
        from:user.userInfo.username,
        message:newMessage,
      }
    
  })
  
  sendMessage(newMessage,currentFriend.receiverId)
setNewMessage('')
}


  return (
    <div className='chat-footer' onSubmit={handleSubmit}>
<form className='message-type'  >
    <input type='text' 
    className='form-control' 
    name='message' 
    placeholder='Aa' 
    id='message' 
    onChange={handleChange}
    value={newMessage}
    />
    <button className='message-btn'><FaPaperPlane/></button>
</form>

    </div>
  )
}

export default ChatFooter