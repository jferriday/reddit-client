import React from 'react';

function PostContainer({title, textContent, image }) {

    return (
        <div className="post-container">
            <h3 data-testid="post-title">{title}</h3>
            {image ? <img data-testid="post-img" src={image} alt=""/> : null}
            <p data-testid = "text-content">{textContent}</p>
        </div>
    )
}

export default PostContainer;