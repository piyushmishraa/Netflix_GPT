import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptSugg = () => 
{
   const  {gptMovies,gptMoviesNames} =useSelector((store)=>store.gpt);
   if (!gptMoviesNames ) return null ;
  

  return (
   <div className='p-4 m-4 bg-black text-white bg-opacity-90 '>
    <div >
      {gptMoviesNames.map((gptMoviesNames,index)=>
      <MovieList
        key={gptMoviesNames} 
        title={gptMoviesNames} 
        movies={gptMovies[index]} />)}
    </div>
   </div>
  )
}

export default GptSugg