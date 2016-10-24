import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './app/configureStore.js';
import App from './app/App';

let defaultState = {
  todo: {
    todo:{  //<-- TODO: ver si es asi o hay que sacar un todo
        items: [],
        cool: 1
    }
  }
};

let store = configureStore(defaultState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);

