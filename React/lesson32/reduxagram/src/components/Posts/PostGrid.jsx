import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Post from './Post';
import Modal from '../UI/Modal';
import Comments from '../Comments/Comments';
import AddNewComment from '../Comments/AddNewComment';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadPosts,
  loadComments,
  toggleOpenCommentsModal,
  toggleAddCommentModal,
} from '../../actions';
import { fetchPosts } from '../../thunk';

import { comments } from '../../data';

function PostGrid() {
  const dispatch = useDispatch();
  const {
    posts: { posts: fetchedPosts, selectedPost },
    comments: { isCommentsModalOpened, isAddCommentModalOpened },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
    // dispatch(loadComments(comments));
  }, [dispatch]);

  const handleCloseComments = () => {
    dispatch(toggleOpenCommentsModal());
  };

  const handleAddCommentModal = () => {
    dispatch(toggleAddCommentModal());
  };

  return (
    <>
      <Grid container spacing={2}>
        {fetchedPosts.map((post) => (
          <Grid key={post.id} item xs={6} sm={4} md={3}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={isCommentsModalOpened}
        handleClose={handleCloseComments}
        title={`${selectedPost.username}'s comments`}
      >
        {/* <Comments /> */}
      </Modal>
      <Modal
        open={isAddCommentModalOpened}
        handleClose={handleAddCommentModal}
        title={`Add new comment for ${selectedPost.username}`}
      >
        <AddNewComment defaultValues={{ author: '', comment: '' }} />
      </Modal>
    </>
  );
}

export default PostGrid;
