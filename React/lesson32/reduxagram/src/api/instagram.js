import axios from 'axios';
import { INSTAGRAM_URL } from '../config';

const instagramAxios = axios.create({
  baseURL: INSTAGRAM_URL,
  timeout: 1000,
});

export const getPosts = function () {
  return instagramAxios.get('/posts');
};

export const getComments = function (id) {
  return instagramAxios.get(`/posts/${id}/comments`);
};