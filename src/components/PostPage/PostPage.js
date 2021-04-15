import React, {useEffect} from "react";
import PostContainer from '../main/PostContainer/PostContainer';
import CommentList from '../main/CommentList/CommentList'
import {useSelector} from 'react-redux';
import Loader from 'react-loader-spinner';
import { Link, useHistory } from "react-router-dom";
import './PostPage.css'



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
          <Loader type="Puff" color="#0000FF" height={120} width={80} />
        </div>
      )
    }
    console.log(activePost);
    return (
      <div className="post-page">
        <Link to="/">
        <button className="back" onClick={goBack}><span id="back-arrow" class=" backBtn material-icons">
arrow_back
</span></button>
        </Link>
        <div data-testid="post-container">
          <PostContainer
            title={post.data.title}
            textContent={post.data.selftext}
            image={post.data.url}
            displaysActive={true}
            permalink={post.data.permalink}
            subredditName={post.data.subreddit_name_prefixed}
            isVideo={post.data.is_video}
            videoUrl={post.data.is_video ? post.data.media.reddit_video.fallback_url : '' }
            user={post.data.author}
            comments={post.data.num_comments}
          />
        </div>
        <div className="commentlist-container">
          {/* CommentList has own state from store, rendering stateless comments */}
          <CommentList />
        </div>
      </div>
    );
  
}

export default PostPage;
