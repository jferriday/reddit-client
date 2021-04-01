import {createSlice, createSelector} from '@reduxjs/toolkit';
import { findAllByDisplayValue } from '@testing-library/dom';

const initialState = {
    posts: [],
    isLoading: false,
    failedLoading: false,
    searchTerm: '',
    selectedSubreddit: '',


}

const redditSlice = createSlice({
    name: "reddit", 
    initialState,
    reducers: {

        // these reduceers are dispateched by thunk as API request is made, depending on outcome
        startSearchPosts (state, action) {
            state.isLoading = true;
            state.failedLoading = false;
        },
        searchPostsSuccess(state, action) {
            state.isLoading = false;
            state.failedLoading = false;
        },
        searchPostsFailed(state, action) {
            state.isLoading = false;
            state.failedLoading = true;
        },
        // updates the posts array with the payload
        setPosts(state, action) {
            state.posts = action.payload.posts;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload.searchTerm;
        },
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload.selectedSubreddit;
        }

    }
})

export const {
    startSearchPost,
    searchPostsSuccess,
    searchPostsFailed,
    setPosts,
    setSearchTerm,
    setSelectedSubreddit
} = redditSlice.actions;    


