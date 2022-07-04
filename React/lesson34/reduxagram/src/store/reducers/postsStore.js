import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts, getPost } from '../../api';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (payload) => {
    const response = await getPosts(payload);
    const totalCount = +response.headers['x-total-count'];
    return { posts: response.data, totalCount };
  }
);

export const fetchPost = createAsyncThunk(
  'posts/fetchPost',
  async (payload) => {
    const response = await getPost(payload);
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
    errors: null,
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
      post.likes = ++post.likes;
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.loading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.posts = action.payload.posts;
      state.selectedPost = action.payload.posts[0];
      state.totalCount = action.payload.totalCount;
      state.errors = {};
    },
    [fetchPosts.rejected]: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.errors = action.payload;
    },
    [fetchPost.fulfilled]: (state, action) => {
      state.selectedPost = action.payload;
    },
  },
});

export const { selectPost, likePost } = postsSlice.actions;

export default postsSlice.reducer;
