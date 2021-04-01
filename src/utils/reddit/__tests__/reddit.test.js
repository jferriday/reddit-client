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
    test('Returns array of posts from a subreddit', async () => {
        const categoryResults = await reddit.searchSubreddit(subreddit);
        // wcategoryResults should be an array of children returned from response object
        expect(getType(categoryResults)).toBe('array');
    });
})

describe('Getting single post',  () => {
    let postObject;
    beforeAll(async () => {
    postObject = await reddit.getPost('/r/surfing/comments/m7a89s/fantasy_teams/');
    });
    test('Returns single post as object', () => {
        // subject to change, mock this in future
        expect(getType(postObject)).toBe("object");
    });

    test('post object .post returns an object containing original post', () => {
        expect(getType(postObject.post)).toBe("object");
    });
    test('post object contains an array of commnets', () => {
        expect(getType(postObject.comments)).toBe('array');
    })
})

