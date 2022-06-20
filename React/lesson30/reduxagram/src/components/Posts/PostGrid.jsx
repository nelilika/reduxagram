import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Post from './Post';
import Modal from '../UI/Modal';
import Comments from '../Comments/Comments';
import AddNewComment from '../Comments/AddNewComment';

import { posts, comments } from '../../data';

function PostGrid() {
    const [fetchedPosts] = useState(posts);
    const [fetchedComments] = useState(comments);
    const [openComments, setOpenComments] = useState(false);
    const [openAddComment, setOpenAddComment] = useState(false);
    const [selectedPost, setSelectedPost] = useState(posts[0]);

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
                {
                    fetchedPosts.map((post) => (
                        <Grid key={post.id} item xs={6} sm={4} md={3}>
                            <Post post={post} comments={fetchedComments} openModal={handleClickOpen} addNewComment={addNewComment} />
                        </Grid>
                    ))
                }
            </Grid>
            <Modal open={openComments} handleClose={handleCloseComments} title={`${selectedPost.username}'s comments`}>
                <Comments comments={fetchedComments} selectedPost={selectedPost} />
            </Modal>
            <Modal open={openAddComment} handleClose={handleCloseAddComment} title={`Add new comment for ${selectedPost.username}`}>
                <AddNewComment defaultValues={{author: '', comment: '' }} />
            </Modal>
        </>
    );
}

export default PostGrid;