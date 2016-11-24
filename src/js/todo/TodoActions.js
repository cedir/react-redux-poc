import TodoApi from './TodoApi';


export const add = function(message) {
  return {
    type: 'ADD_TODO',
    message: message,
    completed: false
  };
};

export const complete = function(index) {
  return {
    type: 'COMPLETE_TODO',
    index: index
  };
};

export const remove = function(index) {
  return {
    type: 'DELETE_TODO',
    index: index
  };
};

export const clear = function() {
  return {
    type: 'CLEAR_TODO'
  };
};


export const fill = function(todos) {
  return {
    type: 'FILL_TODOS',
    todos
  };
};

export const loadTodos = function(dispatch) {
    TodoApi.getAllTodos()
           .then(todos => dispatch(fill(todos)))
           ;
};

