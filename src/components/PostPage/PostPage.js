import React from "react";
import PostContainer from '../main/PostContainer/PostContainer';

function PostPage(props) {

    let post;
    if(props.post){
    post = props.post
    } else{
        post = [{
            title: "Nothing to see here",
            text: "",
            image: ""
        }];
    };

  return (
    <div data-testid="post-container">
      <PostContainer
        title={post.title}
        textContent={post.text}
        image={post.image}
      />
    </div>
  );
}

export default PostPage;
