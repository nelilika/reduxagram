import { combineReducers } from 'redux';
import { commentsReducer } from './comments';
import { postsReducer } from './posts';

export const rootReducer = combineReducers({
  comments: commentsReducer,
  posts: postsReducer,
});
