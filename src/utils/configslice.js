import { createSlice } from "@reduxjs/toolkit";


const configslice=createSlice({
    name:"config",
    initialState:{
        lang:"en"
    },
    reducers:{
        addlang:(state,action)=>{
            state.lang=action.payload;

        }
    }
}
    
)
export const {addlang}=configslice.actions;
export default configslice.reducer;