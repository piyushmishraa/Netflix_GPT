import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoPlayer = () => {
    const getTrailer= async(movieID)=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/897087/videos?language=en-US',API_OPTIONS)
        const json= await data.json();
        
        
        const filtered = json.results.filter((video)=>video.type==="Trailer");
        const trailer=filtered[0];
        console.log(trailer);

    }
    useEffect(()=>{
        getTrailer();
    },[])
  return (
    <div>VideoPlayer</div>
  )
}

export default VideoPlayer