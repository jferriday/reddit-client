import PostList from '../PostList/PostList';
import { useSelector, useDispatch, } from 'react-redux'

import { useEffect } from 'react';
import { selectPosts, selectSelectedSubreddit, searchBySubreddit, searchByTerm, selectSearchTerm } from '../../../store/redditSlice';

import './MainContainer.css'

function MainContainer() {
    // state objects to be used here
    const reddit = useSelector(state => state.reddit);
    console.log(reddit)
    // take variables from the reddit slice of state to be used in component.
    const { posts, isLoading, failedLoading, searchTerm, selectedSubreddit} = reddit
    const dispatch = useDispatch();
    // on initial render, load r/popular, then update each time the search term or selected subreddit changes
    useEffect(() => {
        dispatch(searchBySubreddit(selectedSubreddit))
    },[selectedSubreddit])

    useEffect(() => {
        dispatch(searchByTerm(searchTerm))
    }, [searchTerm]);

    console.log(posts)
    
    return (
        <div data-testid="main-container" className="main-container"> 
            <PostList posts={posts} />
        </div>
    );
}

export default MainContainer;