export const createPost = (state = initialState, action) => {
  switch( action.type ) {

    case 'ADD_POST': {
      const newPost = {
        content: action.payload.content
      }
      return [
        newPost,
        ...state
      ]
    }

    default:
      return state
      
  }
}
