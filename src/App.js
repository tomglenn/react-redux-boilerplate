import React from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import store from './state/store';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './features/home/Home';
import About from './features/about/About';

const App = () => (
  <Provider store={store}>
    <Header />
    <Router>
      <Home path="/" />
      <About path="/about" />
    </Router>
    <Footer />
  </Provider>
);

export default App;
