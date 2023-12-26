import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movielist",
    initialState:{
        nowPlayingMovies:null,
        currentTrailer:null,
    },
    reducers :{
        addNowPlayingMovies:(state,action)=>{

           state.nowPlayingMovies=action.payload
        },
        addTrailer:(state,action)=>{
            state.currentTrailer=action.payload
            

        }
    }

});

export default movieSlice.reducer;
export const {addNowPlayingMovies,addTrailer }=movieSlice.actions