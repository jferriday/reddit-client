import React from "react";
import {
  updateActivePost,
  getActivePost,
  setActivePost,
} from "../../../store/activePostSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import "./PostContainer.css";
import speechBubble from '../../../icons/question_answer_black_24dp.svg'





function PostContainer({
  title,
  textContent,
  image,
  permalink,
  subredditName,
  isVideo,
  videoUrl,
  displaysActive,
  user,
  comments
}) {
  const dispatch = useDispatch();
  const history = useHistory();
  


  const handlePostSelection = async (e) => {
    e.preventDefault();
    // check to see if the components is displayling the current active post. Is true, do nothing. If false, navigate to active post
    if (displaysActive === false) {
      // below dispatch clears the active post to avoid any previous one showing up when a post is clicked
      dispatch(setActivePost({}));
      // this line sets the active post to the one which has just been clicked
      await setAsActivePost();
      // once active post is set in state, navigate to the active post
      history.push("/viewpost");
    }
  };
  const setAsActivePost = async (e) => {
    dispatch(updateActivePost(permalink));
    dispatch(getActivePost());
    console.log("updated active post");
  };

  // implement navigation to active post after it has loaded.

  return (
    <div className="post-container" onClick={handlePostSelection}>
      <h4 className="subreddit-name">{subredditName}</h4>
      <h3 data-testid="post-title" className="post-title">
        {title}
      </h3>
      {isVideo ? (
        <video controls>
          <source src={videoUrl}></source>
        </video>
      ) : null}
      {image ? (
        <img data-testid="post-img" className="post-img" src={image} alt="" />
      ) : null}

      <p data-testid="text-content" className="post-text">
        {textContent}
      </p>
      <div className="post-details">
        <h5 className="info">u/{user}</h5>
        <h5 className="info"><img id="bubble" src={speechBubble} alt="comments: " /> <span id="comments">{comments}</span></h5>
      </div>
    </div>
  );
}

export default PostContainer;
