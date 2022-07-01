import React from 'react';
import Grid from '@mui/material/Grid';
import Post from './Post';
import Modal from '../UI/Modal';
import AddNewComment from '../Comments/AddNewComment';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOpenCommentsModal, toggleAddCommentModal } from '../../actions';

function PostGrid({ posts }) {
  const dispatch = useDispatch();
  const {
    posts: { selectedPost },
    comments: { isCommentsModalOpened, isAddCommentModalOpened },
  } = useSelector((state) => state);

  const handleCloseComments = () => {
    dispatch(toggleOpenCommentsModal());
  };

  const handleAddCommentModal = () => {
    dispatch(toggleAddCommentModal());
  };

  return (
    <>
      <Grid container spacing={2}>
        {posts.map((post) => (
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
