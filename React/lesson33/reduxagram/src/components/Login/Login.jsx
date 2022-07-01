import React from 'react';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../UI/Input';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string(),
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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      noValidate
      style={{ maxWidth: '40%', margin: '0 auto' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register('username')}
        id="username"
        type="text"
        label="Username"
        name="username"
        error={!!errors.username}
        helperText={errors?.username?.message}
      />
      <Input
        {...register('password')}
        id="password"
        type="password"
        label="Password"
        name="password"
        error={!!errors.password}
        helperText={errors?.password?.message}
      />
      <Button type="submit" fullWidth variant="contained" color="primary">
        Log in
      </Button>
    </form>
  );
}

export default Login;
