import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INSTAGRAM_URL } from '../config';

export const instagramApi = createApi({
  reducerPath: 'instagramApi',
  baseQuery: fetchBaseQuery({ baseUrl: INSTAGRAM_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: ({ limit: _limit, page: _page }) => ({
        url: '/posts',
        params: {
          _limit,
          _page,
        },
      }),
    }),
    getPost: builder.query({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = instagramApi;
