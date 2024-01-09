import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {  addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";




const useGetTrendingMovies=()=>{
    const dispatch= useDispatch();
    const getTrendingMovies=async()=>{
         const data=await fetch("https://api.themoviedb.org/3/tv/airing_today",API_OPTIONS);
         const json=await data.json();
         
         dispatch(addTrendingMovies(json.results))
  
    }
  
    useEffect(()=>{
     
        getTrendingMovies();
          // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
}

export default useGetTrendingMovies ;