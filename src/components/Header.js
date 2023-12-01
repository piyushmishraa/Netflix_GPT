import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate();

  const handleSignOut=()=>{
    signOut(auth)
    .then(() => {
      // Sign-out successful.
      navigate('/');
       })
       .catch((error) => {
      // An error happened.
      navigate('/error');
    });

  };

  


  return (
    <div className='absolute z-10 w-screen bg-gradient-to-b from-black py-2 px-8 flex justify-between'>
      <img className='w-44  ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png ' alt='netflix'/>
         <div className='flex'>
          <img className='w-8 h-8 my-6' src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' alt='usericon'/>
           <button className='mx-2 p-2 text-white font-bold' onClick={handleSignOut} >Sign Out</button>
         </div>
      </div>
      
  )
}

export default Header