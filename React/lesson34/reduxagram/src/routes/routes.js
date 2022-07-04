import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

const PostsAsync = lazy(() => import('../pages/Posts'));
const PostAsync = lazy(() => import('../pages/Post/Post'));
const LoginAsync = lazy(() => import('../pages/Login/Login'));
const InputFileAsync = lazy(() => import('../pages/Examples/InputFile'));
const NotFoundAsync = lazy(() => import('../pages/Examples/NotFound'));

function getComponent(Component, isPrivate = true) {
  return isPrivate ? (
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
    element: getComponent(PostsAsync),
  },
  {
    path: '/posts/:id',
    element: getComponent(PostAsync),
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
