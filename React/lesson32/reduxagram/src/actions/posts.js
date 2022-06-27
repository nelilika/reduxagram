export const LOAD_POSTS = '[Post] Load Posts';
export const LOAD_POSTS_SUCCESS = '[Post] Load Posts Success';
export const LOAD_POSTS_ERROR = '[Post] Load Posts Error';
export const SELECT_POST_ID = '[Post] Select Post Id';
export const LIKE_POST = '[Post] Like Post';
export const CHANGE_PAGE = '[Post] Change Post Page';

export const loadPosts = () => ({
  type: LOAD_POSTS,
});

export const loadPostsSuccess = (response) => ({
  type: LOAD_POSTS_SUCCESS,
  payload: response,
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

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  payload: page,
});
