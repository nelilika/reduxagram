import { getPosts } from '../api';
import { loadPostsSuccess, loadPostsError } from '../actions';
import { faker } from '@faker-js/faker';

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const { data: posts } = await getPosts();
      const newPosts = posts.map((post) => ({
        ...post,
        avatar: faker.image.avatar(),
      }));
      dispatch(loadPostsSuccess(newPosts));
    } catch (e) {
      dispatch(loadPostsError(e));
    }
  };
};
