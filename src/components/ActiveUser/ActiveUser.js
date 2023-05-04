import React from 'react'
import './ActiveUser.css'


const ActiveUser = ({actUser}) => {
  // console.log(actUser)
  return (
    <div className='active-user' >
        <div className='active-user-img'>
         
         <figure className='active-img'>{actUser.userInfo.username}</figure>
         
        </div>
  
    </div>
  )
}

export default ActiveUser