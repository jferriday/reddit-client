import {combineReducers, configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer: combineReducers({
        reddit: redditReducer,
        activePost: activePostReducer
    })
})

export default store;