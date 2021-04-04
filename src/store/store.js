import {combineReducers, configureStore } from '@reduxjs/toolkit';
import redditReducer from './redditSlice';
import activePostReducer from './activePostSlice'
const store = configureStore({
    reducer: combineReducers({
        reddit: redditReducer,
        activePost: activePostReducer
    })
})

export default store;