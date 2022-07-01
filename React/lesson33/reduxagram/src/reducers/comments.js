import {
  LOAD_COMMENTS,
  ADD_COMMENT,
  TOGGLE_COMMENTS_MODAL,
  TOGGLE_ADD_COMMENT_MODAL,
} from '../actions';

export const initialState = {
  comments: {},
  isCommentsModalOpened: false,
  isAddCommentModalOpened: false,
};

export const commentsReducer = function (state = initialState, action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      return {
        ...state,
        comments: { ...action.payload },
      };
    case ADD_COMMENT:
      return {
        ...state,
        [action.payload.postId]: [
          ...state.comments[action.payload.postId],
          action.payload.comment,
        ],
      };
    case TOGGLE_COMMENTS_MODAL:
      return {
        ...state,
        isCommentsModalOpened: !state.isCommentsModalOpened,
      };
    case TOGGLE_ADD_COMMENT_MODAL:
      return {
        ...state,
        isAddCommentModalOpened: !state.isAddCommentModalOpened,
      };
    default:
      return state;
  }
};
