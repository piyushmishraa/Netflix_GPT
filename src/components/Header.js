import React from 'react'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  { useEffect } from 'react'
import { addUser, removeUser } from '../utils/userSlice';
import { netflixLogo, userLogo } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptslice';



const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store => store.user);
  const dispatch=useDispatch();
  
 

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

  useEffect(()=>{
        
     const unsubscribe =  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName,photoURL}= user;
      dispatch(addUser({
        uid:uid,
        email:email,
        displayName:displayName,
        photoURL:photoURL })); 
       navigate("/browse") ;
        
    } else {
      dispatch(removeUser());
      navigate('/');
    }
});
  return ()=>unsubscribe();
   // eslint-disable-next-line react-hooks/exhaustive-deps
},[]);

const handlegptsearch=()=>{
  dispatch(toggleGptSearchView());
};
  


  return (
    <div className=' absolute z-10 w-screen bg-gradient-to-b from-black py-2 px-8 flex justify-between  '>
      <img className='w-44  ' src={netflixLogo} alt='netflix'/>
         {
           user && (
            <div className='flex'>
             <button className='py-1 px-2 m-5 bg-purple-800 text-white rounded-lg ' onClick={handlegptsearch}>GPT Search</button> 
            <img className='w-8 h-8 my-6' src={userLogo} alt='usericon'/>
            <button className='mx-2 p-2 text-white font-bold' onClick={handleSignOut} >Sign Out</button>
            </div>
           )
          
         }
      </div>
      
  )
}

export default Header