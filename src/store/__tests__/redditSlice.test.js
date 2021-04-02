import {
    startSearchPosts,
    searchPostsSuccess,
    searchPostsFailed,
    setPosts,
    setSearchTerm,
    setSelectedSubreddit

} from '../redditSlice';

describe('actions', () => {

    test('startSearchPosts should create correct action', () => {
        const expectedAction = {
            type: "reddit/startSearchPosts",
            payload: undefined
        };
        expect(startSearchPosts()).toEqual(expectedAction);
    });

    test('searchPostsSuccess should create correct action', () => {
        const expectedAction = {
            type: 'reddit/searchPostsSuccess',
            payload: undefined
        }
        expect(searchPostsSuccess()).toEqual(expectedAction);
    });

    test("searchPosts failed should create correct action", () => {
        const expectedAction = {
            type: "reddit/searchPostsFailed",
            payload: undefined
        }
        expect(searchPostsFailed()).toEqual(expectedAction);
    })

    // for following actions, where payload is required:
    const payload = {
        posts: [1, 2, 3],
            isLoading: false,
            failedLoading: false,
            searchTerm: 'dogs',
            selectedSubreddit: 'surfing' 
    }
    

    test("setPosts should create correct action with payload of array", () => {
        const expectedAction = {
            type: "reddit/setPosts",
            payload: { 
                posts: [1, 2, 3],
                isLoading: false,
                failedLoading: false,
                searchTerm: 'dogs',
                selectedSubreddit: 'surfing' 
            }
        }
        expect(setPosts(payload)).toEqual(expectedAction)
    })

    test ('set search term returns state with correct search term', () => {
        const expectedAction = {
            type: "reddit/setSearchTerm",
            payload: { 
                posts: [1, 2, 3],
                isLoading: false,
                failedLoading: false,
                searchTerm: 'dogs',
                selectedSubreddit: 'surfing' 
            }
        }
        expect(setSearchTerm(payload)).toEqual(expectedAction)
    });

    test('setSelectedSubrettit returns action with correct subreddit', () => {
        const expectedAction = {
            type: "reddit/setSelectedSubreddit",
            payload: { 
                posts: [1, 2, 3],
                isLoading: false,
                failedLoading: false,
                searchTerm: 'dogs',
                selectedSubreddit: 'surfing' 
            }
        }
       expect(setSelectedSubreddit(payload)).toEqual(expectedAction);
    })
})
