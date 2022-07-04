import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Comment from './Comment';
import { useSelector } from 'react-redux';

function Comments() {
  const {
    posts: { selectedPost },
    comments: { comments },
  } = useSelector((state) => state);
  console.log(comments);
  return (
    <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
      {comments.map((comment, i) => (
        <div key={i}>
          <Comment comment={comment} index={i} />
          {comments.length !== i + 1 && (
            <Divider variant="inset" component="li" />
          )}
        </div>
      ))}
    </List>
  );
}

export default Comments;
