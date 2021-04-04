import {createSlice, createSelector} from '@reduxjs/toolkit';
import reddit from '../utils/reddit/reddit';

const initialState = {
    posts: [],
    isLoading: false,
    failedLoading: false,
    searchTerm: '',
    selectedSubreddit: 'popular',


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
            state.posts = action.payload;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
        }

    }
})

export const {
    startSearchPosts,
    searchPostsSuccess,
    searchPostsFailed,
    setPosts,
    setSearchTerm,
    setSelectedSubreddit
} = redditSlice.actions;    


export const searchByTerm = (searchTerm) => async (dispatch) => {
    try {
        // dispatch action to update state with loading status
        dispatch(startSearchPosts());
        // get posts array from reddit.js... 
        const posts = await reddit.searchPosts(searchTerm);
        // ...and dispatch action with post array as payload
        dispatch(setPosts(posts));
        // update state with successf   ul search
        dispatch(searchPostsSuccess());
    } catch {
        // unless something goes wrong, in which case dispatch failure action to state
        dispatch(searchPostsFailed());
    }
}

export const searchBySubreddit = (subreddit) => async (dispatch) => {
    try {
        // dispatch action to update state with loading status
        dispatch(startSearchPosts());
        // get posts array from reddit.js...
        const posts = await reddit.searchSubreddit(subreddit);
        // ...and dispatch setPosts with the post array as paload
        dispatch(setPosts(posts));
        // update state with successful search
        dispatch(searchPostsSuccess);
    } catch {
        // dispatch failure aciton if something goes wrong
        dispatch(searchPostsFailed());
    }
}

// selectors
export const selectPosts = (state) => state.reddit.posts;
export const selectIsLoading = state => state.reddit.isLoading;
export const selectFailedLoading = state => state.reddit.failedLoading;
export const selectSearchTerm = state => state.reddit.searchTerm;
export const selectSelectedSubreddit = state => state.reddit.selectedSubreddit;


export default redditSlice.reducer;
