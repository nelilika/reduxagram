export const LOAD_POSTS = '[Post] Load Posts';
export const LOAD_POSTS_SUCCESS = '[Post] Load Posts Success';
export const LOAD_POSTS_ERROR = '[Post] Load Posts Error';
export const SELECT_POST_ID = '[Post] Select Post Id';
export const LIKE_POST = '[Post] Like Post';

export const loadPosts = () => ({
  type: LOAD_POSTS,
});

export const loadPostsSuccess = (posts) => ({
  type: LOAD_POSTS_SUCCESS,
  payload: posts,
});

export const loadPostsError = (error) => ({
  type: LOAD_POSTS_ERROR,
  payload: error,
});

export const selectPostId = (postId) => ({
  type: SELECT_POST_ID,
  payload: postId,
});

export const likePost = (postId) => ({
  type: LIKE_POST,
  payload: postId,
});
