import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './app/configureStore.js';
//require('./favicon.ico'); // Tell webpack to load favicon.ico
import { syncHistoryWithStore } from 'react-router-redux';

// TODO el defaultState hay que sacarlo a un archivo a parte
let defaultState = {
  todo: {
    todo:{  //<-- TODO: ver si es asi o hay que sacar un todo
        items: [],
        cool: 1
    }
  }
};

const store = configureStore(defaultState);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('container')
);

