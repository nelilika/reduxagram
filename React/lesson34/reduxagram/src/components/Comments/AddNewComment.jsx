import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../UI/Input';
import { addComment } from '../../store/commentsStore';
import { useDispatch, useSelector } from 'react-redux';

const schema = yup.object().shape({
  author: yup.string().required('The author is required'),
  comment: yup.string().required('The comment is required'),
});

function AddNewComment({ defaultValues }) {
  const dispatch = useDispatch();
  const selectedPost = useSelector((state) => state.posts.selectedPost);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = ({ author, comment }) => {
    const newComment = {
      postId: selectedPost.id,
      text: comment,
      user: author,
    };
    dispatch(addComment(newComment));
  };

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <form noValidate sx={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('author')}
        id="author"
        type="text"
        label="Author"
        name="author"
        error={!!errors.author}
        helperText={errors?.author?.message}
      />
      <Input
        {...register('comment')}
        id="comment"
        type="text"
        label="Your comment"
        name="comment"
        error={!!errors.comment}
        helperText={errors?.comment?.message}
      />
      <Button type="submit" fullWidth variant="contained" color="primary">
        Add new Post
      </Button>
    </form>
  );
}

export default AddNewComment;
