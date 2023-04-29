import React,{useContext,useEffect} from 'react'
import './ChatPage.css'
import { AuthContext } from '../context/auth'
import { Navigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Chatarea from '../components/Chatarea/Chatarea'



const ChatPage = () => {
    const {user,logoutUser} = useContext(AuthContext)
   
  return (
    <>
    {
        user ? (
            <div className='container'>
              <div className='row' >
                <div className='col-3'>
                <Sidebar user={user} logoutUser={logoutUser} />
                </div>
                <div className='col-9'>
                  <div className='right-side'>
                  <div className='row'>
                    <div className='col-12'>
<Chatarea/>
                    </div>
                    
                  </div>
                  </div>
                </div>
              
            {/* <Chatarea/> */}
              </div>
           
            </div>
        ):
        (
            <Navigate to='/' replace={true}/>
        )
    }
    
    </>
  )
}

export default ChatPage