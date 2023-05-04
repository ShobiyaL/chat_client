import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import { AuthContext } from "../../context/auth";
import { ChatContext } from "../../context/chat";
import { FaEllipsisH, FaEdit, FaSistrix, FaSignOutAlt } from "react-icons/fa";
import ActiveUser from "../ActiveUser/ActiveUser";
import Users from "../Users/Users";
import { Outlet, useNavigate } from "react-router-dom";

const Sidebar = ({user,logoutUser,setCurrentFriend,activeUser}) => {
  // console.log(user)
  const [isOpen,setIsOpen] = useState(false)
  
  
  const {friends,getFriends,loading} = useContext(ChatContext)

  useEffect(()=>{
getFriends()
  },[])

  const handleFriend = (friend)=>{
     setCurrentFriend(friend)
  }

  const renderedFriendsandMsg =  friends && friends.length>0 ? friends.map((friend)=>{
    return (
      <div key={friend._id} onClick={()=>handleFriend(friend)}>
        <Users  friend={friend}/>
      </div>
    )
  }): 'No Friend'

const navigate = useNavigate()
  const handleClick = ()=>{
    setIsOpen(!isOpen)
  }
let isOpenOptions = [
  {icon:<FaSignOutAlt/>,
    option:'Logout'
  },
  
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
        
          
          <div className='icon' onClick={handleClick}>
            <FaEllipsisH />
              
          </div>
          {
          isOpen && (
            <div className='select-options'>
              {
                isOpenOptions.map((item,index)=>(
                  <div key={index} className='rendered-options'onClick={()=>handleRenOptionClick(item.option)}>{item.icon}{" "}{item.option}</div>
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
      <div className='active-users'>
        <h5 style={{ padding:'0px',margin: '0px 0px 0px 10px'}}>Active users</h5>
        {
          activeUser && activeUser.length > 0 ? activeUser.map(actUser=>{
            return  <ActiveUser actUser={actUser} /> 
          }
         
          ):(<div>No active users found..</div>)
        }

      </div>
      <div className='separator'></div>
      <div className='users'>
        <div >
          {
            loading ? 'Loading...' : renderedFriendsandMsg
          }
          
        </div>
        
      </div>
      
    </div>

  );
};

export default Sidebar;
