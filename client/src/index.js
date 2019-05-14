import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import App from './components/app';

const AppWithRoutes = () => (
  <Router>
    <App />
  </Router>
)

render(<AppWithRoutes />, document.getElementById('learnstart-app'))
