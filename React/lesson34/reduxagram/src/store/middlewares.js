import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// const logger = (store) => (next) => (action) => {
//   console.group(action.type);
//   console.info('dispatching', action);
//   let result = next(action);
//   console.log('next state', store.getState());
//   console.groupEnd();
//   return result;
// };

const logger = createLogger({
  collapsed: true,
  duration: true,
  colors: {
    title: () => '#8179ff',
    action: () => '#3273a8',
    error: () => '#a83246',
  },
});

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export { middlewares };
