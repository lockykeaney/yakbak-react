export function postsHasErrored(bool) {
    return {
        type: 'POSTS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function postsIsLoading(bool) {
    return {
        type: 'POSTS_IS_LOADING',
        isLoading: bool
    };
}

export function getAllPostsSuccess(posts) {
  return {
    type: 'GET_ALL_POSTS_SUCCESS',
    posts
  }
}

export function errorAfterFiveSeconds() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(postsHasErrored(true));
        }, 5000);
    };
}

export function getAllPosts(url) {
  return (dispatch) => {
    dispatch(postsIsLoading(true))
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(postsIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((posts) => dispatch(getAllPostsSuccess(posts)))
      .catch(() => dispatch(postsHasErrored(true)))
    }
  }
