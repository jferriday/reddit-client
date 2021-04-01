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

  getPost: async (permalink) => {
    // reddit API returns an array with 2 elements
    // at index 0, is the original post
    // at index 1 is the comments
    // this function returns an object containing the original post and comments
    const url = `https://cors-gustavos.herokuapp.com/https://reddit.com${permalink}.json` 
    const response = await reddit.apiRequest(url);
    const postDetails = {
      "post" : response[0].data.children[0],
      "comments" : response[1].data.children
    }

    return postDetails;
  }
};

export default reddit;
