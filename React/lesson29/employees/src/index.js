import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { EmployeeProvider } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EmployeeProvider>
    <App />
  </EmployeeProvider>
);
