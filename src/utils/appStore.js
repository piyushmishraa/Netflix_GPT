import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movielistReducer from "./movieSlice"

const appStore=configureStore({
     reducer:{
         user:userReducer,
         movielist:movielistReducer
     }
});

export default appStore;