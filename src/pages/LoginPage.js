import React from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='form-container'>
      <form className='form'>
      {/* <!-- Headings for the form --> */}
      <div className='heading-container'>
        <h3>Log In</h3>
        <p>login with your email and password</p>
      </div>
      {/* Main container for all inputs*/}
      <div className='main-container'>
        {/* Email Input */}
        <label className='label' htmlFor='email'>Email</label>
        <input className='input' type='email' placeholder='your email' name='email' required />
        <br></br>
        {/* Password Input */}
        <label className='label' htmlFor='password'>Password</label>
        <input className='input' type='password' placeholder='your password' name='password' required />
        <br></br>

        {/* Login button */}
        <button type='submit' className=''>Login</button>

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