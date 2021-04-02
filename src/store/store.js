import {combineReducers, configureStore } from '@reduxjs/toolkit';
import redditReducer from './redditSlice';

const store = configureStore({
    reducer: combineReducers({
        reddit: redditReducer,
        // activePost: activePostReducer
    })
})

export default store;