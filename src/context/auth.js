import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const AuthContext = createContext()

const AuthContextProvider = ({children})=>{

    const [users,setUsers] = useState(null);
const [error,setError] = useState(null);
const [loading,setLoading] = useState(false);


    const registerUser = async({username,email,password})=>{
        
        try{
            setLoading(true)
            
       const response = await axios.post('https://chat-server-nine-tau.vercel.app/api/public/user/register',
       {username,email,password}
       )
// console.log(response.data.user,'response data')
    setLoading(false)

       let user = response.data
       console.log(response.data)
       localStorage.setItem('users', JSON.stringify(response.data.user))
       setUsers(user)
    
        }catch(error){
            // console.log(error.response.data.message)
            setError(error.response.data.message)
            
        }
    }

    // const loginUser = async({email,password})=>{
    //     try{
    //         setLoading(true)
            
    //         const response = await axios.post('https://chat-server-nine-tau.vercel.app/api/public/user/login',
    //         {email,password}
    //         )
    //   console.log(response.data.user,'response data')
    //      setLoading(false)
     
    //         let user = response.data
    //         console.log(response.data)
    //         localStorage.setItem('users', JSON.stringify(response.data.user))
    //         setUsers(user)
    //     }catch(error){
    //         // console.log(error.response.data.message)
    //         setError(error.response.data.message)
    //     }
    // }
    const valueToShare ={
        users,
        registerUser,
        error,
        loading,
        // loginUser
    }

    return <AuthContext.Provider value={valueToShare}>
        
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider