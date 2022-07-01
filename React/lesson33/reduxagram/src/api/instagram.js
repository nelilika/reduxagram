import axios from 'axios';
import { INSTAGRAM_URL } from '../config';

const instagramAxios = axios.create({
  baseURL: INSTAGRAM_URL,
  timeout: 1000,
});

export const getPosts = function ({ limit: _limit, page: _page }) {
  return instagramAxios.get('/posts', {
    params: {
      _limit,
      _page,
    },
  });
};

export const getPost = function (id) {
  return instagramAxios.get(`/posts/${id}`);
};

export const getComments = function (id) {
  return instagramAxios.get(`/posts/${id}/comments`);
};
