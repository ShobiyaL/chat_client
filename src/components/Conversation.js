import React from 'react';
import './Conversation.css'

const Conversation = () => {
    return (
        <div className='conversation-container'>
            <div className='my-message'>
                <div className='image-message'>
                    <div className='my-text'>
                        <p className='message-text'> Hai how are you</p>
                    </div>
                </div>
                <div className='time'>
                    2 Jan 2022
                </div>
            </div>
            <div className='fd-message'>
                <div className='image-message-time'>
                    <div className='message-time'>
                        <figure className='img-conv'>V</figure>
                        <div className='fd-text'>
                            <p className='message-text'>I am fine</p>
                        </div>
                        
                    </div>
                    <div className='time'>
                        3 Jan 2022
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Conversation;
