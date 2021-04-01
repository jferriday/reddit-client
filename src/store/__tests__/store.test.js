import {
    startSearchPost,
    searchPostsSuccess,
    searchPostsFailed,
    setPosts,
    setSearchTerm,
    setSelectedSubreddit

} from '../redditSlice';

describe('actions', () => {
    test('should create an action to search posts', () => {
        const searchTerm = "dogs";
        const expectedAction = {
            type: "reddit/searchPosts",
            payload: {
                searchTerm: "dogs"
            }
        };

        expect(searchPosts(searchTerm)).toEqual(expectedAction);
    });
})
