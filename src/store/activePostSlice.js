import { createSlice } from "@reduxjs/toolkit";
import reddit from "../utils/reddit/reddit";
import store from "./store";
import {browserHistory} from 'react-router';

const initialState = {
  postPermalink: "",
  activePost: [], // contains active post at [0] and comments at [1]
  isLoading: false,
  failedLoading: false,
};
const activePostSlice = createSlice({
  name: "activePost",
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
      state.postPermalink = action.payload;
    },

    setActivePost(state, action) {
      state.activePost = action.payload;
    },
  },
});

export const updateActivePost = (permalink) => async (dispatch) => {
  await dispatch(setActivePostUrl(permalink));
  
  

}

export const getActivePost = () => async (dispatch) => {
  try {
    // gets the permalink from the store, which will have been set previously by action during click on post
    console.log("getting active post")
    const permalink = store.getState().activePost.postPermalink;
    // update state with loading state
    dispatch(startFetchPost());
    // gets the post from reddit api
    // post must be an object containing the post
    const post = await reddit.getPost(permalink);
    // sets the active post to the one fetched. This part of state is used by components to render the post
    dispatch(setActivePost(post));
    dispatch(fetchPostSuccess());
  } catch (e) {
    console.log(e);
    fetchPostFailed();
  }
};

// selectors
// active post and comments are both stored in 'activePost'. Use selectors to grab the required object/array
export const selectActivePost = (state) => state.activePost[0];
export const selectActivePostComments = state => state.activePost.activePost[1];
export const selectPostPermalink = state => state.activePost.permalink;

export const {
  startFetchPost,
  fetchPostSuccess,
  fetchPostFailed,
  setActivePostUrl,
  setActivePost,
} = activePostSlice.actions;

export default activePostSlice.reducer;
