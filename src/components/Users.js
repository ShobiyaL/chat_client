import React from 'react'
import './Users.css'

const Users = ({friend}) => {
    
    return (
        <div className='hover-user'>
            <div className='user-img'>
                <div className='img'>
                    <figure>{friend.members.charAt(0).toUpperCase()}</figure>
                    {/* <figure>V</figure> */}
                </div>

            </div>
            <div className='user-name'>
                <div className='name'>
                    <h4>{friend.members}</h4>
                    
                    <small>{friend.message}</small>
                    <span>{}</span>
                </div>
            </div>
            
        </div>
    )
}

export default Users