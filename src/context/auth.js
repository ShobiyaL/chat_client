import { useState,useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) ?? null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const registerUser =  async ({ username, email, password }) => {
    setLoading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
       "https://chat-server-nine-tau.vercel.app/api/public/user/register",
        { username, email, password },
        config
      );
       console.log(response.data,'response data')
      
      
       localStorage.setItem("user", JSON.stringify(response.data));
      setUser(response.data);
      setLoading(false)
    } catch (error) {
      // console.log(error.response.data.message)
      setError(error.response.data.message);
    }
  };

  const loginUser = async({email,password})=>{
    setLoading(true)
      try{
          
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          const response = await axios.post('https://chat-server-nine-tau.vercel.app/api/public/user/signin',
          {email,password},
          config
          )
     console.log(response.data,'response data')
      //  setLoading(false)

          localStorage.setItem('user', JSON.stringify(response.data))
          setUser(response.data)
          
      }catch(error){
          // console.log(error.response.data.message)
          setError(error.response.data.message)
      }
  }

  const logoutUser = async()=>{
localStorage.removeItem('user')
setLoading(false)
setError(null)
  setUser(null)
  }

  const valueToShare = {
    user,
    registerUser,
    error,
setError,
    loading,
     loginUser,
     logoutUser
  };

  return (
    <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
