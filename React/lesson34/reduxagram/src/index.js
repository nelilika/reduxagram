import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import NavTabs from './components/UI/NavBar';
import RoutesList from './routes/RoutesList';
import { store } from './store';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <NavTabs />
      <RoutesList />
    </BrowserRouter>
    <NotificationContainer />
  </Provider>,
  document.getElementById('root')
);
