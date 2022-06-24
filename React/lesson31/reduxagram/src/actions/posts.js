export const LOAD_POSTS = '[Post] Load Posts';

export const loadPosts = (posts) => ({
  type: LOAD_POSTS,
  payload: posts,
});
