import React from 'react'

import Header from './Header';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';



const Browse = () => {
  const navigate=useNavigate();

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
       

    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });

  }
  
 
  return (
    <div>
    <Header/>
    <button className=' border-2 absolute my-20' onClick={handleSignOut} >Test Sign Out </button>
    </div>
  )
}

export default Browse