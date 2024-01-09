import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies= useSelector((store)=>store.movielist)
  return (
    movies.nowPlayingMovies && (
      <div className='bg-black'>
        <div className='-mt-52 relative z-20'>
      
      <MovieList 
      movies={movies.nowPlayingMovies}
      title={"NowPlaying"}
      />
       <MovieList 
      movies={movies.trendigMovies}
      title={"Trending"}
      />
       <MovieList 
      movies={movies.popularMovies}
      title={"Popular"}
      />
       <MovieList 
      movies={movies.upcomingMovies}
      title={"Upcoming Movies"}
      />
    
      
    </div>
      </div>
      

    )
    
  )
}

export default SecondaryContainer