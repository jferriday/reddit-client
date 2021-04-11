import React, {useEffect} from "react";
import PostContainer from '../main/PostContainer/PostContainer';
import {useSelector} from 'react-redux';
import Loader from 'react-loader-spinner';
import { Link, useHistory } from "react-router-dom";


function PostPage() {
    const activePost = useSelector(state => state.activePost.activePost);
    const history = useHistory();
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

    const goBack = (e) => {
      e.preventDefault()
     history.push("/");
    }
    
    while(!post) {
      return (
        <div className="loading" >
          <Loader type="Puff" color="#0000FF" height={80} width={80} />
        </div>
      )
    }
    console.log(activePost);
    return (
      <div>
        <Link to="/">
        <button className="back" onClick={goBack}>Back</button>
        </Link>
        <div data-testid="post-container">
              <h1>post</h1>
          <PostContainer
            title={post.data.title}
            textContent={post.data.selftext}
            image={post.data.url}
            displaysActive={true}
            permalink={post.data.permalink}
            subredditName={post.data.subreddit_name_prefixed}
            isVideo={post.data.is_video}
            videoUrl={post.data.is_video ? post.data.media.reddit_video.fallback_url : '' }
          />
        </div>
      </div>
    );
  
}

export default PostPage;
