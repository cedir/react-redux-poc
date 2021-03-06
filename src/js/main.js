import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './app/configureStore.js';
//require('./favicon.ico'); // Tell webpack to load favicon.ico
import { syncHistoryWithStore } from 'react-router-redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { loadTodos } from './todo/TodoActions';

const store = configureStore();
store.dispatch(loadTodos);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('container')
);

