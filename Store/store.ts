"use client"

import rootReducer from "./rootReducer";
import {configureStore} from "@reduxjs/toolkit";
import {localStorageMiddleware} from "./middleware/localstorage";

let state = undefined;

if (typeof window !== 'undefined')
    state = localStorage.getItem('reduxState');

let preloadedState = {};

if(state)
    preloadedState = JSON.parse(state)

const store = configureStore({
    // Automatically calls `combineReducers`
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
    preloadedState,
})

export default store;
