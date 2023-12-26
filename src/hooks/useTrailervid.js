import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrailervid=(movieID)=>{
    const dispatch=useDispatch();
    const getTrailer= async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+ movieID+ "/videos?language=en-US",API_OPTIONS);
        const json= await data.json();
        
        
        const filtered = json.results.filter((video)=>video.type==="Trailer");
        const trailer=filtered[0];
        console.log(trailer);
        dispatch(addTrailer(trailer));

    }
    useEffect(()=>{
        getTrailer();
    },[])
}
export default useTrailervid;