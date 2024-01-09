import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movielist",
    initialState:{
        nowPlayingMovies:null,
        currentTrailer:null,
        popularMovies:null,
        trendigMovies:null,
        upcomingMovies:null,
    },
    reducers :{
        addNowPlayingMovies:(state,action)=>{

           state.nowPlayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTrendingMovies:(state,action)=>{
            state.trendigMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },
        addTrailer:(state,action)=>{
            state.currentTrailer=action.payload
            

        }
    }

});

export default movieSlice.reducer;
export const {addNowPlayingMovies,addTrailer,addPopularMovies,addTrendingMovies,addUpcomingMovies }=movieSlice.actions