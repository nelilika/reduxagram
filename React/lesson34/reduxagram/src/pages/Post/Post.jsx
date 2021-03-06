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
import { useSelector } from 'react-redux';
import './Post.scss';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { fetchCommentsById } from '../../store/reducers/commentsStore';
import Comments from '../../components/Comments/Comments';
import { useGetPostQuery } from '../../api/instagramRTK';

function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    comments: { comments },
  } = useSelector((state) => state);
  const { data: selectedPost, error, isLoading } = useGetPostQuery(id);

  useEffect(() => {
    if (selectedPost) {
      dispatch(fetchCommentsById(id));
    }
  }, [dispatch, id, selectedPost]);

  const handleBackLick = () => {
    navigate(-1);
  };

  if (error) {
    return <h1>Error</h1>;
  }

  if (isLoading) {
    return <h1>Loading ... </h1>;
  }

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
                {comments.length ? (
                  <Comments selectedPost={selectedPost} />
                ) : (
                  <span>No Comments. Be first!</span>
                )}
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
