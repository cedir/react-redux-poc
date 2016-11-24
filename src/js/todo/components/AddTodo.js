import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { add } from '../TodoActions';

const VACIO = "";

// ADD TODO form
class AddTodoForm extends React.Component {
  constructor(){
    super();

    this.state = { value: VACIO};
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    if (!this.state.value.trim()) {
      return;
    }

    this.props.add(this.state.value);
    this.setState({value: VACIO});
  }

  onUpdate(e){
    this.setState({value: e.target.value});
  }

  render() {
    return (
        <form className="form-inline" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="sr-only" htmlFor="mensajeTodo">TODO</label>
            <input value={this.state.value} onChange={this.onUpdate} type="text" className="form-control" id="mensajeTodo" placeholder="Comprar pan" />
          </div>
          <button type="submit" className="btn btn-primary"> Add Todo</button>
        </form>
    );
  }
}

AddTodoForm.propTypes = {
  add: PropTypes.func.isRequired
};

function mapStateToProperties(state){
  return {};
}

function mapDispatchToProperties(dispatch){
  return {
    add: (index) => dispatch(add(index))
  };
}

export const AddTodo = connect(mapStateToProperties, mapDispatchToProperties)(AddTodoForm);


