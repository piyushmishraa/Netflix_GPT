import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidForm } from '../utils/checkValidForm'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



const Login = () => {

  const navigate=useNavigate();
  const [errMessage,setErrMessage]=useState(null)
  const [isSignInForm,setIsSignInForm]=useState(true);
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(name);
 

  const handleClick=()=>{
    
    // if(!isSignInForm){
    //   const message=checkValidForm(email.current.value,password.current.value,name.current.value);
    //   setErrMessage(message);
    // }else{
    //   const message=checkValidForm(email.current.value,password.current.value);
    //   setErrMessage(message);
   
    //}
    
    const message=checkValidForm(email.current.value,password.current.value);
    setErrMessage(message)
    
      if(!isSignInForm){
      //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
      .then((userCredential) => {
       const user = userCredential.user;
       console.log(user);
       navigate("/browse");


    
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrMessage(errorCode+'-'+ errorMessage )
    
       });
    }else{
      //sign in logic
      
     signInWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {
     const user = userCredential.user;
     console.log(user);
     navigate("/browse");
      })
     .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrMessage(errorCode+errorMessage);
      });
    }
   
  
  }
  const signInToggle=()=>{
  setIsSignInForm(!isSignInForm);

  }
  return (
    <div>
       <Header/>
       <div className='absolute'>
       <img src='https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='background'/>
       </div>
       <form onSubmit={(e)=>e.preventDefault()} className='absolute bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type='text' placeholder='Name'className='bg-gray-800 p-2 my-2 w-full  text-xs' /> }
        <input ref={email} type='text' placeholder='Email Address'className='bg-gray-800 p-2 my-2 w-full text-xs ' />
        <input ref={password} type="password" placeholder="Password" className='bg-gray-800 p-2 my-2 w-full text-xs' />
        <button className=' bg-red-700 my-4 w-full p-2 rounded-md' onClick={handleClick}> {!isSignInForm?("Sign Up"):("Sign In")}</button>
        <p className='text-xs text-red-500 font-bold py-2'>{errMessage}</p>
        <p className=' text-xs/[17px] cursor-pointer' onClick={signInToggle}  >{isSignInForm?"New to Netflix? Sign Up":"Already registered"}</p>
       </form>
          
    </div>
    
  )
}

export default Login