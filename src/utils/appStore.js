import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movielistReducer from "./movieSlice"
import gptReducer from "./gptslice"
import configReducer from "./configslice"

const appStore=configureStore({
     reducer:{
         user:userReducer,
         movielist:movielistReducer,
         gpt:gptReducer,
         config:configReducer
     }
});

export default appStore;