import React, { useState, useContext,useEffect } from "react";
import './LoginPage.css'
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { Alert } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const LoginPage = () => {
  const { loginUser, error, user, setError} = useContext(AuthContext);
  console.log(user)
const navigate = useNavigate()
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  useEffect(()=>{
    if(user){
      toast('Logged in successfully')
      setTimeout(()=>{
        navigate('/chat-page')
      },2000)  
    }
  },[user,navigate])

  const handleChange = (event) => {
    
    setLoginState({
      ...loginState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    loginUser(loginState)
    setLoginState({ 
      email: "",
      password: "",
    })
    setError(null);

    
  }

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
      {/* <!-- Headings for the form --> */}
      <div className='heading-container'>
        <h3>Log In</h3>
        <p>login with your email and password</p>
      </div>
      {/* Main container for all inputs*/}
      <div className='main-container'>
        {/* Email Input */}
        <label className='label' htmlFor='email'>Email</label>
        <input className='input' type='email' placeholder='your email' name='email' required
        value={loginState.email}
        onChange={handleChange} />
        <br></br>
        {/* Password Input */}
        <label className='label' htmlFor='password'>Password</label>
        
        <input className='input' type='password' placeholder='your password' name='password' required 
        value={loginState.password}
        onChange={handleChange}
        />
        
        <br></br>

        {/* Login button */}
        <button type='submit' className='auth-btn'>Login</button>
        {error && (
            <Alert variant="danger">
              <p>{error}</p>
            </Alert>
          )}
          <ToastContainer />
        {/* Sign up link */}
        <p className='register-para'>Don't have an account? 
          <Link className='register-link' to='/register'><span>Register Here!</span></Link>
        </p>
      </div>
      </form>
    </div>
  )
}

export default LoginPage