import { createContext,useState,useCallback,useEffect} from 'react';
import axios from 'axios';


export const ChatContext = createContext();

const ChatContextProvider = ({ children, user }) => {
//  console.log(user.token)
  const [friends,setFriends] = useState([])
  const [messages,setMessages] = useState([])
  const [loading,setLoading] = useState(false);
  const [msgLoading,setMsgLoading] = useState(false);
const [error,setError] = useState(null)




  const getFriends = async () => {
    setLoading(true)
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.get(
        'https://chat-server-nine-tau.vercel.app/api/private/friends',
        config
      );
      // console.log(response.data.response);
       setFriends(response.data.response)
       setLoading(false)
    } catch (error) {
      setError(error.response.data.message)
    }
  };

const sendMessage = async(message,receiverId)=>{
  // console.log(message,receiverId)
  try{
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(
      'https://chat-server-nine-tau.vercel.app/api/private/send-message',
      {message,receiverId},
      config
    );
    let totalMessageCount = response.data.message.length 
    
    const lastMessage = response.data.message[totalMessageCount - 1]
   
    
    setMessages([...messages,lastMessage])
  }catch(error){
    setError(error.response.data.message)
  }
}

const getMessage = useCallback(async(receiverId)=>{
  // console.log(receiverId)
  setMsgLoading(true)
  try{
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.get(
      `https://chat-server-nine-tau.vercel.app/api/private/get-messages/${receiverId}`,
      
      config
    );
    // console.log(response.data.convs[0].message)
    setMessages(response.data.convs[0].message)
    setMsgLoading(false)
  }catch(error){
    setError(error.response.data.message)
  }
},[])


  return (
    <ChatContext.Provider
      value={{
        getFriends,
        friends,
        loading,
        error,
        sendMessage,
        getMessage,
        messages,
        setMessages,
        msgLoading
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
