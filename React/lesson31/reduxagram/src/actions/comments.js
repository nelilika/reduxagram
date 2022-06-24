export const LOAD_COMMENTS = '[Comments] Load Comments';
export const ADD_COMMENT = '[Comments] Add Comment';
export const TOGGLE_COMMENTS_MODAL = '[Comments] Toggle Comments Modal';
export const TOGGLE_ADD_COMMENT_MODAL = '[Comments] Toggle Add Comment Modal';

export const loadComments = (comments) => ({
  type: LOAD_COMMENTS,
  payload: { ...comments },
});

export const addComment = (comment, postId) => ({
  type: ADD_COMMENT,
  payload: { postId, comment },
});

export const toggleOpenCommentsModal = () => ({
  type: TOGGLE_COMMENTS_MODAL,
});

export const toggleAddCommentModal = () => ({
  type: TOGGLE_ADD_COMMENT_MODAL,
});
