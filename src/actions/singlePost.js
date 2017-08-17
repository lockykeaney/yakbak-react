export const upvotePost = (id) => {
  return {
    type: 'UPVOTE_POST',
    votes++
  }
}

export const downvotePost = (id) => {
  return {
    type: 'DOWNVOTE_POST',
    votes--
  }
}
