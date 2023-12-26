import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailer } from '../utils/movieSlice';
import useTrailervid from '../hooks/useTrailervid';

const VideoPlayer = ({movieID}) => {
    
    const trailerVideo=useSelector((store)=>store.movielist?.currentTrailer);
    useTrailervid(movieID);
   
  return (
    <div>VideoPlayer
      <iframe width="560" height="315" src
      ={"https://www.youtube.com/embed/" + trailerVideo?.key }
      title="YouTube video player"  
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      >

      </iframe>
    </div>
  )
}

export default VideoPlayer