import { combineReducers } from 'redux';
import { postsReducer } from './posts';
import commentsReducer from '../store/commentsStore';

export const rootReducer = combineReducers({
  comments: commentsReducer,
  posts: postsReducer,
});
