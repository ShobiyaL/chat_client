import React from 'react'
import './ActiveUser.css'
const ActiveUser = () => {
  return (
    <div className='active-user'>
        <div className='active-user-img'>
         <figure className='active-img'>A</figure>
         <div className='active-icon'></div>
        </div>
        <div className='active-user-img'>
         <figure className='active-img'>B</figure>
         <div className='active-icon'></div>
        </div>
        
    </div>
  )
}

export default ActiveUser