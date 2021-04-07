import React from 'react';
import {updateActivePost, getActivePost} from '../../../store/activePostSlice';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

function PostContainer({title, textContent, image, permalink }) {
    const dispatch = useDispatch()

    const setAsActivePost = async (e) => {
        e.preventDefault()
        dispatch(updateActivePost(permalink))
        dispatch(getActivePost());        
    
    }

    // implement navigation to active post after it has loaded.

    return (
        <div className="post-container" onClick={setAsActivePost}>
          
            <h3 data-testid="post-title">{title}</h3>
            {image ? <img data-testid="post-img" src={image} alt=""/> : null}
        
            <p data-testid = "text-content">{textContent}</p>

        </div>
    )
}

export default PostContainer;