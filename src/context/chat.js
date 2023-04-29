import { createContext,useState } from 'react';
import axios from 'axios';
export const ChatContext = createContext();

const ChatContextProvider = ({ children, user }) => {
//  console.log(user.token)
  const [friends,setFriends] = useState([])
  const getFriends = async () => {
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
      console.log(response.data.response);
       setFriends(response.data.response)
    } catch (error) {

    }
  };

  return (
    <ChatContext.Provider
      value={{
        getFriends,
        friends,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
