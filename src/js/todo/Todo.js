
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import {addTodo, completeTodo, deleteTodo, clearTodo} from './TodoActions';


// ADD TODO form


let AddTodoForm = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        <input ref={node => {
          input = node;
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};
export const AddTodo = connect()(AddTodoForm);


// TODO ITEM
let Item = ({ item, deleteTodo, completeTodo }) => {

    //orderProduct = () => {
    //    this.props.orderProduct(this.props.product);
    //}


  /*let onDeleteClick = () => {
    deleteTodo(item);
  }

  let onCompletedClick = () => {
    completeTodo(item);
  }*/


  return (
    <li>
        <a href="#" onClick={completeTodo} style={{textDecoration: item.completed ? 'line-through' : 'none'}}>
            {item.message.trim()}
        </a>&nbsp;
        <a href="#" onClick={deleteTodo} style={{textDecoration: 'none'}}>[x]</a>
    </li>
  )
}

Item.propTypes = {
    item: {
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        message: PropTypes.string.isRequired
    },
    completeTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

//export const AddTodo = connect()(AddTodoForm)

// TODO LIST
const TodoList = ({ todos, deleteTodo, completeTodo }) => (
    <ul>
        {todos.map(item =>
            <Item {... { item, deleteTodo, completeTodo }} />
        )}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        message: PropTypes.string.isRequired
    }).isRequired).isRequired,
    completeTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo.todo.items
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    completeTodo: (item) => { dispatch(completeTodo(item))},  // TODO: por lo menos con esto salta el action y llama al reducer.
    deleteTodo: (item) => { dispatch(deleteTodo(item))}  // TODO: pero no le esta mandando el index del item en el arreglo por eso falla.
  }
}

export const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

