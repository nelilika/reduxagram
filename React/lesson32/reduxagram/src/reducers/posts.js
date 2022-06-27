import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  SELECT_POST_ID,
  LIKE_POST,
} from '../actions';

export const initialState = {
  posts: [],
  selectedPost: '',
  loading: false,
  loaded: false,
  error: null,
};

export const postsReducer = function (state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        loading: true,
      };
    case LOAD_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        posts: [...action.payload],
        selectedPost: action.payload[0].code,
      };
    case LOAD_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: state.payload,
      };
    case SELECT_POST_ID:
      return {
        ...state,
        selectedPost: action.payload,
      };
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.code === action.payload) {
            return { ...post, likes: ++post.likes };
          }
          return post;
        }),
      };
    default:
      return state;
  }
};
