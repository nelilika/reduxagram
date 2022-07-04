import { combineReducers } from '@reduxjs/toolkit';
import commentsReducer from './commentsStore';
import postsReducer from './postsStore';

const rootReducer = combineReducers({
  comments: commentsReducer,
  posts: postsReducer,
});

export default rootReducer;
