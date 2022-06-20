import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import NotFound from '../components/Examples/NotFound.jsx';

const AppAsync = lazy(() => import('../App.js'));
const LoginAsync = lazy(() => import('../components/Login/Login'));
const InputFileAsync = lazy(() => import('../components/Examples/InputFile'));

function getComponent(Component, isPrivate) {
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
    element: getComponent(AppAsync, localStorage.getItem('AUTH_TOKEN')),
  },
  {
    path: '/posts/:id',
    element: getComponent(<h3>Post id</h3>),
  },
  {
    path: 'login',
    element: getComponent(LoginAsync),
  },
  {
    path: 'example/input',
    element: getComponent(InputFileAsync, localStorage.getItem('AUTH_TOKEN')),
  },
  {
    path: 'example/notfound',
    element: getComponent(NotFound),
    isPrivate: true,
  },
  { path: '*', element: <NotFound /> },
];
