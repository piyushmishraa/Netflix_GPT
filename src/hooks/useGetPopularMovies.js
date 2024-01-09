import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies, addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";




const useGetPopularMovies=()=>{
    const dispatch= useDispatch();
    const getPopularMovies=async()=>{
         const data=await fetch("https://api.themoviedb.org/3/tv/top_rated",API_OPTIONS);
         const json=await data.json();
         
         dispatch(addPopularMovies(json.results))
  
    }
  
    useEffect(()=>{
     
        getPopularMovies();
          // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
}

export default useGetPopularMovies ;