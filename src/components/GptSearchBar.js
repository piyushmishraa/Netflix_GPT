import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import {addGptsearchmovies}  from '../utils/gptslice'

const GptSearchBar = () => {
  const dispatch=useDispatch();
  const searchText=useRef(null)
  const changelang=useSelector((store)=>store.config.lang);
  const searchTMDBmovies=async (movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
    API_OPTIONS);
    const json = await data.json();
    return json.results;
  }
  const handleGptSearch= async ()=>{
    console.log(searchText.current.value);

    const gptquery="act as  a movie recommendation system and suggest some movies for the query :"+
    searchText.current.value+ ". only give me names of five movies ,comma separated like the example given ahead .example : Dhol,Golmaal,Heraferi,koi mil gaya,Tamasha"

    const gptresults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptquery }],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptresults.choices[0]?.message?.content);
    const gptmovies=gptresults.choices[0]?.message?.content.split(",");

    const promiseArray=gptmovies.map((movie)=>searchTMDBmovies(movie));
    const tmdbresults= await Promise.all(promiseArray);
    console.log(tmdbresults);
    dispatch(addGptsearchmovies({ gptMoviesss: tmdbresults,gptMoviesNames:gptmovies}))
    
  }
 
  
  return (
     

    <div className='pt-[10%] flex justify-center'>
        <form className=' w-1/2 bg-black grid grid-cols-12 ' onSubmit={(e)=>e.preventDefault()}>
            <input 
            ref={searchText}
            type='text'
            className='p-4 m-4 col-span-9'
            placeholder={lang[changelang].gptSearchComponent}
            />
            <button className='py-2 px-4 bg-red-500 text-white rounded-lg col-span-3 m-4' onClick={handleGptSearch}>
                {lang[changelang].search}
            </button>
        </form>
    
    </div>
  )
}

export default GptSearchBar