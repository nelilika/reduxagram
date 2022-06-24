import { LOAD_POSTS } from '../actions';

export const initialState = {
  posts: [],
};

export const postsReducer = function (state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: [...action.payload],
      };
    default:
      return state;
  }
};
