import React,{useContext} from 'react';
import './Chatarea.css';
import { FaPhoneAlt, FaVideo, FaRocketchat } from 'react-icons/fa';
import Conversation from '../Conversation/Conversation';
import ChatFooter from '../ChatFooter/ChatFooter';
import { ChatContext } from '../../context/chat';

const Chatarea = ({currentFriend,handleChange,setNewMessage,newMessage,scrollRef,socket,activeUser,setMessages}) => {
  const {messages,msgLoading} = useContext(ChatContext)
  return (
    <div className='chatarea-container'>
      <div className='header'>
        <div className='image-name'>
          <div className='img'>
          {
           activeUser && activeUser.length > 0 && activeUser.some(u => u.userId === currentFriend.receiverId) ? <div className='active-icon'></div> : ''
      }
            <figure className='fd-users-img'>{currentFriend.members.charAt(0).toUpperCase()}</figure>
          </div>
          <div className='fd-name'>
            <span>Chat with</span>
            <h3>{currentFriend.members}</h3>
          </div>
        </div>
        <div className='icons-chat'>
          <div className='icon'>
            <FaPhoneAlt />
          </div>
          <div className='icon'>
            <FaVideo />
          </div>
          <div className='icon'>
            <FaRocketchat />
          </div>
        </div>

      </div>
      <Conversation messages={messages} currentFriend={currentFriend} msgLoading={msgLoading} scrollRef={scrollRef} />
      
      <ChatFooter handleChange={handleChange} 
      newMessage={newMessage} 
      setNewMessage={setNewMessage} 
      currentFriend={currentFriend} 
      socket={socket}
      setMessages={setMessages}/>
    </div>
  );
};

export default Chatarea;
