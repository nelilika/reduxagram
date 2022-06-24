import { LOAD_POSTS, SELECT_POST_ID, LIKE_POST } from '../actions';

export const initialState = {
  posts: [],
  selectedPost: '',
};

export const postsReducer = function (state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: [...action.payload],
        selectedPost: action.payload[0].code,
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
