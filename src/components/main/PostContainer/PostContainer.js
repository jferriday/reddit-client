import React from 'react';
import {updateActivePost, getActivePost} from '../../../store/activePostSlice';
import {useDispatch, useSelector} from 'react-redux';
import { Link, useHistory} from 'react-router-dom';

function PostContainer({title, textContent, image, permalink }) {
    const dispatch = useDispatch()
    const history = useHistory();

    const handlePostSelection = async (e) => {
        e.preventDefault();
        await setAsActivePost();
         // once active post is set in state, navigate to the active post
         history.push('/viewpost');
    }   
    const setAsActivePost = async (e) => {
       
        dispatch(updateActivePost(permalink))
        dispatch(getActivePost()); 
        console.log('updated active post')
       

    
    }

    // implement navigation to active post after it has loaded.

    return (
        <div className="post-container" onClick={handlePostSelection}>
          
            <h3 data-testid="post-title">{title}</h3>
            {image ? <img data-testid="post-img" src={image} alt=""/> : null}
        
            <p data-testid = "text-content">{textContent}</p>

        </div>
    )
}

export default PostContainer;