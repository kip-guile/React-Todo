import React, {Component} from 'react';

//  component that takes in the `todo` data and displays the task to the screen. */}

class Todo extends Component {


  render() {
    const {todos, toggleTodo} = this.props;
    return (
      <div>
        {todos.map(todo => (<div key={todo.id}>
            {todo.task}
            <input type="checkbox" checked={todo.completed} onChange={ () => toggleTodo(todo)} /> 
        </div>))}
      </div>
    );
  }
}

export default Todo;