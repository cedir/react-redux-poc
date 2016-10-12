
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom';
import {addTodo, completeTodo, deleteTodo, clearTodo} from './TodoActions';


// ADD TODO form


let AddTodoForm = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
export const AddTodo = connect()(AddTodoForm)


// TODO LIST
const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map(todo =>
            <h1> {todo.message} </h1>
        )}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo.todo.items
    }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

