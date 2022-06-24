import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import Comment from './Comment';

function Comments({ comments, selectedPost }) {
  return (
    <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
      {
        comments[selectedPost.code].map((comment, i) => (
          <div key={i}>
            <Comment comment={comment} index={i}/>
            { comments[selectedPost.code].length !== (i + 1) && <Divider variant="inset" component="li" /> }
          </div>
        ))
      }
    </List>
  );
}

export default Comments;