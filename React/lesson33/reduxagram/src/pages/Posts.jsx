import React, { useEffect, useState, useMemo } from 'react';
import PostGrid from '../components/Posts/PostGrid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/postsStore';
import Typography from '@mui/material/Typography';
import PostPagination from '../components/UI/Pagination';
import { getTotalPages } from '../utils';

export default function Posts() {
  const dispatch = useDispatch();
  const {
    posts: { posts, limit, page: initPage, totalCount },
  } = useSelector((state) => state);
  const [page, setPage] = useState(initPage);

  const pages = useMemo(
    () => getTotalPages(totalCount, limit),
    [totalCount, limit]
  );

  useEffect(() => {
    dispatch(fetchPosts({ limit, page }));
  }, [dispatch, posts.length, limit, page]);

  const changePage = (event, value) => {
    setPage(value);
  };

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
