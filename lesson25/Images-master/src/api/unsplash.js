import axios from 'axios';
import { UNSPLASH_URL, ACCESS_KEY } from '../config';

const unsplashAxios = axios.create({
  baseURL: UNSPLASH_URL,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const searchPhotos = (query) => {
  return unsplashAxios.get('/search/photos', { params: { query } });
};
