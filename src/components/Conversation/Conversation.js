import React,{useContext} from 'react';
import './Conversation.css'
import {AuthContext } from '../../context/auth'
import moment from 'moment';


const Conversation = ({messages,msgLoading,currentFriend,scrollRef}) => {
    const {user} = useContext(AuthContext)
//  console.log(messages)
    return (
        <div className='conversation-container'>
            {
                msgLoading ? (<p>Loading...</p>) :(
<>
{
           messages && messages.length >0 ? messages.map((item)=>(
                
                    item.from === user.userInfo.username ? (
                       
<div className='my-message' ref={scrollRef} key={item._id}>
                <div className='image-message'>
                

                    <div className='my-text'>
                    
                    <p className='message-text'>{item.message}</p>
                    <figure className='you'>you</figure>
                        
                    </div>
                    {/* <figure className='img-my-conv'>you</figure> */}
                </div>
                <div className='time'>
                {moment(item.createdAt).format('LLL')}
                </div>
            </div>
                       
                    ): (
                        
                        <div className='fd-message' ref={scrollRef} key={item._id}>
                <div className='image-message-time'>
                    <div className='message-time'>
                        {item.message? (<figure className='img-conv'>{currentFriend.members.charAt(0).toUpperCase()}</figure>):''}
                        <div className='fd-text'>
                        <p className='message-text'>{item.message}</p>

                        </div>
                        
                    </div>
                    <div className='time'>
                    
                       {moment(item.createdAt).format('LLL')}
                        </div>
                </div>
            </div>

                    )
                
            )):''
           }
</>
                )
            }
           
               

                
            
                            

                            
            
            
        </div>
    );
};

export default Conversation;
