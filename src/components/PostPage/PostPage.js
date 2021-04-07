import React from "react";
import PostContainer from '../main/PostContainer/PostContainer';
import {useSelector} from 'react-redux';
import Loader from 'react-loader-spinner';


function PostPage() {
    const activePost = useSelector(state => state.activePost.activePost);
    console.log(activePost);
    let post;
    let comments;
    if(activePost){
    post = activePost.post;
    comments = activePost.comments;
    } else{
        post = {data: {
            title: "Nothing to see here",
            selftext: "",
            url: ""
        }};
    };
    
    while(!post) {
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
          title={post.data.title}
          textContent={post.data.selftext}
          image={post.data.url}
        />
      </div>
    );
  
}

export default PostPage;
