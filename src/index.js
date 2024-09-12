import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './App'; // Adjust the path if you put Dashboard in another file
import './index.css'; // Import your styles

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('root')
);
