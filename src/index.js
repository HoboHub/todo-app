import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';


// import reportWebVitals from './reportWebVitals';

import './index.scss';
// import './components/List/index.jsx';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
