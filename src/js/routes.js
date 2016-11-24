import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app/App';
import HomePage from './app/components/HomePage';
import {TodoView} from './todo/Todo';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="add-todo" component={TodoView}/>
    </Route>
);

