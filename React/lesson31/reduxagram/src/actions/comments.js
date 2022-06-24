export const LOAD_COMMENTS = '[Comments] Load Comments';

export const loadComments = (comments) => ({
  type: LOAD_COMMENTS,
  payload: comments,
});
