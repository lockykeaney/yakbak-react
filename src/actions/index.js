export const postsHasErrored = (bool) => {
    return {
        type: 'POSTS_HAS_ERRORED',
        hasErrored: bool
    };
}

export const postsIsLoading = (bool) => {
    return {
        type: 'POSTS_IS_LOADING',
        isLoading: bool
    };
}

export const getAllPostsSuccess = ( posts ) => {
  return {
    type: 'GET_ALL_POSTS_SUCCESS',
    posts
  }
}
const url = 'http://localhost:2000/posts';

export const getAllPosts = ( url ) => {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(postsIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((data) => dispatch(getAllPostsSuccess(data)))
      .catch(() => dispatch(postsHasErrored(true)))
    }
  }
