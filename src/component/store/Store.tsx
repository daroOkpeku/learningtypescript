import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import transfer from "../reducer/transfer";

const reducers = combineReducers({
    transfer
})

export const Createstore = ()=>
    configureStore({
    reducer:reducers,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:false,
            immutableCheck:false
        })
    })

export const store = Createstore();
setupListeners(store.dispatch)