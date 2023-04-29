import React from 'react'
import './ChatFooter.css'
import { FaFileImage,FaPaperPlane } from 'react-icons/fa'

const ChatFooter = () => {
  return (
    <div className='chat-footer'>
        

<form className='message-type'>
    <input type='text' className='form-control' name='message' placeholder='Aa' id='message'/>
    <button className='message-btn'><FaPaperPlane/></button>
</form>

    </div>
  )
}

export default ChatFooter