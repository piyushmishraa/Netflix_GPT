import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoPlayer = () => {
    const getTrailer= async(movieID)=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/897087/videos?language=en-US',API_OPTIONS);
        const json= await data.json();
        
        
        const filtered = json.results.filter((video)=>video.type==="Trailer");
        const trailer=filtered[0];
        console.log(trailer);

    }
    useEffect(()=>{
        getTrailer();
    },[])
  return (
    <div>VideoPlayer
      <iframe width="560" height="315" src
      ="https://www.youtube.com/embed/r_pUE7OcN8w?si=QFZJ7mh28pqMZhk7" 
      title="YouTube video player"  
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      >

      </iframe>
    </div>
  )
}

export default VideoPlayer