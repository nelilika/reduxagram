import { getPosts, getPost } from '../api';
import { loadPostsSuccess, loadPostsError, loadPostSuccess } from '../actions';
import { faker } from '@faker-js/faker';

export const fetchPosts = (params) => {
  return async (dispatch) => {
    try {
      const { data: posts, headers } = await getPosts(params);
      const newPosts = posts.map((post) => ({
        ...post,
        avatar: faker.image.avatar(),
      }));
      const totalCount = Number(headers['x-total-count']);
      dispatch(loadPostsSuccess({ posts: newPosts, totalCount }));
    } catch (e) {
      dispatch(loadPostsError(e));
    }
  };
};

export const fetchPost = (id) => {
  return async (dispatch) => {
    try {
      const { data: post } = await getPost(id);
      const newPost = {
        ...post,
        avatar: faker.image.avatar(),
      };
      dispatch(loadPostSuccess(newPost));
    } catch (e) {
      console.error(e);
    }
  };
};
