import React from 'react';
import './Chatarea.css';
import { FaPhoneAlt, FaVideo, FaRocketchat } from 'react-icons/fa';
import Conversation from '../Conversation';
import ChatFooter from '../ChatFooter';

const Chatarea = () => {
  return (
    <div className='chatarea-container'>
      <div className='header'>
        <div className='image-name'>
          <div className='img'>
            <figure>U</figure>
          </div>
          <div className='name'>
            <h3>User1</h3>
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
      <Conversation/>
      <ChatFooter/>
    </div>
  );
};

export default Chatarea;
