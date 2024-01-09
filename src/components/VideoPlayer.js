
import { useSelector } from 'react-redux'

import useTrailervid from '../hooks/useTrailervid';

const VideoPlayer = ({movieID}) => {
    
    const trailerVideo=useSelector((store)=>store.movielist?.currentTrailer);
    useTrailervid(movieID);
   
  return (
    <div className=' w-screen aspect-video'>
      <iframe className=' w-screen aspect-video'  src
      ={"https://www.youtube.com/embed/" + trailerVideo?.key +"?autoplay=1&mute=1&controls=0&loop=1" }
      title="YouTube video player"  
       frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      >

      </iframe>
    </div>
  )
}

export default VideoPlayer