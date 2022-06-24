export const LOAD_POSTS = '[Post] Load Posts';
export const SELECT_POST_ID = '[Post] Select Post Id';
export const LIKE_POST = '[Post] Like Post';

export const loadPosts = (posts) => ({
  type: LOAD_POSTS,
  payload: posts,
});

export const selectPostId = (postId) => ({
  type: SELECT_POST_ID,
  payload: postId,
});

export const likePost = (postId) => ({
  type: LIKE_POST,
  payload: postId,
});
