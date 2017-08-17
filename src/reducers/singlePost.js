export const upvotePost = (state = state.votes, action) => {
  switch( action.type ) {
    case 'UPVOTE_POST':
      return action.upvotePost;

    default:
      return state;
  }
}

export const downvotePost = (state = state.votes, action) => {
  switch( action.type ) {
    case 'DOWNVOTE_POST':
      return action.downvotePost;

    default:
      return state;
  }
}
