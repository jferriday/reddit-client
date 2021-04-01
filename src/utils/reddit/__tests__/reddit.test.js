import reddit from '../reddit';
const getType = require('jest-get-type');


describe("Search", () => {
const searchTerm = "dogs";

test("Search returns array of posts", async () => {
    const postArray = await reddit.searchPosts(searchTerm);
    expect(getType(postArray)).toBe('array');
})
})

describe('Subreddits', () => {
    const subreddit = 'surfing'
    test('Returns posts with correct category', () => {
        const categoryResults = reddit.searchSubreddit(subreddit);
        // wcategoryResults should be an array of children returned from response object
        expect(categoryResults[0].data.subreddit).toBe('surfing');
    });
})

