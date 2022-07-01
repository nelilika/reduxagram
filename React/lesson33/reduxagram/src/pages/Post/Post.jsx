import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import AddNewComment from '../../components/Comments/AddNewComment';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { fetchComments, fetchPost } from '../../thunk';
import { useSelector } from 'react-redux';
import './Post.scss';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedPost = useSelector((state) => state.posts.selectedPost);

  useEffect(() => {
    // dispatch(fetchComments(id));
    // dispatch(fetchPost(id));
  }, [dispatch, id]);

  const handleBackLick = () => {
    navigate(-1);
  };

  return (
    <>
      <Button
        onClick={handleBackLick}
        variant="outlined"
        startIcon={<ArrowBackIosNewIcon />}
      ></Button>
      <div className="post-wrapper">
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <img src={selectedPost.avatar} alt="avatar"></img>
              </Avatar>
            }
            title={selectedPost.username}
            subheader={selectedPost.createdOn}
          />
          <div className="post-info">
            <CardMedia
              component="img"
              image={selectedPost.display_src}
              alt="Paella dish"
              sx={{ width: '400px' }}
            />
            <div className="post-comments">
              <div className="comments">
                {/* <Comments selectedPost={selectedPost} /> */}
              </div>
              <div>
                <AddNewComment selectedPost={selectedPost} />
              </div>
            </div>
          </div>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {selectedPost.caption}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Post;
