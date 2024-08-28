import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TransType = {
    title:string,
    content:string
}

const initialState:TransType = {
title:"",
content:""
}


const transfer = createSlice({
    name:"Transfer",
    initialState,
    reducers:{
        Addtitle(state, action:PayloadAction<{title:string}>){
          state.title = action.payload.title
        }
    }
})


export const {Addtitle} = transfer.actions

export default transfer.reducer