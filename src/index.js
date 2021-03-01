import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './components/Dashboard';
import Drawer from './components/Drawer';

ReactDOM.render(
  <React.StrictMode>
    <div className="main__body">
    <Drawer />
    <Dashboard />

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);