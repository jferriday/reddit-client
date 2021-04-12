
    import React from 'react';
    import './Comment.css'
    
    function Comment ({author, body}) {
        return(
            <div className="comment">
                <h5 className="author">{author}</h5>
                <p className="comment-body">{body}</p>
            </div>
        )
    }

    export default Comment;
