import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSugg from './GptSugg'
import { BGIMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='fixed object-cover w-screen -z-10  '>
       <img src={BGIMG} alt='background'/>
       </div>
    

      <GptSearchBar/>
      <GptSugg/>
      
    </div>
  )
}

export default GptSearch