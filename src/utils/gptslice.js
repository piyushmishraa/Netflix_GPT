import { createSlice } from "@reduxjs/toolkit";
const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptsearch:false,
        gptMovies:null,
        gptMoviesNames:null,
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptsearch=!state.showGptsearch;
      },
      addGptsearchmovies:(state,action)=>{
        const {gptMoviesss,gptMoviesNames}=action.payload;
        state.gptMovies=gptMoviesss;
        state.gptMoviesNames=gptMoviesNames;
      }

    }

});
export const {toggleGptSearchView,addGptsearchmovies}=gptSlice.actions
export default gptSlice.reducer;