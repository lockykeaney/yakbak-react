export const addPostInProgress = () => ({
  type: 'ADD_POST_IN_PROGRESS',
})

export const addPostSuccess = () => ({
  type: 'ADD_POST_SUCCESS',
})

export const addPostFail = (error) => ({
  type: 'ADD_POST_FAIL',
  payload: error,
  error: true,
})

export const addPost = (text) => {
  return {
    type: 'ADD_POST',
    text
  }
}

export const submitPost = (url, text) => {
  return (dispatch) => {
    dispatch(addPostInProgress())
    fetch(url, {
      method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      body: JSON.stringify({ text })
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then((data) => {
      dispatch({
        type: 'ADD_POST',
        payload: {
          content: data.text
        }
      })
      dispatch(addPostSuccess())
    })
    .catch(error => dispatch(addPostFail(error)))
  }
}
