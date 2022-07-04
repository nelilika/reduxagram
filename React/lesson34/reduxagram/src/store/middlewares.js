import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { instagramApi } from '../api/instagramRTK';

const logger = createLogger({
  collapsed: true,
  duration: true,
  colors: {
    title: () => '#8179ff',
    action: () => '#3273a8',
    error: () => '#a83246',
  },
});

const middlewares = [thunk, instagramApi.middleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export { middlewares };
