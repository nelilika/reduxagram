import { combineReducers } from '@reduxjs/toolkit';
import commentsReducer from './commentsStore';
import postsReducer from './postsStore';
import { instagramApi } from '../../api/instagramRTK';

const rootReducer = combineReducers({
  comments: commentsReducer,
  posts: postsReducer,
  [instagramApi.reducerPath]: instagramApi.reducer,
});

export default rootReducer;
