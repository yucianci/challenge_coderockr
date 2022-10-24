import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './assets/styles/global';
import Header from './components/Header';

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes />
    </Router>
  );
}
