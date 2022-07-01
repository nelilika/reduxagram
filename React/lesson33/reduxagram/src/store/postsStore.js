import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts } from '../api';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (payload) => {
    const response = await getPosts(payload);
    return response.data;
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    selectedPost: '',
    loading: false,
    loaded: false,
    error: null,
    limit: 5,
    page: 2,
    totalCount: 0,
  },
  reducers: {
    selectPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    likePost: (state, action) => {
      const post = state.posts.find((post) => post.id === action.payload);
      post.likes = post.likes++;
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.loading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.posts = action.payload;
      state.totalCount = 24; // @TODO: fix me
      state.errors = {};
    },
    [fetchPosts.rejected]: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.errors = action.payload;
    },
  },
});

export const { selectPost, likePost } = postsSlice.actions;

export default postsSlice.reducer;
