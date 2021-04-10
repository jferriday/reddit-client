import React from 'react';
import {updateActivePost, getActivePost, setActivePost} from '../../../store/activePostSlice';
import {useDispatch} from 'react-redux';
import { useHistory} from 'react-router-dom';
import './PostContainer.css'

function PostContainer({title, textContent, image, permalink, displaysActive }) {
    const dispatch = useDispatch()
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
         history.push('/viewpost');
        }
    }   
    const setAsActivePost = async (e) => {
       
        dispatch(updateActivePost(permalink))
        dispatch(getActivePost()); 
        console.log('updated active post')
       

    
    }

    // implement navigation to active post after it has loaded.

    return (
        <div className="post-container" onClick={handlePostSelection}>
          
            <h3 data-testid="post-title" className="post-title">{title}</h3>
            {image ? <img data-testid="post-img" src={image} alt=""/> : null}
        
            <p data-testid = "text-content">{textContent}</p>

        </div>
    )
}

export default PostContainer;