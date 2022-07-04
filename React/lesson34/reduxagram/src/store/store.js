import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/rootReducer';
import { middlewares } from './middlewares';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...middlewares,
  ],
});
