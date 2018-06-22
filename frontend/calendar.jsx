import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
