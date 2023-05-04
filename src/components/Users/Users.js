import React from 'react'
import './Users.css'
import moment from 'moment/moment'

const Users = ({friend}) => {

    const DD = moment(friend.createdAt).format('LLL')
    
    
    return (
        
        <div className='hover-user '  >
            <div className='user-img'>
                <div className='img'>
                    <figure className='fd-users-img'>{friend.members.charAt(0).toUpperCase()}</figure>
                    {/* <figure>V</figure> */}
                </div>

            </div>
            <div className='user-name'>
                <div className='name'>
                    <h4>{friend.members}</h4>
                    
                    <small>{friend.message.split(' ').slice(0,2).join(' ')+'...'}</small>
                    
                </div>
            </div>
            <div className='send-time-seen'>
                <div className='send-time'>{DD}</div>
                {/*  include tick icon from icons */}
           <div>✔✔</div>
            </div>
            
        </div>
       
    )
}

export default Users