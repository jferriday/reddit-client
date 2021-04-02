import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    postPermalink: '',
    activePost: {},
    isLoading: false,
    failedLoading: false
}
const activePostSlice = createSlice({
    name: 'activePost',
    initialState,
    reducers: {
        startFetchPost(state, action) {
            state.isLoading = true;
            state.failedLoading = false;
        },

        fetchPostSuccess(state, action) {
            state.isLoading = false;
            state.failedLoading = false;
        },

        fetchPostFailed(state, action) {
            state.isLoading = false;
            state.failedLoading = true;
        },

        setActivePostUrl(state, action) {
            state.postPermalink = action.payload.url;
        },

        setActivePost(state, action) {
            state.activePost = action.payload.activePost;
        }
    }
});

export const {
    startFetchPost,
    fetchPostSuccess,
    fetchPostFailed,
    setActivePostUrl,
    setActivePost
} = activePostSlice.actions