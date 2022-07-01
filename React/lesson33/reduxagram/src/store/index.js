import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import commentsReducer from './commentsStore';
import postsReducer from './postsStore';

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const middlewareEnhancer = applyMiddleware(...middlewares);
const composedEnhancers = compose(middlewareEnhancer);

// export const store = createStore(rootReducer, undefined, composedEnhancers);

export default configureStore({
  reducer: {
    comments: commentsReducer,
    posts: postsReducer,
  },
});
