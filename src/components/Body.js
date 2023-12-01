/* eslint-disable*/
import React, { useEffect } from 'react'
import {  onAuthStateChanged } from "firebase/auth";
import Login from './Login'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';


const Body = () => {
    const dispatch=useDispatch();
    const appRouter= createBrowserRouter(
        [
            {
             path:"/",
             element:<Login/> 
            },
            {
             path:"/browse",
             element:<Browse/>

            }
        ]
    );
    useEffect(()=>{
        
            onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName,photoURL}= user;
              dispatch(addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL })); 
            } else {
              dispatch(removeUser());
            }
        });

    },[]);
  return (
  <div>
     <RouterProvider router={appRouter}/>
  </div>
    
  )
}

export default Body