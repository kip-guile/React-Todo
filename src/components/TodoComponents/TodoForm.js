import React, {Component} from 'react';

class TodoForm extends Component {
    

  render() {
      const {value, onChange, createNewTodo, clearCompleted, searchValue, searchChange} = this.props;
    return (
      <div>
        <input value={value} onChange={onChange}/>
        <button onClick={createNewTodo}>Add Todo</button>
        <button onClick={clearCompleted}>Clear completed</button>
        <input value={searchValue} onChange={searchChange} placeholder="Search..."/>
      </div>
    );
  }
}

export default TodoForm;