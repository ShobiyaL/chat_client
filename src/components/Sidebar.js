import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import { AuthContext } from "../context/auth";
import { ChatContext } from "../context/chat";
import { FaEllipsisH, FaEdit, FaSistrix } from "react-icons/fa";
import ActiveUser from "./ActiveUser";
import Users from "./Users";
import { useNavigate } from "react-router-dom";

const Sidebar = ({user,logoutUser}) => {
  // console.log(user)
  const [isOpen,setIsOpen] = useState(false)
  
  const {friends,getFriends} = useContext(ChatContext)

  useEffect(()=>{
getFriends()
  },[])

  const renderedFriendsandMsg = friends.map((friend)=>{
    return (
      <div key={friend._id}>
        <Users  friend={friend}/>
      </div>
    )
  })

const navigate = useNavigate()
  const handleClick = ()=>{
    setIsOpen(!isOpen)
  }
let isOpenOptions = [
  'Logout',
  
]


const handleRenOptionClick = (item)=>{
  if(item === 'Logout'){
     logoutUser()
     navigate('/')
  // console.log('Logged out')
  }
  }

  return (
    <div className='sidebar'>
      <div className='top'>
        <div className='top-left'>
          <div className='c-username-icon'>
            <figure className='c-username-img'>{user?.userInfo.username.charAt(0).toUpperCase()}</figure>
          </div>
          <div>
            <h3 className='c-username'>{`Hai, ${user.userInfo.username}`}</h3>
          </div>
        </div>

        <div className='icons' >
        <div className='icon' >
            <FaEdit/>
          </div>
          <div className='icon' onClick={handleClick}>
            <FaEllipsisH />
          </div>
          {
          isOpen && (
            <div className='select-options'>
              {
                isOpenOptions.map((item,index)=>(
                  <div key={index} className='rendered-options'onClick={()=>handleRenOptionClick(item)}>{item}</div>
                ))
              }
            </div>
          )
        }
        </div>
        
      </div>
      <div className='search'>
        <div className='search-content'>
<button className='search-icon-btn'><FaSistrix/></button>
<input className='form-control' type='text' placeholder='Search' />
        </div>

      </div>
      {/* <div className='active-users'>
<ActiveUser />
      </div> */}
      <div className='separator'></div>
      <div className='users'>
        <div >
          {
        renderedFriendsandMsg
          }
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
