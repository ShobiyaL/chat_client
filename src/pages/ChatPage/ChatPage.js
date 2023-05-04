import React,{useContext,useEffect,useRef,useState} from 'react'
import './ChatPage.css'
import { AuthContext } from '../../context/auth'
import { Navigate} from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import Chatarea from '../../components/Chatarea/Chatarea'
import { ChatContext } from '../../context/chat'
import { io } from 'socket.io-client'



const ChatPage = () => {
    const {user,logoutUser} = useContext(AuthContext)
    
    const {getMessage,messages,friends,setMessages} = useContext(ChatContext)
     
   const [currentFriend,setCurrentFriend] = useState('')
const [newMessage,setNewMessage]=useState('')
const [activeUser,setActiveUser] = useState([])

const scrollRef = useRef()
const socket = useRef()

const [socketMessage,setSocketMessage] = useState('')
  

useEffect(()=>{
 socket.current = io('http://localhost:8002')
 socket.current.on('get-message',(data)=>{
// console.log(data)
   setSocketMessage(data)
 })
},[])

useEffect(() => {
  
  if(socketMessage && currentFriend){
       if(socketMessage.members[1] === currentFriend.receiverId && socketMessage.members[0] === user.userInfo._id){
            setMessages([...messages,socketMessage.message])
       }
  }
   setSocketMessage('')
},[socketMessage]);


useEffect(()=>{
 socket.current.emit('add-user',user.userInfo._id, user.userInfo)
},[])

useEffect(()=>{
  socket.current.on('get-user',(users)=>{
    let otherActiveUsers = users.filter((u => u.userId !== user.userInfo._id ))
      setActiveUser(otherActiveUsers)
  })
 },[])

const handleChange = (event)=>{
  setNewMessage(event.target.value)
}

useEffect(()=>{
getMessage(currentFriend.receiverId)
},[getMessage,currentFriend?.receiverId])

useEffect(()=>{
scrollRef.current?.scrollIntoView({behavior:'smooth'})
},[messages])

// useEffect(()=>{
//  if(friends && friends.length > 0){
//   setCurrentFriend(friends[0])
//  }
// },[friends])

  return (
    <>
    {
        user ? (
            <div className='container'>
              <div className='row' >
                <div className='col-3'>
                <Sidebar user={user} logoutUser={logoutUser} setCurrentFriend={setCurrentFriend} activeUser={activeUser}/>
                
                </div>
                
                <div className='col-9'>
                  <div className='right-side'>
                  <div className='row'>
                    {
                      currentFriend ? (
                        <div className='col-12'>
                        <Chatarea 
                        currentFriend={currentFriend}
                        newMessage={newMessage}
                        setNewMessage={setNewMessage}
                        handleChange={handleChange}
                        scrollRef={scrollRef}
                        activeUser={activeUser}
                        socket={socket}
                       
                        />
                                            </div>
                      ) : (
                        <div className='col-12'>
                          <h4 style={{textAlign:'center'}}>Select user that you want to chat</h4>
                          </div>
                      )
                    }
                   
                    
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