import axios from 'axios';
import { ACCESS_KEY, UNSPLASH_URL } from '../config';

const unsplashAxios = axios.create({
  baseURL: UNSPLASH_URL,
  timeout: 1000,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const searchPhotos = function (query) {
  return unsplashAxios.get('/search/photos', { params: { query } });
};
