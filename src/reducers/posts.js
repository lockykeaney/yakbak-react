export function postsHasErrored( state = false, action){
  switch( action.type ) {
    case 'POSTS_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function postsIsLoading( state = false, action){
  switch( action.type ) {
    case 'POSTS_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function posts( state = [], action ){
  switch( action.type ) {
    case 'GET_ALL_POSTS_SUCCESS':
     return action.posts;

    default:
      return state;
  }
}
