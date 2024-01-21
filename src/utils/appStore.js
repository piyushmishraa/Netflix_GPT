import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movielistReducer from "./movieSlice"
import gptReducer from "./gptslice"

const appStore=configureStore({
     reducer:{
         user:userReducer,
         movielist:movielistReducer,
         gpt:gptReducer
     }
});

export default appStore;