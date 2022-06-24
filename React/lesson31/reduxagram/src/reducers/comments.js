import { LOAD_COMMENTS } from '../actions';

export const initialState = {
  comments: {},
};

export const commentsReducer = function (state = initialState, action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      return {
        ...state,
        comments: { ...action.payload },
      };
    default:
      return state;
  }
};
