import { getPosts } from '../api';
import { loadPostsSuccess, loadPostsError } from '../actions';

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await getPosts();
      // const newPosts = posts.map((post) => ({
      //   ...post,
      //   avatar: faker.image.avatar(),
      // }));
      dispatch(loadPostsSuccess(posts));
    } catch (e) {
      dispatch(loadPostsError(e));
    }
  };
};
