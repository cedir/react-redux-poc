import { combineReducers } from 'redux';
import todoApp from '../todo/TodoReducers';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    todo: todoApp,
    routing: routerReducer
});

export default rootReducer;

