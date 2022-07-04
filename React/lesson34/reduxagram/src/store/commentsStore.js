import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getComments } from '../api';

export const fetchCommentsById = createAsyncThunk(
  'comments/fetchCommentsById',
  async (postId) => {
    const response = await getComments(postId);
    return response.data;
  }
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    loading: false,
    loaded: false,
    errors: {},
  },
  reducers: {},
  extraReducers: {
    [fetchCommentsById.pending]: (state) => {
      state.loading = true;
    },
    [fetchCommentsById.fulfilled]: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.comments = action.payload;
      state.errors = {};
    },
    [fetchCommentsById.rejected]: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.errors = action.payload;
    },
  },
});

// export const { } = commentsSlice.actions;

export default commentsSlice.reducer;
