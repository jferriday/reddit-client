const reddit = {
  apiRequest: async (url) => {
    const encodedUri = encodeURI(url);
    const response = await fetch(encodedUri);
    const json = await response.json();
    return json;
  },

  searchPosts: async (searchTerm) => {
    const url = `https://cors-gustavos.herokuapp.com/https://reddit.com/search.json?q=${searchTerm}`;
    const response = await reddit.apiRequest(url);
    const postArray = response.data.children;

    return postArray;
  },

  searchSubreddit: async (subreddit) => {
    const url = `https://cors-gustavos.herokuapp.com/https://reddit.com/r/${subreddit}.json`;
    const response = await reddit.apiRequest(url);
    const postArray = response.data.children;

    return postArray;
  },
};

export default reddit;
