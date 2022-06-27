import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../components/UI/Input';
import './Login.scss';
import { useFetching } from '../../hooks/useFetching';
import * as api from '../../apis';
import { useHistory, useLocation } from 'react-router-dom';
import { generateSessionAndGetUser } from '../../thunk';
import { useDispatch, useSelector } from 'react-redux';

const schema = yup.object().shape({
  username: yup.string().required('The username is required'),
  password: yup.string().required('The password is required'),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const search = useLocation().search;
  const [fetchToken] = useFetching(async () => {
    const token = await api.generateToken();

    const redirectUrl = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${process.env.REACT_APP_REDIRECTION_LINK}`;
    window.open(redirectUrl, '_blank', 'noopener noreferrer');
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    const requestToken = new URLSearchParams(search).get('request_token');
    if (requestToken) {
      dispatch(generateSessionAndGetUser(requestToken));
    }
  }, [search, dispatch, history]);

  if (isLoggedIn) {
    history.push('/posts');
  }

  const onSubmit = (data) => {
    fetchToken();
  };

  return (
    <div className="login-wrapper">
      <Typography
        variant="h2"
        component="h3"
        sx={{
          textAlign: 'center',
          fontFamily: 'Festive',
          color: 'lightBlue',
          m: '15px 0',
        }}
      >
        Welcome to Reduxgram
      </Typography>
      <form
        noValidate
        style={{ width: '400px', margin: '0 auto' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          fullWidth
          variant="outlined"
          {...register('username')}
          id="username"
          type="text"
          label="username"
          name="username"
          error={!!errors.username}
          helperText={errors?.username?.message}
        />
        <Input
          fullWidth
          variant="outlined"
          {...register('password')}
          id="password"
          type="password"
          label="Your password"
          name="password"
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Log in
        </Button>
      </form>
    </div>
  );
}

export default Login;
