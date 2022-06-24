import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Post from './Post';
import Modal from '../UI/Modal';
import Comments from '../Comments/Comments';
import AddNewComment from '../Comments/AddNewComment';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts, loadComments } from '../../actions';

import { posts, comments } from '../../data';

function PostGrid() {
  const dispatch = useDispatch();
  const {
    posts: { posts: fetchedPosts },
    comments: { comments: fetchedComments },
  } = useSelector((state) => state);

  const [openComments, setOpenComments] = useState(false);
  const [openAddComment, setOpenAddComment] = useState(false);
  const [selectedPost, setSelectedPost] = useState(posts[0]);

  useEffect(() => {
    dispatch(loadPosts(posts));
    dispatch(loadComments(comments));
  }, [dispatch]);

  const handleClickOpen = (post) => {
    setOpenComments(true);
    setSelectedPost(post);
  };

  const handleCloseComments = () => {
    setOpenComments(false);
  };

  const handleCloseAddComment = () => {
    setOpenAddComment(false);
  };

  const addNewComment = () => {
    setOpenAddComment(true);
  };

  return (
    <>
      <Grid container spacing={2}>
        {fetchedPosts.map((post) => (
          <Grid key={post.id} item xs={6} sm={4} md={3}>
            <Post
              post={post}
              comments={fetchedComments}
              openModal={handleClickOpen}
              addNewComment={addNewComment}
            />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={openComments}
        handleClose={handleCloseComments}
        title={`${selectedPost.username}'s comments`}
      >
        <Comments comments={fetchedComments} selectedPost={selectedPost} />
      </Modal>
      <Modal
        open={openAddComment}
        handleClose={handleCloseAddComment}
        title={`Add new comment for ${selectedPost.username}`}
      >
        <AddNewComment defaultValues={{ author: '', comment: '' }} />
      </Modal>
    </>
  );
}

export default PostGrid;
