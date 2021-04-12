    import React from 'react';
    import Comment from '../Comment/Comment';
    import {useSelector} from 'react-redux';



    function CommentList (props) {
        // take active post from the state. This is filled when a post is clicked on
        const activePost = useSelector(state => state.activePost.activePost);
        console.log('active:', activePost)
        // if activePost had data, comments is an array of comment objects
        let comments;
        if (activePost) {
            if(typeof activePost.comments[0] === 'object') {
                comments = activePost.comments;
            }else if(typeof activePost.comments[0] === 'array') {
                comments = activePost.comments[0]
            }
        }else{
            comments = []
        }

        return(
            <div className="comments-list">
                {comments.map((comment => {
                    return(
                    <Comment
                    author={comment.data.author}
                    body={comment.data.body}
                    />
                    )
                }))}
            </div>
        )

    }

    export default CommentList