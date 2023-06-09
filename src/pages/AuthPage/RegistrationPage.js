import React, { useState, useContext, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { Alert } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationPage = () => {
  const { registerUser, error, user, setError } = useContext(AuthContext);
const navigate = useNavigate()
  const [registerState, setRegisterState] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(()=>{
    if(user){
      toast('User created successfully')
      setTimeout(()=>{
        navigate('/chat-page')
      },2000)  
    }
  },[user,navigate])

  const handleChange = (event) => {
    // console.log(event.target.value,'typed values')
    // console.log({[event.target.name]:event.target.value})
    setRegisterState({
      ...registerState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser(registerState);
    setRegisterState({
      username: "",
      email: "",
      password: "",
    });
    setError(null);
    
  };

 

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="heading-container">
          <h3>Register</h3>
          <p>enter your details to register</p>
        </div>
        <div className="main-container">
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            className="input"
            type="text"
            name="username"
            placeholder="your name"
            required
            value={registerState.username}
            onChange={handleChange}
          />
          <br></br>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="your email"
            required
            value={registerState.email}
            onChange={handleChange}
          />
          <br></br>
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            name="password"
            placeholder="password"
            minLength={7}
            required
            value={registerState.password}
            onChange={handleChange}
          />
          <br></br>

          <button type="submit" className='auth-btn'>Register</button>
          {error && (
            <Alert variant="danger">
              <p>{error}</p>
            </Alert>
          )}
          <ToastContainer />
          <p className="register-para">
            Already have an account?
            <Link className="register-link" to="/">
              <span>Login Here!</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
