import React from 'react';
import {updateActivePost, getActivePost} from '../../../store/activePostSlice';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

function PostContainer({title, textContent, image, permalink }) {
    const dispatch = useDispatch()
   

    const setAsActivePost = async (e) => {
        e.preventDefault()
        await dispatch(updateActivePost(permalink));
        await dispatch(getActivePost());
    }

    return (
        <div className="post-container" onClick={setAsActivePost}>
            <Link to={`/viewpost`}>
            <h3 data-testid="post-title">{title}</h3>
            {image ? <img data-testid="post-img" src={image} alt=""/> : null}
            </Link>
            <p data-testid = "text-content">{textContent}</p>

        </div>
    )
}

export default PostContainer;