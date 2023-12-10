import React from 'react'
import VideoPlayer from './VideoPlayer'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
const MainContainer = () => {

    const movies=useSelector((store)=>store.movielist?.nowPlayingMovies)

    if(!movies) return
    
    const mainMovie  = movies[0];
    console.log(mainMovie);
  return (
    <div  className='pt-40 px-14'>
        <VideoTitle title={mainMovie.original_title}  description={mainMovie.overview}/>
        <VideoPlayer movieID={mainMovie.id}/>
        

    </div>
  )
}

export default MainContainer