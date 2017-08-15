import { combineReducers } from 'redux';
import { posts, postsHasErrored, postsIsLoading } from './allPosts';

const rootReducer = combineReducers({
  posts,
  postsHasErrored,
  postsIsLoading
})

export default rootReducer
