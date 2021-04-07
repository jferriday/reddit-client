import React from "react";
import PostContainer from '../main/PostContainer/PostContainer';
import {useSelector} from 'react-redux';
import Loader from 'react-loader-spinner';

function PostPage() {
    const activePost = useSelector(state => state.activePost.activePost);
    let post;
    let comments;
    if(activePost){
    post = activePost[0];
    comments = activePost[1];
    } else{
        post = {data: {
            title: "Nothing to see here",
            text: "",
            image: ""
        }};
    };
    while(!activePost) {
      return (
        <div className="loading" >
          <Loader type="Puff" color="#0000FF" height={80} width={80} />
        </div>
      )
    }
    console.log(activePost);
    return (
      <div data-testid="post-container">
            <h1>post</h1>
        <PostContainer
          title={activePost.data.title}
          textContent={activePost.data.selftext}
          image={activePost.data.url}
        />
      </div>
    );
  
}

export default PostPage;
