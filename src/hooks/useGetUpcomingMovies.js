import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {  addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";




const useGetUpcomingMovies=()=>{
    const dispatch= useDispatch();
    const getUpcomingMovies=async()=>{
         const data=await fetch("https://api.themoviedb.org/3/tv/airing_today",API_OPTIONS);
         const json=await data.json();
         
         dispatch(addUpcomingMovies(json.results))
  
    }
  
    useEffect(()=>{
     
        getUpcomingMovies();
          // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
}

export default useGetUpcomingMovies ;