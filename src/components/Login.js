import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true)
  const signInToggle=()=>{
  setIsSignInForm(!isSignInForm);

  }
  return (
    <div>
       <Header/>
       <div className='absolute'>
       <img src='https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='background'/>
       </div>
       <form className='absolute bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input type='text' placeholder='Name'className='bg-gray-800 p-2 my-2 w-full  ' /> }
        <input type='text' placeholder='Email Address'className='bg-gray-800 p-2 my-2 w-full  ' />
        <input type="password" placeholder="Password" className='bg-gray-800 p-2 my-2 w-full' />
        <button className=' bg-red-700 my-4 w-full'> Sign In</button>
        <p className=' text-xs cursor-pointer' onClick={signInToggle}  >{isSignInForm?"New to Netflix? Sign Up":"Already registered"}</p>
       </form>
          
    </div>
    
  )
}

export default Login