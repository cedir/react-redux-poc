import { combineReducers } from 'redux';
import todoApp from '../todo/TodoReducers';

const rootReducer = combineReducers({
    todo: todoApp
});

export default rootReducer

