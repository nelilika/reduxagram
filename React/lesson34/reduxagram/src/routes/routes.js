import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

const PostsAsync = lazy(() => import('../pages/Posts'));
const PostAsync = lazy(() => import('../pages/Post/Post'));
const LoginAsync = lazy(() => import('../pages/Login/Login'));
const InputFileAsync = lazy(() => import('../components/Examples/InputFile'));
const NotFoundAsync = lazy(() => import('../components/Examples/NotFound'));

function getComponent(Component, isPrivate) {
  if (!isPrivate) {
    return (
      <Suspense fallback={<>...</>}>
        <Component />
      </Suspense>
    );
  }

  return localStorage.getItem('AUTH_TOKEN') ? (
    <Suspense fallback={<>...</>}>
      <Component />
    </Suspense>
  ) : (
    <Navigate to="/login" />
  );
}

export const routes = [
  {
    path: '/posts',
    element: getComponent(PostsAsync, true),
  },
  {
    path: '/posts/:id',
    element: getComponent(PostAsync, true),
  },
  {
    path: 'login',
    element: getComponent(LoginAsync),
  },
  {
    path: 'example',
    element: getComponent(InputFileAsync),
  },
  { path: '*', element: getComponent(NotFoundAsync) },
];
