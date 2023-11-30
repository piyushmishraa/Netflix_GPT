import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


const Browse = () => {
  const navigate=useNavigate();
  const handleLogout=()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div>
      <button className=' border-2 ' onClick={handleLogout}> Log Out test</button>
    </div>
  )
}

export default Browse