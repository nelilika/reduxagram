import React, { useEffect, useState, useMemo } from 'react';
import PostGrid from '../components/Posts/PostGrid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/reducers/postsStore';
import Typography from '@mui/material/Typography';
import PostPagination from '../components/UI/Pagination';
import { getTotalPages } from '../utils';
import { useGetPostsQuery } from '../api/instagramRTK';
import { NotificationManager } from 'react-notifications';

export default function Posts() {
  const {
    posts: { limit, page: initPage, totalCount },
  } = useSelector((state) => state);
  const [page, setPage] = useState(initPage);

  const pages = useMemo(
    () => getTotalPages(totalCount, limit),
    [totalCount, limit]
  );
  const { data: posts, error, isLoading } = useGetPostsQuery({ limit, page });

  const changePage = (event, value) => {
    setPage(value);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    NotificationManager.error('Error message', 'Click me!', 5000, () => {
      alert('callback');
    });
    return <h1> Error</h1>;
  }

  return (
    <>
      <Typography
        variant="h1"
        component="h2"
        sx={{
          textAlign: 'center',
          fontFamily: 'Festive',
          color: 'lightBlue',
          m: '15px 0',
        }}
      >
        Reduxagram
      </Typography>
      {posts.length && (
        <PostPagination page={page} changePage={changePage} count={pages} />
      )}
      <PostGrid posts={posts} />
    </>
  );
}
