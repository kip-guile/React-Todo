import React, {Component} from 'react';

class TodoForm extends Component {
    

  render() {
      const {value, onChange, createNewTodo} = this.props;
    return (
      <div>
        <input value={value} onChange={onChange}/>
        <button onClick={createNewTodo}>Add Todo</button>
        <button>Clear completed</button>
      </div>
    );
  }
}

export default TodoForm;