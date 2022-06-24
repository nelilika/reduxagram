import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import NavTabs from './components/UI/NavBar';
import RoutesList from './routes/RoutesList';

ReactDOM.render(
  <BrowserRouter>
    <NavTabs />
    <RoutesList />
  </BrowserRouter>,
  document.getElementById('root')
);
