import React from 'react';
import Grid from '@mui/material/Grid';
import Post from './Post';

function PostGrid({ posts }) {
  return (
    <>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid key={post.id} item xs={6} sm={4} md={3}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default PostGrid;
